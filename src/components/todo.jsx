import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo, toogleTodo } from "../redux/slice/todo-slice";
import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";
export default function Todo({ id, content, completed }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleToggle = (id) => {
    dispatch(toogleTodo(id));
  };
  const inputClass = completed === true ? "line-through" : "";
  return (
    <>
      <div className="bg-[#ffffff] w-full h-14 px-3 flex justify-between items-center">
        <div>
          <div onClick={() => handleToggle(id)} className="cursor-pointer">
            <input type="checkbox" checked={completed} className="" />
            <span className={inputClass}> {content} </span>
          </div>
        </div>
        <div>
          <button>
            <img src={edit} alt="" />
          </button>
          <button onClick={() => handleDelete(id)}>
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
