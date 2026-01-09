import React from "react";
import { useI18Next } from "../hooks/usei18next";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";

export const MainLayout = () => {
  return (
    <>
      <div className="overflow-clip h-[100dvh] flex flex-col bg-gradient-to-br from-gray-300 via-yellow-50 to-yellow-100 ">
        {/* <Banner/> */}
        <div className=" p-2">
          <Navbar />
        </div>
        <div className="h-[calc(100dvh-3.75rem)] relative flex flex-grow">
          {/* <Sidebar /> */}
          <div
            className={`dashboard-container overflow-auto overflow-x-hidden no-scrollbar h-[calc(100dvh-4.75rem)] flex-grow duration-300 border-gray-200 bg-gradient-to-br from-gray-300 via-yellow-50 to-yellow-100 `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
