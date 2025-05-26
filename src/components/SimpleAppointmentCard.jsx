import React from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="bg-purple-100 rounded-2xl px-8 p-5 flex items-start justify-between gap-10">
      <div>
        <p className="text-sm font-semibold text-blue-950">{title}</p>
        <p className="text-xs text-blue-950 mt-1">{time}</p>
      </div>
      <span className="text-xl">{icon}</span>
    </div>
  );
};

export default SimpleAppointmentCard;
