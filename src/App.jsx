import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return (
    <div className="min-h-screen bg-white md:px-6 px-1 py-2">
      <Header />
      <div className="flex flex-col md:grid md:grid-cols-[220px_1fr] gap-4">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
