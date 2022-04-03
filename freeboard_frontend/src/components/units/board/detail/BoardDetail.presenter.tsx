import * as DS from "./BoardDetail.style";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";

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
            <DS.Share src="/img/share.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <DS.Spot src="/img/spot.png" />
            </Tooltip>
          </DS.IconWrapper>
        </DS.ProfileWrapper>

        <DS.ContentWrapper>
          <DS.Title>{props.data?.fetchBoard.title}</DS.Title>
          <DS.Content>{props.data?.fetchBoard.contents}</DS.Content>
          {/* 유튜브 영상 출력 */}
          {props.data?.fetchBoard.youtubeUrl && (
            <DS.Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width="486px"
              height="240px"
            />
          )}
          <DS.LikeWrapper>
            {/* 좋아요,싫어요 구현 */}
            <DS.IconWrapper>
              <DS.LikeIcon onClick={props.onClickLike} />
              <DS.LikeCount>{props.data?.fetchBoard.likeCount}</DS.LikeCount>
            </DS.IconWrapper>
            <DS.IconWrapper>
              <DS.DislikeIcon onClick={props.onClickDislike} />
              <DS.DislikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </DS.DislikeCount>
            </DS.IconWrapper>
          </DS.LikeWrapper>
        </DS.ContentWrapper>
      </DS.Wrapper>

      <DS.ButtonWrapper>
        <DS.Button onClick={props.onClickMoveToBoardList}>목록으로</DS.Button>
        <DS.Button onClick={props.onClickMoveToBoardEdit}>수정하기</DS.Button>
        <DS.Button onClick={props.onClickDeleteBoard}>삭제하기</DS.Button>
      </DS.ButtonWrapper>
    </DS.OutWrapper>
  );
}
