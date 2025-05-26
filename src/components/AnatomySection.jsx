import React from "react";
import Anatomy from "../assets/Anatomy.jpg";
import {
  MagnifyingGlassPlusIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

const AnatomySection = () => {
  return (
    <div className="sm:pl-3 md:pl-8">
      <div className="relative flex bg-[#f7fbff] rounded-2xl p-2 sm:p-4 md:p-5 h-full min-h-[220px] sm:min-h-[260px]">
        <div className="w-full flex items-center justify-center">
          <img
            className="h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] pl-0 sm:pl-2 md:pl-10"
            src={Anatomy}
            alt="anatomy"
          />
          <div className="absolute top-1 right-1 sm:top-4 sm:right-4 p-1">
            <MagnifyingGlassPlusIcon className="h-6 w-6 sm:h-7 sm:w-7 text-slate-400" />
          </div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/6-translate-y-1 flex items-center bg-blue-900 text-white rounded-lg px-2 py-1 text-xs sm:text-sm">
            <HeartIcon className="h-4 w-4 sm:h-5 sm:w-5 text-red-900 mr-1" />
            <span>Healthy Heart</span>
          </div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex bg-blue-900 text-white rounded-lg px-2 py-1 text-xs sm:text-sm">
            <span>🦵 Healthy Leg</span>
          </div>
          <div className="absolute bottom-1 left-24 sm:bottom-1 sm:right-4 p-1">
            <ArrowPathIcon className="h-6 w-6 sm:h-7 sm:w-7 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
