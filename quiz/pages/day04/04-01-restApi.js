import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage() {
	const [data, setData] = useState("")

	async function callRestApi() {
		const result = await axios.get("https://koreanjson.com/posts/1")
		setData(result.data.title)
	}


	return (
		<div>
			<div>{data}</div>
			<button onClick={callRestApi}>REST-API 요청!</button>
		</div>
	)
	
}