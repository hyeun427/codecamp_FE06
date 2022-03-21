//import StaticRoutingPage from "./DynamicBoardWrite.presenter"
import BoardWriteUI from '../src/DynamicBoardWrite.presenter'
import { useRouter } from 'next/router'

export default function BoardWrite() {
    const router = useRouter()

	const onClickMove1 = () => {
		router.push("/day06/05-06-dynamic-routed-board/83011")
	}

	const onClickMove2 = () => {
		router.push("/day06/05-06-dynamic-routed-board/83012")
	}

	const onClickMove3 = () => {
		router.push("/day06/05-06-dynamic-routed-board/83013")
	}

    return (
        <BoardWriteUI
		handlerClick1={onClickMove1}
		handlerClick2={onClickMove2}
		handlerClick3={onClickMove3}
		/>
    )

}