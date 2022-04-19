import styled from "@emotion/styled";

export const Table = styled.div`
  width: 100%;
  border: 1px solid pink;
`;

export const Board = styled.div`
  margin: 5px;
`;

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  :hover {
    background-color: orange;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 3px solid blue;
  padding: 20px;
`;

export const Input = styled.input`
  border: 3px solid blue;
`;
export const Button = styled.div`
  width: 250px;
  margin: 20px 130px;
  text-align: center;
  border: 1px solid blue;
  background-color: lightblue;
`;
