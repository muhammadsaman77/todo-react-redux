import { configureStore } from "@reduxjs/toolkit";
import todos from "./slice/todo-slice";

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
