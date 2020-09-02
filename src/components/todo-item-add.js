import { Button, Grid, TextField, useMediaQuery } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import theme from "./mui-theme";

/**
 * To-do add form component
 * Content:
 *  - Form
 *    - To-do name textfield
 *    - Add/submit button
 */

const TodoAdd = ({ TodoContext }) => {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const dispatch = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    if (todo) {
      dispatch({ type: "ADD_TODO", todo, id: uuidv4() });
    }

    setTodo("");

    event.preventDefault();
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      style={{ width: "100%", margin: theme.spacing(2, 0) }}
    >
      <Grid
        alignItems="center"
        container
        justify="center"
        style={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={matches ? 8 : 12}
          style={{
            margin: matches ? theme.spacing(0, 1) : theme.spacing(1, 0),
            width: "100%",
          }}
        >
          <TextField
            fullWidth
            id="todo"
            label="Add a new task"
            onChange={handleChange}
            value={todo}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            fullWidth
            size={matches ? "medium" : "small"}
            type="submit"
            variant="contained"
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoAdd;
