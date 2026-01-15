import { useNavigate } from "react-router-dom";
import { cn } from "../../utils/utils";
import PropTypes from "prop-types";
import { Button } from "../../../../src/components/ui/button/Button";
import { IconArrowBack, IconMoreHoriz } from "../../../../src/assets/icons/interfaceIcons2";
import { PageSearchBar } from "../../../../src/components/ui/PageSearchBar";
import { Menu } from "../menu/Menu";


export const PageActionBar = ({ className = "", children = null }) => (
  <div
    className={cn(
      "sticky top-0 z-40 p-4 space-y-4 border-b bg-white border-gray-200 ",
      className
    )}
  >
    {children}
  </div>
);

PageActionBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Body = ({ className = "", children = null }) => (
  <div
    className={cn(
      "container flex items-center justify-between gap-4",
      className
    )}
  >
    {children}
  </div>
);

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageActionBar.Body = Body;

const Header = ({
  showBackBtn = false,
  head = "",
  descp = "",
  className = "",
}) => {
  const navigate = useNavigate();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {showBackBtn && (
        <Button
          className="p-1 size-10 flex-shrink-0 hover:bg-gray-50"
          variant="tertiary"
          onClick={() => navigate(-1)}
        >
          <IconArrowBack size="20" />
        </Button>
      )}
      <div className="flex-grow flex flex-col">
        <h4 className="lg:line-clamp-1 break-all text-lg font-bold text-gray-800">
          {head}
        </h4>
        {descp && (
          <h4 className="lg:line-clamp-1 break-all mt-1 text-xs text-gray-400">
            {descp}
          </h4>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  showBackBtn: PropTypes.bool,
  head: PropTypes.string,
  descp: PropTypes.string,
  className: PropTypes.string,
};

PageActionBar.Header = Header;

const Actions = ({
  children = null,
  actions = [],
  className = "",
  searchbarConfig = {},
}) => (
  <div
    className={cn(
      "hidden lg:flex flex-grow items-center gap-2 justify-end",
      className
    )}
  >
    <PageSearchBar {...searchbarConfig} />
    {children || null}
    {actions?.map((action) => action) || null}
  </div>
);

Actions.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.array,
  className: PropTypes.string,
  searchbarConfig: PropTypes.object,
};

PageActionBar.Actions = Actions;

const MoreMenu = ({ className = "", menuList = [] }) => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { isRtl } = useI18Next();

  const menuPosition = isRtl ? "left-0" : "right-0";

  const menuRef = useClickOutside(() => toggleMenu(false));

  if (!menuList.length) return null;

  return (
    <div className={cn("relative lg:hidden", className)} ref={menuRef}>
      <Button
        className="flex-shrink-0 size-10 p-1 text-brand-secondary-500 hover:bg-gray-50"
        variant="tertiary"
        onClick={() => toggleMenu()}
      >
        <IconMoreHoriz size="20" color="currentColor" />
      </Button>

      {isMenuOpen && (
      <Menu
          className={`absolute z-40 w-[200px] ${menuPosition} top-full mt-2 gap-0`}
        >
          {menuList.map((item, index) => {
            if (item?.featCode) {
              return (
                <ProtectedFeatureWrapper featCode={item?.featCode} key={index}>
                  <Menu.MenuItem {...item?.menuConfig} onClick={item?.onClick}>
                    {item?.label}
                  </Menu.MenuItem>
                </ProtectedFeatureWrapper>
              );
            }

            return (
              <Menu.MenuItem
                key={index}
                {...item?.menuConfig}
                onClick={item?.onClick}
              >
                {item?.label}
              </Menu.MenuItem>
            );
          })}
        </Menu>
      )}
    </div>
  );
};

MoreMenu.propTypes = {
  className: PropTypes.string,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      menuConfig: PropTypes.object,
    })
  ),
};

PageActionBar.MoreMenu = MoreMenu;

const SecondaryBar = ({
  className = "",
  children = "",
  searchbarConfig = {},
}) => {
  const windowSize = useWindowSize();

  if (windowSize.width < SCREEN_SIZES.lg) {
    return (
      <div
        className={cn(
          "container flex items-center justify-between gap-4",
          className
        )}
      >
        <IconTextBox
          prefix={<IconSearch />}
          className="w-full h-10"
          inputClassName="h-10"
          placeholder="Search..."
          {...searchbarConfig}
        />
        {children}
      </div>
    );
  }
};

SecondaryBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  searchbarConfig: PropTypes.object,
};

PageActionBar.SecondaryBar = SecondaryBar;
