import { ReactNode } from "react";

export type ModalButton = {
  label?: string
  action?: () => void
}
export type ModalProps = {
  children?: ReactNode | JSX.Element
  title?: string
  primaryActionButton?: ModalButton
  secondaryActionButton?: ModalButton
  isOpen?: boolean
}
