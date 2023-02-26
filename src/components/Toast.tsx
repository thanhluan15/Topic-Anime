import { ReactElement, useContext, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { GrFormClose } from "react-icons/gr";
import { ToastProps } from "../types/data";
import { ToastContext } from "../contexts/ToastContext";

function ToastMessage({ text }: { time: number; text: ReactElement | string }) {
  const { toggle, changeToggle } = useContext(ToastContext) as ToastProps;

  useEffect(() => {
    setTimeout(async () => {
      changeToggle(false);
    }, 3000);
  }, [toggle]);

  return (
    <div>
      <div className="w-[20rem] h-12 rounded-lg bg-black text-white z-[100] fixed top-20 right-8 font-semibold text-center flex items-center justify-center">
        {text}
        <IconContext.Provider value={{ color: "black" }}>
          <GrFormClose
            className="absolute top-1 right-2 text-2xl cursor-pointer text-white"
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
