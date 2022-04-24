import * as S from "./ProductWrite.style";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { IProductWrite } from "./ProductWrite.types";
import ProductWriteUI from "./ProductWrite.presenter";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWrite() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("Contents", value === "<p><br></p>" ? "" : value);
    trigger("Contents");
  };

  const onClickSubmit = (data: IProductWrite) => {
    console.log(data);
  };
  return (
    <ProductWriteUI
      ReactQuill={ReactQuill}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      trigger={trigger}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
