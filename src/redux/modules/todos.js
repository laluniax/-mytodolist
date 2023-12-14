import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
    deleteTodo: (state, { payload }) => {},
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
