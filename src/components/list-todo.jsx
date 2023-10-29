import { useState } from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";

export default function ListTodo() {
  const { todos } = useSelector((state) => state.todos);
  const [filter, setFilter] = useState("SHOW_ALL");
  const filteredTodo = todos.filter((todo) => {
    if (filter === "SHOW_COMPLETED") {
      return todo.completed === true;
    } else if (filter === "SHOW_ACTIVE") {
      return todo.completed === false;
    }
    return true;
  });
  return (
    <>
      <div className="px-5">
        <h1 className="font-inter text-2xl font-[900]">Todo List</h1>
        <div>
          <button onClick={() => setFilter("SHOW_ALL")}>All</button>
          <button onClick={() => setFilter("SHOW_ACTIVE")}>Active</button>
          <button onClick={() => setFilter("SHOW_COMPLETED")}>Completed</button>
        </div>
        <div>
          {filteredTodo.map((data) => (
            <Todo
              key={data.id}
              content={data.content}
              completed={data.completed}
              id={data.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
