// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Context
import { useServices } from "context/ServicesContext";

function Services() {
  const { services } = useServices();
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

          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <MKBox mb={4}>
                <MKTypography variant="h3" mb={2}>
                  {service.title}
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  {service.description.map((item, index) => (
                    <span key={index}>
                      • {item}
                      {index < service.description.length - 1 && <br/>}
                    </span>
                  ))}
                </MKTypography>
                <MKButton 
                  variant="gradient" 
                  color="info" 
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  En savoir plus
                </MKButton>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Services;
