import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = [
  { id: uuid(), title: "title", content: "content", isDone: false },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // 데이터 조회
    getTodo: (state, action) => {
      return action.payload;
    },

    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
    },
    switchTodo: (state, action) => {
      // 클릭했을 때의 id값과 state안의 id값
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, switchTodo, deleteTodo, getTodo } = todosSlice.actions;
export default todosSlice.reducer;
