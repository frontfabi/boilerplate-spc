import { ReactNode } from "react";

type DropdownMenu = {
  url: string;
  label: string;
};

export type AvatarDropdownProps = {
  title: string;
  subtitle: string;
  menu?: DropdownMenu[];
};
