import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
	mutation createBoard($writer: String, $title: String, $contents: String) {
		createBoard(writer: $writer, title: $title, contents: $contents){
			_id
			number
			message
		}
	}
`

export default function GraphqlMutationPage() {
	const [data, setData] = useState("")
	const [callApi, setCallApi] = useMutation(CREATE_BOARD)
	
	const callGraphqlApi = async () => {

		const result = await callApi({
			variables: { writer: "현민", title: "4일차", contents: "왜에러가나오지오됐다" }
		})
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