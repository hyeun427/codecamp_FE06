import { HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const OutWrapper = styled.div`
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

export const Photo = styled.img`
  margin-right: 10px;
`;

export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Seller = styled.div``;

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
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const ProductName = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #4f4f4f;
`;

export const PickWrapper = styled.div`
  text-align: center;
`;
export const PickIcon = styled.img`
  width: 90%;
  cursor: pointer;
`;
export const Pick = styled.div``;

export const Price = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 384px;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SliderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-color: #fff;
`;

export const SliderImg = styled.img`
  width: 296px;
  height: 296px;
  object-fit: contain;
`;

export const Contents = styled.p`
  width: 100%;
  height: auto;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const Tag = styled.div`
  margin-right: 20px;
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
