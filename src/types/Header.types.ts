import { ReactNode } from 'react';

type HeaderMenuType = {
  url: string
  label: string
  icon: ReactNode
}
export interface HeaderProps {
  loggedIn?: boolean
  username?: string
  cpf?: string
  menu?: Array<HeaderMenuType>
}
