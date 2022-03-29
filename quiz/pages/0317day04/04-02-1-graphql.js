import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
	mutation{
		createBoard(
			writer: "현민",
			title: "4일차"
			contents: "graphql-api 퀴즈 1번"
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