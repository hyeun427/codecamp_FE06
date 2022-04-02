import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

// OutWrapper는 아래 댓글 창까지 만들 때 수정/삭제 할 것.
export const OutWrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const Wrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
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
export const Writer = styled.div`
  /* font-style: normal;
  font-weight: 500;
  font-size: 24px; */
`;

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

export const Spot = styled.img`
  width: 25px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.div`
  /* font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px; */
  padding-top: 80px;
`;

export const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;
export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ffd600;
  margin: 0px 20px;
  cursor: pointer;
`;
export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  color: #ffd600; ;
`;
export const DislikeCount = styled.div`
  color: #828282;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;
