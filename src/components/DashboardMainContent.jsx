import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import ActivityChart from "./ActivityChart";

const DashboardMainContent = () => {
  return (
    <div className="grid grid-cols-[2fr_2.2fr] gap-8  rounded-3xl min-h-[90vh]">
      <div className="flex flex-col gap-10 ">
        <DashboardOverview />
        <ActivityChart />
      </div>
      <div className="flex flex-col bg-[#f7fbff]  rounded-br-2xl ">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
