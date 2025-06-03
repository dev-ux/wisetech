// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function Services() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MKTypography variant="h2" textAlign="center" mb={3}>
              Nos Services
            </MKTypography>
            <MKTypography variant="body1" color="text" textAlign="center" mb={6}>
              Nous proposons une gamme complète de services en génie civil et construction
            </MKTypography>
          </Grid>

          <Grid item xs={12} md={4}>
            <MKBox mb={4}>
              <MKTypography variant="h3" mb={2}>
                Structures en Béton
              </MKTypography>
              <MKTypography variant="body1" color="text">
                • Conception et réalisation de structures en béton armé<br/>
                • Fondations et terrassements<br/>
                • Réhabilitation de bâtiments<br/>
                • Structures spéciales et complexes
              </MKTypography>
              <MKButton variant="gradient" color="info" fullWidth>
                En savoir plus
              </MKButton>
            </MKBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <MKBox mb={4}>
              <MKTypography variant="h3" mb={2}>
                Charpentes Métalliques
              </MKTypography>
              <MKTypography variant="body1" color="text">
                • Conception et réalisation de structures métalliques<br/>
                • Charpentes industrielles<br/>
                • Structures préfabriquées<br/>
                • Montage et assemblage
              </MKTypography>
              <MKButton variant="gradient" color="info" fullWidth>
                En savoir plus
              </MKButton>
            </MKBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <MKBox mb={4}>
              <MKTypography variant="h3" mb={2}>
                Ingénierie
              </MKTypography>
              <MKTypography variant="body1" color="text">
                • Études techniques et calculs<br/>
                • Direction d'œuvre<br/>
                • Contrôle de qualité<br/>
                • Assistance à maîtrise d'ouvrage
              </MKTypography>
              <MKButton variant="gradient" color="info" fullWidth>
                En savoir plus
              </MKButton>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Services;
