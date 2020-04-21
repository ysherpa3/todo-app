import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { todoActionReducer } from "./todo-action-reducer";
import { todoFilterReducer } from "./todo-filter-reducer";
import TodoItemAdd from "./todo-item-add";
import TodoItemList from "./todo-item-list";
import TodosFilter from "./todos-filter";
import { Paper } from "@material-ui/core";
import Title from "./title";

const initialTodos = [
  {
    id: uuidv4(),
    task: "Take a Basic Cooking Class",
    complete: false,
  },
  {
    id: uuidv4(),
    task: "Create a Blog",
    complete: true,
  },
  {
    id: uuidv4(),
    task: "Learn to Play Piano",
    complete: false,
  },
];

const TodoContext = createContext(null);

/**
 * To-do List component
 * App title
 * Content:
 *  - TodoItemAdd component
 *  - TodosFilter component
 *  - TodoItemList component
 */

const ToDoList = () => {
  const [todos, dispatchTodos] = useReducer(todoActionReducer, initialTodos);
  const [filter, dispatchFilter] = useReducer(todoFilterReducer, "ALL");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    }
    if (filter === "COMPLETED" && todo.complete) {
      return true;
    }
    if (filter === "INCOMPLETE" && !todo.complete) {
      return true;
    }
    return false;
  });

  return (
    <>
      <Title />
      <Paper
        elevation={5}
        style={{
          padding: "0.5rem",
          width: "100%",
        }}
      >
        <TodoContext.Provider value={dispatchTodos}>
          <TodoItemAdd TodoContext={TodoContext} />
          <TodosFilter dispatch={dispatchFilter} />
          <TodoItemList TodoContext={TodoContext} todos={filteredTodos} />
        </TodoContext.Provider>
      </Paper>
    </>
  );
};

export default ToDoList;
