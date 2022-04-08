// 깃이 되나 안되나

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationUI() {
  const { data, refetch } = FETCH_BOARDS;
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.target.id) });
    event.target.id;
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>
        <LeftOutlined />
      </span>
      {new Array(10).fill(1).map((_, index) =>
        lastPage >= index + startPage ? (
          <span
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {index + startPage}
          </span>
        ) : (
          <span></span>
        )
      )}
      <span onClick={onClickNextPage}>
        <RightOutlined />
      </span>
    </div>
  );
}
