import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import React from "react";

/**
 * Top App Bar component
 * Content:
 *  - To-do list icon
 *  - App title
 */

const Appbar = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "todos.png" }) {
        childImageSharp {
          fixed(height: 64) {
            ...GatsbyImageSharpFixed
            srcSet
          }
        }
      }
    }
  `);

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#303f9f" }}>
      <Toolbar>
        <Grid alignItems="center" container spacing={2}>
          <Grid item>
            <GatsbyLink to="/">
              <Img
                alt="todo list icon"
                fixed={data.file.childImageSharp.fixed}
              />
            </GatsbyLink>
          </Grid>
          <Grid item>
            <Typography variant="h5">To-Do App</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
