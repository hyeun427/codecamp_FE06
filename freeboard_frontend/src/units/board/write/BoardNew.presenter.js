export default function () {

<S.Wrapper>
            <S.Title>게시물 등록</S.Title>
            <S.WriterWrapper>
                <S.InputWrapper>
                    <S.Label>작성자</S.Label>
                    <S.Writer type='text' placeholder='이름을 적어주세요.' onChange={onChangeWriter}></S.Writer>
                    <S.Error>{writerError}</S.Error>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>비밀번호</S.Label>
                    <S.Password type='password' placeholder='비밀번호를 작성해주세요.' onChange={onChangePassword}></S.Password>
                    <S.Error>{passwordError}</S.Error>
                </S.InputWrapper>
            </S.WriterWrapper>
            <S.InputWrapper>
                <S.Label>제목</S.Label>
                <S.Subject type='text' placeholder='제목을 작성해주세요.' onChange={onChangeSubject}></S.Subject>
                <S.Error>{subjectError}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
                <S.Label>내용</S.Label>
                <S.Contents type='text' placeholder='내용을 작성해주세요.' onChange={onChangeContents}></S.Contents>
                <S.Error>{contentsError}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
                <S.Label>주소</S.Label>
                <S.CodeWrapper>
                    <S.Code placeholder="07250"></S.Code>
                    <S.SearchCode>우편번호 검색</S.SearchCode>
                </S.CodeWrapper>
                <S.Address></S.Address>
                <S.Address />
            </S.InputWrapper>
            <S.InputWrapper>
                <S.Label>유튜브</S.Label>
                <S.Youtube placeholder='링크를 복사해주세요.'></S.Youtube>
            </S.InputWrapper>
            <S.ImageWrapper>
                <S.Label>사진첨부</S.Label>
                <S.UploadButton>+</S.UploadButton>
                <S.UploadButton>+</S.UploadButton>
                <S.UploadButton>+</S.UploadButton>
            </S.ImageWrapper>
            <S.OptionWrapper>
                <S.Label>메인설정</S.Label>
                <S.RadioButton type="radio" name="radio-button"/>
                <S.RadioLabel>유튜브</S.RadioLabel>
                <S.RadioButton type="radio" name="radio-button"/>
                <S.RadioLabel>사진</S.RadioLabel>
            </S.OptionWrapper>
            <S.ButtonWrapper>
                <S.SubmitButton onClick={onClickSubmit}>등록하기</S.SubmitButton>
            </S.ButtonWrapper>
        </S.Wrapper>
}