import React, { useState } from 'react';
import { useServices } from 'context/ServicesContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Card, 
  CardContent, 
  CardActions,
  Grid,
  IconButton,
  Tabs,
  Tab,
  List,
  ListItem,
  Chip
} from '@mui/material';
import { 
  Add as AddIcon, 
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,

  Close as CloseIcon
} from '@mui/icons-material';

const MySwal = withReactContent(Swal);

// Fonction utilitaire pour créer un service vide
const emptyService = () => ({
  id: '',
  title: '',
  subtitle: '',
  description: [''],
  details: '',
  features: [''],
  benefits: [''],
  image: '',
  gallery: [''],
  technicalSpecs: {
    resistance: '',
    dureeVie: '',
    normes: ['']
  }
});

export default function ServicesEditor() {
  const { services, updateService, addService, deleteService } = useServices();
  const [editingId, setEditingId] = useState(null);
  const [newService, setNewService] = useState(emptyService());
  const [isAdding, setIsAdding] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  
  // État pour la gestion des erreurs de validation
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    details: '',
    features: '',
    benefits: ''
  });
  
  // Options pour les onglets
  const tabs = [
    { label: 'Informations générales', required: true },
    { label: 'Description', required: true },
    { label: 'Caractéristiques', required: true },
    { label: 'Médias', required: false },
    { label: 'Spécifications', required: false },
  ];
  
  // Fonction de validation du formulaire
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    // Validation du titre
    if (!newService.title.trim()) {
      newErrors.title = 'Le titre est requis';
      isValid = false;
    } else if (newService.title.length > 100) {
      newErrors.title = 'Le titre ne doit pas dépasser 100 caractères';
      isValid = false;
    }
    
    // Validation de la description
    if (!newService.description.length || !newService.description[0].trim()) {
      newErrors.description = 'Au moins un point clé est requis';
      isValid = false;
    }
    
    // Validation des détails
    if (!newService.details.trim()) {
      newErrors.details = 'Les détails sont requis';
      isValid = false;
    }
    
    // Validation des caractéristiques
    if (!newService.features.length || !newService.features[0].trim()) {
      newErrors.features = 'Au moins une caractéristique est requise';
      isValid = false;
    }
    
    // Validation des avantages
    if (!newService.benefits.length || !newService.benefits[0].trim()) {
      newErrors.benefits = 'Au moins un avantage est requis';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    if (!validateForm()) {
      // Si la validation échoue, on affiche un message d'erreur
      MySwal.fire({
        title: 'Erreur',
        text: 'Veuillez remplir tous les champs obligatoires',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    // Si la validation réussit, on enregistre
    handleSave();
  };

  // L'aperçu de l'image est maintenant géré directement via l'URL de l'image dans le state

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setNewService({
      ...emptyService(),
      ...JSON.parse(JSON.stringify(service)) // Deep clone
    });
    setActiveTab(0);
  };

  const handleSave = () => {
    // Nettoyer les tableaux vides
    const cleanedService = {
      ...newService,
      description: newService.description.filter(item => item.trim() !== ''),
      features: newService.features.filter(item => item.trim() !== ''),
      benefits: newService.benefits.filter(item => item.trim() !== ''),
      gallery: newService.gallery ? newService.gallery.filter(item => item.trim() !== '') : [''],
      technicalSpecs: {
        ...newService.technicalSpecs,
        normes: newService.technicalSpecs?.normes?.filter(item => item.trim() !== '') || ['']
      }
    };

    if (editingId) {
      updateService(editingId, cleanedService);
      MySwal.fire({
        title: 'Succès !',
        text: 'Le service a été mis à jour avec succès',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setEditingId(null);
    } else if (isAdding) {
      addService(cleanedService);
      MySwal.fire({
        title: 'Succès !',
        text: 'Le service a été ajouté avec succès',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setIsAdding(false);
    }
    
    setNewService(emptyService());
  };

  // Gestion de l'annulation avec confirmation
  const handleCancel = () => {
    MySwal.fire({
      title: 'Annuler les modifications ?',
      text: 'Les modifications non enregistrées seront perdues',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, annuler',
      cancelButtonText: 'Non, continuer',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setEditingId(null);
        setIsAdding(false);
        setNewService(emptyService());
        setActiveTab(0);
        setErrors({
          title: '',
          description: '',
          details: '',
          features: '',
          benefits: ''
        });
      }
    });
  };

  const handleDelete = (id) => {
    MySwal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible et supprimera définitivement ce service.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteService(id);
        MySwal.fire(
          'Supprimé !',
          'Le service a été supprimé avec succès.',
          'success'
        );
      }
    });
  };

  // Gestion des champs de spécifications techniques
  const handleTechSpecsChange = (field, value) => {
    setNewService(prev => ({
      ...prev,
      technicalSpecs: {
        ...prev.technicalSpecs,
        [field]: value
      }
    }));
  };

  // Gestion de l'ajout d'une norme
  const handleAddNorme = () => {
    setNewService(prev => ({
      ...prev,
      technicalSpecs: {
        ...prev.technicalSpecs,
        normes: [...prev.technicalSpecs.normes, '']
      }
    }));
  };

  // Gestion de la suppression d'une norme
  const handleRemoveNorme = (index) => {
    setNewService(prev => ({
      ...prev,
      technicalSpecs: {
        ...prev.technicalSpecs,
        normes: prev.technicalSpecs.normes.filter((_, i) => i !== index)
      }
    }));
  };

  // Gestion de la modification d'une norme
  const handleNormeChange = (index, value) => {
    const newNormes = [...newService.technicalSpecs.normes];
    newNormes[index] = value;
    
    setNewService(prev => ({
      ...prev,
      technicalSpecs: {
        ...prev.technicalSpecs,
        normes: newNormes
      }
    }));
  };

  // Gestion des champs de formulaire
  const handleInputChange = (field, value) => {
    setNewService(prev => {
      // Si le champ est dans un objet imbriqué (ex: technicalSpecs.resistance)
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value
          }
        };
      }
      // Champ simple
      return {
        ...prev,
        [field]: value
      };
    });
  };

  // Fonction utilitaire pour afficher un indicateur de champ obligatoire
  const RequiredField = () => (
    <span style={{ color: 'red', marginLeft: 4 }}>*</span>
  );

  // Rendu des spécifications techniques
  const renderTechnicalSpecs = () => (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Spécifications Techniques
      </Typography>
      
      <TextField
        fullWidth
        label="Résistance"
        value={newService.technicalSpecs?.resistance || ''}
        onChange={(e) => handleTechSpecsChange('resistance', e.target.value)}
        margin="normal"
        variant="outlined"
        size="small"
      />
      
      <TextField
        fullWidth
        label="Durée de vie"
        value={newService.technicalSpecs?.dureeVie || ''}
        onChange={(e) => handleTechSpecsChange('dureeVie', e.target.value)}
        margin="normal"
        variant="outlined"
        size="small"
      />
      
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
          Normes
          <IconButton 
            size="small" 
            onClick={handleAddNorme} 
            color="primary" 
            sx={{ ml: 1 }}
            aria-label="Ajouter une norme"
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Typography>
        
        <List dense disablePadding>
          {(newService.technicalSpecs?.normes || ['']).map((norme, index) => (
            <ListItem 
              key={index} 
              disableGutters 
              sx={{ pl: 0, pr: 1, mb: 1 }}
              secondaryAction={
                <IconButton 
                  edge="end" 
                  size="small" 
                  onClick={() => handleRemoveNorme(index)}
                  color="error"
                  aria-label="Supprimer la norme"
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            >
              <TextField
                fullWidth
                size="small"
                value={norme}
                onChange={(e) => handleNormeChange(index, e.target.value)}
                placeholder="Saisir une norme"
                variant="outlined"
                sx={{ mr: 1 }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  // Rendu de la liste des services
  const renderServicesList = () => {
    return (
  <Grid container spacing={3}>
    {services.map((service) => (
      <Grid item xs={12} md={6} key={service.id}>
        <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {service.subtitle}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
              {service.description[0]?.substring(0, 100)}...
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {service.technicalSpecs?.normes?.slice(0, 3).map((norme, index) => (
                <Chip 
                  key={index} 
                  label={norme} 
                  size="small" 
                  variant="outlined"
                />
              ))}
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
            <Button
              startIcon={<EditIcon />}
              onClick={() => handleEdit(service)}
              size="small"
            >
              Modifier
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(service.id)}
              color="error"
              size="small"
            >
              Supprimer
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
    </Grid>
    );
  };
  
  // Rendu du formulaire d'édition
  const renderEditForm = () => (
    <Box component="form" onSubmit={handleSubmit}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3 }}
      >
        {tabs.map((tab, index) => (
          <Tab 
            key={index} 
            label={tab.label} 
            icon={tab.required ? <RequiredField /> : null}
            iconPosition="end"
          />
        ))}
      </Tabs>

      <Box sx={{ mb: 3 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          sx={{ mr: 2 }}
        >
          Enregistrer
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<CancelIcon />}
          onClick={handleCancel}
        >
          Annuler
        </Button>
      </Box>

      {/* Contenu des onglets */}
      {activeTab === 0 && (
        <Box>
          <TextField
            fullWidth
            label="Titre"
            value={newService.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            margin="normal"
            variant="outlined"
            required
            error={!!errors.title}
            helperText={errors.title}
          />
          <TextField
            fullWidth
            label="Sous-titre"
            value={newService.subtitle}
            onChange={(e) => handleInputChange('subtitle', e.target.value)}
            margin="normal"
            variant="outlined"
          />
        </Box>
      )}
      
      {activeTab === 1 && (
        <Box>
          <TextField
            fullWidth
            label="Description"
            value={newService.description[0] || ''}
            onChange={(e) => {
              const newDesc = [...newService.description];
              newDesc[0] = e.target.value;
              handleInputChange('description', newDesc);
            }}
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            required
            error={!!errors.description}
            helperText={errors.description}
          />
        </Box>
      )}
      
      {activeTab === 4 && renderTechnicalSpecs()}
    </Box>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Gestion des Services
        </Typography>
        
        {!isAdding && !editingId && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => {
              setIsAdding(true);
              setNewService(emptyService());
              setActiveTab(0);
            }}
          >
            Ajouter un service
          </Button>
        )}
      </Box>
      
      {(isAdding || editingId) ? (
        renderEditForm()
      ) : services.length > 0 ? (
        renderServicesList()
      ) : (
        <Card variant="outlined" sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Aucun service pour le moment
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => {
              setIsAdding(true);
              setNewService(emptyService());
              setActiveTab(0);
            }}
            sx={{ mt: 2 }}
          >
            Ajouter votre premier service
          </Button>
        </Card>
      )}
    </Box>
  );
}
