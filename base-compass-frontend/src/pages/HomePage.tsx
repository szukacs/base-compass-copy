import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Base Compass
          </Typography>
          <Typography variant="body1" paragraph>
            This is the home page of your application. Built with React and Material UI.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage;
