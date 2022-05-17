import Uploads01 from "../uploads/01/Uploads01.container";
import * as S from "./CommunityWrite.styles";

export default function CommunityListUI() {
  return (
    <S.OutWrapper>
      {/* 페이지 헤더 */}
      <S.Wrapper>
        <S.Header>Community</S.Header>
        <S.Body>
          {/* 제목 */}
          <S.TitleWrapper>
            <S.Label>제목</S.Label>
            <S.TitleInput></S.TitleInput>
          </S.TitleWrapper>
          {/* 내용 */}
          <S.ReactQuillWrapper>{/* 에디터 자리 */}</S.ReactQuillWrapper>
          {/* 사진 */}
          <S.ImgWrapper>
            <S.Label>사진 첨부</S.Label>
            <S.Img>Upload</S.Img>
            {/* {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))} */}
          </S.ImgWrapper>
        </S.Body>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
