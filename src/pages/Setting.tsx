import React, { useState } from "react";
import Button from "../components/shared/Button";
import { MdAddPhotoAlternate } from "react-icons/md";
import useMultiForm from "../hooks/useMultiForm";
import Account from "./Account";
import { useUser } from "../contexts/AuthContext";
import MultiForm from "./MultiForm";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Setting = () => {
  const user = useUser();

  return (
    <div className="w-full h-[800px] flex relative">
      <Sidebar />
      <div className="w-[80%] h-full bg-[#252525] z-2 absolute top-[0] pt-10 pl-10  right-[0] m-auto">
        <div className=" text-white font-semibold text-2xl ">Profiles</div>
        <div className=" text-white font-semibold text-1xl mt-4 ">
          User Profile
        </div>
        <div className="w-[765px] h-[1px] bg-slate-700 mt-4"></div>
        <div className="flex gap-16 mt-6">
          <div className="">
            <div className=" text-slate-300 font-semibold text-sm ">AVATAR</div>
            <div className="flex gap-3 mt-3">
              <Button classNames="w-32 bg-green-500 h-10 font-medium rounded-sm">
                Change Avatar
              </Button>
              <Button classNames="w-32 bg-transparent h-10 font-medium text-white rounded-sm">
                Remove Avatar
              </Button>
            </div>
            <div className="w-[320px] h-[1px] bg-slate-700 mt-6"></div>
            <div className=" text-slate-300 font-semibold text-sm mt-6  ">
              BANNER COLOR
            </div>
            <div className="w-[320px] h-[1px] bg-slate-700 mt-8"></div>
            <div className=" text-slate-300 font-semibold text-sm mt-6  ">
              ABOUT ME
            </div>
            <div className="text-slate-300 font-semibold text-sm mt-4">
              You can use markdown and links ifs you'd like
            </div>
            <div className="bg-[#111] w-80 h-36 mt-4 mx-auto rounded-lg p-4"></div>
          </div>
          <div>
            <div className="text-slate-300 font-semibold text-sm">PREVIEW</div>
            <div className="w-[380px] h-[380px] rounded-lg bg-zinc-900 mt-4 relative">
              <div className="w-full pb-20 bg-green-500 rounded-t-lg"></div>
              <div className="w-24 h-24 rounded-full absolute top-8 left-6">
                <img
                  className="rounded-full border-avatar"
                  src={user?.user_metadata?.avatar_url}
                  alt="Avatar"
                />
                <div className=" absolute top-0 right-0 w-8 h-8 rounded-full bg-white">
                  <MdAddPhotoAlternate className="text-black absolute m-auto top-0 bottom-0 right-0 left-0" />
                </div>
                <div className=" absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-700"></div>
                {/* <div className="bg-slate-400 absolute top-0 right-0 bottom-0 left-0 m-auto opacity-70 w-16 h-16"></div> */}
                <div className="bg-[#111] w-80 h-48 mt-8 mx-auto rounded-lg p-4">
                  <div className="text-white font-semibold text-2xl">
                    {user?.user_metadata?.name} #2002
                  </div>
                  <div className="w-[280px] h-[1px] bg-slate-700 mt-4"></div>
                  <div className=" text-white font-semibold text-sm mt-4  ">
                    CUSTOMIZING MY PROFILE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to={"/"}><Button classNames="w-28 bg-green-500 mt-6">Back to Home </Button></Link>
      </div>
    </div>
  );
};

export default Setting;
