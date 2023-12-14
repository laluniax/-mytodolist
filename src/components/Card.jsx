import React from "react";
import * as S from "../styles/CardStyle";
function Card() {
  return (
    <div>
      <S.CardContainer>
        <S.CardTitle>카드 제목</S.CardTitle>
        <S.CardContent>카드 내용</S.CardContent>
        <S.CompleteButton>완료</S.CompleteButton>
        <S.DeleteButton>X</S.DeleteButton>
      </S.CardContainer>
    </div>
  );
}

export default Card;
