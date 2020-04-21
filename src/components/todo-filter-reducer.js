/**
 * To-do filters reducer
 */

export const todoFilterReducer = (state, action) => {
  switch (action.type) {
    case "ALL_TODOS":
      return "ALL";
    case "COMPLETED_TODOS":
      return "COMPLETED";
    case "INCOMPLETE_TODOS":
      return "INCOMPLETE";
    default:
      throw new Error();
  }
};
