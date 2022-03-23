// 여기는 프리젠터 컴포넌트
import {SubmitButton, WriterInput} from './ProductWrite.styles'

export default function ProductWriteUI(props) {

	return (
		<div>
			<h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
			판매자: <WriterInput type="text" onChange={props.onChangeSeller}></WriterInput> <br />
			상품명: <input type="text"onChange={props.onChangeName}></input> <br />
			가격: <input type="text"onChange={props.onChangePrice}></input> <br />
			내용: <input type="text"onChange={props.onChangeContents}></input> <br />
			<SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.ProductUpload} isActive={props.isActive}>{props.isEdit ? "수정" : "등록"}하기</SubmitButton>
		</div>
	
	)
}