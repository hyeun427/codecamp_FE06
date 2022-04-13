// 로그인이 된 사람만 접근하는 페이지
// 로그인이 안된 사람은 접근하지 못하게 해야해

import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  // const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  /* useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해야합니다!");
      router.push("/23-04-login-check");
    }
  }, []); */

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!~</div>;
}

export default withAuth(LoginSuccessPage);
