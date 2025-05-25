import React from "react";

const RoundedProgressBar = ({
  progress = 60,
  fillColor = "#b30000",
  bgColor = "#d3d3f3",
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: "10px",
        height: "12px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: fillColor,
          height: "100%",
          borderRadius: "10px",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
};

export default RoundedProgressBar;
