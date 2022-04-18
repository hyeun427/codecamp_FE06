// 로그인 된 사람만 이용하는 페이지

import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  useAuth();

  return <div>철수의 프로필 페이지 입니다!~</div>;
}
