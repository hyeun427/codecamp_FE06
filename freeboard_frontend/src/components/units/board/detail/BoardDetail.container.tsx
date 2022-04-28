import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  // 좋아요
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  // 싫어요
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  // 삭제하기
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
  );

  // 목록으로 버튼 연결
  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  // 수정하기 버튼 연결
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  // 게시글 삭제하기
  const onClickDeleteBoard = () => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    router.push("/boards");
    alert("게시글이 삭제되었습니다!");
  };

  // 좋아요 버튼 눌렀을 때 리패치되는 과정, 리패치쿼리스 안쪽 코드 명확히 이해할 것
  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };
  // 싫어요 버튼 왜 안되지 왜 갑자기 되지
  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
