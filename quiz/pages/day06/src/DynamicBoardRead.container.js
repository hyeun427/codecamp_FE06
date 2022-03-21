import BoarderReadUI from "./DynamicBoardRead.presenter"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"


export default function BoardRead(){
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.aaa)}
    })

    console.log(data)

    return(
        <BoarderReadUI />
    )
}