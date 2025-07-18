import React, { useState } from 'react';
import { useHero } from 'context/HeroContext';
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Container,
  Alert,
  Snackbar
} from '@mui/material';

const HeroEditor = () => {
  const { heroContent, updateHeroContent } = useHero();
  const [formData, setFormData] = useState({
    title: heroContent.title,
    subtitle: heroContent.subtitle
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHeroContent(formData);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Éditer la section Hero
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Titre principal"
            name="title"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Sous-titre"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            sx={{ mt: 2 }}
          >
            Enregistrer les modifications
          </Button>
        </Box>
      </Card>
      
      <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Les modifications ont été enregistrées avec succès !
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default HeroEditor;
