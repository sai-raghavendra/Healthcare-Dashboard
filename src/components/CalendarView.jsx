import React, { useState } from "react";
import tooth from "../assets/tooth.jpg";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

const weekData = [
  { day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"] },
  { day: "Tues", date: 26, slots: ["08:00", "09:00", "10:00"] },
  { day: "Wed", date: 27, slots: ["12:00", "13:00"] },
  { day: "Thurs", date: 28, slots: ["10:00", "11:00"] },
  { day: "Fri", date: 29, slots: ["14:00", "16:00"] },
  { day: "Sat", date: 30, slots: ["12:00", "14:00", "15:00"] },
  { day: "Sun", date: 31, slots: ["09:00", "10:00", "11:00"] },
];

const CalendarView = () => {
  const [selectedDay, setSelectedDay] = useState("Tues");
  const [selectedSlot, setSelectedSlot] = useState("09:00");

  return (
    <div className="p-6 shadow-sm ">
      <div className="p-4 w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">October 2021</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <span className="text-gray-600">←</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <span className="text-gray-600">→</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4 text-center">
          {weekData.map((dayObj) => (
            <div
              key={dayObj.date}
              className={`p-3 rounded-xl cursor-pointer transition-all ${
                selectedDay === dayObj.day ? "bg-blue-50" : ""
              }`}
              onClick={() => setSelectedDay(dayObj.day)}
            >
              <p className="text-xs text-gray-400">{dayObj.day}</p>
              <p
                className={`text-lg font-medium mt-1 ${
                  selectedDay === dayObj.day ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {dayObj.date}
              </p>
              <div className="mt-2 space-y-1">
                {dayObj.slots.map((slot) => (
                  <div
                    key={slot}
                    className={`text-xs py-1 px-2 rounded-full ${
                      selectedDay === dayObj.day && selectedSlot === slot
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-50 text-gray-600"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSlot(slot);
                    }}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-6">
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
            <h3 className="font-medium text-gray-800">
              Physiotherapy Appointment
            </h3>
            <HandThumbUpIcon className="h-6 w-6 text-purple-500" />
          </div>
          <p className="text-sm text-gray-600">11:00-12:00</p>
          <p className="text-sm text-gray-700 mt-1">Dr. Kevin Jones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
