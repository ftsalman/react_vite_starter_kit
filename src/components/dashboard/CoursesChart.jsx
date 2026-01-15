import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const CoursesChart = ({
  data = [],
  onFetch = () => {},
  isLoading = false,
}) => {
  const CustomeTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
    return (
      <div className="bg-yellow-400 shadow-lg rounded-lg p-3 ">
        <p className="text-sm font-bold text-white">{label}</p>

        {payload.map((item, index) => (
          <p key={index} className="text-sm text-white">
            {item.name}: {item.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
  };
  return (
    <>
      <div className="w-full bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Courses</h2>

        {isLoading ? (
          <div className="w-full h-[225px] flex items-center justify-center">
            <p>Loading chart data...</p>
          </div>
        ) : (
          <>
            <div className="w-full h-[225px]">
              <ResponsiveContainer>
                <BarChart
                  data={data}
                  barSize={16}
                  barGap={20}
                  barCategoryGap="5%"
                >
                  <CartesianGrid
                    strokeDasharray="4"
                    vertical={false}
                    stroke="#ddd"
                  />

                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#8A8A8A" }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#8A8A8A" }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomeTooltip />} />
                  <Bar
                    dataKey="programming"
                    stackId="courses"
                    fill="#FFD700"
                    stroke="none"
                  />
                  <Bar
                    dataKey="design"
                    stackId="courses"
                    fill="#FFA500"
                    stroke="none"
                  />
                  <Bar
                    dataKey="technology"
                    stackId="courses"
                    fill="#6A5500"
                    stroke="none"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-around gap-6 mt-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#FFD700]"></span>
                <p>Programming</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#FFA500]"></span>
                <p>Graphic Design</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#6A5500]"></span>
                <p>Technology</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
