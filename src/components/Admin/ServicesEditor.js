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
  Grid
} from '@mui/material';
import { 
  Add as AddIcon, 
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon
} from '@mui/icons-material';

const MySwal = withReactContent(Swal);

export default function ServicesEditor() {
  const { services, updateService, addService, deleteService } = useServices();
  const [editingId, setEditingId] = useState(null);
  const [newService, setNewService] = useState({
    title: '',
    description: ['', '', '', '']
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (service) => {
    setEditingId(service.id);
    setNewService({
      title: service.title,
      description: [...service.description]
    });
  };

  const handleSave = () => {
    if (editingId) {
      updateService(editingId, {
        title: newService.title,
        description: newService.description.filter(item => item.trim() !== '')
      });
      MySwal.fire({
        title: 'Succès !',
        text: 'Le service a été mis à jour avec succès',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setEditingId(null);
    } else if (isAdding) {
      addService({
        title: newService.title,
        description: newService.description.filter(item => item.trim() !== '')
      });
      MySwal.fire({
        title: 'Succès !',
        text: 'Le service a été ajouté avec succès',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setIsAdding(false);
    }
    
    setNewService({
      title: '',
      description: ['', '', '', '']
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setNewService({
      title: '',
      description: ['', '', '', '']
    });
  };

  const handleDelete = (id) => {
    MySwal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Vous ne pourrez pas annuler cette action !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
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

  const handleDescriptionChange = (index, value) => {
    const updatedDescription = [...newService.description];
    updatedDescription[index] = value;
    setNewService(prev => ({
      ...prev,
      description: updatedDescription
    }));
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Gestion des Domaines d'Expertise
      </Typography>
      
      {!isAdding && !editingId && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setIsAdding(true)}
          sx={{ mb: 3 }}
        >
          Ajouter un domaine d'expertise
        </Button>
      )}

      {(isAdding || editingId) && (
        <Card variant="outlined" sx={{ mb: 3, p: 2 }}>
          <CardContent>
            <TextField
              fullWidth
              label="Titre du service"
              value={newService.title}
              onChange={(e) => setNewService(prev => ({ ...prev, title: e.target.value }))}
              margin="normal"
              variant="outlined"
            />
            
            <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
              Points clés :
            </Typography>
            
            {newService.description.map((item, index) => (
              <TextField
                key={index}
                fullWidth
                label={`Point clé ${index + 1}`}
                value={item}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                margin="normal"
                variant="outlined"
                size="small"
                sx={{ mb: 1 }}
              />
            ))}
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
            <Button
              startIcon={<CancelIcon />}
              onClick={handleCancel}
              sx={{ mr: 1 }}
            >
              Annuler
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={handleSave}
              disabled={!newService.title.trim()}
            >
              Enregistrer
            </Button>
          </CardActions>
        </Card>
      )}

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} md={6} key={service.id}>
            <Card variant="outlined">
              <CardContent>
                {editingId === service.id ? (
                  <>
                    <TextField
                      fullWidth
                      value={newService.title}
                      onChange={(e) => setNewService(prev => ({ ...prev, title: e.target.value }))}
                      margin="normal"
                      variant="outlined"
                    />
                    {service.description.map((item, index) => (
                      <TextField
                        key={index}
                        fullWidth
                        value={newService.description[index] || ''}
                        onChange={(e) => {
                          const updated = [...newService.description];
                          updated[index] = e.target.value;
                          setNewService(prev => ({ ...prev, description: updated }));
                        }}
                        margin="normal"
                        size="small"
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <Typography variant="h6">{service.title}</Typography>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                      {service.description.map((item, index) => (
                        <li key={index}>
                          <Typography variant="body2">{item}</Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
              <CardActions>
                {editingId === service.id ? (
                  <>
                    <Button
                      startIcon={<CancelIcon />}
                      onClick={handleCancel}
                      size="small"
                    >
                      Annuler
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SaveIcon />}
                      onClick={handleSave}
                      size="small"
                      disabled={!newService.title.trim()}
                    >
                      Enregistrer
                    </Button>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
