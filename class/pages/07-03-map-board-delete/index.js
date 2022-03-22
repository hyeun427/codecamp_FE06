import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
	query fetchBoards{
		fetchBoards{
			number
			writer
			title
			contents
		}
	}
`
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number){
            message
        }
    }
`

const Row = styled.div`
    display: flex;
    // flex-direction: row; //default가 row여서 굳이 안 써도 됨
`
const Column = styled.div`
    width: 20%;
`

export default function MapBoardPage() {
    const [deleteBoard] = useMutation(DELETE_BOARD)
	// useState랑 다르게 const 다음이 대괄호가 아니라 중괄호를 사용함
	const { data } = useQuery(FETCH_BOARDS)

    const onClickDelete = (event) => {
        deleteBoard({
            variables: {number: Number(event.target.id)},
            refetchQueries: [{ query: FETCH_BOARDS}]
        })
    }

	console.log(data)

	return (
		<div>
            {data?.fetchBoards.map((el) => (
                // <Fragment key={el.number}>
                <Row key={el.number}>
                    <Column><input type="checkbox"/></Column>
                    <Column>{el.number}</Column>
                    <Column> {el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
                ))}
        </div>
	)

}