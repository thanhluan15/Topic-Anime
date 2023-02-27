import { ReactElement, useContext, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { GrFormClose } from "react-icons/gr";
import { ToastProps } from "../types/data";
import { ToastContext } from "../contexts/ToastContext";

function ToastMessage({
  text,
  time,
}: {
  time: number;
  text: ReactElement | string;
}) {
  const { toggle, changeToggle } = useContext(ToastContext) as ToastProps;

  useEffect(() => {
    setTimeout(async () => {
      changeToggle(false);
    }, time);
  }, [toggle]);

  return (
    <div>
      <div className="w-[20rem] h-12 rounded-lg bg-black text-white z-[9999999999] fixed top-20 right-8 font-semibold text-center flex items-center justify-center">
        {text}
        <GrFormClose
          className="absolute top-1 right-2 text-2xl cursor-pointer z-50 text-white fill-white"
          onClick={() => {
            changeToggle(false);
          }}
        />
      </div>
    </div>
  );
}

export default ToastMessage;


