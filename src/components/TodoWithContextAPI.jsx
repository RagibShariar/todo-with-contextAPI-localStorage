import { useTodo } from "../contexts";
import TodoDisplay from "./TodoDisplay";
import TodoForm from "./TodoForm";

const TodoWithContextAPI = () => {
  const { todos } = useTodo();

  const todoLength = (todos.length);
  console.log(todoLength)

  return (
        <div className="px-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold pb-8 text-center">Manage Your Todos</h1>
      <div className="mb-3">
        {/* todo form goes here */}
        <TodoForm/>
      </div>
      <div className="mb-6">
        <p>{todoLength>0 ? `${todoLength} tasks left`:"No task left"} </p>
      </div>
      <div className="flex flex-col gap-y-2">
        {/* loop and todo item display here */}
        {/* <TodoDisplay /> */}
        {
          todos.map(todo => <TodoDisplay key={todo.id} todo={ todo} />)
        }
      </div>
      <div className="flex justify-end mt-12">
        <button className="bg-red-500 text-slate-50 px-4 py-1.5 rounded-md drop-shadow-md hover:bg-red-600">Remove all todos</button>
      </div>
        </div>
  );
};

export default TodoWithContextAPI;