import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return (
    <div className="bg-slate-200 p-4">
      <div className="bg-white max-w-[1440px] mx-auto px-6 py-4  rounded-3xl ">
        <Header />
        <div className="grid grid-cols-[220px_1fr]">
          <Sidebar />
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
