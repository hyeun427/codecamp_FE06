// 여기는 컨테이너 컴포넌트

import { ChangeEvent,useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'
import {IBoardWriteProps, IMyVariables} from './BoardWrite.types'



export default function BoardWrite(props: IBoardWriteProps) {
	const router = useRouter()
	const [isActive, setIsActive] = useState(false)
	
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    
    const [data, setData] = useState("")
	const [createBoard] = useMutation(CREATE_BOARD)
	const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickUpdate = async () => {

        const myVariables: IMyVariables = { number: Number(router.query.mynumber) }

        if (myWriter !== "") myVariables.writer = myWriter
        if (myTitle !== "")myVariables.title =myTitle
        if (myContents !== "") myVariables.contents = myContents

		await updateBoard({
			variables: { number: Number(router.query.mynumber), writer: myWriter, title: myTitle, contents: myContents }
		})
		alert("게시글 수정에 성공하였습니다!")
		router.push(`/09-01-boards/${router.query.mynumber}`)
	}
    
    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api방식
        
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents}
        })
        // console.log(result)
        // console.log(result.data.createBoard.message)
        // setData(result.data.createBoard.message)
		alert("게시글 등록에 성공하였습니다!")
		router.push(`/09-01-boards/${result.data.createBoard.number}`)
		
    }
    
    // 이벤트핸들러함수 
    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setMyWriter(event.target.value)

        if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setMyTitle(event.target.value)
        
        if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    
    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setMyContents(event.target.value)

        if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
	
	return (
		<BoardWriteUI 
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
		callGraphqlApi={callGraphqlApi}
		onClickUpdate={onClickUpdate}
        isActive={isActive}
		isEdit={props.isEdit}  // 그냥 isEdit쓰는게 아니라 props.isEdit라고 쓰는이유는 컨테이너에서 props.isEdit를 받아와서 쓰는 것이기 때문이다.
		data={props.data}
        />
		
		//위에서 작성한 state나 뭐 그런것들을 프리젠터에서 props로 받아오고싶으면
		// 여기 return안에 props를 내보내줘야 프리젠터에서 사용할 수 있겠지?
		// 항상 잊지말고 체크하자.
	)
}

