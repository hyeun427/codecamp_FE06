// import로 한번에 불러오려면 
// import * as S from '../../../styles/emotion' 이렇게 작성하면 되는데 as S를 한 이유는
// emotion 파일 뿐만아니라 여러 파일을 불러오게 될때, 변수명이 같을 수 있기 때문에 전체적인 파일을 하나로 지정?하는 느낌!
// S에 대해서는 본 파일 맨 아래 return 안에 html 부분에만 S.Wrapper, S.Title...이런 식으로 바꿔주면 된다.
// css파일은 건들 필요 없음
/* import {
    Wrapper,
    Title,
    WriterWrapper,
    InputWrapper,
    Label,
    Writer,
    Password,
    Subject,
    Contents,
    CodeWrapper,
    Code,
    SearchCode,
    Address,
    Youtube,
    ImageWrapper,
    UploadButton,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    ButtonWrapper,
    SubmitButton,
    Error
} from '../../../styles/emotion' */

import * as S from '../../../styles/emotion'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
        }
    }
`;

    
export default function BoardsNewPage(){
    const router = useRouter()
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [subject, setSubject] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD);

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        if (writer !== "") {
            setWriterError("")
        }
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
        if (password !== "") {
            setPasswordError("")
        }
    };

    const onChangeSubject = (event) => {
        setSubject(event.target.value);
        if (subject !== "") {
            setSubjectError("")
        }
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
        if (contents !== "") {
            setContentsError("")
        }
    };

    const onClickSubmit = async () => {
        if (writer === "") {
            setWriterError("작성자를 입력하세요.")
        }
        if (password === "") {
            setPasswordError("비밀번호를 입력하세요.")
        }
        if (subject === "") {
            setSubjectError("제목을 입력하세요.")
        }
        if (contents === "") {
            setContentsError("내용을 입력하세요.")
        }
        if (writer !== "" && password !== "" && subject !== "" && contents !== "") {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: password,
                            title: subject,
                            contents: contents
                        }
                    }
                })
                console.log(result)
                console.log(result.data.createBoard._id)
                alert("게시물 등록에 성공하였습니다!")
                alert("상세 페이지로 이동합니다.")
                router.push(`/boards/${result.data.createBoard._id}`)
            } catch(error) {
            console.log(error.message)
            }
        }
    };

    return (
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
    )
}