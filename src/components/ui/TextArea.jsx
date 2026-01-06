import PropTypes from "prop-types";
import { cn } from "../../utils/utils";
import { inputboxVariants } from "../../../lib/turtle-ui/utils";

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
          variant: hasError ? "danger" : "primary",
          className: "panel-scrollbar h-32 px-3",
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
