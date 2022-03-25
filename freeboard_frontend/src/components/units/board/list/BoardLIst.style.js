import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;

  margin-top: 50px;
  background-color: skyblue;
`;
export const SearchWrapper = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
`;

export const SearchBarWrapper = styled.div`
  /* display: flex; */
  padding: 14px 19px;
  width: 776px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;
export const ScopeImage = styled.img``;
export const SearchBar = styled.input`
  margin-left: 11px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  color: black;
  background-color: #f2f2f2;
  cursor: pointer;
`;
export const SearchDateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 42px;
  width: 244px;
  height: 100%;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
`;
export const SearchDate = styled.button`
  width: 93px;
  height: 24px;
  margin-left: 8px;
  margin-right: 8px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;
export const SearchDateWave = styled.div`
  width: 10px;
  height: 24px;
  background-color: #ffffff;
`;
export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background: #000000;
  border-radius: 10px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  // hover했을 때 색상 원하는대로 바꾸기
  /* :hover {
    color: blue;
  } */
`;
export const ColumnNumber = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
`;
export const ColumnWriter = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnDate = styled.div`
  width: 10%;
  text-align: center;
`;
