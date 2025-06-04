import React, { useState } from "react";
import { Grid, Alert, Snackbar } from "@mui/material";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
// Mock email sending function
const sendEmail = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful email sending
      console.log('Sending email with data:', formData); // Use formData
      resolve();
    }, 1000);
  });
};

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nom requis';
    if (!formData.email) {
      newErrors.email = 'Email requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message) newErrors.message = 'Message requis';
    if (formData.message.length < 50) newErrors.message = 'Veuillez détailler votre demande (min. 50 caractères)';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Envoi du formulaire avec EmailJS ou votre backend
      sendEmail(formData)
      .then(() => {
        setSnackbarMessage('Message envoyé avec succès !');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: ''
        });
      }, () => {
        setSnackbarMessage('Erreur lors de l\'envoi du message');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/docs/wisetech.pdf",
          label: "Télécharger Doc",
          color: "info",
        }}
        sticky
      />

      <Grid container spacing={3} alignItems="center" sx={{ mt: 8 }}>
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 6rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ 
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 4, sm: 6, md: 8 }}
            mb={{ xs: 4, sm: 6, md: 8 }}
            mx={3}
            sx={{
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
              textAlign="center"
            >
              <MKTypography variant="h3" color="white" fontWeight="bold">
                Contactez-nous
              </MKTypography>
              <MKTypography variant="body2" color="white" mt={1}>
                Notre équipe vous répond sous 24h
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Pour toute question ou demande de devis, remplissez le formulaire ci-dessous ou contactez-nous directement :
              </MKTypography>
              
              <MKBox display="flex" alignItems="center" mb={2}>
                <MKTypography variant="body2" color="text" fontWeight="bold" mr={1}>
                  Email:
                </MKTypography>
                <MKTypography variant="body2" color="info">
                  contact@wisetech-eng.com
                </MKTypography>
              </MKBox>
              
              <MKBox display="flex" alignItems="center" mb={3}>
                <MKTypography variant="body2" color="text" fontWeight="bold" mr={1}>
                  Téléphone:
                </MKTypography>
                <MKTypography variant="body2" color="info">
                  +33 1 23 45 67 89
                </MKTypography>
              </MKBox>

              <MKBox 
                width="100%" 
                component="form" 
                method="post" 
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="outlined"
                      label="Nom complet"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="outlined"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      type="tel"
                      variant="outlined"
                      label="Téléphone (optionnel)"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="outlined"
                      label="Votre message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      placeholder="Décrivez votre projet ou demande en détail..."
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton 
                    type="submit" 
                    variant="gradient" 
                    color="info"
                    size="large"
                    sx={{
                      px: 6,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    Envoyer le message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;