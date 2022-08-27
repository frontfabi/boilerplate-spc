import {ReactNode} from 'react';

interface DropdownMenu {
  url: string
  label: string
}

export interface AvatarDropdownProps {
  title: string
  subtitle: string
  menu?: DropdownMenu[]
}
