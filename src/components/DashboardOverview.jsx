import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";

const DashboardOverview = () => {
  return (
    <div>
      <div className="flex justify-between text-blue-900">
        <p className="font-bold text-2xl">Dashboard</p>
        <p className="text-xs font-medium">This Week ⌄</p>
      </div>
      <div class="grid grid-cols-[3fr_2fr]">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default DashboardOverview;
