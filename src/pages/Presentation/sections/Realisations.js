// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Images
import realisation1 from "assets/images/realisation1.webp";
import realisation2 from "assets/images/realisation2.webp";

function Realisations() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MKTypography variant="h2" textAlign="center" mb={3}>
              Nos Réalisations
            </MKTypography>
            <MKTypography variant="body1" color="text" textAlign="center" mb={6}>
              Découvrez une sélection de nos projets emblématiques
            </MKTypography>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <MKBox mb={3}>
                <MKBox component="img" src={realisation1} alt="Réalisations" width="100%" height="250px" objectFit="cover" />
                <MKBox p={3}>
                  <MKTypography variant="h4" mb={2}>
                    Bâtiment Industriel
                  </MKTypography>
                  <MKTypography variant="body1" color="text">
                    Réalisation d'une structure métallique pour un bâtiment industriel moderne
                  </MKTypography>
                  <MKButton variant="gradient" color="info" fullWidth>
                    Détails du projet
                  </MKButton>
                </MKBox>
              </MKBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <MKBox mb={3}>
                <MKBox component="img" src={realisation2} alt="Réalisations" width="100%" height="250px" objectFit="cover" />
                <MKBox p={3}>
                  <MKTypography variant="h4" mb={2}>
                    Structure Béton
                  </MKTypography>
                  <MKTypography variant="body1" color="text">
                    Conception et réalisation d'une structure en béton armé pour un immeuble résidentiel
                  </MKTypography>
                  <MKButton variant="gradient" color="info" fullWidth>
                    Détails du projet
                  </MKButton>
                </MKBox>
              </MKBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <MKBox mb={3}>
                <MKBox component="img" src={realisation2} alt="Réalisations" width="100%" height="250px" objectFit="cover" />
                <MKBox p={3}>
                  <MKTypography variant="h4" mb={2}>
                    Fondations
                  </MKTypography>
                  <MKTypography variant="body1" color="text">
                    Réalisation de fondations spéciales pour un bâtiment à usage tertiaire
                  </MKTypography>
                  <MKButton variant="gradient" color="info" fullWidth>
                    Détails du projet
                  </MKButton>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Realisations;
