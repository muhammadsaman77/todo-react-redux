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

  const allClass = `${
    filter === "SHOW_ALL"
      ? "text-indigo-600 border-b border-indigo-600 font-semibold"
      : "text-black "
  }`;
  const activeClass = `${
    filter === "SHOW_ACTIVE"
      ? "text-indigo-600 border-b border-indigo-600 font-semibold"
      : "text-black"
  }`;
  const completedClass = `${
    filter === "SHOW_COMPLETED"
      ? "text-indigo-600 border-b border-indigo-600 font-semibold"
      : "text-black"
  }`;

  return (
    <>
      <div className="px-5 pt-3">
        <h1 className="font-inter text-3xl font-[900] mb-1">Todo List</h1>
        <div className="font-inter flex gap-3 mb-3">
          <button onClick={() => setFilter("SHOW_ALL")} className={allClass}>
            All
          </button>
          <button
            onClick={() => setFilter("SHOW_ACTIVE")}
            className={activeClass}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("SHOW_COMPLETED")}
            className={completedClass}
          >
            Completed
          </button>
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
