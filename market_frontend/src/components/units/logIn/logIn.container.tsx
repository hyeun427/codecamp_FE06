import { useMutation } from "@apollo/client";
import { useState } from "react";
import LogInUI from "./logIn.presenter";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onClickLogin = () => {
    loginUser({
      variables: {
        email,
        password,
      },
    });
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
