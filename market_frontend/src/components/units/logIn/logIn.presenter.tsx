import * as S from "../../../../src/components/units/logIn/logIn.styles";

export default function LogInUI() {
  return (
    <S.Wrapper>
      <S.Header>LOGIN</S.Header>
      <S.InputWrapper>
        <S.MainInput
          placeholder="이메일을 입력해주세요."
          type="text"
          onChange={onChangeEmail}
        />
        <S.MainInput
          placeholder="비밀번호를 입력해주세요."
          type="password"
          onChange={onChangePassword}
        />
      </S.InputWrapper>
      <S.CheckboxWrapper>
        <S.Checkbox type="checkbox" />
        <S.BoxName>로그인 상태 유지</S.BoxName>
      </S.CheckboxWrapper>
      <S.LogInButton onClick={onClickLogin}>로그인하기</S.LogInButton>
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
