import * as S from "./ProductDetail.style";
import { getDate } from "../../../../commons/libraries/utils";
// import { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";

export default function ProductDetailUI(props) {
  return (
    <S.OutWrapper>
      {/* 프로필, 날짜, 위치 부분 */}
      <S.Header>
        <S.ProfileWrapper>
          <S.Profile>
            <S.Photo>프로필이미지</S.Photo>

            <S.ProfileDetail>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.Date>{getDate(props.data?.fetchBoard?.createdAt)}</S.Date>
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
        <S.Image>슬라이더로 이미지 가져와야하나</S.Image>
        <S.Contents>{props.data?.fetchUseditem.contents}</S.Contents>
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
