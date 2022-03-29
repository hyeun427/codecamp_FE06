import {useRouter} from "next/router"
import BoardWriteUI from "./DynamicBoardWrite.presenter"
import { FETCH_BOARD } from './DynamicBoardWrite.queries'
import { useQuery } from "@apollo/client"

export	default function BoardWrite() {
	const router = useRouter()
    console.log(router)

	
    Number(router.query.aaa) 
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    
    })

    console.log(data)

	return (
		<BoardWriteUI 
		data={data}
		/>
	)
}