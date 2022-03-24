// 여기는 수정하기 페이지

//경로가 다르니까 복붙 후 import 다시 한번실시
import BoardWrite from "../../../../src/components/units/board/09-board-write/BoardWrite.container";
import { useQuery,gql } from '@apollo/client'
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
	query fetchBoard($number: Int){
		fetchBoard(number:$number){
			number
			writer
			title
			contents
		}
	}
`

export default function BoardEditPage() {
	const router = useRouter()

	const { data } = useQuery(FETCH_BOARD, {
		variables: {number: Number(router.query.mynumber)}
	})

	return <BoardWrite isEdit={true} data={data}/>
}