import React, { useState } from "react";
import { IconTextBox } from "./IconTextBox";
import { IconLock, IconVisiblity, IconVisiblityOff } from "../../assets/icons/interfaceIcons2";

export const PasswordInput = ({
  showPrefixIcon = true,
  value = "",
  onChange = () => {},
  id = "",
  name = "",
  placeholder = "Password*",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : "password";

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <IconTextBox
        prefix={
          <div className="pointer-events-none absolute flex items-center justify-center rounded-l-md text-gray-400">
            <IconLock size="20" />
          </div>
        }
        type={inputType}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        autoComplete="on"
        placeholder={placeholder}
        suffixPointerEvents
        suffix={
          <button
            type="button"
            onClick={handleShowPassword}
            className="flex items-center justify-center rounded-r-md text-gray-400"
          >
            {showPassword ? (
              <IconVisiblity size="20" />
            ) : (
              <IconVisiblityOff size="20" />
            )}
          </button>
        }
        className="w-full"
        {...rest}
      />
    </>
  );
};
