import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as S from "../styles/FormStyle";
import TodoCard from "./TodoCard";
import uuid from "react-uuid";
import { getTodo } from "../redux/modules/todosSlice";
import axios from "axios";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  useEffect(() => {
    // 처음 마운트 되었을 때 데이터 호출
    fetchTodos();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const onClickHandler = async (e) => {
    try {
      const newTodos = {
        id: uuid(),
        title,
        content,
        isDone: false,
      };
      await axios.post("http://localhost:4000/todos", newTodos);
      fetchTodos();
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
          onClick={(e) => {
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
