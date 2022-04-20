// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능!
    // contents라는 키에 value를 넣어줘!
    // value === "<p><br></p>" ? "" : value ====> <p><br></p>이건 브라우저 상에서 글 작성하다가 싹다 지웠을때 콘솔에 이렇게 찍힘!
    // 그러면 결국 화면엔 보이지 않지만 값이 있는것. 그래서 ""으로 바꿔주는거야
    // 이렇게 조건을 주는 궁극적인 이유는 공백일때 등록이 안되게 하려고 한거야
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모두 입력해 주세요!");
      return;
    }

    // 뮤테이션
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    // react-hook-form을 사용하고있기때문에 handleSubmit으로 한번 감싸서 onClickSubmit을 바인딩 시켜줘야함.
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
