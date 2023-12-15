import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 13px;
  line-height: 50px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  padding: 6px;
  width: 36%;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #fff;
  font-size: 20px;
  font-family: "PyeongChangPeace-Bold";

  &:focus {
    outline: 2px solid white;
  }
`;
export const SubmitButton = styled.button`
  all: unset;
  font-weight: bolder;
  font-size: 50px;
  border: 1px solid #000;
  padding: 10px;
  color: #faeb61;

  &:hover {
    cursor: pointer;
    transform: rotate(30deg);
  }
`;

export const Label = styled.label`
  font-size: 20px;
  color: #fff;
  font-weight: bolder;
`;

export const CardBox = styled.div`
  /* background-color: #faeb61; */
  width: 80%;
  /* margin: 0 auto; */
  height: 90%;
`;
