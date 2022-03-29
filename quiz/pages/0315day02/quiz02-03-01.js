export default function TokenPage() {

	function getToken() {
		  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
		document.getElementById("tokenNum").innerText = token;
		
	}

	return (
		<>
			<div id="tokenNum">000000</div>
			<button onclick={getToken}>인증번호 전송</button>
		</>
	)



}