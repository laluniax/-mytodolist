import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../styles/FormStyle";
import TodoCard from "./TodoCard";
import uuid from "react-uuid";
import { addTodo } from "../redux/modules/todosSlice";
function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClickHandler = (e) => {
    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
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
