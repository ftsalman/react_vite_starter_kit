import React from "react";

export const SplashPage = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col  items-center justify-center bg-white">
        <img
          src="/svgs/brand-logo/logo-trazi.svg"
          alt="logo"
          width="250"
          className="object-contain animate-pulse"
        />
        <span className=" text-xs font-semibold animate-pulse">EDU APP</span>
      </div>
    </>
  );
};
