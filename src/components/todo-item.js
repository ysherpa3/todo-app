import {
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import React, { useContext, useState } from "react";
import theme from "./mui-theme";
import TodoDeleteConfirm from "./todo-delete-confirm";

/**
 * To-do item component
 * Content:
 *  - to-do task name
 *  - icon button to mark task complete or incomplete
 *  - icon button to delete task
 *  - to-do delete confirmation
 */

const TodoItem = ({ todo, TodoContext }) => {
  const dispatch = useContext(TodoContext);
  const labelId = "todo-status";
  const [openDialog, setOpenDialog] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleToggle = () => {
    dispatch({
      id: todo.id,
      type: todo.complete ? "MARK_INCOMPLETE" : "MARK_COMPLETE",
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      id: todo.id,
    });
  };

  return (
    <ListItem>
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item xs={8}>
          <ListItemText
            id={labelId}
            primary={todo.task}
            style={{ textDecoration: todo.complete ? "line-through" : "" }}
          />
        </Grid>
        <Grid item xs={4} style={{ textAlign: "right" }}>
          <IconButton
            color="primary"
            onClick={handleToggle}
            title={todo.complete ? "Mark as incomplete" : "Mark as complete"}
          >
            {todo.complete ? (
              <ClearIcon
                fontSize={matches ? "default" : "small"}
                titleAccess="Mark as incomplete"
              />
            ) : (
              <DoneIcon
                fontSize={matches ? "default" : "small"}
                titleAccess="Mark as complete"
              />
            )}
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => setOpenDialog(true)}
            title="Delete task"
          >
            <DeleteIcon
              fontSize={matches ? "default" : "small"}
              titleAccess="Delete task"
            />
          </IconButton>
        </Grid>
      </Grid>
      <TodoDeleteConfirm
        openDialog={openDialog}
        task={todo.task}
        handleCloseDialog={() => setOpenDialog(false)}
        handleDelete={handleDelete}
      />
    </ListItem>
  );
};

export default TodoItem;
