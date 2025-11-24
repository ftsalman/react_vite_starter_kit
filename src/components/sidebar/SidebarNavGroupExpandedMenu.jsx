import { useRef } from "react";
import { useI18Next } from "../../hooks/usei18next";
import { useSidebar } from "../../hooks/useSidebar";
import { SidebarNavItem } from "./SidebarNavItem";
import PropTypes from "prop-types";
import { List } from "../ui/List";

export const SidebarNavGroupExpandedMenu = ({
  menuList = [],
  onClick = undefined,
}) => {
  const { isRtl } = useI18Next();

  const borderClassess = isRtl
    ? "border-r-[4px] border-l-0 border-r-brand-primary-400"
    : "border-l-[4px] border-r-0 border-l-brand-primary-400";

  return (
    <List
      tabIndex="0"
      ref={(e) => e?.focus()}
      data={menuList}
      render={(item) => (
        <SidebarNavItem
          {...item}
          onClick={(e) => onClick(e, item.path, "expanded")}
        />
      )}
      className={`mt-2 px-2.5 flex flex-col gap-0 border-l-[4px] ${borderClassess}`}
    />
  );
};

SidebarNavGroupExpandedMenu.propTypes = {
  menuList: PropTypes.array,
};
