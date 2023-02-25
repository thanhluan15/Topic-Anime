import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { waifuInfo } from "../utils/dummyData";
import { ToastProps, WaifuProps } from "../types/data";
import { ToastContext } from "../contexts/ToastContext";
import supabase from "../configs/supabase";

function Comment() {
  const userRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState({} as any);
  const { toggle, changeToggle, changeText } = useContext(
    ToastContext
  ) as ToastProps;
  //   const

  console.log(userRef.current?.value);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (comment) {
      waifuInfo.push(comment);
      console.log(waifuInfo);
      changeToggle(true);
      changeText("Thêm bình luận thành công");
    }
  }

  function handleChange() {
    setComment({
      id: crypto.randomUUID(),
      waifuName: userRef.current?.value,
      src: "",
      comment: commentRef.current?.value,
    });
  }

  console.log(comment);
  console.log(waifuInfo);

  return (
    <div className="w-[500px] min-h-[300px] bg-[#232323] z-50 top-0 py-4 px-10">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col justify-center  gap-2"
      >
        <label className="text-white font-semibold" htmlFor="name">
          Name
        </label>
        <input
          className="outline-none w-full h-4 p-4 rounded-md"
          type="text"
          id="name"
          ref={userRef}
          onChange={handleChange}
        />
        <label className="text-white font-semibold" htmlFor="comment">
          Comment
        </label>
        <textarea
          className="outline-none w-full h-[100px] p-4 rounded-md"
          id="comment"
          ref={commentRef}
          onChange={handleChange}
        />
        <Button classNames="bg-white mt-3 rounded-lg mx-auto">Submit</Button>
      </form>
    </div>
  );
}

export default Comment;
