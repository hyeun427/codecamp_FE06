import * as Ls from "./BoardList.style";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardListUI(props) {
  return (
    // 리스트 전체영역
    <Ls.Wrapper>
      <Ls.TableTop />
      {/* 리스트 헤더영역 */}
      <Ls.Row>
        <Ls.ColumnHeaderBasic>번호</Ls.ColumnHeaderBasic>
        <Ls.ColumnHeaderTitle>제목</Ls.ColumnHeaderTitle>
        <Ls.ColumnHeaderBasic>작성자</Ls.ColumnHeaderBasic>
        <Ls.ColumnHeaderBasic>날짜</Ls.ColumnHeaderBasic>
      </Ls.Row>
      {/* 리스트 영역 */}
      {/* 리스트 불러오기를 10번 반복하는 코드*/}
      {props.data?.fetchBoards.map((el, index) => (
        <Ls.Row key={el.id}>
          <Ls.ColumnBasic>
            {/* 아랫줄 id값 출력을 번호로 바꿔줄 것 */}
            {String(el._id).slice(-4).toUpperCase()}
          </Ls.ColumnBasic>
          <Ls.ColumnTitle onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </Ls.ColumnTitle>
          <Ls.ColumnBasic>{el.writer}</Ls.ColumnBasic>
          <Ls.ColumnBasic>{getDate(el.createdAt)}</Ls.ColumnBasic>
        </Ls.Row>
      ))}
      <Ls.TableBottom />
      {/* 리스트 푸터영역 */}
      <Ls.Footer>
        <Ls.Button onClick={props.onClickMoveToBoardNew}>
          <Ls.PencilIcon src="img/write.png" />
          게시물 등록하기
        </Ls.Button>
      </Ls.Footer>
    </Ls.Wrapper>
  );
}
