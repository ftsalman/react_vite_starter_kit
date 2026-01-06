import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { cn } from "../../utils/utils";
import { Button } from "./button/Button";
import { IconCross } from "../../assets/icons/InterfaceIcons";
import { usePreventScroll } from "../../hooks/usePreventScroll";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useI18Next } from "../../hooks/usei18next";

export const Drawer = ({
  children,
  isOpen = true,
  isHidden,
  className,
  isFullScreen = false,
  backdropClassName = "",
  onClose,
  drawerClassName = "",
  isOutsideClickable = true,
  isEscEnabled = true,
}) => {
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  usePreventScroll();

  useFocusTrap(drawerRef, onClose, isEscEnabled);

  const { isRtl } = useI18Next();

  const drawerStyles = {
    default: isFullScreen
      ? "h-full w-full"
      : "h-full  w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-1/3",
    backDrop: isHidden
      ? "pointer-events-none bg-transparant"
      : "backdrop-filter backdrop-blur-sm bg-gray-800/30",
    content: isHidden && "hidden",
    openAnimation: isOpen ? "slide-in" : "slide-out",
    collapsed: "w-6 h-[300px] border-gray-300",
    innerBody: isHidden ? "  opacity-0" : "  opacity-100",
  };

  const handleBackdropClick = (e) => {
    if (
      e.button === 0 &&
      e.target === backdropRef?.current &&
      isOutsideClickable
    ) {
      onClose(e, "backdrop-close");
    }
  };

  return (
    <>
      {createPortal(
        <div
          className={cn(
            `panel-scrollbar fixed z-50 inset-0 right-0 pl-4 flex ${
              isRtl ? "justify-start" : "justify-end"
            } items-center ${drawerStyles.backDrop} duration-300`,
            backdropClassName
          )}
          ref={backdropRef}
          // onClick={(e) => {
          //   if (e.target === backdropRef?.current && isOutsideClickable) {
          //     onClose(e, "backdrop-close");
          //   }
          // }}
          onMouseDown={handleBackdropClick}
        >
          <div
            className={cn(
              `${drawerStyles[isHidden ? "collapsed" : "default"]} ${
                drawerStyles.openAnimation
              }  flex rounded-l-[20px] transition-all duration-300 bg-transparant border border-gray-100 bg-white`,
              drawerClassName
            )}
            ref={drawerRef}
          >
            <div
              className={cn(
                `flex-grow flex flex-col justify-between ${drawerStyles.innerBody} duration-300 rounded-l-[20px] bg-white`,
                className
              )}
            >
              {children}
            </div>
          </div>
        </div>,
        document.getElementById("portal")
      )}
    </>
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  isHidden: PropTypes.bool,
  className: PropTypes.string,
  isFullScreen: PropTypes.bool,
  onClose: PropTypes.func,
  backdropClassName: PropTypes.string,
  drawerClassName: PropTypes.string,
  isOutsideClickable: PropTypes.bool,
  isEscEnabled: PropTypes.bool,
};

const Footer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "sticky bottom-0 w-full h-[80px] px-4 py-3 flex items-center gap-2 rounded-bl-[20px] border-t border-gray-200 bg-white ",
        className
      )}
    >
      {children}
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Drawer.Footer = Footer;

const Header = ({ className, innerClassName, children, onClose }) => {
  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-50 w-full px-4 py-3 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 rounded-tl-[20px] border-b border-gray-200 bg-white",
          className
        )}
      >
        <div
          className={cn("flex items-center gap-3 flex-grow", innerClassName)}
        >
          {children}
        </div>
        {onClose && (
          <Button
            size="md"
            variant="tertiary"
            className="hover:bg-gray-50 transition-colors text-primary-500 w-10 p-2.5 rounded-lg ml-auto"
            onClick={(e) => onClose(e, "closebtn-close")}
          >
            <IconCross size={20} />
          </Button>
        )}
      </div>
    </>
  );
};

Header.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
};

Drawer.Header = Header;

const Body = ({ children, className, innerClass }) => {
  return (
    <div
      className={cn(
        "flex-grow p-4 h-max overflow-auto panel-scrollbar",
        className
      )}
    >
      <div className={innerClass}>{children}</div>
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  innerClass: PropTypes.string,
};

Drawer.Body = Body;
