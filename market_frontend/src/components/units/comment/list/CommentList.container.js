// 댓글목록 컨테이너

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketCommentListUI from "./CommentList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./CommentList.queries";

const MarketCommentList = () => {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.productsId) },
  });

  return <MarketCommentListUI data={data} fetchMore={fetchMore} />;
};
export default MarketCommentList;
