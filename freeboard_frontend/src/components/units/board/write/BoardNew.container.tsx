// 게시물 등록 및 수정 컨테이너

import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardNew.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardNew.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardNew.types";

export default function BoardWrite(props: IBoardWriteProps) {
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
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isActive, setIsActive] = useState("");

  // 작성자 작성할 때
  // 여기 타입 이해안됨................
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
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

  // 비밀번호 작성할 때

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
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

  // 제목 작성할 때
  const onChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
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

  // 내용 작성할 때
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (writer && password && subject && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 등록하기 버튼 누르기전에 모두 입력했는지 확인, 다 적혔으면 백엔드서버에 저장
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

  // 수정 사항 작업 할 때, 백엔드에 다시 저장
  const onClickUpdate = async () => {
    if (!subject && !contents) {
      alert("수정한 내용이 없습니다. 다시 확인해주세요.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    // 수정사항 반영하기
    const updateBoardInput: IUpdateBoardInput = () => {};

    if (subject) updateBoardInput.subject = subject;
    if (contents) updateBoardInput.contents = contents;

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: {
            title: subject,
            contents: contents,
          },
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
