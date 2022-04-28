import * as S from "./ProductDetail.style";
import { getDate } from "../../../../commons/libraries/utils";
import { Tooltip } from "antd";
import { IProductDetaulUIProps } from "./ProductDetail.types";
import Dompurify from "dompurify";

export default function ProductDetailUI(props: IProductDetaulUIProps) {
  return (
    <S.OutWrapper>
      {/* 프로필, 날짜, 위치 부분 */}
      <S.Header>
        <S.ProfileWrapper>
          <S.Profile>
            <S.Photo>프로필이미지</S.Photo>

            <S.ProfileDetail>
              <S.Seller>{props.data?.fetchUseditem?.seller.name}</S.Seller>
              <S.Date>{getDate(props.data?.fetchUseditem?.createdAt)}</S.Date>
            </S.ProfileDetail>
          </S.Profile>

          <S.IconWrapper>
            <S.Share src="/ProductDetail/share.png" />
            <Tooltip placement="topRight" title={"주소야 나와랏"}>
              <S.Spot src="/ProductDetail/spot.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.ProfileWrapper>
      </S.Header>

      {/*상품 디테일 부분 */}
      <S.Body>
        <S.Title>
          <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
          <S.Pick>{props.data?.fetchUseditem.pickedCount}</S.Pick>
        </S.Title>
        <S.Price>{props.data?.fetchUseditem.price}</S.Price>
        <S.Images>{props.data?.fetchUseditem.images}</S.Images>
        {typeof window !== "undefined" && (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem?.contents),
            }}
            // style={{ height: 200 }}
          ></S.Contents>
        )}

        <S.Tag>{props.data?.fetchUseditem.tags}</S.Tag>
        <S.Map>지도 가져와야해</S.Map>
      </S.Body>

      {/* 버튼*/}
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickMoveToList}>목록</S.Button>
        <S.Button onClick={props.onClickMoveToEdit}>수정하기</S.Button>
        {/* <S.Button onClick={onClickDelete}>삭제하기</S.Button> */}
      </S.ButtonWrapper>
    </S.OutWrapper>
  );
}
