// 게시물 등록 및 수정 프리젠터
import * as S from "./ProductWrite.style";
import { IBoardWriteUIProps } from "./ProductWrite.types";
import { Modal } from "antd";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.ProductName placeholder="상품명을 작성해주세요."></S.ProductName>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>한줄요약</S.Label>
          <S.ProductDetail placeholder="상품명을 작성해주세요."></S.ProductDetail>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          <S.Editor>에디터가 들어가야해~~~~~</S.Editor>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <S.Price placeholder="판매 가격을 입력해주세요."></S.Price>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>태그입력</S.Label>
          <S.Tag placeholder="#태그 #태그 #태그"></S.Tag>
        </S.InputWrapper>

        <S.MapWrapper>
          <S.MapInnerLeft>
            <S.Label>거래위치</S.Label>
            <div>카카오 맵 들어가야해~~~~~~~~~~~~~~~~~~~~</div>
          </S.MapInnerLeft>
          <S.MapInnerRight>
            <S.RightUp>
              <S.Label>GPS</S.Label>
              <S.Location>위도(LAT)</S.Location>
              <S.Label></S.Label>
              <S.Location>경도(LNG)</S.Location>
            </S.RightUp>
            <S.RightDown>
              <S.Address>주소</S.Address>
              <S.AddressDetail></S.AddressDetail>
              <S.AddressDetail></S.AddressDetail>
            </S.RightDown>
          </S.MapInnerRight>
        </S.MapWrapper>
        <S.ImageWrapper>
          <S.Label>사진 첨부</S.Label>
          <S.Image>Upload</S.Image>
          <S.Image>Upload</S.Image>
        </S.ImageWrapper>
        <S.ImgSelectWrapper>
          <S.Label>메인 사진 설정</S.Label>
          <S.ImgSelect>사진 1</S.ImgSelect>
          <S.ImgSelect>사진 2</S.ImgSelect>
        </S.ImgSelectWrapper>
      </S.Wrapper>
    </>
  );
}
