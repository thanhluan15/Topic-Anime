/** @format */

import { ReactElement, useContext, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { GrFormClose } from "react-icons/gr";
import { ToastProps } from "../types/data";
import { ToastContext } from "../contexts/ToastContext";
import { useToast } from "../contexts/ToastContext";

interface ToastMessProps {
  time: number;
  text: ReactElement | string;
}

function ToastMessage({ text, time }: ToastMessProps) {
  const { toggle, changeToggle } = useToast();

  useEffect(() => {
    const idTimeOut = setTimeout(async () => {
      changeToggle(false);
    }, time);
    return () => {
      clearTimeout(idTimeOut);
    };
  }, [toggle]); 
  

  return (
    <div>
      <div className="w-[20rem] h-12 rounded-lg bg-black text-white z-[99999999] fixed top-20 right-8 font-semibold text-center flex items-center justify-center">
        {text}
        <GrFormClose
          className="absolute top-1 right-2 text-2xl cursor-pointer text-white"
          onClick={() => {
            changeToggle(false);
          }}
        />
      </div>
    </div>
  );
}

export default ToastMessage;
