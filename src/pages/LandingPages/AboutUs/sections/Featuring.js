
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
import sncf from "assets/images/logos/gray-logos/Logo_SNCF.png";
import arep from "assets/images/logos/gray-logos/arep.png";
import archicrea from "assets/images/logos/gray-logos/foncia.png";
import foncia from "assets/images/logos/gray-logos/ARCHICREA-2-1.png";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={sncf} alt="SNCF" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={arep} alt="AREP" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={archicrea} alt="Archicréa" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={foncia} alt="Foncia" width="100%" opacity={0.7} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={250}
              separator=","
              title="Projets"
              description="Réalisés avec excellence et professionnalisme"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={15}
              suffix="+"
              title="Années"
              description="D'expérience dans le génie civil"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={50}
              suffix="%"
              title="Satisfaction"
              description="Taux de satisfaction client"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
