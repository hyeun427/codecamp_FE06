import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 80px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 0px 0px;
  margin-bottom: 30px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

////////////input 4개 css설정이 동일함. 완성 후까지 동일하다면 하나로 만들기
export const ProductName = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
`;

export const ProductDetail = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
`;

export const ReactQuillWrapper = styled.div`
  background-color: pink;
`;

export const Price = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
`;

export const Tag = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
`;

///////////////////////////////
export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const MapInnerLeft = styled.div`
  margin-right: 24px;
  // 완성 후 삭제
  background-color: lightcoral;
`;

export const MapInnerRight = styled.div`
  width: 588px;
`;

export const RightUp = styled.div`
  margin-bottom: 24px;
`;

export const RightInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 272px;
`;

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const SpotImg = styled.div``;

export const RightDown = styled.div``;

export const AddressDetail = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: 16px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div``;

export const Image = styled.button`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const ImgSelectWrapper = styled.div`
  margin: 40px 0px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const RadioButton = styled.input`
  margin-right: 14px;
`;
export const ImgSelect = styled.div`
  margin-right: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;
