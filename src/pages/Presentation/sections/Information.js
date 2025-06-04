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

        {/* Diagnostic Structure */}
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={structureImage}
                icon="home"
                title={
                  <>
                    Diagnostic Structure
                    <br />
                    Avant/Après Achat
                  </>
                }
                description="Expertise technique complète pour sécuriser vos investissements immobiliers."
              />
              <RotatingCardBack
                image={structureImage}
                title="Diagnostic Structure"
                description="Études approfondies de la structure des bâtiments avant et après achat, avec recommandations techniques personnalisées."
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="apartment"
                  title="Bâtiments"
                  description="Expertise structurelle complète pour tous types de bâtiments résidentiels et tertiaires."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="construction"
                  title="Génie Civil"
                  description="Études structurelles pour ouvrages d'art et infrastructures publiques."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="bridge"
                  title="Ouvrages d'Art"
                  description="Études structurelles spécialisées pour ponts, viaducs et autres structures complexes."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="factory"
                  title="Bâtiment Industriel"
                  description="Expertise structurelle pour usines, entrepôts et installations industrielles."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* BIM & Études Structure */}
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bimImage}
                icon="precision_manufacturing"
                title={
                  <>
                    BIM & Études Structure
                    <br />
                    Revit, SolidWorks
                  </>
                }
                description="Modélisation 3D et études structurelles innovantes pour vos projets."
              />
              <RotatingCardBack
                image={bimImage}
                title="BIM & Études Structure"
                description="Modélisation 3D précise et études structurelles avancées avec les logiciels de pointe."
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="apartment"
                  title="Bâtiments"
                  description="Modélisation BIM et études structurelles pour bâtiments résidentiels et tertiaires."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="construction"
                  title="Génie Civil"
                  description="Études structurelles et modélisation BIM pour infrastructures publiques."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="bridge"
                  title="Ouvrages d'Art"
                  description="Modélisation 3D et études structurelles spécialisées pour ouvrages d'art."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="factory"
                  title="Bâtiment Industriel"
                  description="BIM et études structurelles pour installations industrielles complexes."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Suivi de Travaux */}
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={structureImage}
                icon="construction"
                title={
                  <>
                    Suivi de Travaux
                  </>
                }
                description="Accompagnement complet tout au long de vos projets."
              />
              <RotatingCardBack
                image={structureImage}
                title="Suivi de Travaux"
                description="Supervision technique et administrative pour garantir le respect des normes et délais."
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="apartment"
                  title="Bâtiments"
                  description="Suivi technique et administratif pour constructions résidentielles et tertiaires."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="construction"
                  title="Génie Civil"
                  description="Supervision complète pour travaux d'infrastructures publiques."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="bridge"
                  title="Ouvrages d'Art"
                  description="Suivi technique spécialisé pour construction d'ouvrages d'art."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="factory"
                  title="Bâtiment Industriel"
                  description="Supervision complète pour projets industriels complexes."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Services Informatiques */}
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={structureImage}
                icon="computer"
                title={
                  <>
                    Services Informatiques
                  </>
                }
                description="Expertise complète en solutions informatiques pour les entreprises."
              />
              <RotatingCardBack
                image={structureImage}
                title="Services Informatiques"
                description="Solutions informatiques sur mesure pour optimiser vos processus métier."
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="bug_report"
                  title="Diagnostic Informatique"
                  description="Analyse complète de votre infrastructure IT et recommandations d'optimisation."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="build"
                  title="Maîtrise d'Oeuvre Informatique"
                  description="Gestion complète de vos projets IT, de la conception à la mise en production."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="code"
                  title="Développement Web"
                  description="Création de sites web et applications sur mesure pour votre entreprise."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="app_registration"
                  title="Développement d'Applications"
                  description="Applications mobiles et desktop personnalisées pour vos besoins spécifiques."
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