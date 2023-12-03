import TodoDisplay from "./TodoDisplay";
import TodoForm from "./TodoForm";

const TodoWithContextAPI = () => {
  return (
        <div className="px-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold py-8 text-center">Manage Your Todos</h1>
      <div className="mb-8">
        {/* todo form goes here */}
        <TodoForm/>
      </div>
      <div className="flex flex-col gap-y-2">
        {/* loop and todo item display here */}
        <TodoDisplay/>
      </div>
        </div>
  );
};

export default TodoWithContextAPI;