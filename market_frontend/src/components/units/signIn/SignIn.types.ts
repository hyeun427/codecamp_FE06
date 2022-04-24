import { ChangeEvent } from "react";
import { boolean } from "yup";

export interface ISignInUIProps {
  emailError: string;
  nameError: string;
  passwordError: string;
  emailCheckError: string;
  passwordCheckError: string;
  passwordSameCheckError: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  emailCheck: boolean;
  passwordCheck: boolean;
  passwordSameCheck: boolean;
}
