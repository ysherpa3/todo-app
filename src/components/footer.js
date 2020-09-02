import { Grid, Typography } from "@material-ui/core";
import React from "react";

/**
 * Footer component
 * Content:
 *  - Copyright year
 */

const Footer = () => {
  return (
    <Grid alignItems="center" container justify="center">
      <Grid item xs={12}>
        <Typography variant="subtitle2">
          © {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
