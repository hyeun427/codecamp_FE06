import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './DynamicBoardInput.presenter'
import {CREATE_BOARD} from './DynamicBoardInput.queries'



export default function BoardWrite() {
    const router = useRouter()

	const [myWriter, setMyWriter] = useState("")
	const [myTitle, setMyTitle] = useState("")
	const [myContents, setMyContents] = useState("")
	
	const [data, setData] = useState("")
	const [createBoard] = useMutation(CREATE_BOARD)
	
	const callGraphqlApi = async () => {
		try {
			const result = await createBoard({
				variables: { writer: myWriter, title: myTitle, contents: myContents}
			})
			console.log(result)
			console.log(result.data.createBoard.message)
			alert("게시글 등록에 성공했어요!")
			alert("상세 페이지로 이동해 볼까요?")
			router.push(`/day06/05-08-dynamic-routed-input/${result.data.createBoard.number}`)
		} catch (error) {
			alert(error.message)
		}
	}


	const onChangeWriter = (event) => {
        console.log(event.target.value)
		setMyWriter(event.target.value)
	}
	
	const onChangeTitle = (event) => {
        console.log(event.target.value)
		setMyTitle(event.target.value)
	}
	
	const onChangeContents = (event) => {
        console.log(event.target.value)
		setMyContents(event.target.value)
	}


    return (
        <BoardWriteUI 
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        callGraphqlApi={callGraphqlApi}
        />
    )
}