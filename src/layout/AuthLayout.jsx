import React from "react";
import { AuthHeader } from "../components/auth-layout-section/AuthHeader";
import { CardContainer } from "../components/ui/CardContainer";
import { AuthLayoutHeader } from "../components/auth-layout-section/AuthLayoutHeader";

export const AuthLayout = ({ children, hideBackBtn = true }) => {
  return (
    <>
      <div className="relative min-h-[100dvh] overflow-y-hidden">
        <div className="relative z-10 min-h-[100dvh] flex flex-col gap-4 ">
          {/* Header  */}
          <AuthLayoutHeader hideBackBtn={hideBackBtn} />

          <div className="flex-grow container  grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* IMAGE SECTION */}
            <div className="hidden md:flex  items-center justify-center lg:pl-[rem] pl-0 sm:pl-0">
              <div className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center pointer-events-none left-0">
                <img
                  src="/svgs/auth/auth-line.svg"
                  alt=""
                  className=" absolute top-20"
                />
              </div>
              <CardContainer className=" p-0">
                <img
                  src="/images/auth/auth-student.png"
                  className=" w-full h-[35rem] rounded-xl shadow"
                />
              </CardContainer>
            </div>

            <div className="flex items-center justify-center  ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
