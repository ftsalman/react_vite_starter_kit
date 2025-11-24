import React from "react";
import { List } from "../ui/List";
import { cn } from "../../utils/utils";
import {
  IconAddTask,
  IconAdmission,
  IconContacts,
  IconPeding,
} from "../../assets/icons/interfaceIcons2";

export const EnquiryStatesList = ({
  data = {},
  initialCardSchema = null,
  listClassName = "",
  ...props
}) => {
  const CARD_SCHEMA = [
    {
      label: "Pending Enquires",
      icon: <IconPeding size="24" />,
      valueKey: (data) => data?.PENDING?.[0]?.ENQUIRY ?? 0,
    },
    {
      label: "Approved Enquires",
      icon: <IconAddTask />,
      valueKey: (data) => data?.APPROVED?.[0]?.APPROVED_ENQUIRY ?? 0,
    },
  ];

  const SCHEMA = initialCardSchema ?? CARD_SCHEMA;

  return (
    <>
      <List
        className={cn(
          "container grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-3 gap-2",
          listClassName
        )}
        data={SCHEMA}
        keyExtractor={(item) => item.label}
        render={(item) => (
          <StatCard
            key={item?.label}
            icon={item?.icon}
            label={item?.label}
            value={
              typeof item?.valueKey === "function"
                ? item?.valueKey(data)
                : item?.valueKey || 0
            }
          />
        )}
      />
    </>
  );
};

const StatCard = ({ icon = "", label = "", value = 0, isLoading = false }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="size-12 flex items-center justify-center rounded-full bg-yellow-400/10 text-[#5B93FF]">
      {icon}
    </div>
    <div className="flex-grow">
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      {isLoading ? (
        <div className="mt-1 h-[29px] w-[50px] rounded-full bg-gray-300 animate-pulse"></div>
      ) : (
        <p className="font-semibold text-[22px] text-gray-800">{value}</p>
      )}
    </div>
  </div>
);
