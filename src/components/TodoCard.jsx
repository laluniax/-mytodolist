import React from "react";
import * as S from "../styles/CardStyle";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/modules/todosSlice";
import axios from "axios";
function Card({ isActive }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosSlice);

  const onCompleteClickHandler = async (e, isDone) => {
    try {
      // 데이터 수정하기
      await axios.patch(`http://localhost:4000/todos/${e}`, {
        isDone: !isDone,
      });
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteButtonHandler = async (e) => {
    try {
      await axios.delete(`http://localhost:4000/todos/${e}`);
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // 데이터 받아오기
  const fetchTodos = async () => {
    // 구조분해할당
    try {
      const { data } = await axios.get("http://localhost:4000/todos");
      dispatch(getTodo(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.CardContainer>
      {todos
        ?.filter((item) => item.isDone === isActive)
        .map((item) => {
          return (
            <S.CardBox>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardContent>{item.content}</S.CardContent>
              <S.CompleteButton
                onClick={() => {
                  onCompleteClickHandler(item.id, item.isDone);
                }}
              >
                {isActive ? "취소" : "완료"}
              </S.CompleteButton>
              <S.DeleteButton
                onClick={() => {
                  deleteButtonHandler(item.id);
                }}
              >
                X
              </S.DeleteButton>
            </S.CardBox>
          );
        })}
    </S.CardContainer>
  );
}

export default Card;
