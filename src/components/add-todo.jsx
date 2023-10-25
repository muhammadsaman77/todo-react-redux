export default function AddTodo() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        <form action="">
          <input type="text" onChange={handleChange} />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
