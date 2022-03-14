import { MyTitle, MyEmail } from '../../styles/emotion'





export default function AAAPage() {

	//태그 이름의 첫 글자는 무조건 대문자로!
	
	
	// 여기는 자바스크립트 쓰는 곳
	
	return (
		<MyTitle>
			로그인
			<MyTitle>
				아이디
				<input type='text'></input>
			</MyTitle>
			
			<MyTitle>
				비밀번호
				<input type='password'></input>
			</MyTitle>
		</MyTitle>
    
	)
}
