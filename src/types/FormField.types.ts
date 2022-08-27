import { ReactNode } from "react";

export type FieldStatusType = "default" | "success" | "warning" | "error";

export type FormFieldProps = {
  children: ReactNode | JSX.Element;
  status?: FieldStatusType;
  helperText?: string;
  label?: string;
};
