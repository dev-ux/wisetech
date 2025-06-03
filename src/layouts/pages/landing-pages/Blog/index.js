import React from "react";
import { Container, Grid, Box, Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

// Images
import blog1 from "assets/images/blog/blog1.jpeg";
import blog2 from "assets/images/blog/blog2.png";
import blog3 from "assets/images/blog/blog3.jpeg";
import footerRoutes from "footer.routes";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Fonction pour formater la date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

// Données des articles du blog
const blogPosts = [
  {
    title: "Les dernières innovations en ingénierie structurelle",
    date: "2025-05-15",
    image: blog1,
    excerpt: "Découvrez les dernières avancées technologiques en matière de conception et de construction de structures."
  },
  {
    title: "Guide complet du BIM pour les ingénieurs",
    date: "2025-04-28",
    image: blog2,
    excerpt: "Apprenez tout sur le BIM et comment l'intégrer efficacement dans vos projets d'ingénierie."
  },
  {
    title: "Les normes parasismiques en 2025",
    date: "2025-04-10",
    image: blog3,
    excerpt: "Mise à jour complète des normes parasismiques et leurs implications pour les projets de construction."
  },
  // {
  //   title: "Optimisation des coûts en ingénierie",
  //   date: "2025-03-25",
  //   image: blog4,
  //   excerpt: "Stratégies pour optimiser les coûts sans compromettre la qualité des projets d'ingénierie."
  // },
  // {
  //   title: "Les tendances en matière de VRD",
  //   date: "2025-03-15",
  //   image: blog5,
  //   excerpt: "Évolution des techniques et des normes en travaux publics et réseaux divers."
  // },
  // {
  //   title: "Sécurité et conformité en ingénierie",
  //   date: "2025-03-01",
  //   image: blog6,
  //   excerpt: "Guide complet pour assurer la sécurité et la conformité de vos projets."
  // }
];

function Blog() {
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
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.state, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container sx={{ py: 12 }}>
          <Box textAlign="center" mb={6}>
            <MKTypography variant="h1" mb={2}>
              Notre Blog
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={4}>
              Découvrez nos articles sur l'ingénierie et les dernières tendances
            </MKTypography>
          </Box>

          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardActionArea component="a" href="#" target="_blank">
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                      sx={{
                        borderRadius: 'lg',
                        overflow: 'hidden',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <MKTypography variant="h5" mb={1}>
                        {post.title}
                      </MKTypography>
                      <MKTypography variant="body2" color="text.secondary" mb={2}>
                        {formatDate(post.date)}
                      </MKTypography>
                      <MKTypography variant="body2" color="text.secondary">
                        {post.excerpt}
                      </MKTypography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
       <MKBox pt={6} px={1} mt={6}>
              <DefaultFooter content={footerRoutes} />
            </MKBox>
    </>
  );
}

export default Blog;
