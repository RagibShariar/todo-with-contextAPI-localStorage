/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useTodo } from "../contexts";

const TodoDisplay = (props) => {
  const { todo } = props;
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const { deleteTodo, updateTodo, toggleComplete } = useTodo();
  const ref = useRef(null);

  const toggle = () => {
    toggleComplete(todo.id);
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: newTodo });
    setIsTodoEditable(false);
  };

  return (
    <>
      <div
        className={`flex border px-3 py-2 rounded-lg gap-x-2 gap-y-3 bg-cyan-100 dark:bg-violet-200 drop-shadow-md border-none ${
          todo.completed ? "bg-violet-200 dark:bg-green-200" : ""
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer mr-1"
          checked={todo.completed}
          onChange={toggle}
          name=""
          id=""
        />
        <input
          type="text"
          ref={ref}
          className={`w-full text-lg font-semibold text-slate-900 rounded-md px-2 py-1 bg-transparent border-none outline-none 
          ${todo.completed ? "line-through text-slate-600/50" : ""} 
          ${isTodoEditable ? "bg-white" : ""}
          `}
          name=""
          id=""
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          readOnly={!isTodoEditable}
        />
        <button
          className="border bg-white rounded-md px-1 disabled:opacity-50 shrink-0 text-slate-900"
          disabled={todo.completed}
          onClick={() => {
            ref.current.focus();
            
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}
        >
          {isTodoEditable ? "📁" : " ✏️"}
        </button>
        <button
          onClick={() => deleteTodo(props.todo.id)}
          className="border  bg-white rounded-md px-1 "
        >
          ❌
        </button>
      </div>
    </>
  );
};

export default TodoDisplay;
