import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#267fff',

    },
    background: {
      default: '#f2f6ff',
    },
    darkText: {
      default: '#405b81',
    },
    lightText: {
      default: '#809bb1',
    },
  },
  typography: {
    allVariants: {
      color: '#506b91',
    },
  },
});

export default theme;