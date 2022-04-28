import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  // 목록으로 가기
  const onClickMoveToList = () => {
    router.push("/products");
  };

  // 수정하기
  const onClickMoveToEdit = () => {
    router.push(`/products/${router.query.productsId}/edit`);
  };

  return (
    <ProductDetailUI
      data={data?.fetchUseditem}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
