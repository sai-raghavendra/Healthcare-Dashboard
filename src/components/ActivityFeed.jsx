import React from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", a: 50, b: 20, c: 30 },
  { day: "Tues", a: 70, b: 60, c: 40 },
  { day: "Wed", a: 30, b: 20, c: 10 },
  { day: "Thurs", a: 50, b: 30, c: 20 },
  { day: "Fri", a: 80, b: 60, c: 30 },
  { day: "Sat", a: 20, b: 30, c: 50 },
  { day: "Sun", a: 60, b: 40, c: 20 },
];

const ActivityFeed = () => {
  return (
    <div className="w-full rounded-2xl p-3 sm:p-5 bg-[#f9fbff] flex flex-col">
      <div className="flex justify-between text-xs sm:text-base">
        <h3 className="font-bold text-blue-900">Activity</h3>
        <span className="text-gray-500">3 appointments on this week</span>
      </div>
      <ResponsiveContainer width="100%" height={120}>
        <ComposedChart data={data} barGap={4}>
          <CartesianGrid stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis hide />
          <Tooltip />
          <Bar
            dataKey="a"
            stackId="stack"
            fill="#00cfd5"
            radius={[10, 10, 0, 0]}
            barSize={5}
          />
          <Bar
            dataKey="b"
            stackId="stack"
            fill="#6c63ff"
            radius={[10, 10, 0, 0]}
            barSize={5}
          />
          <Bar
            dataKey="c"
            stackId="stack"
            fill="#d3d3d3"
            radius={[10, 10, 0, 0]}
            barSize={5}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityFeed;
