import * as S from "./ProductList.style";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import Today from "../../today/today.container";

export default function ProductListUI(props) {
  const Infinite = styled(InfiniteScroll)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  return (
    <S.Wrapper>
      <Infinite
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        {props.data?.fetchUseditems.map((el) => (
          <S.ProductsWrapper
            key={uuidv4()}
            id={el._id}
            onClick={props.onClickProduct}
            style={{ width: "210px", height: "270px" }}
          >
            <S.ImgWrapper>
              {el.images[0] ? (
                <>
                  <S.Img
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    alt="상품이미지"
                  />
                </>
              ) : (
                <S.Img src="/ProductDetail/no-img.png" />
              )}
            </S.ImgWrapper>

            <S.ProductWrapper>
              <S.ProductName>{el.name}</S.ProductName>
              <S.Price>{el.price}</S.Price>
            </S.ProductWrapper>
          </S.ProductsWrapper>
        )) || <div></div>}
      </Infinite>
      <Today />
    </S.Wrapper>
  );
}
