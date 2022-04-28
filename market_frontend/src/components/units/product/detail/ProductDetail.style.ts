import styled from "@emotion/styled";

export const OutWrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  // border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Photo = styled.div`
  margin-right: 10px;
`;

export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const Date = styled.div`
  color: #828282;
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const Share = styled.img`
  height: 13px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

// export const Tooltip = styled.div``;

export const Spot = styled.img`
  width: 25px;
`;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.div`
  padding-top: 80px;

  // 완성 후 삭제하기
  background-color: lightblue;
`;

export const ProductName = styled.div``;

export const Pick = styled.div``;

export const Price = styled.div`
  // 완성 후 삭제하기
  background-color: lightcoral;
`;

export const Image = styled.div`
  // 완성 후 삭제하기
  background-color: lightpink;
`;

export const Contents = styled.div`
  // 완성 후 삭제하기
  background-color: lightgreen;
`;

export const Tag = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
`;

export const Map = styled.div`
  width: 100%;
  height: 360px;

  // 완성 후 삭제하기
  background-color: lightcyan;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: purple;
    color: white;
  }
`;
