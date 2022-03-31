import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { Pages, Arrow } from "./styles";

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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: auto;
`;

export default function MapBoardPage() {
  const [isActive, setIsActive] = useState(true);
  const [current, setCurrent] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    setCurrent(Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return setIsActive(false);
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return setIsActive(false);
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <Arrow onClick={onClickPrevPage}>&lt;</Arrow>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <Pages
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
            current={startPage + index === current}
          >
            {`  `}
            {index + startPage}
          </Pages>
        ) : (
          <span></span>
        )
      )}
      <Arrow onClick={onClickNextPage} isActive={isActive}>
        &gt;
      </Arrow>
    </div>
  );
}
