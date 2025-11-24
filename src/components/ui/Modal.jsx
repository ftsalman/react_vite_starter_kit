import { memo, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/utils";
import { Button } from "./button/Button";
import { IconCross } from "../../assets/icons/InterfaceIcons";
import { usePreventScroll } from "../../hooks/usePreventScroll";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { createPortal } from "react-dom";

export const Modal = ({
  children,
  className,
  onClose,
  backdrop = true,
  backdropClassName = "",
  hideScrollbar = true,
  backdropClose = true,
  isEscEnabled = true,
  ref,
  ...rest
}) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  usePreventScroll();

  useFocusTrap(modalRef, onClose, isEscEnabled);

  const handleBackdropClick = (e) => {
    if (e.button === 0 && e.target === backdropRef?.current && backdropClose) {
      onClose(e, "backdrop-close");
    }
  };

  return createPortal(
    <div
      ref={backdropRef}
      className={cn(
        `fixed inset-0 z-50 flex items-center justify-center p-4 ${
          backdrop && "bg-gray-900/30"
        } backdrop-filter backdrop-blur-sm`,
        backdropClassName
      )}
      // onClick={(e) => {
      //   if (e.target === backdropRef?.current && backdropClose) {
      //     onClose(e, "backdrop-close");
      //   }
      // }}
      onMouseDown={handleBackdropClick}
    >
      <div
        className={cn(
          `max-h-full max-w-full relative flex flex-col border-0 rounded-xl shadow-lg bg-white transition-all duration-300 zoom-in`,
          className
        )}
        {...rest}
        ref={modalRef}
        aria-modal={true}
        role="dialog"
        tabIndex={-1}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func,
  backdrop: PropTypes.bool,
  hideScrollbar: PropTypes.bool,
};

Modal.displayName = "Modal";

const ModalHeader = memo(
  ({
    onClose,
    children,
    title,
    subtitle,
    className,
    icon,
    iconContainerClassName = "",
    closeIconClassName = "",
    headerClassName,
    ...rest
  }) => {
    return (
      <div
        className={cn("p-4 border-b flex justify-between gap-4", className)}
        {...rest}
      >
        {children ? (
          children
        ) : (
          <div className={cn("flex flex-grow gap-2.5", headerClassName)}>
            {icon && (
              <div
                className={cn(
                  "flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-50 text-green-400 rounded-xl",
                  iconContainerClassName
                )}
              >
                {icon}
              </div>
            )}
            <div className="flex-grow flex flex-col justify-center">
              <p className="font-semibold text-gray-800">{title}</p>
              <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
            </div>
          </div>
        )}

        {onClose && (
          <Button
            variant="tertiary"
            onClick={(e) => onClose(e, "closebtn-close")}
            className={cn(
              "flex-shrink-0 p-0 w-10 h-10 text-primary-500 hover:bg-gray-50 focus:shadow-gray-100 text-gray-400",
              closeIconClassName
            )}
          >
            <IconCross size={24} />
          </Button>
        )}
      </div>
    );
  }
);

ModalHeader.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  iconContainerClassName: PropTypes.string,
  icon: PropTypes.node,
};

ModalHeader.displayName = "ModalHeader";

Modal.ModalHeader = ModalHeader;

const ModalFooter = memo(({ children, className }) => {
  return <div className={cn("p-4 border-t", className)}>{children}</div>;
});

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ModalFooter.displayName = "ModalFooter";

Modal.ModalFooter = ModalFooter;

const ModalBody = memo(({ children, className }) => {
  return (
    <div
      className={cn(
        "relative p-4 flex-auto overflow-auto panel-scrollbar",
        className
      )}
    >
      {children}
    </div>
  );
});

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ModalBody.displayName = "ModalBody";

Modal.ModalBody = ModalBody;
