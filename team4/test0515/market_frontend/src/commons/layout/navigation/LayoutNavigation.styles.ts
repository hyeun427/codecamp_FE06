import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  background-color: #5729ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.button`
  margin: 0px 60px;
  cursor: pointer;
  background-color: #5729ff;
  border: none;
  :hover {
    color: pink;
  }
`;
