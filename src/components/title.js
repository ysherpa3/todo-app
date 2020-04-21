import { Typography } from "@material-ui/core";
import React from "react";

/**
 * Title component
 */

const Title = () => {
  return (
    <Typography
      align="center"
      color="primary"
      style={{ marginBottom: "2rem" }}
      variant="h2"
    >
      To-Do List
    </Typography>
  );
};

export default Title;
