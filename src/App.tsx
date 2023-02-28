import { useContext, useRef, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./pages/LoginForm";
import ToastMessage from "./components/Toast";
import MultiForm from "./pages/MultiForm";
import { useToast } from "./contexts/ToastContext";
import Profile from "./pages/Profile";

interface ToastProps {
  toggle: boolean;
  text: string;
  changeToggle?: () => void;
}

function App() {
  const { toggle, text } = useToast();

  console.log(toggle);
  return (
    <div className="flex justify-center bg-[#1c1c1c] relative min-h-[38rem]">
      <Routes>
        <Route path="/" element={<MultiForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {toggle ? <ToastMessage text={text} time={3000} /> : <></>}
    </div>
  );
}

export default App;
