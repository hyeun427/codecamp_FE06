import { useState } from "react";

const FETCH_BOARDS = gql`
	query fetchBoards($page: Int) {
		fetchBoards(page: $page) {
			
		}
	}
`;

export default function PaginationUI() {
  const [startPage, setStartPage] = useState(1);

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  return (
    <div>
      <Page onClick={onClickPrevPage}>{"<"}</Page>
      <Page></Page>
      <Page>{">"}</Page>
    </div>
  );
}
