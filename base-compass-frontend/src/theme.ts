import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080', // Teal
     // main: '#a8ad6d', // Teal
      contrastText: '#FFFFFF', // White for readability
    },
    secondary: {
      main: '#F4A261', // Warm Sand
     // main: '#ffc107', // Warm Sand
      contrastText: '#333333', // Dark contrast for readability
    },
/*    accent: {
      main: '#00BFFF', // Sky Blue
    },*/
    background: {
      default: '#F8F9FA', // Light neutral for a modern, airy feel
      paper: '#FFFFFF', // White for cards and surfaces
    },
    text: {
      primary: '#222222', // Dark for readability
      secondary: '#555555', // Softer gray for descriptions
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#222222',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#222222',
    },
    body1: {
      fontSize: '1rem',
      color: '#555555',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 16px',
          boxShadow: 'none',
          ':hover': {
            opacity: 0.9,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
