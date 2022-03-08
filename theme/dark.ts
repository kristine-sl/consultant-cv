import { createTheme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { typography } from './typography';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2e2e2e',
    },
    secondary: {
      main: '#ff0068',
      light: '#8F294B',
    },
    background: {
      default: '#191919',
    },
  },
  typography: {
    ...typography,
    subtitle2: {
      ...typography.subtitle2,
      color: '#ff0068',
    },
    body2: {
      ...typography.body2,
      color: 'rgb(255,255,255,0.7)',
    },
  },
});
