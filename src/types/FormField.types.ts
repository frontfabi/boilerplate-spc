import { ReactNode } from "react";

export type FieldStatusType = 'default' | 'success' | 'danger'

export type FormFieldProps = {
  children: ReactNode | JSX.Element
  status?: FieldStatusType
  helperText?: string
  label?: string
}
