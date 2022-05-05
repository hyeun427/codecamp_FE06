import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  // DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  USED_ITEM_PICK,
} from "./ProductDetail.queries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { basketstate } from "../../../../commons/store";
import { useRecoilState } from "recoil";

export default function ProductDetail() {
  const router = useRouter();

  // 상품 데이터 불러오기
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productsId },
  });

  // 상품 찜하기
  const [toggleUseditemPick] = useMutation(USED_ITEM_PICK);

  // // 상품 삭제하기
  // const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  // 로그인 정보 불러오기 쿼리
  const { data: data2 } = useQuery(FETCH_USER_LOGGED_IN);

  // 결제 관련 쿼리
  const [BuyPoint] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  // 장바구니
  const [basket1, setBasket1] = useRecoilState(basketstate);

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
      // setAccessToken;
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 장바구니 버튼 누를 때
  const onClickBasket = (el) => () => {
    // 1. 기본 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다");
      return;
    }
    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setBasket1(baskets);
    console.log(basket1);
    Modal.success({ content: "상품이 장바구니에 담겼습니다." });
  };

  // 바로 구매하기
  const onClickBuy = async () => {
    if (
      data2?.fetchUserLoggedIn.userPoint.amount >= data?.fetchUseditem.price
    ) {
      try {
        await BuyPoint({
          variables: { useritemId: router.query.productsId },
        });
        refetch();
        router.push("/products");
        alert("상품이 구매되었습니다.");
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("포인트를 충전해 주세요");
      router.push("/products");
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
      onClickBuy={onClickBuy}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickBasket={onClickBasket}
    />
  );
}
