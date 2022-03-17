import { useState } from "react";

export default function TokenPage() {

	const [token, setToken] = useState("000000")
	
	function tokenClick() {
		setToken(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))
	}

	return (

		<div>
			<div>{token}</div>
			<button onClick={tokenClick}>인증번호 전송</button>
		</div>

	)
}