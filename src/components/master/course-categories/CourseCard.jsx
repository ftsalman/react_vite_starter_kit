import React from "react";
import Card from "../../ui/Card";
import { IconEdit, IconBin } from "../../../assets/icons/interfaceIcons2";
import { Button } from "../../ui/button/Button";

export const CourseCard = ({
  img = "",
  Icon = null,
  head = "",
  descp = "",
  externalDescp = "",
  onEdit = undefined,
  onDelete = undefined,
}) => {
  return (
    <Card  >
      <div className="flex flex-col gap-4">
        <img src={img} className="h-40 w-full  object-cover rounded-xl" />

        <div className="flex items-center gap-3">
          <span className="p-3 rounded-xl bg-orange-100 text-orange-500">
            {Icon}
          </span>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {head}
            </h4>

            <p className="text-sm text-gray-500 line-clamp-1">{descp}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <Button
            className="w-full py-2 rounded-xl text-red-500 bg-red-50"
            onClick={onDelete}
          >
            Delete
          </Button>

          <Button
            className="w-full py-2 rounded-xl bg-gray-100 text-gray-700"
            onClick={onEdit}
          >
            Edit
          </Button>
        </div>
      </div>
    </Card>
  );
};
