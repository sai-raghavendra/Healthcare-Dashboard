import React from "react";
import RoundedProgressBar from "./RoundedProgressBar";
import tooth from "../assets/tooth.jpg";
import lungs from "../assets/lungs.png";
import bone from "../assets/bone.jpg";

const HealthStatusCards = () => {
  return (
    <div className="">
      <div className="bg-white flex flex-col justify-between pl-2 p-1 gap-1 h-[330px]">
        <div className="p-4 bg-blue-50 rounded-2xl">
          <div className="flex gap-2 ">
            <img className="h-[35px]" src={lungs} alt="" />
            <h1 className="pt-1 text-blue-900 font-semibold">Lungs</h1>
          </div>
          <span>
            <p className=" text-xs pt-1 text-gray-500">Date:26Oct2021</p>
            <p className="mt-1">
              <RoundedProgressBar
                progress={70}
                fillColor="#8b0000"
                bgColor="#ccccee"
              />
            </p>
          </span>
        </div>
        <div className="p-4 bg-blue-50 rounded-2xl">
          <div className="flex gap-2">
            <img className="h-[40px]" src={tooth} alt="" />
            <h1 className="text-blue-900 pt-2 font-semibold">Teeth</h1>
          </div>
          <div>
            <p className="pt-1 text-xs text-gray-500">Date:26Oct2021</p>
            <p className="pt-1">
              <RoundedProgressBar
                progress={70}
                fillColor="#ADD8E6"
                bgColor="#ccccee"
              />
            </p>
          </div>
        </div>
        <div className="p-4 bg-blue-50 rounded-2xl">
          <div className="flex gap-2 ">
            <img className="h-[40px]" src={bone} alt="" />
            <h1 className="text-blue-900 font-semibold pt-2">Bone</h1>
          </div>
          <div>
            <p className="pt-1 text-xs text-gray-500">Date:26Oct2021</p>
            <p className="pt-1">
              <RoundedProgressBar
                progress={70}
                fillColor="#C36241"
                bgColor="#ccccee"
              />
            </p>
          </div>
        </div>
      </div>
      <p className="text-right text-xs text-blue-900 font-semibold pt-2">
        Delails →
      </p>
    </div>
  );
};

export default HealthStatusCards;
