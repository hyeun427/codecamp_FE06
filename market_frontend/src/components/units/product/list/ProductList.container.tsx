import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();

  // 상품목록
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  // 무한스크롤
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 20) + 1 },
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

  // 상품클릭
  const onClickProduct = (event: any) => {
    if (event.target instanceof Element)
      router.push(`/products/${event.currentTarget.id}`);
  };

  return (
    <ProductListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickProduct={onClickProduct}
    />
  );
}
