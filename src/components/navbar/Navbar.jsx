import React from "react";
import { NavHamburger } from "./NavHamburger";
import { NavNotifMenu } from "./NavNotifMenu";
import { NavLangMenu } from "./NavLangMenu";
import { NavAvathar } from "./NavAvathar";
import { NavSrchBar } from "./NavSrchBar";

export const Navbar = () => {
  return (
    <>
      <div className="w-full h-[3.75rem] px-3 md:px-4 py-3 flex items-center justify-between border-b-2 md:border-b-0 border-gray-200 bg-white">
        {/* Left Side */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <NavHamburger />

          <div className="flex items-center justify-start py-2  px-2.5">
            <img
              src="/svgs/brand-logo/logo-trazi.svg"
              alt="logo"
              width="125"
              className="flex-shrink-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div>
            <NavSrchBar />
          </div>

          <NavNotifMenu />

          <div className="pr-2 flex items-center gap-2 flex-shrink-0">
            <NavLangMenu />
          </div>

          <NavAvathar />
        </div>
      </div>
    </>
  );
};
