import axios from "axios";
import { useDispatch } from "react-redux";
import { getTodo } from "../redux/modules/todosSlice";
import { useEffect } from "react";

// export const useFetchTodos = async () => {
//   const dispatch = useDispatch();
// useEffect(()=>{

// })
//   try {
//     const { data } = await axios.get("http://localhost:4000/todos");
//     dispatch(getTodo(data));
//   } catch (error) {
//     console.log(error);
//   }
// };

const useFetchTodos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/todos");
        dispatch(getTodo(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, [dispatch]);
};

export default useFetchTodos;
