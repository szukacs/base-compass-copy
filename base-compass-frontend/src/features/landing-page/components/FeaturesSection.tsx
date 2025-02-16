import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ExploreIcon from '@mui/icons-material/Explore';

const FeatureCard = styled(Card)(() => ({
  height: '100%',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const features = [
  {
    icon: <WorkspacePremiumIcon fontSize="large" color="primary" />,
    title: 'Verified Workspaces',
    description: 'Stay in accommodations with high-speed internet and ergonomic workspaces.',
  },
  {
    icon: <VerifiedUserIcon fontSize="large" color="primary" />,
    title: 'Flexible & Trusted Stays',
    description: 'Short-term, long-term, and last-minute rentals, all verified for reliability.',
  },
  {
    icon: <ExploreIcon fontSize="large" color="primary" />,
    title: 'Connect & Explore',
    description: 'Discover local communities, co-working spaces, and curated experiences.',
  },
];

export const FeaturesSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Why BaseCompass?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  {feature.icon}
                  <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
