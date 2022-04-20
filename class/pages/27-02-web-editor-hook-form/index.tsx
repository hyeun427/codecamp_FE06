// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
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

  return (
    <div>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
