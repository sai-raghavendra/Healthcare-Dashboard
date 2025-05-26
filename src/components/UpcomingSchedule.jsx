import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <div className="px-4 md:px-6 py-4">
      <h2 className="font-semibold text-blue-950 mb-4">
        The Upcoming Schedule
      </h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 mb-2">On Thursday</p>
          <div className="justify-between flex flex-wrap sm:flex-nowrap gap-3">
            <SimpleAppointmentCard
              title="Health checkup complete"
              time="11:00 AM"
              icon="💉"
            />
            <SimpleAppointmentCard
              title="Ophthalmologist"
              time="14:00 PM"
              icon="👁️"
            />
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">On Saturday</p>
          <div className="flex flex-wrap sm:flex-nowrap gap-3">
            <SimpleAppointmentCard
              title="Cardiologist"
              time="12:00 AM"
              icon="❤️"
            />
            <SimpleAppointmentCard
              title="Neurologist"
              time="16:00 PM"
              icon="👨‍⚕️"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
