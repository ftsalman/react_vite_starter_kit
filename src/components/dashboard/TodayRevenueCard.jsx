import React from "react";
import { CardContainer } from "../ui/CardContainer";
import { Area, AreaChart, Line, ResponsiveContainer, Tooltip } from "recharts";





const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-green-400 shadow-md rounded-lg px-2 py-1 ">
      <p className="text-xs text-white">Revenue</p>
      <p className="text-base font-semibold text-white">
        ${payload[0].value}
      </p>
    </div>
  );
};




export const TodayRevenueCard = ({
  data = [],
  isLoading = false,
  onFetchData = () => {},
}) => {
  return (
    <CardContainer>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          {/* HEADER */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Today Revenue</p>
              <h2 className="text-3xl font-bold text-[#0A214F] mt-1">$324.5</h2>
            </div>

            <span className="text-sm font-semibold text-[#05CD99]">
              ▲ +7.45%
            </span>
          </div>

          {/* CHART */}
          <div className="w-full h-[245px] mt-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0BCC85" stopOpacity={0.25} />
                    <stop
                      offset="100%"
                      stopColor="#0BCC85"
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#0BCC85"
                  strokeWidth={3}
                  fill="url(#revGradient)"
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0BCC85"
                  strokeWidth={3}
                  dot={false}
                />

                <Tooltip content={<CustomTooltip />} cursor={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </CardContainer>
  );
};



const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-5 w-24 bg-gray-200 rounded mb-2"></div>
    <div className="h-8 w-32 bg-gray-300 rounded mb-4"></div>
    <div className="h-[200px] w-full bg-gray-100 rounded"></div>
  </div>
);