import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "../modules/todos";

const store = configureStore({
  reducer: { todosSlice },
});

export default store;
