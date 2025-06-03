import React from "react";
import { Container, Box, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function AboutWisetech() {
  return (
    <MKBox component="section">
      <Container>
        <Box textAlign="center" py={{ xs: 8, sm: 16 }}>
          <MKTypography variant="h1" mb={3}>
            Wisetech - Experts en Génie Civil
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={6}>
            Wisetech est une entreprise spécialisée dans la réalisation de structures de bâtiments. Forte d'une équipe d'experts 
            qualifiés et d'une expérience solide dans le domaine du génie civil, nous accompagnons nos clients de la conception 
            à la réalisation de leurs projets architecturaux.
          </MKTypography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <MKBox mb={4}>
              <MKTypography variant="h3" mb={2}>
                Notre Expertise
              </MKTypography>
              <MKTypography variant="body1" color="text">
                • Conception et réalisation de structures en béton armé et acier<br/>
                • Fondations et terrassements<br/>
                • Charpentes métalliques<br/>
                • Structures spéciales et complexes<br/>
                • Expertise en réhabilitation de bâtiments
              </MKTypography>
            </MKBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <MKBox mb={4}>
              <MKTypography variant="h3" mb={2}>
                Notre Engagement
              </MKTypography>
              <MKTypography variant="body1" color="text">
                • Qualité et sécurité au cœur de nos processus<br/>
                • Respect des délais et du budget<br/>
                • Innovation et technologie de pointe<br/>
                • Approche personnalisée et réactive<br/>
                • Respect de l'environnement et des normes
              </MKTypography>
            </MKBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <MKBox mb={4}>
              <MKTypography variant="h3" mb={2}>
                Nos Valeurs
              </MKTypography>
              <MKTypography variant="body1" color="text">
                • Professionnalisme et rigueur technique<br/>
                • Innovation et créativité<br/>
                • Engagement et responsabilité<br/>
                • Satisfaction client<br/>
                • Développement durable
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={6}>
          <MKButton variant="gradient" color="info" size="large">
            Découvrir nos réalisations
          </MKButton>
        </Box>
      </Container>
    </MKBox>
  );
}

export default AboutWisetech;
