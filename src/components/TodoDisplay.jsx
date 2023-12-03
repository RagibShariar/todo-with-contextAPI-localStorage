const TodoDisplay = () => {
  return (
    <>
      <div className="flex border px-3 py-2 rounded-lg gap-x-2 gap-y-3 bg-cyan-100 dark:bg-[#ccbed7] drop-shadow-md border-none">
        <input className="cursor-pointer mr-1" type="checkbox" name="" id="" />
        <input
          className="w-full text-lg font-normal text-slate-900 rounded-md px-2 py-1 bg-transparent border-none outline-none"
          type="text"
          name=""
          id=""
          value="Ragib Shariar"
          readOnly
        />
        <button className="border bg-white rounded-md px-1 ">✏️</button>
        <button className="border  bg-white rounded-md px-1 ">❌</button>
      </div>
    </>
  );
};

export default TodoDisplay;
