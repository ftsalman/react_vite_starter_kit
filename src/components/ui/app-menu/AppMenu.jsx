import { useEffect, useRef, useState } from "react";
import { IconMoreVertical } from "../../../assets/icons/InterfaceIcons";
import { Menu } from "../Menu";
import { useToggle } from "../../../hooks/useToggle";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { cn } from "../../../utils/utils";
import { Button } from "../../../../lib/turtle-ui/components";

export const AppMenu = ({
  iniYPosition = "bottom",
  iniXPosition = "left",
  renderToggler = undefined,
  menuOptions = [],
  menuContainerProps = {},
  renderMenu = undefined,
  togglerBtnProps = {},
  className = "",
}) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const [isMenuOpen, toggleMenu] = useToggle();

  const togglerRef = useRef(null);
  const menuContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        togglerRef.current &&
        !togglerRef.current.contains(event.target) &&
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target)
      )
        toggleMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [togglerRef, menuContainerRef, toggleMenu]);

  useEffect(() => {
    if (isMenuOpen) {
      handleCalculatePosition();
      document.body.style.pointerEvents = "none";
      menuContainerRef.current?.style.setProperty(
        "pointer-events",
        "auto",
        "important"
      );
    }

    return () => {
      document.body.style.pointerEvents = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) toggleMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const handleCalculateYPosition = (rect, menuHeight, currPos = {}) => {
    const { top, bottom } = rect;
    const { innerHeight, scrollY } = window;

    const spaceBelow = innerHeight - bottom;
    const spaceAbove = top;

    const POSITIONS = {
      bottom: bottom + scrollY + 8,
      top: top + scrollY - menuHeight - 8,
    };

    let topPos = POSITIONS[iniYPosition];

    if (iniYPosition === "bottom") {
      if (spaceBelow >= menuHeight) topPos = POSITIONS.bottom;
      else if (spaceAbove >= menuHeight) topPos = POSITIONS.top;
      else topPos = POSITIONS.bottom;
    } else {
      if (spaceAbove >= menuHeight) topPos = POSITIONS.top;
      else if (spaceBelow >= menuHeight) topPos = POSITIONS.bottom;
      else topPos = POSITIONS.top;
    }

    return {
      ...currPos,
      top: topPos,
    };
  };

  const handleCalculateXPosition = (rect, menuWidht, currPos = {}) => {
    const { right, left } = rect;
    const { innerWidth, scrollX } = window;

    const spaceLeft = left;
    const spaceRight = innerWidth - right;

    const POSITIONS = {
      left: {
        left: rect.left + rect.width - menuWidht,
      },
      right: {
        left: left + scrollX,
      },
    };

    let xPos = POSITIONS[iniXPosition];

    if (iniXPosition === "left") {
      if (spaceLeft >= menuWidht) xPos = POSITIONS.left;
      else if (spaceRight >= menuWidht) xPos = POSITIONS.right;
      else xPos = POSITIONS.left; // fallback
    } else {
      if (spaceRight >= menuWidht) xPos = POSITIONS.right;
      else if (spaceLeft >= menuWidht) xPos = POSITIONS.left;
      else xPos = POSITIONS.right; // fallback
    }

    return {
      ...currPos,
      ...xPos,
    };
  };

  const handleCalculatePosition = () => {
    if (togglerRef.current && menuContainerRef.current) {
      const rect = togglerRef.current.getBoundingClientRect();
      const menuHeight = menuContainerRef.current.offsetHeight;
      const menuWidth = menuContainerRef.current.offsetWidth;

      let positionDet = {
        width: rect.width,
      };

      positionDet = handleCalculateYPosition(rect, menuHeight, positionDet);
      positionDet = handleCalculateXPosition(rect, menuWidth, positionDet);

      setPosition(positionDet);
    }
  };

  const togglerProps = {
    ...togglerBtnProps,
    ref: togglerRef,
    onClick: (e) => {
      e.stopPropagation();
      toggleMenu();
    },
  };

  const menuProps = {
    ...menuContainerProps,
    ref: menuContainerRef,
    style: position,
    onMenuClose: () => {
      toggleMenu(false);
    },
  };

  // if (!menuOptions?.length && !render) {
  //   return console.error("AppMenu: menuOptions is required.");
  // }

  if (!["bottom", "top"].includes(iniYPosition)) {
    return console.error("AppMenu: iniYPosition must be 'bottom' or 'top'");
  }

  if (!["left", "right"].includes(iniXPosition)) {
    return console.error("AppMenu: iniXPosition must be 'left' or 'right'");
  }

  return (
    <div className={cn("relative", className)}>
      {renderToggler ? (
        renderToggler(togglerProps)
      ) : (
        <Button
          className="size-8 p-1 hover:bg-gray-50"
          variant="tertiary"
          role="button"
          type="button"
          {...togglerProps}
        >
          <IconMoreVertical />
        </Button>
      )}

      {isMenuOpen &&
        ReactDOM.createPortal(
          <>
            {renderMenu ? (
              renderMenu?.(menuProps)
            ) : (
              <Menu
                {...menuProps}
                className={cn("absolute z-50 gap-0", menuProps?.className)}
              >
                {menuOptions?.map((item, index) => {
                  if (item?.render) {
                    return (
                      <Menu.MenuItem
                        key={index}
                        onClick={(e) => {
                          toggleMenu(false);
                          item?.onClick?.(e);
                        }}
                        icon={item?.icon}
                        label={item?.label}
                        {...item?.rest}
                      >
                        {item?.render(item)}
                      </Menu.MenuItem>
                    );
                  }

                  return (
                    <Menu.MenuItem
                      key={index}
                      onClick={(e) => {
                        toggleMenu(false);
                        item?.onClick?.(e);
                      }}
                      icon={item?.icon}
                      label={item?.label}
                      {...item?.rest}
                    />
                  );
                })}
              </Menu>
            )}
          </>,
          document.getElementById("portal")
        )}
    </div>
  );
};

AppMenu.propTypes = {
  menuOptions: PropTypes.array,
  menuContainerProps: PropTypes.object,
  togglerBtnProps: PropTypes.object,
  renderToggler: PropTypes.func,
  iniXPosition: PropTypes.string,
  iniYPosition: PropTypes.string,
  className: PropTypes.string,
  renderMenu: PropTypes.func,
};
