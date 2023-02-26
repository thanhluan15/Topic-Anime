import { PostgrestClient } from "@supabase/postgrest-js";

const postgrest = new PostgrestClient("http://localhost:3000");

export default postgrest;
