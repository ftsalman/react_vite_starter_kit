import React from "react";
import { List } from "../ui/List";
import { cn } from "../../utils/utils";
import { IconUsers } from "../../assets/icons/interfaceIcons2";
import { IconBook, IconMenuDots } from "../../assets/icons/InterfaceIcons";
import { MiniChart } from "./MiniChart";

export const StatesList = ({
  data = {},
  initialCardSchema = null,
  listClassName = "",
  ...props
}) => {
  // ✅ Default Card Schema
  const CARD_SCHEMA = [
    {
      label: "Total Users",
      icon: <IconUsers size="24" />,
      valueKey: (data) => data?.TOTAL?.[0]?.TOTAL_USERS ?? 0,
      IconclassName: "bg-[#FFB200] text-white",
    },
    {
      label: "Active Users",
      icon: <IconMenuDots size="24" />,
      valueKey: (data) => data?.ACTIVE?.[0]?.ACTIVE_USERS ?? 0,
      IconclassName: "bg-yellow-100/40 text-white",
    },
    {
      label: "Total Courses",
      icon: <IconBook size=" 24" />,
      valueKey: (data) => data?.COURSES?.[0]?.TOTAL_COURSES ?? 0,
      IconclassName: "bg-[#FFB200] text-white",
    },
    {
      label: "Active Courses",
      icon: (
        <MiniChart
          values={data?.COURSES?.[0]?.CHART_VALUES ?? [10, 20, 15, 25, 8]}
          size=""
        />
      ),
      valueKey: (data) => data?.COURSES?.[0]?.ACTIVE_COURSES ?? 0,
      IconclassName: "bg-yellow-50 ",
    },
  ];

  const SCHEMA = initialCardSchema ?? CARD_SCHEMA;
  return (
    <>
      <List
        className={cn(
          "container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2",
          listClassName
        )}
        data={SCHEMA}
        keyExtractor={(item) => item.label}
        render={(item) => (
          <StatCard
            key={item.label}
            icon={item.icon}
            label={item.label}
            value={
              typeof item.valueKey === "function"
                ? item.valueKey(data)
                : item.valueKey || 0
            }
            IconclassName={item.IconclassName}
            {...props}
          />
        )}
      />
    </>
  );
};

export const StatCard = ({
  icon = "",
  label = "",
  value = 0,
  isLoading = false,
  iconPosition = "left",
  IconclassName = "",
}) => (
  <div className={cn("flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200",  iconPosition === "right" && "flex-row-reverse")}>
    <div
      className={cn(
        "size-12 flex items-center justify-center rounded-full",
        IconclassName
      )}
    >
      {icon}
    </div>
    <div className="flex-grow">
      <p className="text-sm font-semibold  whitespace-nowrap text-gray-500">{label}</p>
      {isLoading ? (
        <div className="mt-1 h-[29px] w-[50px] rounded-full bg-gray-300 animate-pulse"></div>
      ) : (
        <p className="font-semibold text-[22px] text-gray-800">{value}</p>
      )}
    </div>
  </div>
);
