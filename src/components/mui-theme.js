import { blueGrey, indigo, orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

/**
 * Custom Material UI theme
 */

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange,
  },
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        backgroundColor: indigo[700],
        padding: "2rem 0",
      },
    },
    MuiBottomNavigationAction: {
      root: {
        color: blueGrey[100],
        "&$selected": {
          color: blueGrey[100],
        },
      },
    },
  },
});

export default theme;
