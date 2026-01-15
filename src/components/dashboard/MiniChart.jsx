import React from "react";

export const MiniChart = ({ values = [] }) => {
  // Normalize heights (max = 32px)
  const maxHeight = 32;
  const maxValue = Math.max(...values, 1);
  return (
    <div className="flex items-end gap-[3px]">
      {values.map((v, i) => {
        const height = (v / maxValue) * maxHeight;

        return (
          <div
            key={i}
            style={{ height: `${height}px` }}
            className="w-[5px] bg-yellow-400 rounded-md transition-all duration-300"
          ></div>
        );
      })}
    </div>
  );
};
