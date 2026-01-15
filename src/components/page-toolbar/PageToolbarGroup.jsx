import React from "react";
import { PageToolBar } from "./PagetoolBar";
import PropTypes from "prop-types";

export const PageToolbarGroup = ({
  actions = [],
  headerConfig = {},
  className = "",
}) => {
  return (
    <PageToolBar className={className}>
      <PageToolBar.Body>
        <PageToolBar.Actions actions={actions} />
      </PageToolBar.Body>
    </PageToolBar>
  );
};

PageToolbarGroup.propTypes = {
  actions: PropTypes.array,
  headerConfig: PropTypes.object,
  className: PropTypes.string,
};
