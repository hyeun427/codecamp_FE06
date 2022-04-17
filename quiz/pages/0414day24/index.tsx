import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input01 from "../src/components/commons/inputs";
import Button01 from "../src/components/commons/buttons";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

const Error = styled.div`
  color: red;
  font-size: 15px;
`;

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "작성자는 최대 5자리로 입력해 주세요!~")
    .required("이름은 필수 입력 사항입니다."),
  password: yup
    .string()
    // .max(8, "비밀번호는 최대 8자리로 입력해 주세요!~")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{1,8}$/,
      "영문,숫자,특수문자를 포함한 8자리 이내의 비밀번호를 입력해주세요~"
    )
    .required("비밀번호는 필수 입력 사항입니다."),
  title: yup
    .string()
    .max(100, "제목은 최대 100자로 입력해 주세요!~")
    .required("제목은 필수 입력 사항입니다."),
  contents: yup
    .string()
    .max(1000, "내용은 최대 1000자로 입력해 주세요!~")
    .required("내용은 필수 입력 사항입니다."),
});

export default function FormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 <Input01 type="text" register={register("writer")} />
      <Error>{formState.errors.writer?.message}</Error>
      <br />
      비밀번호 <Input01 type="text" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      <br />
      제목 <Input01 type="text" register={register("title")} />
      <Error>{formState.errors.title?.message}</Error>
      <br />
      내용 <Input01 type="text" register={register("contents")} />
      <Error>{formState.errors.contents?.message}</Error>
      <br />
      <Button01 isActive={formState.isValid} title="등록하기" />
    </form>
  );
}
