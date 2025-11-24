import PropTypes from "prop-types";
import { inputboxVariants } from "./input-Box/inputBoxVariants";
import { cn } from "../../utils/utils";

export const TextArea = ({
  placeholder,
  value,
  onChange,
  id,
  name,
  className,
  hasError = false,
  ...props
}) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        inputboxVariants({
          variant: hasError ? "error" : "secondary",
          className: "panel-scrollbar h-32 px-3.5 py-[10px]",
        }),
        className
      )}
      {...props}
    />
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  hasError: PropTypes.bool,
};

TextArea.defaultProps = {
  placeholder: "Enter a description...",
  value: "",
};
