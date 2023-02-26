import { ReactElement } from "react";

export interface WaifuProps {
  id?: string | number;
  waifuName: string | undefined;
  src?: string;
  comment?: string;
}

export interface ToastProps {
  toggle?: boolean;
  changeToggle: (toggle: boolean) => void;
  text: ReactElement;
  changeText: (text: ReactElement) => void;
}

export interface EmojiProps {
  type: string;
  createAt: string;
  label: string;
  url: string;
  metadata?: string;
}
