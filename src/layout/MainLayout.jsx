import React from "react";
import { useI18Next } from "../hooks/usei18next";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const MainLayout = () => {

   
  return (

    <>

     <div className="overflow-clip h-[100dvh] flex flex-col bg-white">
        <Navbar />
        <div className="h-[calc(100dvh-3.75rem)] relative flex flex-grow">
          {/* <Sidebar /> */}
          <div className={`dashboard-container overflow-auto overflow-x-hidden panel-scrollbar h-[calc(100dvh-3.75rem)] flex-grow duration-300 border-gray-200 bg-neutral-50 `}>
            <Outlet />
          </div>
        </div>
      </div>
    
    
    
    </>
  );
};
