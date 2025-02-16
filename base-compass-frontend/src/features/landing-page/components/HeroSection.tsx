import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroWrapper = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-bg.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  '& h1': {
    color: '#ffffff',
    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
    fontWeight: 700,
    fontSize: '3.5rem',
    letterSpacing: '-0.5px'
  },
  '& h5': {
    color: '#ffffff',
    textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: 1.4
  }
}));

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <Container maxWidth="lg">
        <Box maxWidth="600px">
          <Typography variant="h1" gutterBottom>
            Find Your Perfect Work-Ready Stay, Anywhere in the World
          </Typography>
          <Typography variant="h5" paragraph>
            BaseCompass helps digital nomads and remote workers find flexible, trusted accommodations designed for productivity and exploration.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, borderRadius: '25px', px: 4 }}
          >
            Explore Stays
          </Button>
        </Box>
      </Container>
    </HeroWrapper>
  );
};
