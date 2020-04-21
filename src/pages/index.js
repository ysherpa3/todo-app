import React from "react";
import Layout from "../components/layout";
import TodoList from "../components/todo-list";

/**
 * To-do App
 * - Displays a to-do list
 * - Option to add new tasks
 * - Filters to show either all tasks, completed tasks, or incomplete tasks
 * - List of tasks added
 * - Option to mark task as completed (if currently incomplete) or incomplete (if currently complete)
 * - Option to delete task
 */

const TodoApp = () => {
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
};

export default TodoApp;
