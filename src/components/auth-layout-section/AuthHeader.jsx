import React from "react";

export const AuthHeader = () => {

    const AUTH_HEADERS = [
  {
    head: "Affiliate Partner Program",
    descp: `Be a part of our mission to empower local businesses using smart automation. Refer Flowbee.io and earn while helping others grow! Together, let's make business easier.`,
  },
];

  return (

    <div className="flex items-center justify-center flex-col gap-4">
      {AUTH_HEADERS.map((item, index) => (
        <div key={index} className="text-center max-w-[500px] min-h-[200px] ">
          <h4 className=" text-[24px] font-bold bg-gradient-to-r from-[#DD6A57] via-[#FDD500] to-[#FCB143] bg-clip-text text-transparent">
            {item.head}
          </h4>
          <h4 className="text-md mt-2 text-gray-800">{item.descp}</h4>
        </div>
      ))}
    </div>
  );
};
