import { Page } from "./pagination.styles";

export default function PaginationUI() {
  return (
    <div>
      <Page onClick={onClickPrevPage}>{"<"}</Page>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <Page
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {index + startPage}
          </Page>
        ) : (
          <Page></Page>
        )
      )}
      <Page onClick={onClickNextPage}>{">"}</Page>
    </div>
  );
}
