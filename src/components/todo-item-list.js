import { List } from "@material-ui/core";
import React from "react";
import TodoItem from "./todo-item.js";
import theme from "./mui-theme.js";

/**
 * To-do item list component
 * Content:
 *  - List
 *  - TodoItem component
 */

const TodoItemList = ({ todos, TodoContext }) => {
  return (
    <List style={{ margin: theme.spacing(2, 0) }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} TodoContext={TodoContext} />
      ))}
    </List>
  );
};

export default TodoItemList;
