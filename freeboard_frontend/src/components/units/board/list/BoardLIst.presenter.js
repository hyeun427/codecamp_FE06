import * as LS from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <LS.Wrapper>
      <LS.TableTop />
      <LS.Row>
        <LS.ColumnHeaderBasic>ID</LS.ColumnHeaderBasic>
        <LS.ColumnHeaderTitle>제목</LS.ColumnHeaderTitle>
        <LS.ColumnHeaderBasic>작성자</LS.ColumnHeaderBasic>
        <LS.ColumnHeaderBasic>날짜</LS.ColumnHeaderBasic>
      </LS.Row>
      {props.data?.fetchBoards.map((el, index) => (
        <LS.Row key={el._id}>
          <LS.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </LS.ColumnBasic>
          {/* <input type="text" id="bbb" onClick={props.onClickMoveToBoardDetail}/> */}
          <LS.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </LS.ColumnTitle>
          <LS.ColumnBasic>{el.writer}</LS.ColumnBasic>
          <LS.ColumnBasic>{getDate(el.createdAt)}</LS.ColumnBasic>
        </LS.Row>
      ))}
      <LS.TableBottom />
      <LS.Footer>
        <LS.Button onClick={props.onClickMoveToBoardNew}>
          <LS.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </LS.Button>
      </LS.Footer>
    </LS.Wrapper>
  );
}
