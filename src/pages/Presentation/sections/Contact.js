// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Contact() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MKTypography variant="h2" textAlign="center" mb={3}>
              Contactez-nous
            </MKTypography>
            <MKTypography variant="body1" color="text" textAlign="center" mb={6}>
              Nous sommes à votre disposition pour répondre à vos questions et étudier vos projets
            </MKTypography>
          </Grid>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <MKBox mb={4}>
                <MKTypography variant="h3" mb={2}>
                  Informations de contact
                </MKTypography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <DefaultInfoCard
                      icon="location_on"
                      title="Adresse"
                      description="123 Rue de la Construction
75000 Paris, France"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultInfoCard
                      icon="phone"
                      title="Téléphone"
                      description="+33 (0)1 23 45 67 89"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultInfoCard
                      icon="email"
                      title="Email"
                      description="contact@wisetech-eng.com"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultInfoCard
                      icon="schedule"
                      title="Horaires"
                      description="Lun-Ven : 9h-18h
Sam : 9h-13h"
                    />
                  </Grid>
                </Grid>
              </MKBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <MKBox mb={4}>
                <MKTypography variant="h3" mb={2}>
                  Formulaire de contact
                </MKTypography>
                <MKBox component="form" sx={{ mt: 2 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        type="text"
                        label="Nom"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        type="email"
                        label="Email"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        type="tel"
                        label="Téléphone"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        type="text"
                        label="Objet"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        multiline
                        rows={4}
                        label="Message"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        type="submit"
                      >
                        Envoyer
                      </MKButton>
                    </Grid>
                  </Grid>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
