import { Wrapper, InnerWrapper, Logo, Button } from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo
          // src="/img/hybeLogo.png"
          width="250px"
          onClick={props.onClickLogo}
        />
        <div>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
