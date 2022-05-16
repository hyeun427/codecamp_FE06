import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";

// export default function useAuth() {
//   const router = useRouter();
//   const [accessToken] = useRecoilState(accessTokenState);
//   const [isLoading] = useState(true);

//   useEffect(() => {
//     if (!accessToken) {
//       alert("로그인 후 이용 가능합니다!");
//       router.push("/logIn");
//     }
//   });
//   return {
//     isLoading,
//   };
// }
export default function useAuth() {
  const router = useRouter();
  // const [accessToken] = useRecoilState(accessTokenState);
  const [isLoading] = useState(true);

  // useEffect(() => {
  //   if (!accessToken) {
  //     alert("로그인 후 이용 가능합니다!");
  //     router.push("/logIn");
  //   }
  // });
  // return {
  //   isLoading,
  // };

  const [accessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          router.push("/logIn");
          alert("로그인이 필요합니다.");
        }
      }
    }
    Auth();
  }, []);
}
