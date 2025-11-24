import React, { useState } from "react";
import {
  SidebarBodyWrapper,
  SidebarContentWrapper,
  SidebarWrapper,
} from "./SidebarWrappers";
import { SidebarToggleBtn } from "./SidebarToggleBtn";
import { useSidebar } from "../../hooks/useSidebar";
import { SidebarNavList } from "./SidebarNavList";
import { SIDEBAR_DATA } from "../../constants/SidebarData";
import { Button } from "../ui/button/Button";
import { IconLogout, IconSupport } from "../../assets/icons/interfaceIcons2";

export const Sidebar = () => {
  const [currMenu, setCurrMenu] = useState(null);
  const { isOpen, isExpanded, onCollapse, onToggle, closeSidebar } =
    useSidebar();

  return (
    <>
      <SidebarWrapper>
        <SidebarToggleBtn />
        <SidebarBodyWrapper hasScrollable={!isExpanded && currMenu}>
        
          <SidebarContentWrapper>
            <SidebarNavList sidebarData={SIDEBAR_DATA} />
          </SidebarContentWrapper>
        </SidebarBodyWrapper>
        <SidebarContentWrapper className=" sticky bottom-0 inset-0 z-[49] mt-auto gap-4 py-4 justify-end  border-gray-200 text-gray-400">
           
           <Button
           variant="tertiary"
           size="md"
              className={`
              w-full flex justify-start rounded-md gap-2
               p-1 bg-white text-red-500
               duration-300
            `}
           >
          <IconLogout size="20"/>
           {isExpanded && (
              <span className="whitespace-nowrap">Log Out</span>
            )}
           </Button>
        </SidebarContentWrapper>
      </SidebarWrapper>
    </>
  );
};
