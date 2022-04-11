import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  //fetchBoard에서 data가져오기
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
    >(FETCH_BOARDS);
  
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new"); // 클릭하면 등록하기 페이지로 연결
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  }; // 클릭하면 상품상세화면으로 연결

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
