import React, { useState } from "react";
import * as S from "../styles/FormStyle";
import Card from "./Card";
function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const useSelector = useSelector();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(content);
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
            console.log(e.target.value);
          }}
        >
          +
        </S.SubmitButton>
      </S.Form>

      <S.CardBox>
        <div>✨ Todo</div>
        <Card />
        <div>💫 Complete !</div>
        <Card />
      </S.CardBox>
    </S.Container>
  );
}

export default Form;
