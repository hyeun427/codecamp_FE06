import ProductDetailUI from "./ProductDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USED_ITEM, USED_ITEM_PICK } from "./ProductDetail.queries";
import { Modal } from "antd";

export default function ProductDetail() {
  const router = useRouter();

  // 상품 데이터 불러오기
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productsId },
  });

  // 상품 찜하기
  const [toggleUseditemPick] = useMutation(USED_ITEM_PICK);

  // 찜하기 버튼 누를 때
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.productsId) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(router.query.productsId) },
          },
        ],
      });
    } catch (error) {
      setAccessToken;
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

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
      onClickPick={onClickPick}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
