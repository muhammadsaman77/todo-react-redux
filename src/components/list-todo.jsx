import { useSelector } from "react-redux";

export default function ListTodo() {
  useSelector((state) => state.todos);
  return (
    <>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>
        <h1>List Todo</h1>
        {}
      </div>
    </>
  );
}
