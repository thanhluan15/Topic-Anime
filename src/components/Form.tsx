import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../configs/supabase";
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


  return (
    <div className="">
      <Link to={"/login"}>
        <Button classNames="bg-red-500">Login</Button>
      </Link>
      <div className="flex justify-around items-center">
        <div className="w-[400px]">
          <div className="text-white px-10">
            {step}/{steps.length - 1}
          </div>
          <div className="mt-3 min-h-[200px] ">
            {currentPage}

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
