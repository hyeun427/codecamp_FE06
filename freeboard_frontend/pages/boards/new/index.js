import {
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
} from '../../../styles/emotion'

import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
        }
    }
`;

    
export default function BoardsNewPage(){
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
                alert("게시물 등록에 성공하였습니다!")
            } catch(error) {
            console.log(error.message)
            }
        }
    };

    return (
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type='text' placeholder='이름을 적어주세요.' onChange={onChangeWriter}></Writer>
                    <Error>{writerError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type='password' placeholder='비밀번호를 작성해주세요.' onChange={onChangePassword}></Password>
                    <Error>{passwordError}</Error>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject type='text' placeholder='제목을 작성해주세요.' onChange={onChangeSubject}></Subject>
                <Error>{subjectError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents type='text' placeholder='내용을 작성해주세요.' onChange={onChangeContents}></Contents>
                <Error>{contentsError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <CodeWrapper>
                    <Code placeholder="07250"></Code>
                    <SearchCode>우편번호 검색</SearchCode>
                </CodeWrapper>
                <Address></Address>
                <Address />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder='링크를 복사해주세요.'></Youtube>
            </InputWrapper>
            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type="radio" />
                <RadioLabel>유튜브</RadioLabel>
                <RadioButton type="radio" />
                <RadioLabel>사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    )
}