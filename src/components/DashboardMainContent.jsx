import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_2.1fr] gap-6 rounded-3xl min-h-[80vh]">
      <div className="flex flex-col gap-2 md:ml-2 xl:ml-5">
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="flex flex-col px-4 bg-[#f7fbff] rounded-br-3xl  xl:mt-0">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
