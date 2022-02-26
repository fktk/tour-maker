import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { yellow, green } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: yellow[700],
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
