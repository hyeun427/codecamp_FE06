// 게시물 등록 컨테이너

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardNew.presenter";
import { CREATE_BOARD } from "./BoardNew.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const [isActive, setIsActive] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    if (event.target.value && password && subject && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (writer && event.target.value && subject && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeSubject = (event) => {
    setSubject(event.target.value);
    if (event.target.value !== "") {
      setSubjectError("");
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (contents !== "") {
      setContentsError("");
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력하세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력하세요.");
    }
    if (subject === "") {
      setSubjectError("제목을 입력하세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력하세요.");
    }
    if (writer !== "" && password !== "" && subject !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: subject,
              contents: contents,
            },
          },
        });
        console.log(result);
        alert("게시물 등록에 성공하였습니다!");
        alert("상세 페이지로 이동합니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다. 다시 확인해주세요.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    // 수정사항 반영하기
    const updateBoardInput = () => {};

    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput,
        },
      });
      alert("게시물 수정에 성공하였습니다!");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      isActive={isActive}
      writerError={writerError}
      passwordError={passwordError}
      subjectError={subjectError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeSubject={onChangeSubject}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
