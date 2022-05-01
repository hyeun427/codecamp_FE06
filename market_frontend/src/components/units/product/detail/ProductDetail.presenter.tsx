import * as S from "./ProductDetail.style";
import { getDate } from "../../../../commons/libraries/utils";
import { Tooltip } from "antd";
import { IProductDetaulUIProps } from "./ProductDetail.types";
import Dompurify from "dompurify";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

export default function ProductDetailUI(props: IProductDetaulUIProps) {
  // 이미지 슬라이더
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.OutWrapper>
      {/* 프로필, 날짜, 위치 부분 */}
      <S.Header>
        <S.ProfileWrapper>
          <S.Profile>
            <S.Photo src="/ProductDetail/profile.png" />

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
        {/* 상품명, 찜하기 */}
        <S.Title>
          <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
          <S.PickWrapper>
            <S.PickIcon src="/ProductDetail/pick.png" />
            {/* <S.PickIcon onClick={onClickPick} /> */}
            <S.Pick>{props.data?.fetchUseditem.pickedCount}</S.Pick>
          </S.PickWrapper>
        </S.Title>

        {/* 상품 가격 */}
        <S.Price>
          {props.data?.fetchUseditem.price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </S.Price>

        {/* 이미지 슬라이더 */}
        {props.data?.fetchUseditem?.images[0] ? (
          <S.SliderWrapper>
            <Slider {...settings}>
              {props.data?.fetchUseditem.images.map((el, index) => (
                <S.SliderItem key={uuidv4()}>
                  <S.SliderImg
                    hidden={!props.data?.fetchUseditem.images[index]}
                    src={
                      el?.startsWith("https", 0)
                        ? el
                        : `https://storage.googleapis.com/${el}`
                    }
                  />
                </S.SliderItem>
              ))}
            </Slider>
          </S.SliderWrapper>
        ) : (
          ""
        )}

        {/* 에디터 상품 내용 */}
        {typeof window !== "undefined" ? (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          ></S.Contents>
        ) : (
          ""
        )}

        {/* 태그 */}
        <S.TagWrapper>
          {props.data?.fetchUseditem.tags
            ? props.data?.fetchUseditem.tags.map((el) => (
                <S.Tag key={uuidv4()}>{el}</S.Tag>
              ))
            : ""}
        </S.TagWrapper>

        {/* 지도 */}
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
