// 게시물 등록 및 수정 프리젠터
import { EnvironmentTwoTone } from "@ant-design/icons";
import * as S from "./ProductWrite.style";
import { IProductWriteUIProps } from "./ProductWrite.types";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Wrapper>
        <S.Title>상품 등록</S.Title>
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.ProductName
            type="text"
            placeholder="상품명을 작성해주세요."
            {...props.register("productName")}
          />
          <S.Error>{props.formState.errors.productName?.message}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>한줄요약</S.Label>
          <S.ProductDetail
            type="text"
            placeholder="상품에 대해 간단히 작성해주세요."
            {...props.register("productDetail")}
          />
          <S.Error>{props.formState.errors.productDetail?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          <S.ReactQuillWrapper>
            <props.ReactQuill
              onChange={props.onChangeContents}
              // style={{ height: 320 }}
            />
          </S.ReactQuillWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <S.Price
            type="text"
            placeholder="판매 가격을 입력해주세요."
            {...props.register("price")}
          />
          <S.Error>{props.formState.errors.price?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>태그입력</S.Label>
          <S.Tag
            type="text"
            placeholder="#태그 #태그 #태그"
            {...props.register("tag")}
          />
          <S.Error>{props.formState.errors.tag?.message}</S.Error>
        </S.InputWrapper>

        <S.MapWrapper>
          <S.MapInnerLeft>
            <S.Label>거래위치</S.Label>
            <div>카카오 맵 들어가야해~~~~~~~~~~~~~~~~~~~~</div>
            {/* <div>
              <div id="map" style={{ width: 384, height: 252 }}></div>
            </div> */}
          </S.MapInnerLeft>
          <S.MapInnerRight>
            <S.RightUp>
              <S.Label>GPS</S.Label>
              <S.RightInner>
                <S.Location>위도(LAT)</S.Location>
                <S.SpotImg>
                  <EnvironmentTwoTone />
                </S.SpotImg>
                <S.Location>경도(LNG)</S.Location>
              </S.RightInner>
            </S.RightUp>
            <S.RightDown>
              <S.Label>주소</S.Label>
              <S.AddressDetail>상세</S.AddressDetail>
              <S.AddressDetail>상세</S.AddressDetail>
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
          <S.RadioWrapper>
            <S.RadioButton type="radio"></S.RadioButton>
            <S.ImgSelect>사진 1</S.ImgSelect>
            <S.RadioButton type="radio"></S.RadioButton>
            <S.ImgSelect>사진 2</S.ImgSelect>
          </S.RadioWrapper>
        </S.ImgSelectWrapper>

        <S.ButtonWrapper>
          <S.SubmitButton>등록하기</S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
