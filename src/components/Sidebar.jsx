import React from "react";
import {
  SquaresPlusIcon,
  ArrowsUpDownIcon,
  CalendarDaysIcon,
  PlusCircleIcon,
  ChartBarSquareIcon,
  BeakerIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PhoneIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import { NavLink } from "react-router-dom";

const menu = [
  { icon: SquaresPlusIcon, text: "Dashboard", isActive: true },
  { icon: ArrowsUpDownIcon, text: "History" },
  { icon: CalendarDaysIcon, text: "Calendar" },
  { icon: PlusCircleIcon, text: "Appointments" },
  { icon: ChartBarSquareIcon, text: "Statistics" },
  { icon: BeakerIcon, text: "Tests" },
  { icon: ChatBubbleOvalLeftEllipsisIcon, text: "Chat" },
  { icon: PhoneIcon, text: "Support" },
];

const Sidebar = () => {
  return (
    <aside className="bg-[#f7fbff] rounded-bl-3xl px-2 md:px-6 py-4 md:py-8 min-h-[100px] md:h-[calc(100vh-110px)] flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
      <div className="hidden md:block mb-6 p-1 text-sm text-blue-900/50">
        General
      </div>
      <nav className="flex flex-row md:flex-col gap-2 md:gap-3 flex-1">
        <NavLink />
        {menu.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-2 md:px-1 py-2 md:py-1 cursor-pointer transition
              ${
                item.isActive
                  ? " text-blue-900 font-semibold"
                  : "text-blue-900/50 hover:bg-blue-50"
              }
              `}
          >
            <item.icon className="h-5 w-5" />
            <span className="hidden md:inline text-sm">{item.text}</span>
          </div>
        ))}
      </nav>
      <div className="flex items-center gap-3 px-2 md:px-1 py-2 md:py-1 text-blue-900/50 mt-2 md:mt-10">
        <Cog6ToothIcon className="h-5 w-5" />
        <span className="hidden md:inline text-sm">Settings</span>
      </div>
    </aside>
  );
};

export default Sidebar;
