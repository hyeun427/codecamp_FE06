import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS); //fetchBoard에서 data가져오기

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new"); // 클릭하면 등록하기 페이지로 연결
  };

  // 왜 갑자기 연결이 안되느냐?!?!??!?!?!?!?1!!!!1
  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  }; // 클릭하면 상품상세화면으로 연결

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
