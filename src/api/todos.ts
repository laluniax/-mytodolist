import axios from "axios";

export type obj = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

// 데이터 받아오기
const getTodos = async () => {
  try {
    const { data } = await axios.get<obj[]>(
      `${process.env.REACT_APP_SERVER_URL}/todos`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 데이터 추가하기
const addTodos = async (newTodo: obj) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

const switchTodos = async (e: { id: number; isDone: boolean }) => {
  try {
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${e.id}`, {
      isDone: !e.isDone,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodos = async (e: number) => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${e}`);
  } catch (error) {
    console.log(error);
  }
};

export { getTodos as default, addTodos, switchTodos, deleteTodos };
