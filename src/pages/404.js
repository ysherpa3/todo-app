import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { FaRegSadCry } from "react-icons/fa";
import Layout from "../components/layout";

/**
 * 404 Page not found
 * Contents:
 *  - page not found message
 *  - link to homepage
 */

const useStyles = makeStyles({
  // Styles applied to link
  link: {
    textDecoration: "none",

    "&:hover": {
      textDecoration: "none",
    },
  },
  // Styles applied to grid
  grid: {
    textAlign: "center",
  },
  // Styles applied to text
  text: {
    marginBottom: "2rem",
  },
});

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid alignItems="center" container justify="center" spacing={2}>
        <Grid item>
          <Box color="#ff6f00" component="span" fontSize="7rem">
            4
          </Box>
          <FaRegSadCry style={{ color: "#0097a7", fontSize: "5rem" }} />
          <Box color="#ff6f00" component="span" fontSize="7rem">
            4
          </Box>
        </Grid>
        <Grid className={classes.grid} item xs={12}>
          <Typography className={classes.text} color="primary" variant="h5">
            <span style={{ textTransform: "uppercase" }}>Oops</span>! Sorry, the
            page you are looking for does not exist.
          </Typography>
          <GatsbyLink
            aria-label="go to homepage"
            className={classes.link}
            to="/"
          >
            <Button color="primary" variant="contained">
              back to homepage
            </Button>
          </GatsbyLink>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PageNotFound;
