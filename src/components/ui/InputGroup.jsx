import { cn } from "../../utils/utils";
import { InputBox } from "./input-Box/InputBox";

export const InputGroup = ({
  groupId = "",
  label,
  labelRequired,
  errorMessage = "",
  inputClassName,
  labelClassName,
  // value,
  name,
  id,
  // onChange,
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn("relative flex flex-col gap-1.5", className)}
      id={groupId}
    >
      {/* Label ------------------------ */}

      {label && (
        <label
          htmlFor={name}
          className={cn("font-medium text-sm text-gray-800", labelClassName)}
        >
          {label}
          {labelRequired && <span className="text-red-400"> *</span>}
        </label>
      )}

      {/* Input Box ------------------------ */}

      {children ? (
        children
      ) : (
        <>
          <InputBox
            type="text"
            id={id}
            name={name}
            className={inputClassName}
            variant={errorMessage ? "error" : "secondary"}
            {...rest}
          />
        </>
      )}

      {/* Error Message ------------------------ */}
      {errorMessage && (
        <small className="flex items-center gap-1 text-xs font-medium text-red-400">
          <>
            {/* <IconInfo size="13" filled /> */}
            {errorMessage}
          </>
        </small>
      )}
    </div>
  );
};
