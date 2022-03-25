import styled from "@emotion/styled";

// OutWrapper는 아래 댓글 창까지 만들 때 수정/삭제 할 것.
export const OutWrapper = styled.div`
  width: 1200px;
  padding-bottom: 87px;

  //완성 후 삭제 할 것
  margin: 100px 0px 0px 100px;
  border-bottom: 1px solid #bdbdbd;
`;

export const Wrapper = styled.div`
  width: 1200px;
  padding: 80px 102px;
  box-shadow: 0px 4px 20px;
`;
export const ProfileWrapper = styled.div`
  width: 996px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Photo = styled.img`
  height: 46.67px;
  width: 46.67px;
  margin-right: 16px;
`;
export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Writer = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
`;
export const Date = styled.div`
  width: 126px;
  height: 24px;
  color: #828282;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Share = styled.img`
  height: 13px;
  margin-right: 29px;
`;
export const Spot = styled.img`
  width: 22px;
`;
export const ContentWrapper = styled.div`
  padding-top: 80px;
`;
export const Title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
`;
export const ContentImage = styled.div`
  padding-top: 40px;
  width: 996px;
  height: 480px;
`;
export const Content = styled.div`
  padding-top: 40px;
  width: 996px;
  height: 96px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const YoutubeWrapper = styled.div`
  padding: 120px 255px;
`;
export const Youtube = styled.iframe`
  width: 486px;
  height: 240px;
  // filter는 뭐지??
  // filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
`;
export const LikeWrapper = styled.div`
  width: 100%;
  height: 51px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
export const ThumbsButton = styled.img`
  height: 25px;
`;
export const LikeCount = styled.div`
  width: 40px;
  height: 27px;
  color: #ffd600; ;
`;
export const DislikeCount = styled.div`
  width: 40px;
  height: 27px;
  color: #828282;
`;

export const ButtonWrapper = styled.div`
  width: 585px;
  //height: 45px;
  margin-left: 305px;
  padding-top: 101px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.button`
  width: 179px;
  height: 45px;
  cursor: pointer;
`;
