// @mui material components
import Grid from "@mui/material/Grid";
import { Box, Typography, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

// Images
import gallery1 from "../../../../assets/images/gallery/gallery-1.jpg";
import gallery2 from "../../../../assets/images/gallery/gallery-2.jpg";
import gallery3 from "../../../../assets/images/gallery/gallery-3.jpg";
import gallery4 from "../../../../assets/images/gallery/gallery-4.jpg";
import gallery5 from "../../../../assets/images/gallery/gallery-5.jpg";
import gallery6 from "../../../../assets/images/gallery/gallery-6.jpg";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function GalleryGrid() {
  const galleryItems = [
    { image: gallery1, title: "Project 1", description: "Description for project 1" },
    { image: gallery2, title: "Project 2", description: "Description for project 2" },
    { image: gallery3, title: "Project 3", description: "Description for project 3" },
    { image: gallery4, title: "Project 4", description: "Description for project 4" },
    { image: gallery5, title: "Project 5", description: "Description for project 5" },
    { image: gallery6, title: "Project 6", description: "Description for project 6" },
  ];

  return (
    <StyledBox>
      <Grid container spacing={3}>
        {galleryItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <Box component="img" src={item.image} alt={item.title} sx={{ width: "100%" }} />
              <StyledBox p={2}>
                <StyledTypography variant="h5" color="primary" mb={1}>
                  {item.title}
                </StyledTypography>
                <StyledTypography variant="body2" color="text.secondary">
                  {item.description}
                </StyledTypography>
              </StyledBox>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
}

export default GalleryGrid;
