// 상품목록 프리젠터
import * as S from "./ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";
import BestContents from "../../best/bestcontents.container";

export default function ProductListUI(props) {
  return (
    <S.Wrapper>
      <S.ProductListWrapper>
        {/* 상품리스트 위 타이틀 */}
        <S.BestTitle>베스트 상품</S.BestTitle>
        <S.BestListWrapper>
          <BestContents />
          {/* <S.BestItemWrapper>
            <S.BestItem>베스트1</S.BestItem>
            <S.BestItem>베스트2</S.BestItem>
            <S.BestItem>베스트3</S.BestItem>
          </S.BestItemWrapper> */}
        </S.BestListWrapper>
        <S.ListMenuWrapper>
          <S.ChoiceShow>
            <S.Selling>판매중 상품</S.Selling>
            <S.Soldout>판매된 상품</S.Soldout>
            <S.MoveToNewItem onClick={props.onClickNewItem}>
              상품 등록
            </S.MoveToNewItem>
          </S.ChoiceShow>
          <S.SearchWrapper>
            <S.SearchBox>
              <S.SearchImg src="/main/search.png" />
              <S.SearchInput />
            </S.SearchBox>
            <S.SearchDate>날짜 선택</S.SearchDate>
            <S.SearchButton>검색</S.SearchButton>
          </S.SearchWrapper>
        </S.ListMenuWrapper>
        <div
          style={{
            width: "100%",
            height: "800px",
            overflow: "auto",
            padding: "20px",
          }}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            <S.ItemListWrapper>
              {props.data?.fetchUseditems.map((el: any) => (
                <S.ItemListRow key={el._id}>
                  <S.ItemInfo>
                    {el.images[0] ? (
                      <>
                        <S.ItemPicture
                          src={`https://storage.googleapis.com/${el.images[0]}`}
                        />
                      </>
                    ) : (
                      <S.ItemPicture src="/ProductDetail/no-img.png" />
                    )}
                    <S.ItemListDetail>
                      <S.ItemListDetailName
                        id={el._id}
                        onClick={props.onClickMoveDetail(el)}
                      >
                        {el.name}
                      </S.ItemListDetailName>
                      <S.ItemListDetailRemarks>
                        {el.remarks}
                      </S.ItemListDetailRemarks>
                      <S.ItemListDetailTags>{el.tags}</S.ItemListDetailTags>
                      <S.ItemListDetailBottom>
                        <S.ItemListDetailSellerIcon src="/main/profile.png" />
                        <S.ItemListDetailSeller>
                          {el.seller.name}
                        </S.ItemListDetailSeller>
                        <S.ItemListDetailPickedIcon src="/main/pick.png" />
                        <S.ItemListDetailPickedCount>
                          {el.pickedCount}
                        </S.ItemListDetailPickedCount>
                      </S.ItemListDetailBottom>
                    </S.ItemListDetail>
                  </S.ItemInfo>
                  <S.ItemListPrice>
                    <S.WonIcon src="/main/won.png" />
                    {`${el.price}원`}
                  </S.ItemListPrice>
                </S.ItemListRow>
              ))}
            </S.ItemListWrapper>
          </InfiniteScroll>
        </div>
      </S.ProductListWrapper>
      <S.TodayListWrapper></S.TodayListWrapper>
    </S.Wrapper>
  );
}
