import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as S from "../styles/FormStyle";
import TodoCard from "./TodoCard";
import uuid from "react-uuid";
import { useMutation, useQuery, useQueryClient } from "react-query";
import getTodos, { addTodos, obj, switchTodos } from "../api/todos";
function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const fetchTodos = async () => {
  //   // 구조분해할당
  //   try {
  //     const { data } = await axios.get("http://localhost:4000/todos");
  //     dispatch(getTodo(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // 리엑트 쿼리 관련 코드
  const queryClient = useQueryClient();
  //변경할 수 있는
  const mutation = useMutation(addTodos, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("todos");
      console.log("성공하였습니다");
    },
  });

  // useEffect(() => {
  //   // 처음 마운트 되었을 때 데이터 호출
  // }, []);

  // 추가하려는 todos 객체로 새로 생성
  const newTodos = {
    id: Date.now(),
    title,
    content,
    isDone: false,
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onClickHandler = async () => {
    try {
      mutation.mutate(newTodos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={onSubmitHandler}>
        <S.Label htmlFor="todo">할 일 :</S.Label>
        <S.Input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="todo"
        />
        <S.Label htmlFor="content">내용 :</S.Label>
        <S.Input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          id="content"
        />
        <S.SubmitButton
          onClick={() => {
            onClickHandler();
          }}
        >
          +
        </S.SubmitButton>
      </S.Form>

      <S.CardBox>
        <div>✨ Todo</div>
        <TodoCard isActive={false} />
        <div>💫 Complete !</div>
        <TodoCard isActive={true} />
      </S.CardBox>
    </S.Container>
  );
}

export default Form;
