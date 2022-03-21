import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from './BoardWrite.queries'



export default function BoardWrite() {
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    
    const [data, setData] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    
    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1")
        
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    }
    
    // 이벤트핸들러함수 
    const onChangeWriter = (event) => {
        setMyWriter(event.target.value)
    }
    
    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)
    }
    
    const onChangeContents = (event) => {
        setMyContents(event.target.value)
    }
	
	return (
		<BoardWriteUI 
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        callGraphqlApi={callGraphqlApi}/>
	)
}





