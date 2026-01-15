import React from "react";
import Tag from "../ui/Tag";

export const TableHeader = ({
  title = "",
  count = null,
  countVariant = "yellow",
  Actions = null,
  className = "",
  sticky = true,
}) => {
  return (
    <>
      <div
        className={`
        ${sticky ? "sticky top-[3.76rem] z-40" : ""}
        w-full p-3 bg-white border-b border-gray-200
        rounded-lg rounded-b-none
        flex flex-col items-start gap-4
        md:flex-row md:items-center md:justify-between
        ${className}
      `}
      >
        <div className="flex items-center gap-3">
         
          {title && <h3 className="text-md font-semibold">{title}</h3>}

         
          {count !== null && (
            <Tag
              size="sm"
              variant={countVariant}
              className="rounded-full h-6 font-semibold"
              label={count}
            />
          )}
        </div>

     
        {Actions && (
          <div className="flex items-center gap-3">{Actions}</div>
        )}
      </div>
    </>
  );
};
