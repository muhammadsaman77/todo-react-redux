import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: 1,
        content: "anjay mabar",
        completed: true,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toogleTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    },
    editContentTodo: (state, action) => {
      const { id, content } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      state.todos[todoIndex].content = content;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toogleTodo, deleteTodo, editContentTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
