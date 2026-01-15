import { useSidebar } from "../../hooks/useSidebar";
import { SidebarNavGroupCollapsedMenu } from "./SidebarNavGroupCollapsedMenu";
import { SidebarNavGroupExpandedMenu } from "./SidebarNavGroupExpandedMenu";
import { SidebarNavItem } from "./SidebarNavItem";
import { useClickOutside } from "../../hooks/useClickOutside";
import PropTypes from "prop-types";

export const SidebarNavGroup = ({
  menuList = null,
  showMenu = false,
  onCloseMenu = undefined,
  ...rest
}) => {
  const menuRef = useClickOutside((e) => onCloseMenu?.(e));
  const { isExpanded } = useSidebar();

  return (
    <div className="relative min-w-full w-full">
      <SidebarNavItem showExpandIcon {...rest} />

      {isExpanded && showMenu && (
        <SidebarNavGroupExpandedMenu
          menuList={menuList}
          onClick={onCloseMenu}
        />
      )}

      {!isExpanded && showMenu && (
        <SidebarNavGroupCollapsedMenu
          menuList={menuList}
          ref={menuRef}
          onClick={onCloseMenu}
        />
      )}
    </div>
  );
};

SidebarNavGroup.propTypes = {
  menuList: PropTypes.array,
  showMenu: PropTypes.bool,
  onCloseMenu: PropTypes.func,
};
