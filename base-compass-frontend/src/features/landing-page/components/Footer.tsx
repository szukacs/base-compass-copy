import { Box, Container, Grid, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              BaseCompass
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your trusted platform for work-ready accommodations worldwide.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" component="div">
              <Box component="a" href="#" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>About</Box>
              <Box component="a" href="#" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>Contact</Box>
              <Box component="a" href="#" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>Blog</Box>
              <Box component="a" href="#" sx={{ color: 'text.secondary', display: 'block' }}>Privacy Policy</Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            {/* Add social media icons here */}
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} BaseCompass. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
