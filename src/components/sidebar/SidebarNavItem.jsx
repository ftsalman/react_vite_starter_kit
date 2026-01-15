import React from "react";
import clsx from "clsx";
import { useSidebar } from "../../hooks/useSidebar";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/utils";
import { buttonVariants } from "../ui/button/buttonVariants";
import { IconCheverontDown } from "../../assets/icons/interfaceIcons2";
import PropTypes from "prop-types";

export const SidebarNavItem = ({
  onClick = undefined,
  label = null,
  icon = null,
  path = null,
  showExpandIcon = false,
  showBadge = false,
  ...rest
}) => {
  const { isExpanded } = useSidebar();

  // ✅ Single function to handle NavLink and Button styling
  const getClasses = ({ isActive }) => {
    const baseClasses =
      "h-10 px-2 min-w-10 flex-shrink-0 flex items-center justify-start gap-2 duration-300 border-0";
    const widthClass = isExpanded ? "w-full" : "w-10";

    return cn(
      buttonVariants({
        variant: isActive ? "brand-primary" : "tertiary",
        className: isActive ? "text-white " : "text-gray-500 hover:bg-gray-100",
      }),
      baseClasses,
      widthClass
    );
  };

  if (!path) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={getClasses({ isActive: false })}
        {...rest}
      >
        {!isExpanded && showBadge && (
          <div className="absolute top-2.5 right-3 size-2 rounded-full bg-red-600" />
        )}

        {icon && <div className="min-w-6 flex justify-center">{icon}</div>}

        <div
          className={`${
            isExpanded ? "w-full not-sr-only" : "w-0 sr-only"
          } flex items-center justify-between gap-2 duration-300`}
        >
          <div className="flex-grow line-clamp-1 break-all">{label}</div>
          {showExpandIcon && (
            <div className="flex-shrink-0">
              <IconCheverontDown />
            </div>
          )}
          {showBadge && (
            <div className="size-1.5 flex-shrink-0 rounded-full bg-red-600"></div>
          )}
        </div>
      </button>
    );
  }

  return (
    <NavLink
      to={path}
      end
      onClick={onClick}
      className={getClasses}
      {...rest}
    >
      {!isExpanded && showBadge && (
        <div className="absolute top-2.5 right-3 size-2 rounded-full bg-red-600" />
      )}

      {icon && <div className="min-w-6 flex justify-center">{icon}</div>}

      <div
        className={`${
          isExpanded ? "w-full not-sr-only" : "w-0 sr-only"
        } flex items-center justify-between gap-2 duration-300`}
      >
        <div className="flex-grow line-clamp-1 break-all    ">{label}</div>
        {showExpandIcon && (
          <div className="flex-shrink-0">
            <IconCheverontDown />
          </div>
        )}
        {showBadge && (
          <div className="size-1.5 flex-shrink-0 rounded-full bg-red-600"></div>
        )}
      </div>
    </NavLink>
  );
};

SidebarNavItem.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.element,
  path: PropTypes.string,
  showExpandIcon: PropTypes.bool,
  showBadge: PropTypes.bool,
};
