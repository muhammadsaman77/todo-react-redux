import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slice/todo-slice";
import { useState } from "react";

export default function AddTodo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id: todos.length + 1,
        content: input,
        completed: false,
      })
    );
    setInput("");
  };
  return (
    <>
      <div className="fixed bottom-3 w-full px-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={input}
            className="block w-full"
          />
          <button className="font-inter bg-indigo-700 text-white w-full h-10 mt-3 font-semibold">
            ADD TODO
          </button>
        </form>
      </div>
    </>
  );
}
