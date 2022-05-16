import useAuth from "../../src/components/commons/hooks/useAuth";
import MyPageContainer from "../../src/components/units/mypage/mypage.container";

export default function MyPage() {
  useAuth();
  return <MyPageContainer />;
}
