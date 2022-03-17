export default function HelloPage() {

	function hello() {
		const click = document.getElementById("helloBtn").innerText = "반갑습니다"
	}

	return (
		<>
			<button id="helloBtn" onClick={hello}>안녕하세요</button>
		</>
	)


}