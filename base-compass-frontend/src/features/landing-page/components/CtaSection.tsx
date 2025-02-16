import { Box, Button, Container, Typography } from '@mui/material';

export const CtaSection = () => {
  return (
    <Box
      sx={{
        py: 12,
        background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/cta-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center',
        '& h2': {
          color: '#ffffff',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
          fontWeight: 700,
          fontSize: '3rem',
          letterSpacing: '-0.5px'
        }
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Start Your Next Journey with BaseCompass
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, borderRadius: '25px', px: 6 }}
        >
          Find Your Stay
        </Button>
      </Container>
    </Box>
  );
};
