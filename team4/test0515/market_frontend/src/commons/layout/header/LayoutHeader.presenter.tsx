import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import {
  Wrapper,
  InnerWrapper,
  Logo,
  Button,
  Detail,
  User,
  SignUpButton,
} from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isToken] = useRecoilState(accessTokenState);

  return (
    <Wrapper>
      <InnerWrapper>
        <Logo
          src="/main/mainLogo.png"
          width="80px"
          onClick={props.onClickLogo}
        />
        {isToken ? (
          <Detail>
            <User>{data?.fetchUserLoggedIn.name}님 환영합니다</User>
            <User>{data?.fetchUserLoggedIn.userPoint.amount}P</User>
            <Button>장바구니</Button>
            <SignUpButton onClick={props.onClickLogout}>로그아웃</SignUpButton>
          </Detail>
        ) : (
          <Detail>
            <Button onClick={props.onClickLogin}>로그인</Button>
            <Button onClick={props.onClickSignin}>회원가입</Button>
          </Detail>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}
