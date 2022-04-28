import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { IProductDetaulUIProps } from "./ProductDetail.types";

export default function ProductDetail(props: IProductDetaulUIProps) {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM);

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
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
