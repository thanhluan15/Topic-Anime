import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { ToastContext } from "../contexts/ToastContext";
import { toast } from "react-toastify";
import supabase from "../configs/supabase";
import { useQuery } from "@tanstack/react-query";
import { EmojiProps, ToastProps, WaifuProps } from "../types/data";


const Waifu = ({ waifuName, src, comment, ...props }: WaifuProps) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [toggleComment, setToggleComment] = useState(false);
  // const [emoji, setEmoji] = useState([]);
  const { toggle, changeToggle, changeText } = useContext(
    ToastContext
  ) as ToastProps;

  function handleLike() {
    setToggleIcon(!toggleIcon);
    changeToggle(true);
    changeText("Đã thích bình luận");
  }

  function handleUnLike() {
    setToggleIcon(!toggleIcon);
    changeToggle(true);
    changeText("Đã bỏ thích bình luận");
  }

  const { data: emoji }= useQuery({
    queryKey: ["emoji"],
    queryFn: () => supabase.from("sce_reactions").select("*"),
  });

  console.log(emoji);

  return (
    <div className="w-[20rem] min-h-[20rem] rounded-lg py-8 px-6 bg-[#232323]">
      <div className="w-28 h-12 flex gap-4">
        <img
          className="rounded-full w-12 h-12"
          src={
            src ||
            "https://i.pinimg.com/236x/7a/5c/43/7a5c4381a86b45f122fc94499091b8f8.jpg"
          }
          alt="Waifu"
        />
        <span className="min-w-[10rem] font-semibold text-white items-center mt-5">
          @{waifuName || ""}
        </span>
      </div>
      <div className="mt-3 text-slate-300">"{comment || "aaaa"}" </div>
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
          {emoji?.data?.map((i: EmojiProps, index: number) => {
            return (
              <div key={index}>
                <img className="w-5 h-5 " src={i?.url} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Waifu;
