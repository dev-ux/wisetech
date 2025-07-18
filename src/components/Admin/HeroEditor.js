import React, { useState, useEffect } from 'react';
import { useHero } from 'context/HeroContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Container
} from '@mui/material';

const MySwal = withReactContent(Swal);

const HeroEditor = () => {
  const { heroContent, updateHeroContent } = useHero();
  const [formData, setFormData] = useState({
    title: heroContent.title,
    subtitle: heroContent.subtitle
  });

  // Mettre à jour formData lorsque heroContent change
  useEffect(() => {
    setFormData({
      title: heroContent.title,
      subtitle: heroContent.subtitle
    });
  }, [heroContent]);
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
    MySwal.fire({
      title: 'Succès !',
      text: 'Le contenu du héros a été mis à jour avec succès',
      icon: 'success',
      confirmButtonText: 'OK'
    });
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
    </Container>
  );
};

export default HeroEditor;
