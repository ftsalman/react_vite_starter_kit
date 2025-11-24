import { useI18Next } from "../../hooks/usei18next";
import { Menu } from "../ui/Menu";
import { SidebarNavGroupMenuItem } from "./SidebarNavGroupMenuItem";
import PropTypes from "prop-types";

export const SidebarNavGroupCollapsedMenu = ({
  menuList = [],
  ref = null,
  ...rest
}) => {
  const { isRtl, t } = useI18Next();

  const menuPosClass = isRtl
    ? "right-full top-0 mr-1.5"
    : "left-full top-0 ml-1.5";

  return (
    <Menu
      ref={ref}
      className={`absolute z-50 ${menuPosClass} max-w-[190px] flex flex-col gap-1`}
    >
      {menuList?.map(({ path, label, id }) => (
        <SidebarNavGroupMenuItem
          key={id}
          label={label}
          path={path}
          {...rest}
          onClick={(e) => rest.onClick(e, path)}
        />
      ))}
    </Menu>
  );
};
SidebarNavGroupCollapsedMenu.propTypes = {
  menuList: PropTypes.array,
  ref: PropTypes.any,
};
