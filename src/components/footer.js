import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
} from "@material-ui/core";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

/**
 * Footer component
 * Content:
 *  - Github profile link
 *  - LinkedIn profile link
 */

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Grid alignItems="center" container justify="center">
      <Grid item xs={12}>
        <BottomNavigation
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          value={value}
        >
          <BottomNavigationAction
            href="https://github.com/ysherpa3"
            icon={<FaGithubSquare size="1.5rem" />}
            label="Github"
            rel="noreferrer noopener"
            target="_blank"
          />
          <BottomNavigationAction
            href="https://www.linkedin.com/in/ysherpa"
            icon={<FaLinkedin size="1.5rem" />}
            label="LinkedIn"
            rel="noreferrer noopener"
            target="_blank"
          />
        </BottomNavigation>
      </Grid>
    </Grid>
  );
};

export default Footer;
