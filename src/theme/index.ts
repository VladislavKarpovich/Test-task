import { createMuiTheme } from "@material-ui/core/styles";
import { red, teal } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
