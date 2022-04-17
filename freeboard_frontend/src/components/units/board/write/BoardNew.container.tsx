// 게시물 등록 및 수정 컨테이너
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardNew.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardNew.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardNew.types";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 작성자 작성할 때
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    if (event.target.value && password && title && contents) {
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

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 제목 작성할 때
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
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

    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 유튜브 주소 넣었을 때
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  // 주소검색창 열기
  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  // 주소검색 후 선택한 값 저장
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // 주소검색 완료 후 선택하고 나서 실행
  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  // 이미지 넣을 때
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // 등록하기 버튼 누르기전에 모두 입력했는지 확인, 다 적혔으면 백엔드서버에 저장
  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력하세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력하세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력하세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력하세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: fileUrls,
            },
          },
        });
        console.log(result);
        Modal.success({
          content: "게시물 등록에 성공하였습니다!상세 페이지로 이동합니다.",
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        //alert(error);
        Modal.error({ content: error.message });
      }
    }
  };

  // 수정 사항 작업 할 때, 백엔드에 다시 저장
  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangedFiles
    ) {
      Modal.error({ content: "수정한 내용이 없습니다. 다시 확인해주세요." });
      return;
    }
    if (!password) {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    }

    // 수정사항 반영하기
    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      Modal.success({ content: "게시물 수정에 성공하였습니다!" });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <BoardWriteUI
      isActive={isActive}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFileUrls={onChangeFileUrls}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
    />
  );
}
