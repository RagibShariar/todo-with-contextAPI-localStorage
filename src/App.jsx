import "./App.css";
import Navbar from "./components/Navbar";
import TodoWithContextAPI from "./components/TodoWithContextAPI";

function App() {
  return (
    <>
      <div className="h-screen bg-slate-200 dark:bg-slate-900 text-slate-700  dark:text-slate-50 ">
        <Navbar/>
        <TodoWithContextAPI />
      </div>
    </>
  );
}

export default App;
