import { ReactNode } from "react";

export type StyleType = 'normal' | 'outline' | 'link'
export type StatusType = 'default' | 'primary' | 'secondary' | 'alternative'

export type ButtonProps = {
  children: ReactNode | JSX.Element
  btnStyle: StyleType
  btnStatus: StatusType
  disabled?: boolean
  onClick: () => void
}