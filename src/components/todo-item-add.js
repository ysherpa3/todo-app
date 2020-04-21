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
    <form noValidate onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Grid alignItems="center" container justify="center" spacing={1}>
        <Grid item xs={8}>
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
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoAdd;
