import { useContext, useRef, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./components/LoginForm";
import ToastMessage from "./components/Toast";
import { ToastContext } from "./contexts/ToastContext";
import MultiForm from "./pages/MultiForm";
import { ToastContainer } from "react-toastify";
import Button from "./components/Button";
import EmojiPicker from "emoji-picker-react";

interface ToastProps {
  toggle: boolean;
  text: string;
  changeToggle?: () => void;
}

function App() {
  const { toggle, text } = useContext(ToastContext) as ToastProps;

  console.log(toggle);
  return (
    <div className="flex justify-center bg-[#1c1c1c] relative">
      <Routes>
        <Route path="/" element={<MultiForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {toggle ? <ToastMessage text={text} time={2000} /> : <></>}
      <ToastContainer />
      {/* <EmojiPicker theme="dark" /> */}
    </div>
  );
}

export default App;
