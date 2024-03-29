import { useTodo } from "../contexts";
import TodoDisplay from "./TodoDisplay";
import TodoForm from "./TodoForm";

const TodoWithContextAPI = () => {
  const { todos,deleteAllTodos, deleteCompleted } = useTodo();

  const todoLength = todos.filter(todo=> todo.completed === false).length
  

  return (
        <div className="px-3 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold pb-8 text-center">Manage Your Todos</h1>
      <div className="mb-3">
        {/* todo form goes here */}
        <TodoForm/>
      </div>
      <div className="mb-6 flex justify-between">
        <p>{todoLength>0 ? (todoLength===1)?`${todoLength} task left` :`${todoLength} tasks left` :"No task left"} </p>
        <button
          onClick={deleteAllTodos}
          className="text-red-600">Clear All</button>
      </div>
      <div className="flex flex-col gap-y-2">
        {/* loop and todo item display here */}
        {/* <TodoDisplay /> */}
        {
          todos.map(todo => <TodoDisplay key={todo.id} todo={ todo} />)
        }
      </div>
      <div className="flex justify-end mt-12">
        <button
          onClick={deleteCompleted}
          className={`bg-red-500 text-slate-50 px-4 py-1.5 rounded-md drop-shadow-md hover:bg-red-600 disabled:bg-red-400`}
        >Clear Completed</button>
      </div>
        </div>
  );
};

export default TodoWithContextAPI;