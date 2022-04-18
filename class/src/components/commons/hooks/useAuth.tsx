import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해야합니다!");
      router.push("/23-04-login-check");
    }
  }, []);

  // return {
  // 	isLoading: isLoading
  // }
}
