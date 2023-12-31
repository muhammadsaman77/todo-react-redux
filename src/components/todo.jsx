import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toogleTodo,
  editContentTodo,
} from "../redux/slice/todo-slice";
import edit from "../assets/svg/edit.svg";
import trash from "../assets/svg/trash.svg";
import checklist from "../assets/svg/checklist.svg";
import { useState } from "react";
import notify from "../assets/notification";
export default function Todo({ id, content, completed }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(content);
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    notify("delete");
  };
  const handleToggle = (id) => {
    dispatch(toogleTodo(id));
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleSubmitEdit = (id, content) => {
    dispatch(editContentTodo({ id, content }));
    setIsEdit(!isEdit);
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const doneInput = completed === true ? "line-through" : "";
  const inputClass = `font-inter ${doneInput}`;
  return (
    <>
      <div className="bg-[#ffffff] w-full py-3 mb-3 rounded-md drop-shadow pl-5 pr-3 flex justify-between items-center">
        <div className="w-[80%]">
          <div className=" flex">
            <input
              type="checkbox"
              checked={completed}
              className="scale-[1.7] mr-3"
              onClick={() => handleToggle(id)}
            />
            {isEdit ? (
              <input
                type="text"
                value={input}
                className="border-b-2  outline-none w-full"
                onChange={(e) => handleInputChange(e)}
              />
            ) : (
              <span className={inputClass}> {content} </span>
            )}
          </div>
        </div>
        <div className="w-[35%] md:w-[15%]">
          {isEdit ? (
            <button
              onClick={() => handleSubmitEdit(id, input)}
              className="bg-[#acd8ac] p-2 rounded-full mr-2"
            >
              <img src={checklist} />
            </button>
          ) : (
            <button
              className="bg-[#acd8ac] p-2 rounded-full mr-2"
              onClick={() => handleEdit()}
            >
              <img src={edit} alt="" />
            </button>
          )}

          <button
            onClick={() => handleDelete(id)}
            className="bg-[#e2a5a5] p-2 rounded-full"
          >
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

Todo.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  completed: PropTypes.bool,
};
