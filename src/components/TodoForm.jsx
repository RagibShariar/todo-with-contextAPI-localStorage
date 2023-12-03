import { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault();
    addTodo({todo:todo, completed:false})
    setTodo("");
  };

  return (
    <>
      <form onSubmit={add} className="flex">
        <input
          className="w-full font-normal text-lg dark:text-slate-50 border-2 border-green-600 border-none outline-none rounded-l-md px-3 py-2 bg-white/40 drop-shadow-lg"
          type="text"
          name=""
          placeholder="Write Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-green-600 text-slate-50 px-6 py-2 rounded-r-md drop-shadow-lg hover:bg-green-700 duration-100 "
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
