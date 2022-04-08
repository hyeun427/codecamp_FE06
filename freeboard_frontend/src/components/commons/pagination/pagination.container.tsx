import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import PaginationUI from "./pagination.presenter";

export default function Pagination(props) {
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
		<PaginationUI 
			startPage={startPage}
			lastPage={lastPage}
			onClickPage={onClickPage}
			onClickPrevPage={onClickPrevPage}
			onClickNextPage={onClickNextPage}
	)
}
