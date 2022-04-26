import { Wrapper, InnerWrapper, Logo, Button } from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo
          src="/main/mainLogo.png"
          width="80px"
          onClick={props.onClickLogo}
        />
        <div>
          <Button onClick={props.onClickLogin}>로그인</Button>
          <Button onClick={props.onClickSignin}>회원가입</Button>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
