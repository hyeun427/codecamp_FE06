// 상품목록 컨테이너
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const router = useRouter();

  const onClickNewItem = () => {
    router.push("/products/new");
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/products/${event.target?.id}`);
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
      onLoadMore={onLoadMore}
      data={data}
      onClickNewItem={onClickNewItem}
      onClickMoveDetail={onClickMoveDetail}
    />
  );
}
