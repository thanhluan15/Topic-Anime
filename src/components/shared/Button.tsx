import React, { ReactElement, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactElement | string;
  classNames: string;
  onClick?: () => void;
}

const Button = ({ children, classNames, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className={`h-10 font-semibold ${classNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
