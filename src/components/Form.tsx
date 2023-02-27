import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../configs/supabase";
import { useUser } from "../contexts/AuthContext";
import useMultiForm from "../hooks/useMultiForm";
import { waifuInfo } from "../utils/dummyData";
import AddComment from "./AddComment";
import Avatar from "./shared/Avatar";
import Button from "./shared/Button";
import { useToast } from "../contexts/ToastContext";
import Waifu from "./Waifu";
import WaifuList from "./WaifuList";

const Form = () => {
  const { step, steps, prevPage, nextPage, goToPage } = useMultiForm(
    waifuInfo.map((i, index) => {
      return (
        <Waifu
          key={index}
          waifuName={waifuInfo[index].waifuName}
          src={waifuInfo[index].src}
          comment={waifuInfo[index].comment}
        />
      );
    })
  );

  const [currentPage, setCurrentPage] = useState(goToPage(step));
  const { changeText, changeToggle } = useToast();
  const user = useUser();

  // useEffect(() => {
  //   if (user) {
  //     changeText(<div>Login Successfull</div>);
  //     changeToggle(true);
  //   }
  //   else{
  //     changeText(<></>)
  //     changeToggle(false);
  //   }
  // }, [user]);

  async function signOut() {
    await supabase.auth.signOut();
    window.location.reload();
    changeText(<div>Logout successfull</div>);
    changeToggle(true);
  }

  console.log(user);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center h-20 bg-transparent w-full fixed top-0 z-[99999] border-behind ">
        <h1 className="text-white ml-16 font-bold text-lg">MARU</h1>
        {!user ? (
          <Link to={"/login"}>
            <Button classNames="bg-red-500 text-white mr-8">Login</Button>
          </Link>
        ) : (
          <div className="flex mr-8 items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar
                classNames=""
                src={user?.user_metadata?.avatar_url}
                alt=""
              />
              <p className="text-white font-semibold">
                {user?.user_metadata?.name}
              </p>
            </div>

            <Button classNames="bg-red-600 text-white rounded-sm" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        )}
      </div>
      <div className="flex justify-around items-center mt-24">
        <div className="w-[400px]">
          <div className="text-white px-10">
            Page: {step}/{steps.length - 1}
          </div>
          <div>
            <div className="mt-3 h-[250px] mb-20">
              <div className="mt-3 h-[100px] mb-20">{currentPage}</div>
            </div>
          </div>

          <div className="m-6">
            <Button
              classNames="bg-green-500 rounded-sm"
              onClick={() => {
                prevPage();
                setCurrentPage(goToPage(step - 1));
              }}
            >
              Previous
            </Button>
            <Button
              classNames="bg-green-500 rounded-sm ml-4"
              onClick={() => {
                nextPage();
                setCurrentPage(goToPage(step + 1));
              }}
            >
              Next
            </Button>
          </div>
        </div>
        <AddComment />
      </div>
      <WaifuList />
    </div>
  );
};

export default Form;
