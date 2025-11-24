import React, { useState } from "react";
import { StatesList } from "../components/dashboard/StatesList";
import { EnrollmentsChart } from "../components/dashboard/EnrollmentsChart";
import { EarningsChart } from "../components/dashboard/EarningsChart";
import { CoursesChart } from "../components/dashboard/CoursesChart";
import { TodayRevenueCard } from "../components/dashboard/TodayRevenueCard";
import { GreetHeader } from "../components/dashboard/GreetHeader";

const ENROLL_DATA = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 70 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 65 },
  { month: "May", value: 55 },
  { month: "Jun", value: 134, highlight: true },
  { month: "Jul", value: 50 },
  { month: "Aug", value: 90 },
  { month: "Sep", value: 30 },
  { month: "Oct", value: 75 },
  { month: "Nov", value: 45 },
  { month: "Dec", value: 60 },
];

const DUMMY_CARD = {
  TOTAL: [{ TOTAL_USERS: 1520 }],
  ACTIVE: [{ ACTIVE_USERS: 430 }],
  COURSES: [
    {
      TOTAL_COURSES: 92,
      ACTIVE_COURSES: 76,
      CHART_VALUES: [10, 20, 15, 25, 8],
    },
  ],
};

const EARNINGS_DATA = [
  { value: 20 },
  { value: 40 },
  { value: 30 },
  { value: 60 },
  { value: 50 },
  { value: 70 },
  { value: 65 },
  { value: 80 },
];

const COURSES_DATA = [
  { month: "Dec", programming: 200, design: 150, technology: 120 },
  { month: "Jan", programming: 220, design: 180, technology: 140 },
  { month: "Feb", programming: 150, design: 120, technology: 100 },
  { month: "Mar", programming: 180, design: 150, technology: 120 },
  { month: "Apr", programming: 100, design: 60, technology: 50 },
  { month: "May", programming: 160, design: 130, technology: 90 },
  { month: "Jun", programming: 240, design: 200, technology: 150 },
  { month: "Jul", programming: 230, design: 180, technology: 140 },
  { month: "Aug", programming: 150, design: 100, technology: 80 },
  { month: "Sep", programming: 170, design: 140, technology: 100 },
];

const REVENUE_DATA = [
  { value: 30 },
  { value: 22 },
  { value: 40 },
  { value: 28 },
  { value: 50 },
  { value: 38 },
  { value: 60 },
  { value: 55 },
  { value: 62 },
  { value: 58 },
];

export const DashboardPage = () => {
  const [fetchStatus, setFetchStatus] = useState("loading"); // loading, default, error
  const [dashboardData, setDashboardData] = useState(null);

  const userName = dashboardData?.user?.name || "Admin";

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="container p-4 flex-grow space-y-8">
        {/* Header Section */}
        <GreetHeader
          head={
            <span className="text-md font-semibold">
              Hi <span className="text-primary">{userName}</span> ,
            </span>
          }
          isLoading={false}
          descp="Welcome to Tarzi"
        />

        {/* States card Section  */}
        <StatesList data={DUMMY_CARD} isLoading={false} />

        {/* Charts section */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
          <div className="xl:col-span-2">
            <EnrollmentsChart data={ENROLL_DATA} isLoading={false} />
          </div>

          <div className="xl:col-span-1">
            <EarningsChart
              data={EARNINGS_DATA}
              isLoading={false}
              onFetch={() => {}}
            />
          </div>
        </div>

        {/*CoursesChart && TodayRevenueCard  */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
          <div className="xl:col-span-2">
            <CoursesChart data={COURSES_DATA} isLoading={false} />
          </div>

          <div className="xl:col-span-1">
            <TodayRevenueCard data={REVENUE_DATA} isLoading={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
