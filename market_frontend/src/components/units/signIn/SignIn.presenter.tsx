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
            <S.Error>{props.emailCheckError}</S.Error>
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
              /////////////////////////////////type password로 바꾸기
              type="text"
              onChange={props.onChangePassword}
            />
            <S.Require>
              최소 8자, 문자,숫자,특수 문자가 각각 반드시 1자 이상
              포함되어야합니다.
            </S.Require>
            <S.Error>{props.passwordError}</S.Error>
            <S.Error>{props.passwordCheckError}</S.Error>
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.Title>비밀번호 확인</S.Title>
            <S.MainInput
              placeholder="비밀번호를 입력해주세요."
              /////////////////////////////////type password로 바꾸기
              type="text"
              onChange={props.onChangePasswordCheck}
            />

            <S.Error>{props.passwordError}</S.Error>
            <S.Error>{props.passwordCheckError}</S.Error>
            <S.Error>{props.passwordSameCheckError}</S.Error>
          </S.InnerWrapper>
        </S.InputWrapper>

        <S.SignInButton onClick={props.onClickLogin}>
          회원가입하기
        </S.SignInButton>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
