import { forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Button } from "./button/Button";
import { cn } from "../../utils/utils";

export const Menu = ({ children, className, onClose, ref, ...rest }) => {
  const internalRef = useClickOutside(onClose);

  useImperativeHandle(ref, () => internalRef.current);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      ref={internalRef}
      className={cn(
        "min-w-[150px] p-1.5 flex flex-col rounded-lg border-2 border-gray-100 shadow-xl shadow-black/10 bg-white",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

Menu.displayName = "Menu";

Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  ref: PropTypes.any,
};

const MenuItem = ({
  children,
  icon,
  iconClassName = "",
  label,
  className,
  onClick,
  ...rest
}) => {
  return (
    <>
      <button
        {...rest}
        onClick={onClick}
        className={cn(
          "p-2 flex items-center gap-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 duration-300",
          className
        )}
      >
        {children ? (
          children
        ) : (
          <>
            <span className={cn("flex-shrink-0", iconClassName)}>{icon}</span>
            {label}
          </>
        )}
      </button>
    </>
  );
};

MenuItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  iconClassName: PropTypes.string,
};

MenuItem.displayName = "MenuItem";

Menu.MenuItem = MenuItem;
