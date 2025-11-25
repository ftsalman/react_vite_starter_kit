import React from "react";
import { SidebarNavGroup } from "./SidebarNavGroup";
import { SidebarNavItem } from "./SidebarNavItem";

export const SidebarNavList = ({
  onGroupClick = undefined,
  currMenu = "",
  onCloseMenu = undefined,
  sidebarData = [],
}) => {
  return (
    <>
      {sidebarData.map((item, index) => {
        const { id, path, label, icon, hasSubMenu, subMenu } = item;

        const menuProps = {
          path: path,
          label: label,
          icon: icon,
        };

        if (hasSubMenu) {
          return (
            <SidebarNavGroup
              key={item.id || index}
              path={path}
              label={label}
              icon={icon}
              subMenu={subMenu} // Added missing prop
              menuList={subMenu} // For the expanded/collapsed menu components
              showMenu={currMenu === path} // Control menu visibility
              onClick={(e) => onGroupClick?.(e, path)}
              onCloseMenu={onCloseMenu}
            />
          );
        }

        return (
          <SidebarNavItem
            key={id || index}
            {...menuProps}
            onClick={onCloseMenu} // Use the passed function directly
          />
        );
      })}
    </>
  );
};