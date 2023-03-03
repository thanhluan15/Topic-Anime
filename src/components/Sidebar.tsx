import React from "react";
import { Link } from "react-router-dom";
import Button from "./shared/Button";

const Sidebar = () => {
  return (
    <div className="pt-10 pl-20 text-white">
      <div className="text-slate-300 font-semibold text-sm">USER SETTINGS</div>
      <div className="flex flex-col">
        <Link to="/profile">
          <Button classNames="w-44 hover:bg-gray-800 rounded text-start pl-2 h-8 mt-2">
            My Account
          </Button>
        </Link>
        <Link to="/setting">
          <Button classNames="w-44 hover:bg-gray-800 rounded text-start pl-2 h-8">
            Profiles
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
