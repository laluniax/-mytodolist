import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../modules/todoSlice";

const store = configureStore({
  reducer: { todosSlice },
});

export default store;
