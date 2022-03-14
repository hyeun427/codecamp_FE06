import styled from '@emotion/styled'





export default function AAAPage() {

   //태그 이름의 첫 글자는 무조건 대문자로!
    const Background = styled.div`
    width: 640px;

	border: 1px solid red;
    `

    const List = styled.div`
    display: flex;
	flex-direction: row;
    `

	const Menu = styled.div`
	padding: 25px;
	`

   // 여기는 자바스크립트 쓰는 곳

	return (
		<Background>
			<img src=''>
			<div>마이 사진 임정아 화살표</div>
			<List> 
				<Menu>공지사항</Menu>
				<Menu>이벤트</Menu>
				<Menu>FAQ</Menu>
				<Menu>Q&A</Menu>
			</List>
			<div>라인</div>
			<div>Q01-Q06</div>
			<div>아래배너</div>
	
    </Background>
    
    )
}