import InfiniteScroll from "react-infinite-scroller";
import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data.fetchBoardComments.map((el) => (
        // 댓글 하나하나를 의미. el={el}은 위의 작성한 댓글의 data를 의미함. el.writer, el._id 등등. key를 작성한 이유는 map이기 때문에 타입스크립트 에러에 걸리지 않도록 각각 고유값을 주기위함
        <BoardCommentListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
