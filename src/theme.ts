import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#92BED3", // Green
      light: "#92BED3", // Light Green
      dark: "#92BED3", // Dark Green
      contrastText: "#FFFFFF", // White for contrast
    },
    secondary: {
      main: "#92BED3",
      light: "#92BED3",
      dark: "#92BED3",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    
  },
  components: {
    MuiTextField: {
        defaultProps: {
            variant: 'standard',
        }
    }

    
    
  }
});

export default theme;
