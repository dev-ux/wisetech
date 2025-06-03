import React from "react";
import { Container, Grid, Box } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

// Images
import image1 from "assets/images/project1.webp";
import image2 from "assets/images/project2.webp";
import image3 from "assets/images/project3.webp";
import image4 from "assets/images/project4.webp";
import image5 from "assets/images/project5.webp";
import image6 from "assets/images/project6.webp";

function Gallery() {
  const galleryItems = [
    {
      image: image1,
      title: "Projet de Bureaux",
      description: "Rénovation complète d'un immeuble de bureaux"
    },
    {
      image: image2,
      title: "Centre Commercial",
      description: "Structure et VRD d'un nouveau centre commercial"
    },
    {
      image: image3,
      title: "Résidence Étudiante",
      description: "Construction d'une résidence étudiante moderne"
    },
    {
      image: image4,
      title: "Pont Piéton",
      description: "Conception et réalisation d'un pont piéton"
    },
    {
      image: image5,
      title: "Immeuble Résidentiel",
      description: "Rénovation d'un immeuble résidentiel historique"
    },
    {
      image: image6,
      title: "École Primaire",
      description: "Extension d'une école primaire"
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
      
      <MKBox
        component="section"
        minHeight="100vh"
        py={12}
      >
        <Container>
          <Box textAlign="center" mb={6}>
            <MKTypography variant="h1" mb={2}>
              Notre Galerie de Projets
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={4}>
              Découvrez notre portfolio d'ingénierie et de projets réalisés
            </MKTypography>
          </Box>

          <Grid container spacing={4}>
            {galleryItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MKBox
                  component="a"
                  href="#"
                  sx={{
                    textDecoration: "none",
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "xl",
                    mb: 2,
                    cursor: "pointer",
                  }}
                >
                  <MKBox
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      '&:hover': {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <MKBox
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      backgroundColor: "rgba(0,0,0,0.7)",
                      color: "white",
                    }}
                  >
                    <MKTypography variant="h5" mb={1}>
                      {item.title}
                    </MKTypography>
                    <MKTypography variant="body2">
                      {item.description}
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Gallery;