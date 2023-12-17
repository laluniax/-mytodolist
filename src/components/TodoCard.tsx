import React from "react";
import * as S from "../styles/CardStyle";
import { useDispatch } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
// import { getTodo } from "../redux/modules/todoSlice";
import getTodos, { deleteTodos, obj, switchTodos } from "../api/todos";

type activeBoolean = { isActive: boolean };
function Card({ isActive }: activeBoolean) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // const todos = useSelector((state) => state.todosSlice);

  const switchMutation = useMutation(switchTodos, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("todos");
      console.log("성공하였습니다.");
    },
  });

  const deleteMutation = useMutation(deleteTodos, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("todos");
      console.log("성공하였습니다.");
    },
  });

  // 데이터 가져오기
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  if (isLoading) {
    return <h1>로딩중...</h1>;
  }
  if (isError) {
    return <h1>오류가 발생하였습니다.</h1>;
  }
  const onCompleteClickHandler = (e: { id: number; isDone: boolean }) => {
    switchMutation.mutate(e);
  };

  const deleteButtonHandler = async (e: number) => {
    deleteMutation.mutate(e);
  };

  return (
    <S.CardContainer>
      {data
        ?.filter((item) => item.isDone === isActive)
        .map((item) => {
          return (
            <S.CardBox key={item.id}>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardContent>{item.content}</S.CardContent>
              <S.CompleteButton
                onClick={() => {
                  onCompleteClickHandler({ id: item.id, isDone: item.isDone });
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
