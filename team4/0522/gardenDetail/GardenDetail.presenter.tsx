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
          <S.GardenListBox key={props.data?.fetchBoard.id}>
            <S.WriterInfoBox>
              <S.WriterProfile />
              <S.WriterInfo>
                <S.NameRow>
                  <S.WriterName>
                    {props.data?.fetchBoard.writer.name}
                  </S.WriterName>
                </S.NameRow>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard.createdAt)}
                </S.CreatedAt>
              </S.WriterInfo>
            </S.WriterInfoBox>
            <S.ContentsBox>
              <S.Contents>{props.data?.fetchBoard.content}</S.Contents>
              {/* 번역API 버튼 자리? */}
              {/* <S.ContentsTranslateBox>
                <S.ContentsTranslate>번역한 내용</S.ContentsTranslate>
              </S.ContentsTranslateBox> */}
              <S.ContentsImg />
            </S.ContentsBox>
          </S.GardenListBox>
        </S.Wrapper>
      </S.GardenWrapper>
    </>
  );
}
