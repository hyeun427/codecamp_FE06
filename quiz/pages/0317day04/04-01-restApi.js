import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage() {
	const [data, setData] = useState("")

	async function callRestApi() {
		const result = await axios.get("https://koreanjson.com/users")
		console.log(result)
		// data값이 여러개의 배열이기때문에 map을 이용해서 새로운 변수에 배열을 담아서 사용
		// 아래 return 값에 하나씩 출력 가능하다.
		const resultMap = result.data.map((res) => {
			return (
				<>
					<div>{res.name}</div>
					<div>{res.username}</div>
				</>
			)
		})
		setData(resultMap)
	}


	return (
		<div>
			<div>{data}</div>
			<button onClick={callRestApi}>REST-API 요청!</button>
		</div>
	)
	
}