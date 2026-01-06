import React from "react";
import PropTypes from "prop-types";
import { useI18Next } from "../../hooks/usei18next";
import { cn } from "../../utils/utils";

const ToggleButton = ({
  isOn,
  handleToggle,
  className,
  knobClassName,
  onColor = "bg-[#3183FF]",
  offColor = "bg-[#8E8B8B]",
 onBorderColor = " bg-yellow-400", 
  offBorderColor = "bg-gray-200",
  onKnobColor = "bg-white",
  offKnobColor = "bg-white",
  disabled = false,
  title = "",
}) => {
  const { isRtl } = useI18Next();

  return (
    <div
      title={title}
      // onClick={handleToggle}
      onClick={!disabled ? handleToggle : undefined}
      className={cn(
        `w-[40px] h-[20px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300`,
        isOn ? `${onColor} ${onBorderColor}` : `${offColor} ${offBorderColor}`,
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
    >
      <div
        className={cn(
          `h-[16px] w-[16px] rounded-full shadow-md transform duration-300`,
          isOn
            ? `${isRtl ? "-translate-x-4" : "translate-x-4"} ${onKnobColor}`
            : `translate-x-0 ${offKnobColor}`,
          knobClassName
        )}
      ></div>
    </div>
  );
};

ToggleButton.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  knobClassName: PropTypes.string,
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  onBorderColor: PropTypes.string,
  offBorderColor: PropTypes.string,
  onKnobColor: PropTypes.string,
  offKnobColor: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};

export default ToggleButton;
