import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/utils";
import { inputboxVariants } from "./input-Box/inputBoxVariants";

export const IconTextBox = ({
  prefix,
  suffix,
  className = "",
  inputClassName,
  prefixClassName,
  suffixClassName,
  suffixPointerEvents = false,
  prefixPointerEvents = false,
  hasError = false,
  ...rest
}) => {
  const [inputPadding, setInputPadding] = useState({
    paddingLeft: "10px",
    paddingRight: "10px",
  });

  const prefixContainerRef = useRef(null);
  const suffixContainerRef = useRef(null);

  useEffect(() => {
    //  Padding Calculate If is there suffix icon

    if (suffix && suffixContainerRef.current) {
      const containerWidth = suffixContainerRef.current.offsetWidth;
      setInputPadding((prev) => ({
        ...prev,
        paddingRight: `${containerWidth + 12 + 10}px`,
      }));
    }

    //  Padding Calculate If is there prefix icon

    if (prefix && prefixContainerRef.current) {
      const containerWidth = prefixContainerRef.current.offsetWidth;
      setInputPadding((prev) => ({
        ...prev,
        paddingLeft: `${containerWidth + 12 + 10}px`,
      }));
    }

    return () => {
      setInputPadding({
        paddingLeft: "10px",
        paddingRight: "10px",
      });
    };
  }, [suffix, prefix]);

  return (
    <div
      className={cn(
        "relative flex items-center text-gray-400 focus-within:text-gray-600",
        className
      )}
    >
      {/* Prefix */}

      {prefix && (
        <span
          ref={prefixContainerRef}
          className={cn(
            "absolute left-3 min-w-5 w-max flex items-center justify-center text-sm",
            !prefixPointerEvents && "pointer-events-none",
            prefixClassName
          )}
        >
          {prefix}
        </span>
      )}

      {/* Input  */}

      <input
        type="text"
        className={cn(
          inputboxVariants({
            variant: hasError ? "error" : "secondary",
          }),
          "w-full",
          inputClassName
        )}
        style={inputPadding}
        {...rest}
      />

      {/* Suffix  */}

      {suffix && (
        <span
          ref={suffixContainerRef}
          className={cn(
            "absolute right-3 min-w-5 w-max flex items-center justify-center text-sm",
            !suffixPointerEvents && "pointer-events-none",
            suffixClassName
          )}
        >
          {suffix}
        </span>
      )}
    </div>
  );
};
