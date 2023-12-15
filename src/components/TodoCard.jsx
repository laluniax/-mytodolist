import React from "react";
import * as S from "../styles/CardStyle";
import { useDispatch, useSelector } from "react-redux";
import { switchTodo, deleteTodo } from "../redux/modules/todosSlice";
function Card({ isActive }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosSlice);
  const onCompleteClickHandler = (e) => {
    dispatch(switchTodo(e));
  };

  const deleteButtonHandler = (e) => {
    dispatch(deleteTodo(e));
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
                  onCompleteClickHandler(item.id);
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
