import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: Boolean;
  data?: any;
}

export interface IUpdateBoardInput {
  subject?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  data?: any;
  // 모르겠음
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSubject: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdate: () => void;
  onClickSubmit: () => void;
  writerError: string;
  passwordError: string;
  subjectError: string;
  contentsError: string;
  onChangeYoutubeUrl: string;
  isActive: boolean;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
