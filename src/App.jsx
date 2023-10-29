import "./App.css";
import AddTodo from "./components/add-todo";
import ListTodo from "./components/list-todo";

function App() {
  return (
    <>
      <div>
        <ListTodo />
        <AddTodo />
      </div>
    </>
  );
}

export default App;
