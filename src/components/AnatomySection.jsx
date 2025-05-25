import React from "react";
import Anatomy from "../assets/Anatomy.jpg";

import {
  MagnifyingGlassPlusIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

import ActivityChart from "./ActivityChart";

const AnatomySection = () => {
  return (
    <div className="pl-8">
      <div className="relative flex bg-[#f7fbff] rounded-2xl p-5">
        <div className="h-[300px] flex items-center justify-center">
          <img className="h-full pl-10" src={Anatomy} alt="" />
          <div class="absolute top-0 right-0 rounded">
            <MagnifyingGlassPlusIcon className="h-[30px] stroke-slate-900 px-4 py-2" />
          </div>
          <div className="pl-0 absolute top-1/3 left-1/2 transform -translate-x-1/6 -translate-y-6 flex bg-blue-900 text-white rounded">
            <HeartIcon className="h-[20px] text-red-900 stroke-slate-900" />
            <p className="text-xs">HealthyHeart</p>
          </div>
          <div className="absolute bottom-1/4 right-1/2 transform -translate-x-1/4 -translate-y-6 flex bg-blue-900 text-white rounded">
            <p className="p-1 text-xs">🦵 HealthyLeg</p>
          </div>
          <div className="absolute bottom-1 right-16">
            <ArrowPathIcon className="h-[30px] stroke-slate-900 px-20 py-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
