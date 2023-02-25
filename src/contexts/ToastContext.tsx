import React, { createContext, ReactNode, useContext, useState } from "react";

export const ToastContext = createContext({});

function ToastProvider({ children }: { children: ReactNode }) {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");

  function changeToggle(toggle: boolean) {
    setToggle(toggle);
  }

  function changeText(text: string) {
    setText(text);
  }

  return (
    <ToastContext.Provider value={{ toggle, changeToggle, text, changeText }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
