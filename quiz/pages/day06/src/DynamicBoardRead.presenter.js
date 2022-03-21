export default function BoarderReadUI() {
    return (
		<div>
			<div>{data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다!</div>
			<div>작성자 : {data?.fetchBoard.writer}</div>
			<div>제목 : {data?.fetchBoard.title}</div>
			<div>내용 : {data?.fetchBoard.contents}번 게시글에 오신 것을 환영합니다!</div>
		</div>
	)
}