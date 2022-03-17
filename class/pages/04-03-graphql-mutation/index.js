// import axios from 'axios'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
	mutation{
		createBoard(
			writer: "현민",
			title: "3일차"
			contents: "3일차 플레이그라운드 실습 퀴즈"
		){
			_id
			number
			message
		}
	}
`

export default function GraphqlMutationPage() {
	const [data, setData] = useState("")
	const [callApi] = useMutation(CREATE_BOARD)
	
	const callGraphqlApi = async () => {
		// const result = await axios.get("https://koreanjson.com/posts/1")
		const result = await callApi()
		console.log(result)
		console.log(result.data.createBoard.message)
		setData(result.data.createBoard.message)
	}

	return (
		<div>
			<div>{data}</div>
			<button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
		</div>
	)
}