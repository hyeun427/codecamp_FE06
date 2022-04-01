import * as DS from "./BoardDetail.style";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <DS.OutWrapper>
      <DS.Wrapper>
        <DS.ProfileWrapper>
          <DS.Profile>
            <DS.Photo src="/img/profile.png" />
            <DS.ProfileDetail>
              <DS.Writer>{props.data?.fetchBoard?.writer}</DS.Writer>
              <DS.Date>{getDate(props.data?.fetchBoard?.createdAt)}</DS.Date>
            </DS.ProfileDetail>
          </DS.Profile>
          <DS.IconWrapper>
            <DS.Share src="/img/share.png"></DS.Share>
            <DS.Spot src="/img/spot.png" />
          </DS.IconWrapper>
        </DS.ProfileWrapper>
        <DS.ContentWrapper>
          <DS.Title>{props.data?.fetchBoard.title}</DS.Title>
          <DS.ContentImage>{props.data?.fetchBoard.images}</DS.ContentImage>
          <DS.Content>{props.data?.fetchBoard.contents}</DS.Content>
        </DS.ContentWrapper>
        <DS.YoutubeWrapper>
          <DS.Youtube>{props.data?.fetchBoard.youtubeUrl}</DS.Youtube>
        </DS.YoutubeWrapper>
        <DS.LikeWrapper>
          {/* 좋아요,싫어요 구현 */}
          <DS.InnerWrapper>
            <DS.LikeIcon />
            <DS.LikeCount>1920</DS.LikeCount>
          </DS.InnerWrapper>
          <DS.InnerWrapper>
            <DS.DislikeIcon />
            <DS.DislikeCount>1920</DS.DislikeCount>
          </DS.InnerWrapper>
        </DS.LikeWrapper>
      </DS.Wrapper>

      <DS.ButtonWrapper>
        <DS.Button onClick={props.onClickMoveToBoardList}>목록으로</DS.Button>
        <DS.Button onClick={props.onClickMoveToBoardEdit}>수정하기</DS.Button>
        <DS.Button onClick={props.onClickDeleteBoard}>삭제하기</DS.Button>
      </DS.ButtonWrapper>
    </DS.OutWrapper>
  );
}
