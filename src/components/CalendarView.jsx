import React from "react";
import tooth from "../assets/tooth.jpg";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

const weekData = [
  { day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"] },
  { day: "Tues", date: 26, slots: ["08:00", "09:00", "10:00"] },
  { day: "Wed", date: 27, slots: ["12:00", "--", "13:00"] },
  { day: "Thurs", date: 28, slots: ["10:00", "11:00", "--"] },
  { day: "Fri", date: 29, slots: ["--", "14:00", "16:00"] },
  { day: "Sat", date: 30, slots: ["12:00", "14:00", "15:00"] },
  { day: "Sun", date: 31, slots: ["09:00", "10:00", "11:00"] },
];

const CalendarView = () => {
  const selectedDay = "Tues";
  const selectedSlot = "09:00";
  const thurs = "Thurs";
  const thursSlot = "11:00";
  const sat = "Sat";
  const satSlot = "12:00";
  const sun = "Sun";
  const sunSlot = "09:00";
  const sunDate = 31;

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-950">
            October 2021
          </h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full">
              <span className="text-blue-950 text-3xl">&larr;</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full">
              <span className="text-blue-950 text-3xl">&rarr;</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center">
          {weekData.map((dayObj) => (
            <div
              key={dayObj.date}
              className={`p-2 sm:p-3 text-blue-950   ${
                selectedDay === dayObj.day ? "bg-blue-50 rounded-xl" : ""
              } ${sunDate === dayObj.date ? "text-blue-950/50" : ""}`}
            >
              <p
                className={`text-[10px] sm:text-xs text-blue-950 ${
                  sun === dayObj.day ? "text-blue-950/50" : ""
                }`}
              >
                {dayObj.day}
              </p>
              <p className={`text-base sm:text-lg font-medium mt-0 sm:mt-1`}>
                {dayObj.date}
              </p>
              <div className="mt-1 sm:mt-2 space-y-1">
                {dayObj.slots.map((slot) => (
                  <div
                    key={slot}
                    className={`text-[10px] sm:text-xs py-1 px-2 rounded-md cursor-pointer select-none transition ${
                      thurs === dayObj.day && thursSlot === slot
                        ? "bg-indigo-800/50 text-white relative after:content-['•'] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:text-sm"
                        : ""
                    }
                    ${
                      sat === dayObj.day && satSlot === slot
                        ? "bg-indigo-800/50 text-white relative after:content-['•'] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:text-sm"
                        : ""
                    }
                    ${
                      sun === dayObj.day && sunSlot === slot
                        ? "bg-indigo-800/50 text-white relative after:content-['•'] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:text-sm"
                        : ""
                    }
                    ${
                      selectedDay === dayObj.day && selectedSlot === slot
                        ? "bg-indigo-900 text-white"
                        : ""
                    }`}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 gap-4 mt-4">
        <div className="bg-indigo-700 text-white p-4 rounded-2xl flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Dentist</h3>
            <img className="h-6 w-6" src={tooth} alt="tooth icon" />
          </div>
          <p className="text-sm text-indigo-200">09:00-11:00</p>
          <p className="text-sm mt-1">Dr. Cameron Williamson</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-2xl flex-[1.5]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-blue-950">
              Physiotherapy Appointment
            </h3>
            <HandThumbUpIcon className="h-6 w-6 text-yellow-300" />
          </div>
          <p className="text-sm text-blue-950">11:00-12:00</p>
          <p className="text-sm text-blue-950 mt-1">Dr. Kevin Jones</p>
        </div>
      </div>
    </>
  );
};

export default CalendarView;
