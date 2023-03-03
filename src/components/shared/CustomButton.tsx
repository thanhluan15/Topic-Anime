import React, { ReactElement, ReactNode } from "react";
import Button, { ButtonProps } from "./Button";

export interface ButtonCusTomProps extends ButtonProps {
  children?: ReactElement | string;
}

const CusTomButton = ({
  children,
  classNames,
  onClick,
  ...props
}: ButtonCusTomProps) => {
  return (
    <Button classNames={`h-10 font-semibold ${classNames}`} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CusTomButton;
