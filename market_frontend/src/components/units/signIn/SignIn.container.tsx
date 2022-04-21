import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import SignInUI from "./SignIn.presenter";
import LogInUI from "./SignIn.presenter";
import { LOGIN_USER } from "./SignIn.queries";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  // 이메일 입력
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  // 이름 입력
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  };

  // 비밀번호 입력
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  //  버튼 누를 때
  const onClickLogin = async () => {
    if (email === "") {
      setEmailError("이메일은 필수사항입니다");
    }
    if (name === "") {
      setNameError("이름은 필수사항입니다");
    }
    if (password === "") {
      setPasswordError("비밀번호는 필수사항입니다");
    }
    if (email !== "" && name !== "" && password !== "") {
      try {
        const result = await loginUser({
          variables: {
            email,
            name,
            password,
          },
        });
        const accessToken = result.data.loginUser.accessToken;
        console.log(accessToken);
        // 회원가입 후 이동하는 페이지 연결
        router.push("./");
        Modal.success({
          content: "회원 가입이 성공하였습니다.",
        });
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <>
      <SignInUI
        emailError={emailError}
        nameError={nameError}
        passwordError={passwordError}
        onChangeEmail={onChangeEmail}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
      />
    </>
  );
}
