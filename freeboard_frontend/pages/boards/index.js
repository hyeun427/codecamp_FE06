import * as LS from "../../src/components/units/board/list/BoardLIst.style";

export default function BoardListPage() {
  return (
    <LS.Wrapper>
      <LS.SearchWrapper>
        <LS.SearchBarWrapper>
          <LS.ScopeImage src="C:\Users\hyeun\Desktop\codecamp_fe06\freeboard_frontend\public\img\scope.png"></LS.ScopeImage>
          <LS.SearchBar placeholder="제목을 검색해주세요."></LS.SearchBar>
        </LS.SearchBarWrapper>
        <LS.SearchDateWrapper>
          <LS.SearchDate>YYYY.MM.DD</LS.SearchDate>
          <LS.SearchDateWave>~ </LS.SearchDateWave>
          <LS.SearchDate>YYYY.MM.DD</LS.SearchDate>
        </LS.SearchDateWrapper>
        <LS.SearchButton>검색하기</LS.SearchButton>
      </LS.SearchWrapper>

      {/* List가 11개 있음*/}
      <LS.Row>
        <LS.ColumnNumber>번호</LS.ColumnNumber>
        <LS.ColumnTitle>제목</LS.ColumnTitle>
        <LS.ColumnWriter>작성자</LS.ColumnWriter>
        <LS.ColumnDate>날짜</LS.ColumnDate>
      </LS.Row>

      <LS.Row>
        <LS.ColumnNumber>번호</LS.ColumnNumber>
        <LS.ColumnTitle>제목</LS.ColumnTitle>
        <LS.ColumnWriter>작성자</LS.ColumnWriter>
        <LS.ColumnDate>날짜</LS.ColumnDate>
      </LS.Row>
    </LS.Wrapper>
  );
}
