import { AppBar, Badge, Tab, Tabs, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import theme from "./mui-theme";

/**
 * To-do filter component
 * Content:
 *  - Tab to show all todos
 *  - Tab to show completed todos
 *  - Tab to show incomplete todos
 */

const TodosFilter = ({ dispatch, numAll, numComplete, numIncomplete }) => {
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
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
      <Tabs
        value={value}
        onChange={handleChange}
        orientation={smUp ? "horizontal" : "vertical"}
        variant="fullWidth"
      >
        <Tab
          onClick={handleShowAll}
          label={
            <Badge badgeContent={numAll} color="secondary">
              All
            </Badge>
          }
        />
        <Tab
          onClick={handleShowComplete}
          label={
            <Badge badgeContent={numComplete} color="secondary">
              Completed
            </Badge>
          }
        />
        <Tab
          onClick={handleShowIncomplete}
          label={
            <Badge badgeContent={numIncomplete} color="secondary">
              Incomplete
            </Badge>
          }
        />
      </Tabs>
    </AppBar>
  );
};

export default TodosFilter;
