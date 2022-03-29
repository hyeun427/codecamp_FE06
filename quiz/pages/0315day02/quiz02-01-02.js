import { useState } from "react";

export default function HelloPage() { 
	const [click, setClick] = useState("안녕하세요")

	function helloBtn() {
		setClick("반갑습니다")
	}
	
	return (
		<div>
			<button onClick={helloBtn}>안녕하세요</button>
		</div>
	)

}
