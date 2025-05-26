import React from "react";
import RoundedProgressBar from "./RoundedProgressBar";
import tooth from "../assets/tooth.jpg";
import lungs from "../assets/lungs.png";
import bone from "../assets/bone.jpg";

const HealthStatusCards = () => {
  return (
    <div>
      <div className="bg-white flex flex-col gap-2 h-full rounded-2xl pb-2">
        <div className="p-4 bg-blue-50 rounded-2xl flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <img className="h-9 w-9 object-contain" src={lungs} alt="lungs" />
            <h1 className="text-blue-900 font-semibold">Lungs</h1>
          </div>
          <p className="text-xs pt-1 text-gray-500/50">Date: 26 Oct 2021</p>
          <RoundedProgressBar
            progress={70}
            fillColor="#8b0000"
            bgColor="#ccccee"
          />
        </div>
        <div className="p-4 bg-blue-50 rounded-2xl flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <img className="h-10 w-10 object-contain" src={tooth} alt="tooth" />
            <h1 className="text-blue-900 font-semibold">Teeth</h1>
          </div>
          <p className="text-xs pt-1 text-gray-500/50">Date: 26 Oct 2021</p>
          <RoundedProgressBar
            progress={70}
            fillColor="#96F97B"
            bgColor="#ccccee"
          />
        </div>
        <div className="p-4 bg-blue-50 rounded-2xl flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <img className="h-10 w-10 object-contain" src={bone} alt="bone" />
            <h1 className="text-blue-900 font-semibold">Bone</h1>
          </div>
          <p className="text-xs pt-1 text-gray-500/50">Date: 26 Oct 2021</p>
          <RoundedProgressBar
            progress={70}
            fillColor="#C36241"
            bgColor="#ccccee"
          />
        </div>
      </div>
      <p className="text-right text-xs text-blue-900 font-semibold  ">
        Details →
      </p>
    </div>
  );
};

export default HealthStatusCards;
