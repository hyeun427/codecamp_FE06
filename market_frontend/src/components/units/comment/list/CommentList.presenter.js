// 마켓 댓글 목록 프레젠터
import MarketCommentListItemUI from "./CommentList.presenterItem";
import * as S from "./CommentList.styles";

const MarketCommentListUI = (props) => {
  return (
    <S.Wrapper>
      {props.data?.fetchUseditemQuestions.map(
        (el) =>
          (
            <MarketCommentListItemUI
              key={el._id}
              el={el}
              id={el._id}
              data={props.data}
            />
          ) || <div></div>
      )}
    </S.Wrapper>
  );
};
export default MarketCommentListUI;
