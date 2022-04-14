import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useEffect } from "react";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // 1. 더이상 지원되지 않음
  /* if (process.browser) {
    
  } else {
    
  } */

  // 2. 두번째 방법
  // window는 브라우저를 의미
  // if (typeof window !== "undefined") {
  //   console.log("여기는 브라우저다!");
  //   /* const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  //     setAccessToken(mylocalstorageAccessToken || ""); */
  // } else {
  //   console.log("여기는 프론트엔드서버다!yarn dev다!");
  // }

  // 3. 세번째 방법
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo);
  }, []);

  // 여기가 문제되는 코드
  /* const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  setAccessToken(mylocalstorageAccessToken || ""); */

  // //////////////////////////////////////////////////////////////////////
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
