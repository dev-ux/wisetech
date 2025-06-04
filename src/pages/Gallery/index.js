// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import image1 from "assets/images/project1.webp";
import image2 from "assets/images/project2.webp";
import image3 from "assets/images/project3.webp";
import image4 from "assets/images/project4.webp";
import image5 from "assets/images/project5.webp";
import image6 from "assets/images/project6.webp";

function Gallery() {
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
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Notre Galerie
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Découvrez nos réalisations et projets emblématiques
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox py={6}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MKBox
                component="img"
                src={image2}
                alt="Project 1"
                borderRadius="lg"
                shadow="xl"
                width="100%"
                height="auto"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MKBox
                component="img"
                src={image3}
                alt="Project 2"
                borderRadius="lg"
                shadow="xl"
                width="100%"
                height="auto"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MKBox
                component="img"
                src={image4}
                alt="Project 3"
                borderRadius="lg"
                shadow="xl"
                width="100%"
                height="auto"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MKBox
                component="img"
                src={image5}
                alt="Project 4"
                borderRadius="lg"
                shadow="xl"
                width="100%"
                height="auto"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MKBox
                component="img"
                src={image6}
                alt="Project 5"
                borderRadius="lg"
                shadow="xl"
                width="100%"
                height="auto"
              />
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Gallery;
