import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 20px;
  color: white;
  border: 1px solid yellow;
  width: 400px;
  height: 200px;
`;

export const CardTitle = styled.p`
  font-size: 26px;
`;

export const CardContent = styled.p`
  margin-top: 20px;
  font-size: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
export const CompleteButton = styled.button`
  all: unset;
  position: absolute;
  color: white;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    color: #faeb61;
  }
`;

export const DeleteButton = styled.button`
  all: unset;
  position: absolute;
  color: white;
  top: 0;
  right: 0;
  margin-right: 20px;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;
