import { ComponentType } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductWrite {
  name?: string;
  remarks?: string;
  price?: string;
  contents?: string;
  tags?: string;
}

export interface IProductWriteUIProps {
  ReactQuill: ComponentType<ReactQuill.ComponentProps>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  //Map: () => void;
  onClickSubmit: (data: IProductWrite) => void;
  onChangeContents: (value: string) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: Boolean;
  fileUrls: string[];
}

export interface IProductWriteProps {
  isEdit: Boolean;
  data?: any;
}
