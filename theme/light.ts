import { createTheme } from '@mui/material';
import { typography } from './typography';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e2855',
    },
    secondary: {
      main: '#ff0068',
      light: '#ff0068',
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    ...typography,
    h1: {
      ...typography.h1,
      color: '#2e2855',
    },
    subtitle2: {
      ...typography.subtitle2,
      color: '#ff0068',
    },
    body2: {
      ...typography.body2,
      color: 'rgb(0,0,0,0.6)',
    },
  },
});
