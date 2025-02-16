import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const PricingCard = styled(Card)(() => ({
  height: '100%',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
}));

const pricingPlans = [
  {
    title: 'Basic',
    price: '$10',
    features: ['Access verified listings', 'Essential tools', 'Community access'],
  },
  {
    title: 'Pro',
    price: '$25',
    features: ['Personalized recommendations', 'Workspace verification', 'Priority support'],
  },
  {
    title: 'Premium',
    price: '$50',
    features: ['Concierge service', 'Exclusive stays', 'Flexible cancellation'],
  },
];

export const PricingSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Choose the Plan That Fits Your Lifestyle
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {pricingPlans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PricingCard>
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Typography variant="h4" align="center" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography variant="h3" align="center" color="primary" gutterBottom>
                    {plan.price}
                    <Typography variant="subtitle1" component="span">/month</Typography>
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {plan.features.map((feature, idx) => (
                      <Typography key={idx} sx={{ py: 1 }}>
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ borderRadius: '25px', px: 4 }}
                  >
                    Start Free Trial
                  </Button>
                </Box>
              </PricingCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
