import { useEffect } from "react";

let REF_STACK = [];

export const useFocusTrap = (
  ref = null,
  callBack = undefined,
  isEnabled = true
) => {
  const handleKeyDown = (e) => {
    const { key } = e;
    if (key === "Escape" && REF_STACK.length > 0 && isEnabled) {
      e.stopPropagation();

      if (REF_STACK[REF_STACK.length - 1] === ref.current) {
        const status = callBack?.(e, "escape-key-close");

        if (status === true) return;

        REF_STACK.pop();
      }
    }

    // Focus trap
    if (e.key === "Tab" && REF_STACK[REF_STACK.length - 1] === ref.current) {
      const focusableElements = ref.current.querySelectorAll(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };
  useEffect(() => {
    if (!ref?.current) return;

    const curr = ref.current;

    REF_STACK.push(curr);

    // console.log(REF_STACK, "💃💃");

    document.addEventListener("keydown", handleKeyDown);

    const firstFocusableElement = curr.querySelector(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      if (REF_STACK[REF_STACK.length - 1] === curr) {
        REF_STACK.pop();
      }
    };
  }, [ref]);
};
