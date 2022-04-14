import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";
import styled from "@emotion/styled";

interface IFormValues {
  email?: string;
  password?: string;
}


const Error = styled.div`
  color: red;
  font-size: 15px;
`;



// 아래 schema는 컴포넌트 분리 시, .validation.ts 라는 파일로 보관하기
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    // min(*,"")은 *에는 숫자가 들어가는데 이건 비밀번호 최소문자 수를 의미
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    // max(*,"")은 *에는 숫자가 들어가는데 이건 비밀번호 최대문자 수를 의미
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    // required을 쓰면 필수요소로 지정할 수 있음
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function ReactHookFormPage() {
  // register안에는 등록관련 모든게 담겨있음.
  // formState안에 error가 모두 담겨있음.
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    // mode: "onChange"를 작성하면 변경되자마자 검증해줌
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 이메일: <input type="text" {...register("email")} /> */}
      {/* 아래에서 mytype는 props!!!그냥 type쓴게 진짜 type="text"가 아니라 props네이밍을 type이라고 한것 */}
      {/* src/component/commons/inputs/01/index에 적어줘야 연결이 되겠지??둘이 헷갈리지마! */}
      {/* 이메일: <Input01 mytype="text" myregister={register("email")} /> */}
      이메일: <Input01 type="text" register={register("email")} />
      <Error>{formState.errors.email?.message}</Error>
      <br />
      {/* 비밀번호: <input type="text" {...register("password")} /> */}
      {/* 비밀번호: <Input01 mytype="password" myregister={register("password")} /> */}
      비밀번호: <Input01 type="password" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      <br />
      {/* <LoginButton isActive={formState.isValid}>로그인하기</LoginButton> */}
      <Button01 isActive={formState.isValid} title="로그인하기" />
    </form>
  );
}
