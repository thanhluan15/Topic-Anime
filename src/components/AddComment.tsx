import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import {IconContext} from "react-icons";
import Comment from "./Comment";

const AddComment = () => {
  const [open, setOpen] = useState(false)

  function handleOpen (){
    setOpen(true)
    console.log("")
  }

  return (
    <div className="flex gap-10">
    <div className="w-[10rem] h-[10rem] bg-[#232323] justify-center items-center gap-4 flex-col p-5">
      <p className="text-white text-center">Add Comment</p>
      <IconContext.Provider value={{color:"white"}}>
        <IoMdAddCircle onClick={()=>{setOpen(!open)}} className="mt-4 ml-8 text-[50px] cursor-pointer hover:text-[60px]"/>
      </IconContext.Provider>
    </div>
    {
      open &&
      <Comment></Comment>
    }
    </div>
  );
};
 
export default AddComment;
