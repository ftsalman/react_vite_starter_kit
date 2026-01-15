import React from "react";
import { cn } from "../../utils/utils";
import PropTypes from "prop-types";

export const PageToolBar = ({ className = "", children = null }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-40 p-4 border-b border-gray-200 ",
        className
      )}
    >
      {children}
    </div>
  );
};

PageToolBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


const Body = ({ className = "", children = null }) => {
  return (
    <div
      className={cn(
        "container flex flex-col md:flex-row justify-between items-center gap-2",
        className
      )}
    >
      {children}
    </div>
  );
};

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PageToolBar.Body = Body;

const Actions = ({ children = null, actions = [], className = "" }) => {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-3 flex-wrap justify-end",
        className
      )}
    >
      {children}
      {actions?.map((action, i) => (
        <React.Fragment key={i}>{action}</React.Fragment>
      ))}
    </div>
  );
};

Actions.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.array,
  className: PropTypes.string,
};

PageToolBar.Actions = Actions;
