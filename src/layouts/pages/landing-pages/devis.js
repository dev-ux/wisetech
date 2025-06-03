import React from "react";
import { Container, Box, Grid, Select, MenuItem } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

export default function Devis() {
  const [navbarTransparent, setNavbarTransparent] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      <DefaultNavbar
        routes={routes}
        transparent={navbarTransparent}
        light={navbarTransparent}
        sticky
      />
      
      <MKBox 
        component="section"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.state, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container sx={{ py: 12 }}>
          <Box 
            sx={{ 
              backgroundColor: 'background.paper', 
              borderRadius: 3, 
              boxShadow: 3,
              p: { xs: 3, sm: 6 },
              backdropFilter: 'blur(30px)'
            }}
          >
            <Box textAlign="center" py={{ xs: 4, sm: 6 }}>
              <MKTypography variant="h1" mb={2}>
                Demander un Devis
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={4}>
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
                    <MenuItem value="calcul">Calcul de structure</MenuItem>
  <MenuItem value="expertise">Expertise structurelle</MenuItem>
  <MenuItem value="plans">Plans d'exécution</MenuItem>
  <MenuItem value="rehabilitation">Réhabilitation structurelle</MenuItem>
  <MenuItem value="ouvrages">Ouvrages spéciaux</MenuItem>
  <MenuItem value="controle">Contrôle technique</MenuItem>
  <MenuItem value="parasismique">Étude parasismique</MenuItem>
  <MenuItem value="geotechnique">Étude géotechnique</MenuItem>
  <MenuItem value="autre">Autre (précisez en description)</MenuItem>
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
          </Box>
        </Container>
      </MKBox>
    </>
  );
}