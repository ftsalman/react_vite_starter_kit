import clsx from "clsx";
import { twMerge } from "tailwind-merge";





export const SCREEN_SIZES = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
export const sortArr = (array, key, sortType) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return sortType === true ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return sortType === true ? 1 : -1;
    }
    return 0;
  });
};


export const formatDateAndTime = (timestamp) => {
  if (!timestamp) return;

  const date = new Date(timestamp);

  // Format date as "DD-MM-YYYY"
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;

  // Format time as "HH:MM:SS"
  const formattedTime = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;

  return { date: formattedDate, time: formattedTime };
};
