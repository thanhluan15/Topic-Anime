import React, { ReactElement, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode | string;
  classNames: string;
  onClick?: () => void;
}

const Button = ({ children, classNames, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className={`h-10 w-20 font-semibold ${classNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
