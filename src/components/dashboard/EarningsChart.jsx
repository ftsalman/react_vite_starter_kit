import React from "react";
import { CardContainer } from "../ui/CardContainer";
import { Area, AreaChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { IconMenuDots } from "../../assets/icons/InterfaceIcons";
import { Button } from "../ui/button/Button";

export const EarningsChart = ({
  data = [],
  onFetch = () => {},
  isLoading = false,
}) => {

  // Default chart data
  const chartData =
    data.length > 0
      ? data
      : [
          { value: 0 },
          { value: 1000 },
          { value: 2500 },
          { value: 1500 },
          { value: 4000 },
          { value: 3000 },
          { value: 5000 },
        ];

  const totalEarnings =
    data.length > 0
      ? data.reduce((sum, item) => sum + (item.value || 0), 0)
      : 12602;


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-yellow-300 shadow-lg text-center rounded-lg p-3 border border-gray-200">
          <p className="text-sm font-semibold text-gray-800">
             <p className="text-xs text-gray-800"> monthly  earnings</p>
            ₹ {payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <CardContainer className="w-full p-4">
  
      {isLoading ? (
        <div className="w-full h-full rounded-lg">

          {/* Header Skeleton */}
          <div className="flex flex-col items-center text-center gap-3 mb-4">
            <div className="h-4 w-32 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-10 w-28 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-6 w-20 bg-gray-200 animate-pulse rounded-full"></div>
          </div>

          {/* Chart Skeleton */}
          <div className="w-full h-[180px] animate-pulse">
            <div className="w-full h-full bg-gray-100 rounded-lg relative overflow-hidden">
              <svg
                viewBox="0 0 500 200"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <path
                  d="M0 150 Q 125 80 250 120 T 500 90 L 500 200 L 0 200 Z"
                  fill="#e5e7eb"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        
       
        <>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 flex flex-col items-center text-center gap-2">
              <p className="text-sm text-gray-500">This month earnings</p>

              <h2 className="text-4xl font-bold text-gray-800">
                ₹ {totalEarnings.toLocaleString()}
              </h2>

              <span className="bg-green-100 px-3 py-1 rounded-full font-medium text-[#05CD99] text-sm">
                +2.45%
              </span>
            </div>

            <Button
              variant="tertiary"
              size="sm"
              className="p-2 bg-gray-50 rounded-lg"
            >
              <IconMenuDots size={20} className="text-yellow-500" />
            </Button>
          </div>

          {/* Chart */}
          <div className="w-full h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="earnGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFBE3D" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.1} />
                  </linearGradient>
                </defs>

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#FFBE3D"
                  strokeWidth={3}
                  fill="url(#earnGradient)"
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#FFBE3D"
                  strokeWidth={3}
                  dot={false}
                />

                <Tooltip content={<CustomTooltip />} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </CardContainer>
  );
};
