import React from "react";
import { CardContainer } from "../ui/CardContainer";
import {
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { IconChatBar } from "../../assets/icons/interfaceIcons2";
import { Button } from "../ui/button/Button";

// ⭐ CUSTOM TOOLTIP
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-white text-gray-900 px-3 py-2 rounded-lg shadow border border-gray-200">
      <p className="text-xs font-semibold">{label}</p>
      <p className="text-sm">
        Enrollments: <span className="font-bold">{payload[0].value}</span>
      </p>
    </div>
  );
};

export const EnrollmentsChart = ({
  onFetch = () => {},
  data = [],
  isLoading = false,
}) => {
  const TOTAL_ENROLLMENTS =
    data.length > 0
      ? data.reduce((sum, item) => sum + (item.value || 0), 0)
      : 134;

  return (
    <CardContainer>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm text-gray-500">Enrollments</p>
          <p className="text-[32px] font-bold text-[#0B1A39] leading-none">
            {TOTAL_ENROLLMENTS}
          </p>
        </div>

        <Button
          variant="tertiary"
          size="sm"
          className="p-2 bg-gray-50 rounded-lg "
        >
          <IconChatBar size="20" />
        </Button>
      </div>

      {/* Chart */}
      <div className="w-full h-[15rem] mt-2">
        {isLoading ? (
          <div className="flex flex-col gap-3 h-full animate-pulse px-2">
            <div className="flex items-end justify-between h-full gap-2">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 w-7 h-7 rounded-md"
                  style={{
                    height: `${40 + Math.random() * 60}%`,
                  }}
                ></div>
              ))}
            </div>

            <div className="flex justify-between mt-2">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-3 w-6 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        ) : data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Tooltip cursor={false} content={<CustomTooltip />} />

              <ReferenceLine
                y={134}
                stroke="#AAAAAA"
                strokeDasharray="4 4"
                strokeWidth={1}
              />

              {/* ✔ Custom Highlight Bars */}
              <Bar
                dataKey="value"
                radius={[6, 6, 0, 0]}
                barSize={30}
                shape={(props) => {
                  const { x, y, width, height, payload } = props;
                  const isHighlight = payload.highlight;

                  return (
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      rx="6"
                      ry="6"
                      fill={isHighlight ? "#000000" : "#E8ECF7"}
                    />
                  );
                }}
              />

              <XAxis
                dataKey="month"
                tick={{ fill: "#8A8A8A" }}
                axisLine={false}
                tickLine={false}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No data available</p>
          </div>
        )}
      </div>
    </CardContainer>
  );
};
