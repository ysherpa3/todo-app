import { List } from "@material-ui/core";
import React from "react";
import TodoItem from "./todo-item.js";

/**
 * To-do item list component
 * Content:
 *  - List
 *  - TodoItem component
 */

const TodoItemList = ({ todos, TodoContext }) => {
  return (
    <List dense>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} TodoContext={TodoContext} />
      ))}
    </List>
  );
};

export default TodoItemList;
