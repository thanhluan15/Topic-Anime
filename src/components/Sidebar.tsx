import React from "react";
import Button from "./shared/Button";

const Sidebar = () => {
  return (
    <div className="pt-10 pl-20 text-white">
      <div className="text-slate-300 font-semibold text-sm">USER SETTINGS</div>
      <div className="flex flex-col">
        <Button classNames="w-44 hover:bg-gray-800 rounded text-start pl-2 h-8 mt-2">
          My Account
        </Button>
        <Button classNames="w-44 hover:bg-gray-800 rounded text-start pl-2 h-8">
          Profiles
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
