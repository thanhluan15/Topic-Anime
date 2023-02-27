import { PostgrestError } from "@supabase/supabase-js";
import { EmojiProps } from "./data";

export interface EmojiResponseSupabase {
  count: number;
  data: EmojiProps[];
  error: PostgrestError;
  status: number;
  statusText: string;
}
