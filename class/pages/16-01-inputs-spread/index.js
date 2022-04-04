// import axios from 'axios'
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

export default function GraphqlMutationPage(){
    /*  const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("") */

    const [inputs, setInputs] = useState({
        writer: "",
        title: "",
        contents: ""
    })

    const [data, setData] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식!!
        // const result = await axios.get("https://koreanjson.com/users/1")
        // const result = await axios.get("https://koreanjson.com/products/1")

        const result = await createBoard({
            variables: {
                /* writer: inputs.writer,
                title: inputs.title,
                contents: inputs.contents, */
                ...inputs
            }
        }) // graphql-api 방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    }

    // 04-05-graphql-mutation-input 파일을 리팩토링 하면 이렇게 간단하게 작성 할 수 있다
    // 함수가 3개였는데 onChangeInputs 하나로 만들어서 코드를 작성하였다. 
    // 코드의 전체 길이가 길수록 리팩토링을 통해 간결하고 효율적으로 줄일 수 있다!
    const onChangeInputs = (event) => {
        // setMyWriter(event.target.value)
        setInputs({
            /* writer: inputs.writer,
            title: inputs.title,
            contents: inputs.contents 
            writer: event.target.value
            */
            ...inputs,
            // 대괄호를 해줘야 event.target.id를 키로 가져갈 수 있음!
            [event.target.id] : event.target.value,
        })
    }


    return (
        <div>
            {/* <div>{data}</div> */}
            작성자: <input type="text" id='writer' onChange={onChangeInputs} /><br />
            제목: <input type="text" id='title' onChange={onChangeInputs} /><br />
            내용: <input type="text" id='contents' onChange={onChangeInputs} /><br />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </div>
    )
}