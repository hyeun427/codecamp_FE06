// 게시물 등록 및 수정 프리젠터
import { EnvironmentTwoTone } from "@ant-design/icons";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./ProductWrite.style";
import { IProductWriteUIProps } from "./ProductWrite.types";
import { v4 as uuidv4 } from "uuid";
import KakaoMap01 from "../../../commons/kakaoMap/01";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickSubmit)
      }
    >
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>

        {/* 상품명 */}
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.ProductName
            type="text"
            placeholder="상품명을 작성해주세요."
            {...props.register("name")}
            defaultValue={props.data?.fetchUseditem.name || ""}
          />
          <S.Error>{props.formState.errors.name?.message}</S.Error>
        </S.InputWrapper>

        {/* 한줄요약 */}
        <S.InputWrapper>
          <S.Label>한줄요약</S.Label>
          <S.ProductDetail
            type="text"
            placeholder="상품에 대해 간단히 작성해주세요."
            {...props.register("remarks")}
            defaultValue={props.data1?.fetchUseditem.remarks || ""}
          />
          <S.Error>{props.formState.errors.remarks?.message}</S.Error>
        </S.InputWrapper>

        {/* 상품설명 */}
        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          <S.ReactQuillWrapper>
            <props.ReactQuill
              onChange={props.onChangeContents}
              style={{ height: 320 }}
              id="contents"
              placeholder="상품을 설명해주세요."
              defaultValue={props.data1?.fetchUseditem.contents}
            />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
          </S.ReactQuillWrapper>
        </S.InputWrapper>

        {/* 가격 */}
        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <S.Price
            type="text"
            placeholder="판매 가격을 입력해주세요."
            {...props.register("price")}
            // defaultValue={Number(props.data1?.fetchUseditem.price)}
          />
          <S.Error>{props.formState.errors.price?.message}</S.Error>
        </S.InputWrapper>

        {/* 태그 */}
        <S.InputWrapper>
          <S.Label>태그입력</S.Label>
          <span>
            {props.hashArr.map((el, idx) => (
              <span key={idx}>{el}</span>
            ))}
          </span>
          <S.Tag
            type="text"
            placeholder="#태그 #태그 #태그"
            {...props.register("tags")}
            onKeyUp={props.onKeyUpHash}
            defaultValue={props.data1?.fetchUseditem.tags || ""}
          />
          <S.Error>{props.formState.errors.tags?.message}</S.Error>
        </S.InputWrapper>

        {/* 지도 */}
        <S.MapWrapper>
          <S.MapLeftWrapper>
            <S.Label>거래위치</S.Label>
            <KakaoMap01
              address={
                props.address
                  ? props.address
                  : props.data?.fetchUseditem.useditemAddress.address || ""
              }
              setGps={props?.setGps}
            />
          </S.MapLeftWrapper>
          <S.MapRightWrapper>
            <S.Label>GPS</S.Label>
            <S.MapDetailWrapper>
              <S.MapDetailWrapperHead>
                <S.AddressNumber
                  value={
                    props.zipcode
                      ? props.zipcode
                      : props.data?.fetchUseditem.useditemAddress?.zipcode
                  }
                  readOnly={true}
                />
                <S.AddressSearch onClick={props.onClickModal}>
                  우편번호 검색
                </S.AddressSearch>
                {props.isOpen && (
                  <Modal
                    visible={true}
                    title={"우편번호 검색"}
                    onOk={props.onClickModal}
                    onCancel={props.onClickModal}
                  >
                    <DaumPostcode onComplete={props.onClickPostCode} />
                  </Modal>
                )}
              </S.MapDetailWrapperHead>
              <S.MapDetailWrapperBottom>
                {/* <S.LocationDetail>
                  <S.Lat
                    placeholder="위도(LAT)"
                    readOnly={true}
                    value={
                      props.lat ||
                      props.data?.fetchUseditem.useditemAddress?.lat ||
                      ""
                    }
                  />
                  <EnvironmentTwoTone />
                  <S.Lng
                    placeholder="경도(LNG)"
                    readOnly={true}
                    value={
                      props.lng ||
                      props.data?.fetchUseditem.useditemAddress?.lng ||
                      ""
                    }
                  />
                </S.LocationDetail> */}
                <S.MapDetailAddress
                  readOnly={true}
                  value={
                    props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address ||
                    ""
                  }
                />
                <S.MapDetailAddress
                  placeholder="상세 주소를 입력하세요"
                  onChange={props.onChangeAddressDetail}
                  value={
                    props.addressDetail ||
                    props.data?.fetchUseditem.useditemAddress?.addressDetail ||
                    ""
                  }
                />
              </S.MapDetailWrapperBottom>
            </S.MapDetailWrapper>
          </S.MapRightWrapper>
        </S.MapWrapper>

        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
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
          <S.SubmitButton>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
