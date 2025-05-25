import React from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="bg-purple-100 rounded-2xl p-4 flex items-start justify-between gap-5">
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
      <span className="text-xl">{icon}</span>
    </div>
  );
};

export default SimpleAppointmentCard;
