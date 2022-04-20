import * as S from "../../../../src/components/units/logIn/logIn.styles";
import { ILoginUIProps } from "./logIn.types";

export default function LogInUI(props: ILoginUIProps) {
  return (
    <S.Wrapper>
      <S.Header>LOGIN</S.Header>
      <S.InputWrapper>
        <S.MainInput
          placeholder="이메일을 입력해주세요."
          type="text"
          onChange={props.onChangeEmail}
        />
        <S.Error></S.Error>
        <S.MainInput
          placeholder="비밀번호를 입력해주세요."
          type="password"
          onChange={props.onChangePassword}
        />
        <S.Error>{props.passwordError}</S.Error>
      </S.InputWrapper>
      <S.CheckboxWrapper>
        <S.Checkbox type="checkbox" />
        <S.BoxName>로그인 상태 유지</S.BoxName>
      </S.CheckboxWrapper>
      <S.LogInButton onClick={props.onClickLogin}>로그인하기</S.LogInButton>
      <S.Footer>
        <S.FooterInner>이메일 찾기</S.FooterInner>
        <div>|</div>
        <S.FooterInner>비밀번호 찾기</S.FooterInner>
        <div>|</div>
        <S.FooterInner>회원가입</S.FooterInner>
      </S.Footer>
    </S.Wrapper>
  );
}
