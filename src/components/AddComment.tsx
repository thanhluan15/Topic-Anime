import React, { ReactElement, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import Comment from "./Comment";
import { useUser } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const AddComment = () => {
  const [open, setOpen] = useState(false);
  const [warning, setWarning] = useState<ReactElement>();

  const user = useUser();

  function handleOpen() {
    if (user) {
      setOpen(!open);
      setWarning(<></>);
    } else {
      setWarning(
        <div className="absolute bottom-[-3rem] w-72 text-white font-semibold">
          Please <Link to={"/login"}>login</Link> to comment
        </div>
      );
    }
  }

  return (
    <div className="flex gap-10 relative">
      <div className="w-[10rem] h-[10rem] bg-[#232323] justify-center items-center gap-4 flex-col p-5">
        <p className="text-white text-center">Add Comment</p>
        <IconContext.Provider value={{ color: "white" }}>
          <IoMdAddCircle
            onClick={() => {
              handleOpen();
            }}
            className="mt-4 ml-8 text-[50px] cursor-pointer text-white hover:text-yellow-300"
          />
        </IconContext.Provider>
      </div>
      {open ? (
        <div className="absolute right-52  z-[300] ">
          <Comment />
        </div>
      ) : (
        <>{warning}</>
      )}
    </div>
  );
};

export default AddComment;
