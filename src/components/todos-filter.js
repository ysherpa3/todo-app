import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

/**
 * To-do filter component
 * Content:
 *  - Button to show all todos
 *  - Button to show completed todos
 *  - Button to show incomplete todos
 */

const TodosFilter = ({ dispatch }) => {
  const [value, setValue] = useState(0);

  const handleShowAll = () => {
    dispatch({ type: "ALL_TODOS" });
  };

  const handleShowComplete = () => {
    dispatch({ type: "COMPLETED_TODOS" });
  };

  const handleShowIncomplete = () => {
    dispatch({ type: "INCOMPLETE_TODOS" });
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange}>
        <Tab onClick={handleShowAll} label="All" />
        <Tab onClick={handleShowComplete} label="Completed" />
        <Tab onClick={handleShowIncomplete} label="Incomplete" />
      </Tabs>
    </AppBar>
  );
};

export default TodosFilter;
