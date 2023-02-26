import supabase from "../configs/supabase";

interface UserProps {
  username: string;
  src: string;
}

interface CommentProps {
  user: UserProps;
  content: string;
}

export async function getComment() {
  // const
}

export async function addComment(props: CommentProps) {
  const { data, error } = await supabase.from("comment").insert(props);
  if (data) {
    console.log("Thêm dữ liệu thành công!");
  }
  if (error) {
    console.log("Thêm dữ liệu thất bại ?");
  }
}
