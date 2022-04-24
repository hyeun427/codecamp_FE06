import * as S from "./ProductWrite.style";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IProductWrite } from "./ProductWrite.types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWrite() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("Contents", value === "<p><br></p>" ? "" : value);
    trigger("Contents");
  };

  const onClickSubmit = (data: IProductWrite) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <S.Wrapper>
        <S.Title>상품 등록</S.Title>
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.ProductName
            type="text"
            placeholder="상품명을 작성해주세요."
            {...register("ProductName")}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>한줄요약</S.Label>
          <S.ProductDetail
            type="text"
            placeholder="상품에 대해 간단히 작성해주세요."
            {...register("ProductDetail")}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          <ReactQuill onChange={onChangeContents} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <S.Price
            type="text"
            placeholder="판매 가격을 입력해주세요."
            {...register("Price")}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>태그입력</S.Label>
          <S.Tag
            type="text"
            placeholder="#태그 #태그 #태그"
            {...register("Tag")}
          />
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

        <button>등록하기</button>
      </S.Wrapper>
    </form>
  );
}
