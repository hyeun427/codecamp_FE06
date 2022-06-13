import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import GardenListUI from "./GardenDetail.presenter";
import { FETCH_BOARD } from "./GardenDetail.queries";
import { SAVE_BOARD } from "../../commons/queries";
import { IBoard } from "../../../commons/types/generated/types";
import { LIKE_BOARD } from "./GardenDetail.queries";
import { useRouter } from "next/router";

export default function GardenDetail() {
  const router = useRouter();
  // 글 가져오기
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const [saveGarden] = useMutation(SAVE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);

  const [commentListVal, setCommentListVal] = useState([false]);

  // 댓글 펼치기
  const onClickCommentListBtn = (index) => (event) => {
    const newCommentOpen = [...commentListVal];
    newCommentOpen[index] = !commentListVal[index];
    setCommentListVal(newCommentOpen);
  };

  // 좋아요 클릭
  const onClickLikeBoard = async (event) => {
    console.log(event.currentTarget.id);
    try {
      await likeBoard({
        variables: {
          boardId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: event.target.id,
            },
          },
        ],
      });
      alert("좋아요!");
    } catch (error) {
      alert(error);
    }
  };

  // 저장하기 버튼 클릭 함수
  const onClickSaved = async (data: IBoard) => {
    try {
      const result = await saveGarden({
        variables: {
          boardId: data.id,
          userId: data.writer.id,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <GardenListUI
      commentListVal={commentListVal}
      onClickCommentListBtn={onClickCommentListBtn}
      data={data}
      onClickSaved={onClickSaved}
      onClickLikeBoard={onClickLikeBoard}
    />
  );
}
