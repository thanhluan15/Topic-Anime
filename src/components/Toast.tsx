import { ReactElement, useContext, useRef } from "react";
import { AiFillCloseCircle, AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { IoMdAddCircle } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { ToastProps } from "../types/data";
import { ToastContext } from "../contexts/ToastContext";

function ToastMessage({ text }: { time: number; text: ReactElement | string }) {
  const { toggle, changeToggle } = useContext(ToastContext) as ToastProps;

  return (
    <div>
      <div className="w-[20rem] h-10 rounded-lg bg-slate-50 z-[100] fixed top-8 right-8 font-semibold text-center flex items-center justify-center">
        {text}
        <AiFillCheckCircle className="text-green-500 border-spacing-5 ml-2 text-[22px]"/>
        <IconContext.Provider value={{ color: "black" }}>
          <GrFormClose
            className="absolute top-1 right-2 text-2xl cursor-pointer"
            onClick={() => {
              changeToggle(false);
            }}
          />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ToastMessage;
