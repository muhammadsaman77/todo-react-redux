import "./App.css";
import AddTodo from "./components/add-todo";
import ListTodo from "./components/list-todo";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div className="lg:w-1/2 mx-auto">
        <ToastContainer className="w-full lg:w-1/2" />
        <ListTodo />
        <AddTodo />
      </div>
    </>
  );
}

export default App;
