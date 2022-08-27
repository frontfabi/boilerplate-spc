import { ReactNode } from 'react';

export interface ModalButton {
  label?: string
  action?: () => void
}
export interface ModalProps {
  children?: ReactNode | JSX.Element
  title?: string
  primaryActionButton?: ModalButton
  secondaryActionButton?: ModalButton
  isOpen?: boolean
}
