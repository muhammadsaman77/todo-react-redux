import PropTypes from "prop-types";
export default function Todo({ content, status }) {
  return (
    <>
      <div>
        <span>{content}</span>
        <span>{status}</span>
      </div>
    </>
  );
}

Todo.propTypes = {
  content: PropTypes.string,
  status: PropTypes.oneOf("todo", "done"),
};
