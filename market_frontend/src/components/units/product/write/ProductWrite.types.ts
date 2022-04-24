import { ComponentType } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";

export interface IProductWrite {
  ProductName?: string;
  ProductDetail?: string;
  Price?: string;
  Tag?: string;
}

export interface IProductWriteUIProps {
  ReactQuill: ComponentType<ReactQuill.ComponentProps>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  // onSubmit: DetailedHTMLProps<
  //   FormHTMLAttributes<HTMLFormElement>,
  //   HTMLFormElement
  // >;
  onClickSubmit: (data: IProductWrite) => void;
  onChangeContents: (value: string) => void;
}
