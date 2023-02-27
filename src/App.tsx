import { useContext, useRef, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./pages/LoginForm";
import ToastMessage from "./components/Toast";
import MultiForm from "./pages/MultiForm";
import { useToast } from "./contexts/ToastContext";

interface ToastProps {
  toggle: boolean;
  text: string;
  changeToggle?: () => void;
}

function App() {
  const { toggle, text } = useToast();

  console.log(toggle);
  return (
    <div className="flex justify-center bg-[#1c1c1c] relative">
      <Routes>
        <Route path="/" element={<MultiForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {toggle ? <ToastMessage text={text} time={3000} /> : <></>}
    </div>
  );
}

export default App;
