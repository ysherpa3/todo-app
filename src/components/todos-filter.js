import { Button, ButtonGroup, useMediaQuery } from "@material-ui/core";
import React from "react";
import theme from "./mui-theme";

/**
 * To-do filter component
 * Content:
 *  - Button to show all todos
 *  - Button to show completed todos
 *  - Button to show incomplete todos
 */

const TodosFilter = ({ dispatch }) => {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleShowAll = () => {
    dispatch({ type: "ALL_TODOS" });
  };

  const handleShowComplete = () => {
    dispatch({ type: "COMPLETED_TODOS" });
  };

  const handleShowIncomplete = () => {
    dispatch({ type: "INCOMPLETE_TODOS" });
  };

  return (
    <ButtonGroup
      color="primary"
      fullWidth
      size={matches ? "large" : "small"}
      style={{ marginTop: "2rem" }}
    >
      <Button onClick={handleShowAll}>All</Button>
      <Button onClick={handleShowComplete}>Completed</Button>
      <Button onClick={handleShowIncomplete}>Incomplete</Button>
    </ButtonGroup>
  );
};

export default TodosFilter;
