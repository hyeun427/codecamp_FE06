import * as LS from '../../../freeboard_frontend/src/units/board/list/BoardLIst.style'

export default function BoardListPage() {
	
	
	return (
		<LS.Wrapper>
			<LS.SearchWrapper>
				<LS.SearchBarWrapper>
					<LS.ScopeImage src='C:\Users\hyeun\Desktop\codecamp_fe06\freeboard_frontend\public\img\scope.png'></LS.ScopeImage>
					<LS.SearchBar placeholder='제목을 검색해주세요.'></LS.SearchBar>
				</LS.SearchBarWrapper>
				<LS.SearchDateWrapper>
					<LS.SearchDate>YYYY.MM.DD</LS.SearchDate>
					<LS.SearchDateWave>~  </LS.SearchDateWave>
					<LS.SearchDate>YYYY.MM.DD</LS.SearchDate>
				</LS.SearchDateWrapper>
				<LS.SearchButton>검색하기</LS.SearchButton>
			</LS.SearchWrapper>
			
			<LS.ListWrapper>
				{/* List가 11개 있음*/}
				<LS.List>
					<LS.Number>번호</LS.Number>
					<LS.Title>제목</LS.Title>
					<LS.Writer>작성자</LS.Writer>
					<LS.Date>날짜</LS.Date>
				</LS.List>
			</LS.ListWrapper>
		</LS.Wrapper>
	)
}