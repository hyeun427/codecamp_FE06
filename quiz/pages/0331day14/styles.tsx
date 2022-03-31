import styled from "@emotion/styled";

export const Pages = styled.span`
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: ${(props) => (props.current === true ? "violet" : "black")};
`;

export const Arrow = styled.span`
  cursor: pointer;
  color: ${(props) => (props.isActive === true ? "black" : "gray")};
  :disabled= {
    ${(props) => props.isActive === false};
  }
`;
