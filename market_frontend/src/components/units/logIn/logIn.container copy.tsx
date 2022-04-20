import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import LogInUI from "./logIn.presenter";
import { LOGIN_USER } from "./logIn.queries";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      console.log(accessToken);
      // 로그인 후 이동하는 페이지 나중에 주소 바꿔주기
      router.push("./");
      Modal.success({
        content: "로그인이 성공하였습니다.",
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <LogInUI
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
      />
    </>
  );
}
