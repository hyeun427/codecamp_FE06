export default function CounterDocumentPage() {

	// 여기 함수명은 대문자 시작안해도되나?
	function counter() {
		const result = Number(document.getElementById("count").innerText) + 1
		document.getElementById("count").innerText = result
		
	}

	return (
		
		// 빈 괄호 -> fragment라고 함. return에서 내보낼 때는 한 뭉텅이로 내보내야함.
		// 그래서 div든, span이든 묶어줘야하는데 그냥 빈 괄호도 가능함
		/* <>
			<div>0</div>
			<button onClick={counter}>카운트 올리기!!!</button>
		</> */

		<div>
			<div id="count">0</div>
			<button onClick={counter}>카운트 올리기!!!</button>
		</div>
	)



}