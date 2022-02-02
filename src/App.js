import * as React from 'react';
import './App.css';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column'
      }}>
        <LoginForm />
      </Box>
    </ThemeProvider>
  );
}

export default App;
