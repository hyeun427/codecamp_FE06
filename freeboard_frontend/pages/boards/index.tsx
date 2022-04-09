// boards
// 게시물 목록 페이지

import { Pagination } from "antd";
import BoardList from "../../src/components/units/board/list/BoardList.container";

export default function BoardsPage() {
  return (
    <>
      <BoardList />
      <Pagination defaultCurrent={1} total={50} />
    </>
  );
}
