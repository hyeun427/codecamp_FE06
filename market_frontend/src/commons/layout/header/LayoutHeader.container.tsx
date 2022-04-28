import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/products");
  };

  const onClickLogin = () => {
    router.push("/logIn");
  };
  
  const onClickLogout = () => {
    router.push("/logIn");
  };

  const onClickSignin = () => {
    router.push("/signIn");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickSignin={onClickSignin}
    />
  );
}
