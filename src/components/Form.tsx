import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../configs/supabase";
import { useUser } from "../contexts/AuthContext";
import useMultiForm from "../hooks/useMultiForm";
import { waifuInfo } from "../utils/dummyData";
import AddComment from "./AddComment";
import Button from "./Button";
import Waifu from "./Waifu";
import WaifuList from "./WaifuList";

const Form = () => {
  const { step, steps, prevPage, nextPage, goToPage } = useMultiForm(
    waifuInfo.map((i, index) => {
      return (
        <Waifu
          key={waifuInfo[index].id}
          waifuName={waifuInfo[index].waifuName}
          src={waifuInfo[index].src}
          comment={waifuInfo[index].comment}
        />
      );
    })
  );

  const [currentPage, setCurrentPage] = useState(goToPage(step));
  const user = useUser();

  console.log(user);

  return (
    <div className="">
      {!user ? (
        <Link to={"/login"}>
          <Button classNames="bg-red-500">Login</Button>
        </Link>
      ) : (
        <div>
          <img
            className="w-20 h-20"
            src={user?.user_metadata?.avatar_url}
            alt=""
          />
          <Button
            classNames="bg-red-600"
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.reload();
            }}
          >
            Sign Out
          </Button>
        </div>
      )}
      <div className="flex justify-around items-center">
        <div className="w-[400px]">
          <div className="text-white px-10">
            {step}/{steps.length - 1}
          </div>
          <div className="mt-3 min-h-[200px] ">{currentPage}</div>

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
