/**
 * To-do actions reducer
 */

export const todoActionReducer = (state, action) => {
  switch (action.type) {
    case "MARK_COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "MARK_INCOMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      return state.concat({
        task: action.todo,
        id: action.id,
        complete: false,
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error();
  }
};
