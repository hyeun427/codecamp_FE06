import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: Boolean;
  data?: any;
}

export interface IUpdateBoardInput {
  subject?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  // 모르겠음
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSubject: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onClickUpdate: () => void;
  onClickSubmit: () => void;
  writerError: string;
  passwordError: string;
  subjectError: string;
  contentsError: string;
  isActive: boolean;
  isOpen: boolean;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
