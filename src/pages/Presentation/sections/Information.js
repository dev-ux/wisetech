import React from 'react';
import { Container, Grid } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Context
import { useExpertise } from "context/ExpertiseContext";

function Information() {
  const { expertiseDomains } = useExpertise();
  
  // Fonction pour obtenir l'URL de l'image
  const getImageUrl = (imageName) => {
    try {
      return require(`assets/images/${imageName}`);
    } catch (e) {
      // Retourne une image par défaut si l'image n'est pas trouvée
      return require('assets/images/default-expertise.jpg');
    }
  };

  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <MKTypography variant="h2" mb={5} textAlign="center">
          Nos Domaines d'Expertise
        </MKTypography>

        {expertiseDomains.map((domain, domainIndex) => (
          <React.Fragment key={domain.id || domainIndex}>
            <Grid 
              container 
              item 
              xs={11} 
              spacing={3} 
              alignItems="center" 
              sx={{ 
                mx: "auto", 
                mt: domainIndex > 0 ? 6 : 0 
              }}
            >
              <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
                <RotatingCard>
                  <RotatingCardFront
                    image={getImageUrl(domain.image)}
                    icon={domain.icon || 'home'}
                    title={
                      <>
                        {domain.title}
                        {domain.subtitle && (
                          <>
                            <br />
                            {domain.subtitle}
                          </>
                        )}
                      </>
                    }
                    description={domain.description}
                  />
                  <RotatingCardBack
                    image={getImageUrl(domain.image)}
                    title={domain.title}
                    description={domain.backDescription || domain.description}
                  />
                </RotatingCard>
              </Grid>
              
              <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
                <Grid container spacing={3}>
                  {domain.cards.slice(0, 2).map((card, index) => (
                    <Grid item xs={12} md={6} key={`${domain.id}-${index}`}>
                      <DefaultInfoCard
                        icon={card.icon || 'info'}
                        title={card.title}
                        description={card.description}
                      />
                    </Grid>
                  ))}
                </Grid>
                
                {domain.cards.length > 2 && (
                  <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
                    {domain.cards.slice(2, 4).map((card, index) => (
                      <Grid item xs={12} md={6} key={`${domain.id}-${index + 2}`}>
                        <DefaultInfoCard
                          icon={card.icon || 'info'}
                          title={card.title}
                          description={card.description}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Container>
    </MKBox>
  );
}

export default Information;