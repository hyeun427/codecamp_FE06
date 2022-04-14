// 로그인 전 페이지

import { useMutation, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    // 1. 로그인하기
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 2. 유저정보 받아오기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);

    // 3. 글로벌스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // 4. 로그인 성공페이지로 이동하기
    alert("로그인 성공쓰!!~!~!~!~");
    router.push("/24-02-login-use-apollo-client-success");
  };

  // return (
  //   <form onSubmit={}>
  //     이메일: <input type="text" onChange={onChangeEmail} />
  //     <br />
  //     비밀번호: <input type="password" onChange={onChangePassword} />
  //     <br />
  //     {/* button의 타입 default값은 submit임.
  //     그래서 아래 로그인하기 버튼을 누르면 form의 onSubmit도 실행되고 onClick에 바인딩 된 함수(onClickLogin)도 실행됨.
  //     onClick을 사용한다면 버튼 타입을 버튼으로 지정할 것. */}
  //     <button onClick={onClickLogin}>로그인하기</button>
  //     {/* submit타입 버튼을 누르면 form의 onSubmit이 실행되는 것 */}
  //     <button type="submit">등록하기</button>
  //     {/* button타입 버튼을 누르면 내가 원하는 onClick에 바인딩 된 함수가 실행됨 */}
  //     <button type="button" onClick={}>
  //       나만의 버튼
  //     </button>
  //     <button type="reset">초기화하기</button>
  //   </form>
  // );

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
