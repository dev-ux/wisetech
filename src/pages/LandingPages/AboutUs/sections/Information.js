// Material Kit 2 React components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="construction"
                    title="Études"
                    description="Diversité de bâtiments et travaux publics : restructuration de bâtiments et constructions neuves en béton, bois, métal et mixte"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="precision_manufacturing"
                    title="Services"
                    description="BIM, Ingénierie des Structures, Diagnostic Structure, Économie de la Construction, VRD"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apartment"
                    title="Travaux"
                    description="Bureaux, Hospitalier, Scolaires, Industries, Centres commerciaux, Spectacles, Transports, Génie Civil"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="engineering"
                    title="Spécialités"
                    description="Béton armé, Béton précontraint, Charpente métallique, Structures mixtes, Immeubles de Grande Hauteur"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              title="Nos Réalisations"
              description="Découvrez nos projets emblématiques et notre approche technique"
              action={{
                type: "internal",
                route: "pages/company/realisations",
                color: "info",
                label: "Voir nos projets",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
