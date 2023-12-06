import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green
      light: "#81C784", // Light Green
      dark: "#388E3C", // Dark Green
      contrastText: "#FFFFFF", // White for contrast
    },
    secondary: {
      main: "#29B6F6",
      light: "#53C4F7",
      dark: "#1C7FAC",
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
