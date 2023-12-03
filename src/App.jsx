import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoWithContextAPI from "./components/TodoWithContextAPI";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);
 
  const addTodo = (todo) => { 
    setTodos((prev)=> [{id:Date.now(), ...todo}, ...prev])
  };

  const updateTodo = (id, todo) => { 
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id === id ?todo :prevTodo))
  };

  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))
   };

  const toggleComplete = (id) => { 
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  };








  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="h-screen bg-slate-200 dark:bg-slate-900 text-slate-700  dark:text-slate-50 ">
        <Navbar/>
        <TodoWithContextAPI />
      </div>
    </TodoProvider>
  );
}

export default App;
