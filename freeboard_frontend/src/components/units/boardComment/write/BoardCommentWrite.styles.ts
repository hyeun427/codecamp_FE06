import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`;

export const PencilIcon = styled.img`
  margin-right: 14px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
`;
export const ContentsWrapper = styled.div`
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
`;
export const BottomWrapper = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: #bdbdbd;
`;
export const Button = styled.button`
  width: 91px;
  height: 51px;
  color: white;
  background-color: black;
  cursor: pointer;
`;

export const Star = styled(Rate)``;
