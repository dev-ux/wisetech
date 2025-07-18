import React, { useState } from 'react';
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
  Divider,
  TextareaAutosize
} from '@mui/material';
import { 
  Add as AddIcon, 
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  AddCircleOutline as AddCircleOutlineIcon
} from '@mui/icons-material';
import { useExpertise } from 'context/ExpertiseContext';

export default function ExpertiseEditor() {
  const { 
    expertiseDomains, 
    updateExpertiseDomain, 
    updateExpertiseCard,
    addExpertiseDomain, 
    deleteExpertiseDomain 
  } = useExpertise();
  
  const [editingId, setEditingId] = useState(null);
  const [editingCardIndex, setEditingCardIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  
  const [currentDomain, setCurrentDomain] = useState({
    title: '',
    subtitle: '',
    description: '',
    backDescription: '',
    icon: 'home',
    image: '',
    cards: []
  });

  const [currentCard, setCurrentCard] = useState({
    icon: '',
    title: '',
    description: ''
  });

  const handleEditDomain = (domain) => {
    setEditingId(domain.id);
    setCurrentDomain({
      title: domain.title,
      subtitle: domain.subtitle || '',
      description: domain.description,
      backDescription: domain.backDescription || '',
      icon: domain.icon || 'home',
      image: domain.image || '',
      cards: [...domain.cards]
    });
  };

  const handleAddCard = () => {
    setCurrentDomain(prev => ({
      ...prev,
      cards: [...prev.cards, { ...currentCard }]
    }));
    setCurrentCard({ icon: '', title: '', description: '' });
  };

  const handleSaveDomain = () => {
    if (editingId) {
      updateExpertiseDomain(editingId, currentDomain);
    } else if (isAdding) {
      addExpertiseDomain(currentDomain);
      setIsAdding(false);
    }
    
    setEditingId(null);
    setCurrentDomain({
      title: '',
      subtitle: '',
      description: '',
      backDescription: '',
      icon: 'home',
      image: '',
      cards: []
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setIsAdding(false);
    setCurrentDomain({
      title: '',
      subtitle: '',
      description: '',
      backDescription: '',
      icon: 'home',
      image: '',
      cards: []
    });
  };

  const handleEditCard = (domainId, cardIndex) => {
    const domain = expertiseDomains.find(d => d.id === domainId);
    if (domain && domain.cards[cardIndex]) {
      setEditingCardIndex(cardIndex);
      setCurrentCard({ ...domain.cards[cardIndex] });
    }
  };

  const handleSaveCard = () => {
    if (editingCardIndex !== null && editingId) {
      updateExpertiseCard(editingId, editingCardIndex, currentCard);
      setEditingCardIndex(null);
      setCurrentCard({ icon: '', title: '', description: '' });
    }
  };

  const handleDeleteCard = (domainId, cardIndex) => {
    const domain = expertiseDomains.find(d => d.id === domainId);
    if (domain) {
      const updatedCards = domain.cards.filter((_, index) => index !== cardIndex);
      updateExpertiseDomain(domainId, { cards: updatedCards });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Gestion des Domaines d'Expertise Avancés
      </Typography>
      
      {!isAdding && !editingId && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {
            setIsAdding(true);
            setCurrentDomain({
              title: '',
              subtitle: '',
              description: '',
              backDescription: '',
              icon: 'home',
              image: '',
              cards: []
            });
          }}
          sx={{ mb: 3 }}
        >
          Ajouter un domaine d'expertise
        </Button>
      )}

      {(isAdding || editingId) && (
        <Card variant="outlined" sx={{ mb: 4, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            {editingId ? 'Modifier le domaine' : 'Nouveau domaine d\'expertise'}
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Titre du domaine"
                value={currentDomain.title}
                onChange={(e) => setCurrentDomain({...currentDomain, title: e.target.value})}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Sous-titre"
                value={currentDomain.subtitle}
                onChange={(e) => setCurrentDomain({...currentDomain, subtitle: e.target.value})}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Icône (nom Material Icon)"
                value={currentDomain.icon}
                onChange={(e) => setCurrentDomain({...currentDomain, icon: e.target.value})}
                margin="normal"
                helperText="Nom de l'icône Material Icons (ex: home, apartment, construction)"
              />
              <TextField
                fullWidth
                label="Nom du fichier image"
                value={currentDomain.image}
                onChange={(e) => setCurrentDomain({...currentDomain, image: e.target.value})}
                margin="normal"
                helperText="Nom du fichier dans le dossier public/images"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Description"
                value={currentDomain.description}
                onChange={(e) => setCurrentDomain({...currentDomain, description: e.target.value})}
                margin="normal"
                multiline
                rows={3}
              />
              <TextField
                fullWidth
                label="Description au dos de la carte"
                value={currentDomain.backDescription}
                onChange={(e) => setCurrentDomain({...currentDomain, backDescription: e.target.value})}
                margin="normal"
                multiline
                rows={3}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Cartes d'information
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        label="Icône de la carte"
                        value={currentCard.icon}
                        onChange={(e) => setCurrentCard({...currentCard, icon: e.target.value})}
                        size="small"
                        helperText="Nom de l'icône Material Icons"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        label="Titre de la carte"
                        value={currentCard.title}
                        onChange={(e) => setCurrentCard({...currentCard, title: e.target.value})}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Description"
                        value={currentCard.description}
                        onChange={(e) => setCurrentCard({...currentCard, description: e.target.value})}
                        size="small"
                        multiline
                        rows={2}
                      />
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ textAlign: 'right' }}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={editingCardIndex !== null ? handleSaveCard : handleAddCard}
                        startIcon={<AddCircleOutlineIcon />}
                        disabled={!currentCard.title || !currentCard.description}
                      >
                        {editingCardIndex !== null ? 'Mettre à jour' : 'Ajouter'}
                      </Button>
                      {editingCardIndex !== null && (
                        <Button
                          size="small"
                          onClick={() => {
                            setEditingCardIndex(null);
                            setCurrentCard({ icon: '', title: '', description: '' });
                          }}
                          sx={{ ml: 1 }}
                        >
                          Annuler
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              
              {currentDomain.cards.map((card, index) => (
                <Grid item xs={12} key={index}>
                  <Card variant="outlined" sx={{ p: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={1}>
                        <span className="material-icons" style={{ fontSize: '24px' }}>
                          {card.icon || 'info'}
                        </span>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="subtitle2">{card.title}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="textSecondary">
                          {card.description.length > 80 
                            ? `${card.description.substring(0, 80)}...` 
                            : card.description}
                        </Typography>
                      </Grid>
                      <Grid item xs={2} sx={{ textAlign: 'right' }}>
                        <IconButton 
                          size="small" 
                          onClick={() => handleEditCard(editingId || -1, index)}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton 
                          size="small" 
                          onClick={() => handleDeleteCard(editingId || -1, index)}
                          color="error"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <CardActions sx={{ justifyContent: 'flex-end', mt: 2 }}>
            <Button
              startIcon={<CancelIcon />}
              onClick={handleCancelEdit}
              sx={{ mr: 1 }}
            >
              Annuler
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={handleSaveDomain}
              disabled={!currentDomain.title || !currentDomain.description}
            >
              Enregistrer le domaine
            </Button>
          </CardActions>
        </Card>
      )}

      <Grid container spacing={3}>
        {expertiseDomains.map((domain) => (
          <Grid item xs={12} key={domain.id}>
            <Card variant="outlined">
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <span className="material-icons" style={{ fontSize: '32px' }}>
                      {domain.icon || 'home'}
                    </span>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{domain.title}</Typography>
                    {domain.subtitle && (
                      <Typography variant="subtitle2" color="textSecondary">
                        {domain.subtitle}
                      </Typography>
                    )}
                    <Typography variant="body2">{domain.description}</Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      startIcon={<EditIcon />}
                      onClick={() => handleEditDomain(domain)}
                      size="small"
                      sx={{ mr: 1 }}
                    >
                      Modifier
                    </Button>
                    <Button
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteExpertiseDomain(domain.id)}
                      color="error"
                      size="small"
                    >
                      Supprimer
                    </Button>
                  </Grid>
                </Grid>
                
                <Box sx={{ mt: 2, pl: 6 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Cartes d'information ({domain.cards.length}):
                  </Typography>
                  <Grid container spacing={1}>
                    {domain.cards.map((card, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ 
                          border: '1px solid #eee', 
                          borderRadius: 1, 
                          p: 1,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <span 
                            className="material-icons" 
                            style={{ 
                              fontSize: '20px', 
                              marginRight: '8px',
                              color: '#666'
                            }}
                          >
                            {card.icon || 'info'}
                          </span>
                          <Typography variant="body2" noWrap>
                            {card.title}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
