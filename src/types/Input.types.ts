import { ReactNode } from 'react';

import { FormFieldProps } from './FormField.types';

export type InputProps = Omit<FormFieldProps, 'children'> & {
  hasPassword?: boolean
  hasStatusIcon?: boolean
  value?: string
  id?: string
  onChange?: () => void
  onFocus?: () => void
  disabled?: boolean
  placeholder?: string
}
