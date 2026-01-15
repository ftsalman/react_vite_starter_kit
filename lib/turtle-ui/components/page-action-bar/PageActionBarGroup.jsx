import { PageActionBar } from "./PageActionBar";
import PropTypes from "prop-types";

export const PageActionBarGroup = ({
  bodyConfig = {},
  headerConfig = {},
  actionsConfig = {},
  menuConfig = {},
  secondaryBarConfig = {},
  ...rest
}) => (
  <PageActionBar {...rest}>
    <PageActionBar.Body {...bodyConfig}>
      <PageActionBar.Header {...headerConfig} />
      <PageActionBar.Actions {...actionsConfig} />
      <PageActionBar.MoreMenu {...menuConfig} />
    </PageActionBar.Body>
    <PageActionBar.SecondaryBar {...secondaryBarConfig} />
  </PageActionBar>
);

PageActionBarGroup.propTypes = {
  bodyConfig: PropTypes.object,
  headerConfig: PropTypes.object,
  actionsConfig: PropTypes.object,
  menuConfig: PropTypes.object,
  secondaryBarConfig: PropTypes.object,
};
