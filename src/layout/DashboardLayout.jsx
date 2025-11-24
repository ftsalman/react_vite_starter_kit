import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { useI18Next } from "../hooks/usei18next";

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { isRtl } = useI18Next();

  const containerClasses = isRtl
    ? "md:rounded-tr-[20px] md:border-t-2 border-gray-50 border-r-2 h-[calc(100dvh-9.75rem)] md:h-[calc(100dvh-7.5rem)]"
    : "md:rounded-tl-[20px] md:border-t-2 border-gray-50 border-l-2 h-[calc(100dvh-3.75rem)]";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-clip h-[100dvh] flex flex-col bg-white">
      <Navbar />
      <div className={`${containerClasses} relative flex flex-grow`}>
        <Sidebar />
        <div
          className={`dashboard-container overflow-auto overflow-x-hidden panel-scrollbar flex-grow ${containerClasses} duration-300 border-gray-200  bg-[#FAFBFC]`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};