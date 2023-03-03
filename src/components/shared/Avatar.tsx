import React from "react";

interface Avatar {
  src?: string;
  classNames: string;
  alt: string;
}

const Avatar = ({ src, classNames, ...props }: Avatar) => {
  return (
    <img
      className={`w-20 h-12 rounded-full object-cover object-center ${classNames}`}
      src={src}
      alt="Avatar"
    />
  );
};

export default Avatar;
