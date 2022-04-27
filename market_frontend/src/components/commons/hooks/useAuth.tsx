import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function useAuth() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoading] = useState(true);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 후 이용 가능합니다!");
      router.push("/logIn");
    }
  });
  return {
    isLoading,
  };
}
