import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return (
    <div className="bg-white px-6 py-2 ">
      <Header />
      <div className="grid grid-cols-[220px_4fr]">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
