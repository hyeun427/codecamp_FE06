// 상품목록 컨테이너
import ProductListUI from "./ProductList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { watchListState } from "../../../../commons/store";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./ProductList.queries";

export default function ProductList() {
  // 최근 본 상품
  const [watchProduct, setWatchProduct] = useRecoilState(watchListState);
  // 상품목록
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const router = useRouter();
  // 베스트 상품 목록
  const { data: bestItemData } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  // 베스트 상품 사진 눌렀을 때 디테일 페이지로 이동
  const onClickBestItem = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${event.currentTarget.id}`);
  };

  // 등록하기 버튼
  const onClickNewItem = () => {
    router.push("/products/new");
  };

  // 제품 사진 눌렀을 때 디테일 페이지 이동
  const onClickMoveDetail =
    (el: any) => (event: MouseEvent<HTMLDivElement>) => {
      const watch = JSON.parse(localStorage.getItem("watch") || "[]");

      const { __typename, ...newEl } = el;
      watch.push(newEl);
      localStorage.setItem("watch", JSON.stringify(watch));
      setWatchProduct(watch.slice(watch.length - 3, watch.length));
      console.log(watchProduct);

      router.push(`/products/${event.currentTarget.id}`);
    };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ProductListUI
      data={data}
      fetchMore={fetchMore}
      onLoadMore={onLoadMore}
      onClickNewItem={onClickNewItem}
      onClickMoveDetail={onClickMoveDetail}
      // 베스트 상품
      bestItemData={bestItemData}
      onClickBestItem={onClickBestItem}
    />
  );
}
