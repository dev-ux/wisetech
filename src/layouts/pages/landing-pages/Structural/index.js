import React from "react";
import { Container, Grid, Box, Paper, Button } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import slide1 from "assets/images/structural/slide1.webp";
import slide2 from "assets/images/structural/slide2.webp";
import slide3 from "assets/images/structural/slide3.webp";
import slide4 from "assets/images/structural/slide4.webp";

function Structural() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  const slides = [
    {
      image: slide1,
      title: "Conception Structurelle",
      description: "Expertise en conception de structures complexes"
    },
    {
      image: slide2,
      title: "Calculs Sismiques",
      description: "Analyses parasismiques avancées"
    },
    {
      image: slide3,
      title: "Contrôle Technique",
      description: "Suivi qualité et conformité"
    },
    {
      image: slide4,
      title: "Rénovation Structurelle",
      description: "Expertise en rénovation et renforcement"
    }
  ];

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

      {/* Section Slider */}
      <MKBox
        component="section"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.state, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Container sx={{ py: 12 }}>
          <MKTypography variant="h1" mb={2}>
            Ingénierie Structurelle
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={4}>
            {slides[currentSlide].description}
          </MKTypography>
          <Box sx={{ position: "absolute", bottom: 20 }}>
            <Button
              variant="contained"
              color="info"
              onClick={handlePrevSlide}
              sx={{ mr: 2 }}
            >
              Précédent
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={handleNextSlide}
            >
              Suivant
            </Button>
          </Box>
        </Container>
      </MKBox>

      {/* Section Services */}
      <MKBox component="section" py={6}>
        <Container>
          <Box textAlign="center" mb={6}>
            <MKTypography variant="h2" mb={2}>
              Nos Services
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={4}>
              Découvrez notre expertise en ingénierie structurelle
            </MKTypography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <MKTypography variant="h5" mb={2}>
                  Conception Structurelle
                </MKTypography>
                <MKTypography variant="body2" color="text.secondary">
                  Conception de structures en béton, acier, bois et composites
                </MKTypography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <MKTypography variant="h5" mb={2}>
                  Calculs Sismiques
                </MKTypography>
                <MKTypography variant="body2" color="text.secondary">
                  Analyses parasismiques et calculs de résistance
                </MKTypography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <MKTypography variant="h5" mb={2}>
                  Contrôle Technique
                </MKTypography>
                <MKTypography variant="body2" color="text.secondary">
                  Suivi qualité et conformité des ouvrages
                </MKTypography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <MKTypography variant="h5" mb={2}>
                  Rénovation Structurelle
                </MKTypography>
                <MKTypography variant="body2" color="text.secondary">
                  Expertise en renforcement et rénovation
                </MKTypography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      {/* Section Expertise */}
      <MKBox component="section" py={6}>
        <Container>
          <Box textAlign="center" mb={6}>
            <MKTypography variant="h2" mb={2}>
              Notre Expertise
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={4}>
              Une équipe d'experts à votre service
            </MKTypography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <MKBox
                component="img"
                src="assets/images/structural/expertise.jpg"
                alt="Expertise Structurelle"
                sx={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "lg",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MKTypography variant="body1">
                Notre équipe d'ingénieurs structurels possède une expertise reconnue dans la conception et le calcul de structures complexes. Nous maîtrisons toutes les techniques modernes de l'ingénierie structurelle, notamment :
                <ul>
                  <li>Conception de structures en béton armé et précontraint</li>
                  <li>Calculs parasismiques selon les normes en vigueur</li>
                  <li>Contrôle technique et suivi de chantier</li>
                  <li>Rénovation et renforcement de structures existantes</li>
                  <li>Analyses de stabilité et de résistance</li>
                </ul>
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      {/* Footer */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Structural;
