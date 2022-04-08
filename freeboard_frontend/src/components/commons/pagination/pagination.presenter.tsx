import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function PaginationUI() {
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
