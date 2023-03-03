import React from "react";
import { GrFormNext } from "react-icons/gr";
import Button, { ButtonProps } from "./Button";

const NextButton = ({
  classNames,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      classNames={`w-10 h-10 text-white bg-green-500 rounded-full flex justify-center items-center cursor-pointer ${classNames}`}
      onClick={onClick}
    >
      <GrFormNext className="w-5 h-5"/>
    </Button>
  );
};

export default NextButton;
