
const TodoForm = () => {
  return (
        <>
          <form className="flex">
              <input
                  className="w-full font-normal text-lg dark:text-slate-50 border-2 border-green-600 border-none outline-none rounded-l-md px-3 py-2 bg-white/40 drop-shadow-lg"
                  type="text"
                  name=""
                  placeholder="Write Todo..."
              />
              <button
                  className="bg-green-600 text-slate-50 px-6 py-2 rounded-r-md drop-shadow-lg hover:bg-green-700 duration-100"
                  type="submit">Add</button>
            </form>
        </>
  );
};

export default TodoForm;