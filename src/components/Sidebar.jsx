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

const Sidebar = () => {
  return (
    <div className="bg-[#f7fbff] rounded-bl-3xl px-6 py-8 h-[calc(100vh-100px)] flex flex-col">
      <h2 className="text-sm text-blue-900/50 mb-6 p-1">General</h2>
      <div className="space-y-4 flex-1">
        <div className="flex items-center gap-3 text-blue-900 p-1">
          <SquaresPlusIcon className="h-5 w-5" />
          <span className="text-sm font-medium">Dashboard</span>
        </div>
        <div className="flex items-center gap-3 text-blue-900/50 p-1">
          <ArrowsUpDownIcon className="h-5 w-5" />
          <span className="text-sm font-medium">History</span>
        </div>
        <div className="flex items-center gap-3 text-blue-900/50 p-1">
          <CalendarDaysIcon className="h-5 w-5" />
          <span className="text-sm">Calender</span>
        </div>
        <div className="flex items-center gap-3 text-blue-900/50 p-1">
          <PlusCircleIcon className="h-5 w-5" />
          <span className="text-sm">Appointments</span>
        </div>
        <div className="flex items-center gap-3 text-blue-900/50 p-1">
          <ChartBarSquareIcon className="h-5 w-5" />
          <span className="text-sm">Statistics</span>
        </div>
        <div className="flex items-center gap-3 text-blue-900/50 p-1">
          <BeakerIcon className="h-5 w-5" />
          <span className="text-sm">Tests</span>
        </div>
        <div className="flex items-center gap-3 text-blue-900/50 p-1">
          <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
          <span className="text-sm">Chat</span>
        </div>
        <div className="flex items-center gap-3 text-blue-900/50 p-1">
          <PhoneIcon className="h-5 w-5" />
          <span className="text-sm">Support</span>
        </div>
      </div>
      <div className="flex items-center gap-3 text-blue-900/50 p-1">
        <Cog6ToothIcon className="h-5 w-5" />
        <span className="text-sm">Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
