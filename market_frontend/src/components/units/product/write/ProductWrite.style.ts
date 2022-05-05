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
  .ql-container {
    height: 280px;
  }
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

export const Error = styled.div`
  margin-top: 3px;
  padding-left: 10px;
  font-size: 12px;
  color: red;
`;

// 지도
export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const MapLeftWrapper = styled.div``;
export const MapRightWrapper = styled.div`
  margin-left: 20px;
`;

export const MapDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 588px;
`;

export const MapDetailWrapperHead = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const AddressNumber = styled.input`
  width: 85px;
  height: 40px;
  border: 1px solid #bdbdbd;
  padding-left: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const AddressSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: black;
  border: 0px;
  color: white;
  font-size: 13px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const MapDetailWrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LocationDetail = styled.div``;
export const Lat = styled.input`
  width: 95px;
  height: 42px;
  margin-right: 20px;
  margin-bottom: 20px;
  text-align: center;
`;
export const Lng = styled.input`
  width: 95px;
  height: 42px;
  margin-left: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const MapDetailAddress = styled.input`
  width: 100%;
  height: 42px;
  border: 0px;
  margin-top: 15px;
  padding-left: 10px;
  background-color: #e9e9e9;
`;

// 이미지
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
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background: #bdbdbd;
  :hover {
    background-color: purple;
    color: white;
  }
`;
