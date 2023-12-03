import { createContext, useContext } from "react";

// Create Todo Context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "TODO message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (todo) => {},
  toggleComplete: (id) => {},
});

// Custom hook
export const useTodo = () => {
  return useContext(useTodo);
};

// Context Provider
export const TodoProvider = TodoContext.Provider;
