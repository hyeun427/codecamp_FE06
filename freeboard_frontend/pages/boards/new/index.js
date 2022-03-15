import {
	Background, Wrapper, Title, IdWrap, NameWrap, Name, NameBox, PasswordWrap, Password, PasswordBox,
	SubjectWrap, Subject, SubjectBox, ContentsWrap, Content, ContentBox, AddressWrap, Address, AddressNum, BtnAddress, AddressBox,
	YoutubeWrap, Youtube, YoutubeBox, PhotoWrap, Photo, PhotoBox, PhotoContent, MainSetting, RadioYoutube, RadioPhoto, Register
} from "../../../../freeboard_frontend/styles/stylesheet"

export default function Board() {

	return (
		<Background>
			<Wrapper> 
				<Title>게시물 등록</Title>
				<IdWrap>
					<NameWrap>
						<Name>작성자</Name>
						<NameBox type="text" placeholder="이름을 적어주세요." />
					</NameWrap>
					
					<PasswordWrap>
						<Password>비밀번호</Password>
						<PasswordBox type="password" placeholder="비밀번호를 입력해주세요."/>
					</PasswordWrap>
				</IdWrap>

				<SubjectWrap>
					<Subject>제목</Subject>
					<SubjectBox type="text"/>
				</SubjectWrap>
				
				<ContentsWrap>
					<Content>내용</Content>
					<ContentBox type="text" placeholder="내용을 작성해주세요."/>
				</ContentsWrap>

				<AddressWrap>
					<Address>주소</Address>
					<AddressNum placeholder="07250" />
					<BtnAddress type="number">우편번호 검색</BtnAddress>
					<AddressBox type="text"/>
					<AddressBox type="text"/>
				</AddressWrap>

				<YoutubeWrap>
					<Youtube>유튜브</Youtube>
					<YoutubeBox type="radio" placeholder="링크를 복사해주세요."/>
				</YoutubeWrap>

				<PhotoWrap>
					<Photo>사진 첨부</Photo>
					<PhotoBox>
						<PhotoContent>+</PhotoContent>
						<PhotoContent>Upload</PhotoContent>
					</PhotoBox>

					<PhotoBox>
						<PhotoContent>+</PhotoContent>
						<PhotoContent>Upload</PhotoContent>
					</PhotoBox>

					<PhotoBox>
						<PhotoContent>+</PhotoContent>
						<PhotoContent>Upload</PhotoContent>
					</PhotoBox>
				</PhotoWrap>

				<MainSetting>
					<RadioYoutube>유튜브</RadioYoutube>
					<RadioPhoto>사진</RadioPhoto>
				</MainSetting>

				<Register>등록하기</Register> 
			</Wrapper>
		</Background>

	)
}