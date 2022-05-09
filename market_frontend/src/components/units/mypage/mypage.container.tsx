import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import MyPageUI from "./mypage.presenter";
import { FETCH_USER_LOGGED_IN } from "./mypage.queries";

export default function MyPageContainer() {
  // 로그인 관련 쿼리
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 장바구니 보여주기
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return <MyPageUI data={data} basketItems={basketItems} />;
}
