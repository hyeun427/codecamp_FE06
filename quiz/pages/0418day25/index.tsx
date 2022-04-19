import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
// import { writer } from "repl";
import * as S from "./styles";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    // 등록하기
    await createBoard({
      variables: {
        createBoardInput: {
          writer: writer,
          password: password,
          title: title,
          contents: contents,
        },
      },
      update(cache, { data }) {
        data.createBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <S.Table key={el._id}>
          <S.Board>{el.writer}</S.Board>
          <S.Board>{el.title}</S.Board>
          <S.Board>{el.contents}</S.Board>
          <S.DeleteButton onClick={onClickDelete(el._id)}>X</S.DeleteButton>
        </S.Table>
      ))}
      <S.InputWrapper>
        작성자: <S.Input type="text" onChange={onChangeWriter} />
        비밀번호: <S.Input type="password" onChange={onChangePassword} />
        제목: <S.Input type="text" onChange={onChangeTitle} />
        내용: <S.Input type="text" onChange={onChangeContents} />
        <S.Button onClick={onClickSubmit}>등록하기</S.Button>
      </S.InputWrapper>
    </div>
  );
}
