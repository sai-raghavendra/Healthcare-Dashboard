import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";

const DashboardOverview = () => {
  return (
    <div className="mb-4">
      <div className="flex flex-col sm:flex-row justify-between text-blue-900 mb-2">
        <p className="font-bold text-2xl">Dashboard</p>
        <p className="text-xs font-medium mt-2 sm:mt-0">This Week ⌄</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:gap-10">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default DashboardOverview;
