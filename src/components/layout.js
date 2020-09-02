import { Container, CssBaseline } from "@material-ui/core";
import {
  makeStyles,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import React from "react";
import Appbar from "./appbar";
import Footer from "./footer";
import MuiTheme from "./mui-theme";
import SEO from "./seo";

const useStyles = makeStyles({
  // Styles applied to root element
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#e8eaf6",
    color: "#212121",
  },
  // Styles applied to the header element
  nav: {
    flexShrink: 0,
    width: "100%",
  },
  // Styles applied to the main element
  main: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
  },
  // Styles applied to the footer element
  footer: {
    flexShrink: 0,
    width: "100%",
  },
});

/**
 * Base page layout
 * Content:
 *  - App Bar component
 *  - Main content
 *  - Footer component
 */

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO />
      <ThemeProvider theme={responsiveFontSizes(MuiTheme)}>
        <CssBaseline />
        <nav>
          <Appbar />
        </nav>
        <Container className={classes.main} component="main" maxWidth="sm">
          {children}
        </Container>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
