import {WriterInput} from './DynamicBoardInput.style'

export default function BoardWriteUI(props) {
    
    return (
		<div>
			작성자: <WriterInput type="text" onChange={props.onChangeWriter} /><br />
			제목: <input type="text" onChange={props.onChangeTitle} /><br />
			내용: <input type="text" onChange={props.onChangeContents} /><br />
			<button onClick={props.callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
		</div>
	)
}