import * as S from "./SignIn.styles";
import { ISignInUIProps } from "./SignIn.types";

export default function SignInUI(props: ISignInUIProps) {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.Header>회원가입</S.Header>
        <S.InputWrapper>
          <S.InnerWrapper>
            <S.Title>이메일</S.Title>
            <S.MainInput
              placeholder="이메일을 입력해주세요."
              type="text"
              onChange={props.onChangeEmail}
            />
            <S.Error>{props.emailError}</S.Error>
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.Title>이름</S.Title>
            <S.MainInput
              placeholder="이름을 입력해주세요."
              type="text"
              onChange={props.onChangeName}
            />
            <S.Error>{props.nameError}</S.Error>
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.Title>비밀번호</S.Title>
            <S.MainInput
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.Title>비밀번호 확인</S.Title>
            <S.MainInput
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.InnerWrapper>
        </S.InputWrapper>

        <S.SignInButton onClick={props.onClickLogin}>
          회원가입하기
        </S.SignInButton>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
