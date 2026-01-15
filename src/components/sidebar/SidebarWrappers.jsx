import { useI18Next } from "../../hooks/usei18next";
import { useSidebar } from "../../hooks/useSidebar";
import { useWindowSize } from "../../hooks/useWindowSize";
import { cn, SCREEN_SIZES } from "../../utils/utils";
import PropTypes from "prop-types";

export const SidebarWrapper = ({ children = null }) => {
  const { isOpen, isExpanded, onToggle } = useSidebar();
  const { isRtl } = useI18Next();
  const screeSize = useWindowSize();

  const isSmallDevice = screeSize.width < SCREEN_SIZES.md;

  const sidebarWidth = isExpanded
    ? "w-[300px] max-w-full sm:max-w-[12.5rem] sm:w-[12.5rem]"
    : "sm:w-[3.75rem]";

  const getTransitions = () => {
    if (isSmallDevice) {
      if (isRtl) {
        if (isOpen) return "translate-x-0";
        else return "translate-x-full";
      } else {
        if (isOpen) return "translate-x-0";
        else return "-translate-x-full";
      }
    }
    return "";
  };

  return (
    <div className="flex">
      <div
        className={`${getTransitions()} absolute top-0 ${
          isRtl ? "right-0" : "left-0"
        } h-full md:top-0 md:h-auto z-50 md:relative ${sidebarWidth} flex-shrink-0 ${
          isRtl ? " border-l-2 md:border-l-0" : " border-r-2 md:border-r-0"
        } border-gray-200  duration-300  bg-white`}
      >
        {children}
      </div>
      {isOpen && (
        <div
          onClick={() => onToggle()}
          className="absolute inset-0 z-[49] md:hidden flex-grow bg-black/30 transition-transform duration-300 backdrop-blur-sm"
        ></div>
      )}
    </div>
  );
};

SidebarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SidebarContentWrapper = ({ children, className = "" }) => (
  <div className={cn("p-2 pt-3 flex flex-col gap-2", className)}>
    {children}
  </div>
);

SidebarContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SidebarBodyWrapper = ({ children, hasScrollable = true }) => {
  const scrollbarClass = hasScrollable
    ? "panel-scrollbar overflow-y-auto overflow-x-hidden"
    : "";

  return (
    <div
      className={`flex flex-col gap-3 h-full duration-300 ${scrollbarClass}`}
    >
      <div className="absolute top-0 left-0 h-4 w-full z-50 bg-gradient-to-b from-white to-transparent"></div>
      {children}
    </div>
  );
};

SidebarBodyWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  hasScrollable: PropTypes.bool,
};
