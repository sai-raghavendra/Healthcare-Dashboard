import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BellIcon, UserIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_1fr] items-center gap-2 rounded-t-3xl">
      <div className="text-2xl rounded-tl-3xl p-4 bg-[#f7fbff] flex items-center justify-center md:justify-start">
        <span className="font-bold text-cyan-400">Health</span>
        <span className="font-bold text-blue-900">care.</span>
      </div>
      <div className="pl-5 pr-5">
        <div className="flex items-center w-full rounded-lg border border-gray-200 mx-2 my-3 md:my-0 px-2 py-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent focus:outline-none px-1 text-sm"
          />
          <BellIcon className="h-5 w-5 text-blue-900 ml-2" />
        </div>
      </div>
      <div className="flex items-center bg-[#f7fbff] justify-end p-3 rounded-tr-3xl gap-3">
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
