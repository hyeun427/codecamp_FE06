import { ChangeEvent } from "react";

export interface ISignInUIProps {
  emailError: string;
  nameError: string;
  passwordError: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
}
