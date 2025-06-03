import React from "react";
import { Container, Box, Grid, Select, MenuItem } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";

function Devis() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <MKBox component="section">
      <Container>
        <Box textAlign="center" py={{ xs: 8, sm: 16 }}>
          <MKTypography variant="h1" mb={3}>
            Demander un Devis
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={6}>
            Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé
          </MKTypography>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MKInput
                fullWidth
                label="Nom et prénom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MKInput
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MKInput
                fullWidth
                label="Téléphone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Select
                fullWidth
                label="Type de service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                displayEmpty
                inputProps={{
                  name: "service",
                  id: "service-select",
                }}
              >
                <MenuItem value="">
                  <em>Sélectionnez un service</em>
                </MenuItem>
                <MenuItem value="web">Développement Web</MenuItem>
                <MenuItem value="mobile">Développement Mobile</MenuItem>
                <MenuItem value="design">Design UI/UX</MenuItem>
                <MenuItem value="consulting">Consulting</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <MKInput
                fullWidth
                multiline
                rows={4}
                label="Description de votre projet"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <MKButton
                variant="gradient"
                color="info"
                type="submit"
                fullWidth
              >
                Demander un devis
              </MKButton>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MKBox>
  );
}

export default Devis;
