// Material UI components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox/MKBoxRoot";
import MKButton from "../../../components/MKButton/MKButtonRoot";
import MKTypography from "../../../components/MKTypography/MKTypographyRoot";

// Material Kit 2 React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Gallery page components
import GalleryGrid from "./components/GalleryGrid";

// Images
import bgImage from "../../../assets/images/bg-gallery.jpg";

// ✅ Maintenant seulement, définir les props par défaut
const defaultBoxProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "inherit",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none"
};

function GalleryPage({ routes }) {
  return (
    <MKBox>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />

      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Container>
          <Grid container item xs={12} justifyContent="center" alignItems="center">
            <MKTypography variant="h1" color="white" sx={{ mb: 1 }}>
              Our Gallery
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              sx={{ mx: "auto", mb: 3, maxWidth: "400px" }}
            >
              Explore our collection of projects and achievements
            </MKTypography>
            <MKButton
              component="a"
              href="#gallery"
              variant="gradient"
              color="white"
              size="large"
              sx={{ mb: 3 }}
            >
              View Gallery
            </MKButton>
          </Grid>
        </Container>
      </MKBox>

      <MKBox component="section" py={6} id="gallery">
        <Container>
          <Grid container item xs={12} md={6}>
            <MKBox {...defaultBoxProps}>
              <MKTypography variant="h3" color="white" mb={3}>
                Gallery
              </MKTypography>
              <MKTypography variant="body1" color="white" opacity={0.8}>
                Explore our latest projects
              </MKTypography>
            </MKBox>
          </Grid>
          <GalleryGrid />
        </Container>
      </MKBox>

      <DefaultFooter />
    </MKBox>
  );
}

export default GalleryPage;
