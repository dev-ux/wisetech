// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bimImage from "assets/images/bim-engineering.jpg";
import structureImage from "assets/images/structure-engineering.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <MKTypography variant="h2" mb={5} textAlign="center">
          Nos Domaines d'Expertise
        </MKTypography>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bimImage}
                icon="precision_manufacturing"
                title={
                  <>
                    BIM
                    <br />
                    (Building Information Modeling)
                  </>
                }
                description="Nous vous accompagnons dans vos projets BIM pour une conception collaborative et optimisée."
              />
              <RotatingCardBack
                image={bimImage}
                title="BIM"
                description="Modélisation 3D intelligente, coordination interfilières, maquette numérique pour la conception, construction et maintenance."
                action={{
                  type: "internal",
                  route: "/services/bim",
                  label: "En savoir plus",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="electrical_services"
                  title="Ingénierie Electrique CFA/CFO"
                  description="Conception innovante en électricité, courants forts/faibles et systèmes de vidéosurveillance."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="foundation"
                  title="Ingénierie des Structures"
                  description="Structures complexes en béton, bois, métal, aluminium et mixtes pour bâtiments et ouvrages d'art."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="home"
                  title="Diagnostic Technique"
                  description="Expertise avant achat pour sécuriser vos investissements immobiliers."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="ac_unit"
                  title="Ingénierie Fluide"
                  description="Conception innovante en CVC (Chauffage, Ventilation, Climatisation) et systèmes de désenfumage."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Deuxième ligne de cartes rotatives */}
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={structureImage}
                icon="construction"
                title={
                  <>
                    Voirie & Réseaux
                    <br />
                    Divers (VRD)
                  </>
                }
                description="Accompagnement par nos experts en infrastructures et réseaux."
              />
              <RotatingCardBack
                image={structureImage}
                title="VRD"
                description="Conception des voies d'accès, réseaux secs et humides, aménagements extérieurs et coordination des interfaces."
                action={{
                  type: "internal",
                  route: "/services/vrd",
                  label: "En savoir plus",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="savings"
                  title="Économie de la Construction"
                  description="Estimations précises, descriptifs techniques et états des lieux avant paiement."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="videocam"
                  title="Vidéosurveillance"
                  description="Solutions complètes de sécurité et surveillance pour vos bâtiments et infrastructures."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="engineering"
                  title="Restructurations"
                  description="Solutions techniques pour la réhabilitation et la transformation de bâtiments existants."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="height"
                  title="Grandes Hauteurs"
                  description="Expertise spécifique pour les immeubles de grande hauteur et structures complexes."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;