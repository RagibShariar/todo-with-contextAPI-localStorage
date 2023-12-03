import { createContext, useContext } from "react";

// Create Todo context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "1st todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Context Provider
export const TodoProvider = TodoContext.Provider;

// Custom hook
export const useTodo = () => {
  return useContext(TodoContext);
};
