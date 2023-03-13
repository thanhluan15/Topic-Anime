import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillCheckCircle, AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import supabase from "../configs/supabase";
import { EmojiProps, ToastProps, WaifuProps } from "../types/data";
import { useUser } from "../contexts/AuthContext";
import Avatar from "./shared/Avatar";
import { useToast } from "../contexts/ToastContext";
import { useQuery } from "@tanstack/react-query";

const Waifu = ({ waifuName, src, comment,id, ...props }: WaifuProps) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [emoji, setEmoji] = useState<EmojiProps[]>(null!);
  const { toggle, changeToggle, changeText } = useToast();

  useEffect(() => {
    getEmojis();
  }, []);

  function handleLike() {
    setToggleIcon(!toggleIcon);
    changeToggle(true);
    changeText(
      <div className="flex items-center">
        Đã thích bình luận
        <AiFillCheckCircle className="text-green-500 border-spacing-5 ml-2 text-[20px]" />
      </div>
    );
  }

  function handleUnLike() {
    setToggleIcon(!toggleIcon);
    changeToggle(true);
    changeText(
      <div className="flex items-center">
        Đã bỏ thích bình luận
        <AiFillCheckCircle className="text-green-500 border-spacing-5 ml-2 text-[20px]" />
      </div>
    );
  }

  async function getEmojis() {
    const data: any = await supabase.from("sce_reactions").select("*");
    setEmoji(data?.data);
  }

  // const { data: emoji } = useQuery({
  //   queryKey: ["emoji"],
  //   queryFn: () => {
  //     const { data }: any = supabase.from("sce_reactions").select("*");
  //     return data;
  //   },
  // });

  console.log(emoji);

  const handleDelete = () =>{

  }

  // console.log(emoji);

  return (
    <div className="w-[20rem] min-h-[10rem] rounded-lg py-8 px-6 bg-[#232323] border-zinc-400 relative">
      <div className="w-28 h-12 flex gap-4 ">
        <Avatar
          classNames=""
          src={
            src ||
            "https://i.pinimg.com/236x/7a/5c/43/7a5c4381a86b45f122fc94499091b8f8.jpg"
          }
          alt="Waifu"
        />
        <span className="min-w-[10rem] font-semibold text-white items-center mt-5">
          @{waifuName}
        </span>
      </div>
      <AiOutlineDelete onClick={()=> handleDelete()} size={25} color={"white"} className="absolute right-5 top-12 font-bold text-2xl" />
      <div className="mt-3 text-slate-300">"{comment}" </div>
      <div className="mt-4 flex gap-3">
        <IconContext.Provider value={{ color: "white", size: "25px" }}>
          {!toggleIcon ? (
            <>
              <AiOutlineHeart cursor="pointer" onClick={handleLike} />
            </>
          ) : (
            <>
              <AiFillHeart cursor="pointer" onClick={handleUnLike} />
            </>
          )}
          <BiCommentDetail cursor="pointer" />
          <RiErrorWarningLine cursor="pointer" />
        </IconContext.Provider>

        <div className="flex gap-3">
          {emoji?.map((i: EmojiProps, index: number) => {
            return (
              <div key={index}>
                <img className="w-5 h-5 cursor-pointer" src={i?.url} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Waifu;
