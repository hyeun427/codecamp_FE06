import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import LogInUI from "./logIn.presenter";
import { LOGIN_USER } from "./logIn.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  // 이메일 입력
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  // 비밀번호 입력
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  // 로그인 버튼 누를 때
  const onClickLogin = async () => {
    if (email === "") {
      setEmailError("이메일은 입력해주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (email !== "" && password !== "") {
      try {
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        });
        const accessToken = result.data.loginUser.accessToken;
        setAccessToken(accessToken);
        // console.log(accessToken);
        // 로그인 후 이동하는 페이지 나중에 주소 바꿔주기
        router.push("./products");
        Modal.success({
          content: "로그인이 성공하였습니다.",
        });
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  // 회원가입 버튼 클릭
  const onClickSigin = () => {
    // 회원가입페이지로 주소 바꿔주기
    router.push("./signIn");
  };

  return (
    <>
      <LogInUI
        emailError={emailError}
        passwordError={passwordError}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
        onClickSigin={onClickSigin}
      />
    </>
  );
}
