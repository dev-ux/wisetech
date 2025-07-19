import { Container, Grid, Box, Card, CardMedia, Icon } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import { useServices } from "context/ServicesContext";

// Images
const defaultImage = "/images/default.jpg";

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { services } = useServices();
  
  // Trouver le service correspondant à l'ID dans l'URL
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <MKBox minHeight="100vh" display="flex" flexDirection="column">
        <DefaultNavbar routes={routes} sticky />
        <Box flexGrow={1} display="flex" alignItems="center" justifyContent="center">
          <Container>
            <MKTypography variant="h3" textAlign="center">
              Service non trouvé
            </MKTypography>
            <Box mt={3} textAlign="center">
              <MKButton 
                variant="gradient" 
                color="info"
                onClick={() => navigate('/')}
              >
                Retour à l'accueil
              </MKButton>
            </Box>
          </Container>
        </Box>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    );
  }

  // Handle image error by setting a default image
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <MKBox minHeight="100vh" display="flex" flexDirection="column">
      <DefaultNavbar routes={routes} sticky />
      <Box flexGrow={1} py={8}>
        <Container>
          <Grid container spacing={6} justifyContent="center">
            {/* Image Header */}
            <Grid item xs={12} mb={6}>
              <Card sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={service.image || defaultImage}
                  alt={service.title}
                  onError={(e) => {
                    e.target.src = defaultImage;
                  }}
                />
              </Card>
            </Grid>

            {/* Content */}
            <Grid item xs={12} md={10} lg={8} mx="auto">
              <MKBox mb={6} textAlign="center">
                <MKTypography 
                  variant="h1" 
                  color="primary" 
                  mb={2}
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                    lineHeight: 1.2
                  }}
                >
                  {service.title}
                </MKTypography>
                
                <MKBox 
                  width="80px" 
                  height="4px" 
                  bgcolor="primary.main" 
                  mx="auto"
                  mb={4}
                />
              </MKBox>
              
              <MKBox mb={8}>
                <MKTypography 
                  variant="h3" 
                  mb={3}
                  sx={{
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    color: 'text.primary',
                    position: 'relative',
                    display: 'inline-block',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -8,
                      width: '60px',
                      height: '3px',
                      backgroundColor: 'primary.main',
                    }
                  }}
                >
                  Nos Prestations
                </MKTypography>
                
                <MKBox 
                  component="ul" 
                  pl={3}
                  mt={4}
                  sx={{
                    '& li': {
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      mb: 1.5,
                      '&:before': {
                        content: '"\\2022"',
                        color: 'primary.main',
                        fontWeight: 'bold',
                        display: 'inline-block',
                        width: '1em',
                        marginLeft: '-1em'
                      }
                    }
                  }}
                >
                  {service.description.map((item, index) => (
                    <MKTypography 
                      key={index} 
                      component="li" 
                      variant="body1"
                    >
                      {item}
                    </MKTypography>
                  ))}
                </MKBox>
              </MKBox>

              {service.details && (
                <MKBox mb={8}>
                  <MKTypography 
                    variant="h3" 
                    mb={3}
                    sx={{
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: 'text.primary',
                      position: 'relative',
                      display: 'inline-block',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: -8,
                        width: '60px',
                        height: '3px',
                        backgroundColor: 'primary.main',
                      }
                    }}
                  >
                    En Détail
                  </MKTypography>
                  
                  <MKTypography 
                    variant="body1" 
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: 'text.secondary'
                    }}
                  >
                    {service.details}
                  </MKTypography>
                </MKBox>
              )}

              <Box py={8} mt={8}>
                <Container>
                  {/* En-tête avec image et titre */}
                  <Grid container spacing={6} mb={8}>
                    <Grid item xs={12} md={6} lg={5} sx={{ mx: 'auto' }}>
                      <Card sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
                        <CardMedia
                          component="img"
                          src={service.image || defaultImage}
                          alt={service.title}
                          onError={handleImageError}
                          sx={{
                            width: '100%',
                            height: '350px',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease-in-out',
                            '&:hover': {
                              transform: 'scale(1.03)'
                            }
                          }}
                        />
                      </Card>
                      
                      {/* Galerie d'images */}
                      {service.gallery && service.gallery.length > 0 && (
                        <Box mt={3}>
                          <MKTypography variant="h6" mb={2} fontWeight="bold">
                            Galerie
                          </MKTypography>
                          <Grid container spacing={2}>
                            {service.gallery.map((img, index) => (
                              <Grid item xs={6} key={index}>
                                <Card sx={{ borderRadius: 2, overflow: 'hidden', height: '100%' }}>
                                  <CardMedia
                                    component="img"
                                    src={img}
                                    alt={`${service.title} - Image ${index + 1}`}
                                    onError={handleImageError}
                                    sx={{
                                      width: '100%',
                                      height: '120px',
                                      objectFit: 'cover',
                                      transition: 'transform 0.3s ease-in-out',
                                      '&:hover': {
                                        transform: 'scale(1.05)'
                                      }
                                    }}
                                  />
                                </Card>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      )}
                    </Grid>
                    
                    <Grid item xs={12} md={6} lg={7} sx={{ mx: 'auto' }}>
                      <MKTypography 
                        variant="h2" 
                        fontWeight="bold" 
                        mb={3}
                        sx={{
                          background: 'linear-gradient(45deg, #1976d2, #00b0ff)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          display: 'inline-block'
                        }}
                      >
                        {service.title}
                      </MKTypography>
                      
                      <MKTypography 
                        variant="body1" 
                        color="text" 
                        mb={4}
                        sx={{
                          fontSize: '1.1rem',
                          lineHeight: 1.8
                        }}
                        dangerouslySetInnerHTML={{ 
                          __html: service.details.replace(/\n/g, '<br />') 
                        }}
                      />
                      
                      {/* Section Caractéristiques */}
                      {service.features && service.features.length > 0 && (
                        <MKBox mb={4}>
                          <MKTypography variant="h5" mb={2} fontWeight="bold" color="primary">
                            Caractéristiques
                          </MKTypography>
                          <Grid container spacing={2}>
                            {service.features.map((feature, index) => (
                              <Grid item xs={12} sm={6} key={index}>
                                <Box display="flex" alignItems="center" mb={1}>
                                  <Icon sx={{ color: 'primary.main', mr: 1 }}>check_circle</Icon>
                                  <MKTypography variant="body1">
                                    {feature}
                                  </MKTypography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </MKBox>
                      )}
                      
                      {/* Section Avantages */}
                      {service.benefits && service.benefits.length > 0 && (
                        <MKBox mb={4} p={3} sx={{ 
                          backgroundColor: 'rgba(25, 118, 210, 0.05)',
                          borderRadius: 2,
                          borderLeft: '4px solid',
                          borderColor: 'primary.main'
                        }}>
                          <MKTypography variant="h5" mb={2} fontWeight="bold" color="primary">
                            Avantages
                          </MKTypography>
                          <Grid container spacing={2}>
                            {service.benefits.map((benefit, index) => (
                              <Grid item xs={12} sm={6} key={index}>
                                <Box display="flex" alignItems="center" mb={1}>
                                  <Icon sx={{ color: 'success.main', mr: 1 }}>star</Icon>
                                  <MKTypography variant="body1">
                                    {benefit}
                                  </MKTypography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </MKBox>
                      )}
                      
                      {/* Section Description */}
                      {service.description && (
                        <MKBox mb={4}>
                          <MKTypography variant="h5" mb={2} fontWeight="bold" color="primary">
                            Nos prestations
                          </MKTypography>
                          <Grid container spacing={2}>
                            {service.description.map((item, index) => (
                              <Grid item xs={12} sm={6} key={index}>
                                <Box display="flex" alignItems="center" mb={1}>
                                  <Icon sx={{ color: 'info.main', mr: 1 }}>arrow_forward</Icon>
                                  <MKTypography variant="body1">
                                    {item}
                                  </MKTypography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </MKBox>
                      )}
                      
                      {/* Bouton de retour */}
                      <Box textAlign="center" mt={6}>
                        <MKButton 
                          variant="gradient" 
                          color="primary"
                          size="large"
                          onClick={() => navigate(-1)}
                          startIcon={<Icon>arrow_back</Icon>}
                          sx={{
                            px: 6,
                            py: 1.5,
                            fontSize: '1.1rem',
                            textTransform: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 4px 20px rgba(25, 118, 210, 0.2)',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 25px rgba(25, 118, 210, 0.3)'
                            },
                            transition: 'all 0.3s ease-in-out'
                          }}
                        >
                          Retour aux services
                        </MKButton>
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Box>


            </Grid>
          </Grid>
        </Container>
      </Box>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  );
}

export default ServiceDetail;
