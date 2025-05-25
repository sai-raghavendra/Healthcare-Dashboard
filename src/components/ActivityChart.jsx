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

const ActivityChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 200,
        padding: "18px",
        background: "#f9fbff",
        borderRadius: "12px",
      }}
    >
      <span className="flex justify-between">
        <h3
          style={{ marginBottom: "10px", fontWeight: "bold", color: "#1e3a8a" }}
        >
          Activity
        </h3>
        <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
          3 appointments on this week
        </p>
      </span>
      <ResponsiveContainer width="100%" height="100%">
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
            barSize={6}
          />
          <Bar
            dataKey="b"
            stackId="stack"
            fill="#6c63ff"
            radius={[10, 10, 0, 0]}
            barSize={6}
          />
          <Bar
            dataKey="c"
            stackId="stack"
            fill="#d3d3d3"
            radius={[10, 10, 0, 0]}
            barSize={6}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <p style={{ fontSize: "12px", textAlign: "right", marginTop: "8px" }}></p>
    </div>
  );
};

export default ActivityChart;
