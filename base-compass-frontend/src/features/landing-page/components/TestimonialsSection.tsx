import { Box, Card, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  margin: theme.spacing(2),
}));

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Developer',
    comment: 'BaseCompass made it incredibly easy to find a productive workspace while traveling through Southeast Asia.',
    avatar: '/avatars/sarah.jpg',
  },
  {
    name: 'Mark Smith',
    role: 'Digital Marketing Consultant',
    comment: 'The verified workspaces feature is a game-changer. No more surprises with internet connectivity!',
    avatar: '/avatars/mark.jpg',
  },
  {
    name: 'Emma Rodriguez',
    role: 'UX Designer',
    comment: 'I love how BaseCompass connects me with local communities wherever I go.',
    avatar: '/avatars/emma.jpg',
  },
];

export const TestimonialsSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          What Digital Nomads Say About BaseCompass
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TestimonialCard>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    component="img"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography color="text.secondary">{testimonial.role}</Typography>
                  </Box>
                </Box>
                <Typography>{testimonial.comment}</Typography>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
