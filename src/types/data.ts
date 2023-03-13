import { User } from "@supabase/supabase-js";
import { ReactElement } from "react";

export interface WaifuProps {
  id?: string | number;
  waifuName: string | undefined;
  src?: string;
  comment?: string;
  deleteComment?:()=> void;
}

export interface ToastProps {
  toggle: boolean;
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

export type AdditionalUser = User & {
  userName: string;
  avatar?: string;
  createdAt: string;
  email: string;
};

export interface Profile {
  bio: string;
  userId?: string;
}

export interface Comment {
  content: string;
  createdAt: string;
  updatedAt: string;
  userId?: string;
}
