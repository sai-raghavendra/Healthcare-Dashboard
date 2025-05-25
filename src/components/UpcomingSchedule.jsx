import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <div className=" pl-6 pt-4">
      <h2 className="font-semibold text-blue-900 mb-2">
        The Upcoming Schedule
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 mb-2">On Thursday</p>
          <div className="flex gap-3">
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
          <p className="text-sm text-gray-500 mb-3">On Saturday</p>
          <div className="flex gap-3">
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
