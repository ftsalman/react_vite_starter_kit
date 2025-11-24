import PropTypes from "prop-types";
import { cn } from "../../utils/utils";
import { IconCheverontDown } from "../../assets/icons/InterfaceIcons";
import { inputboxVariants } from "./input-Box/inputBoxVariants";

const Select = ({
  className = "",
  id = "",
  name = "",
  children,
  hasError = false,
  ...rest
}) => {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        className={cn(
          inputboxVariants({
            variant: hasError ? "error" : "secondary",
          }),
          `ui-select cursor-pointer appearance-none relative h-11 w-full px-3 py-2 border rounded-lg [&:has(option[value=""]:checked)]:text-gray-400`,
          className
        )}
        {...rest}
      >
        {children}
      </select>
      <div className="absolute right-0 inset-y-0 flex items-center justify-center px-3 pointer-events-none cursor-pointer">
        <IconCheverontDown />
      </div>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  hasError: PropTypes.bool,
};

export default Select;

const Option = ({ children, className = "", value = "", ...rest }) => (
  <option
    className={cn("text-gray-800 bg-white", className)}
    value={value}
    {...rest}
  >
    {children}
  </option>
);

Option.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string,
};

Select.Option = Option;
