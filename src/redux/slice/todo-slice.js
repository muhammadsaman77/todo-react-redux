import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      const data = {
        todo: action.payload.content,
        status: "todo",
      };
      state.todos = [...state.todos, data];
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
