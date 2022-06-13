import GardenCommentList from "../garden/comment/list/GardenCommentList.container";
import GardenCommentWrite from "../garden/comment/write/GardenCommentWrite.container";
import * as S from "./GardenDetail.styles";
import { MdQuestionAnswer, MdThumbUp, MdBookmarkBorder } from "react-icons/md";
import { getDate } from "../../../commons/libraries/utils";
import { useQuery } from "@apollo/client";
import { FETCH_COMMENTS } from "../../commons/queries";

export default function GardenDetailUI(props: any) {
  return (
    <>
      <S.GardenWrapper>
        <S.Wrapper>
          <S.GardenListBox key={index}>
            <S.WriterInfoBox>
              <S.WriterProfile />
              <S.WriterInfo>
                <S.NameRow>
                  <S.WriterName>
                    {props.data?.fetchBoard.writer.name}
                  </S.WriterName>
                  <S.MdBookmarkBorder
                    size={"16"}
                    onClick={() => props.onClickSaved(el)}
                  />
                </S.NameRow>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard.createdAt)}
                </S.CreatedAt>
              </S.WriterInfo>
            </S.WriterInfoBox>
            <S.ContentsBox>
              <S.Contents>{props.data?.fetchBoard.content}</S.Contents>
              <S.ContentsTranslateBox>
                {/* 번역API 버튼 자리? */}
                <S.ContentsTranslate>번역한 내용</S.ContentsTranslate>
              </S.ContentsTranslateBox>
              <S.ContentsImg />
              <S.LikeAndCommentCountBox>
                {props.commentListVal[index] ? (
                  <S.CommentListBtn
                    onClick={props.onClickCommentListBtn(index)}
                    id={props.data?.fetchBoard.id}
                  >
                    close
                  </S.CommentListBtn>
                ) : (
                  <S.CommentListBtn
                    onClick={props.onClickCommentListBtn(index)}
                    id={props.data?.fetchBoard.id}
                  >
                    open
                  </S.CommentListBtn>
                )}

                <S.LikeAndCommentCount>
                  <S.Like>
                    <S.MdThumbUp
                      size={"13"}
                      onClick={props.onClickLikeBoard}
                      id={props.data?.fetchBoard.id}
                    />{" "}
                    {props.data?.fetchBoard.likes}
                  </S.Like>
                  {/* 해당 게시글의 댓글 갯수 */}
                  <S.CommentCount>
                    <S.MdQuestionAnswer size={"13"} /> 1
                  </S.CommentCount>
                </S.LikeAndCommentCount>
              </S.LikeAndCommentCountBox>
            </S.ContentsBox>
            <S.GardenCommentWrite boardId={props.data?.fetchBoard.id} />
            {props.commentListVal[index] ? (
              <S.GardenCommentList boardElId={props.data?.fetchBoard.id} />
            ) : (
              <S.div></S.div>
            )}
          </S.GardenListBox>
        </S.Wrapper>
      </S.GardenWrapper>
    </>
  );
}
