import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BellIcon, UserIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="items-center justify-between grid grid-cols-[220px_1fr_1fr] pr-1">
      <div className="text-2xl rounded-tl-3xl p-5 bg-[#f7fbff] pr-10">
        <span className="font-bold text-cyan-400">Health</span>
        <span className="font-bold text-blue-900">care.</span>
      </div>
      <div className="m-2 w-[95%] flex items-center bg-white rounded-lg border border-gray-200">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-3" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 outline-none"
        />
        <BellIcon className="h-5 w-5 text-blue-900 mr-3" />
      </div>
      <div className="flex items-center bg-[#f7fbff] justify-end p-3 rounded-tr-3xl h-full w-full gap-2">
        <div className="h-10 w-10 rounded-lg bg-cyan-200 flex items-center justify-center">
          <UserIcon className="h-6 w-6 text-cyan-600" />
        </div>
        <button className="h-10 w-10 rounded-lg bg-blue-900 text-white text-2xl flex items-center justify-center">
          +
        </button>
      </div>
    </div>
  );
};

export default Header;
