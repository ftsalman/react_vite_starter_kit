import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";
import { cn } from "../../utils/utils";
import { IconPlus } from "../../assets/icons/interfaceIcons2";
import { IconSearch } from "../../assets/icons/InterfaceIcons";
import { Button } from "./button/Button";

const DEAFULT_PRIMARY_LABEL = (
  <>
    <IconPlus />
    Add New
  </>
);

const EmptyBlock = ({
  // Text Props
  title ,
  subtitle ,
  showTitle = true,
  showSubtitle = true,
  // Btn Props
  showPrimaryBtn = true,
  showSecondaryBtn = false,
  primaryBtnLabel = DEAFULT_PRIMARY_LABEL,
  secondaryBtnLabel = "Secondary Action",
  onPrimaryClick = () => {},
  onSecodaryClick = () => {},
  // Img Props
  showImage = true,
  imageSrc = "/svg/empty-data-svg.svg",
  imgClassName,
  // Icon Props
  showIcon = false,
  icon = <IconSearch size={28} />,
  // ClassName Props
  icnOrImgCtnrClassName = "",
  containerClassName,
  className = "",
  contentCtnrClassName = "",
}) => {

   const {t} =  useTranslation();

  const defaultTitle = t("emptyblocks.notfound");
  const defaultSubtitle = t("emptyblocks.wecouldntfindwhatyourelookingfor");




  return (
    <div
      className={cn(
        "flex items-center justify-center py-12",
        containerClassName
      )}
    >
      <div
        className={cn("w-full flex flex-col items-center justify-center gap-4", className)}
      >
        {(showImage || showIcon) && (
          <div
            className={cn(
              "w-fit mx-auto flex flex-col items-center justify-center text-gray-600",
              icnOrImgCtnrClassName
            )}
          >
            {showImage && (
              <img
                src={imageSrc}
                alt="not_found_img"
                className={cn("w-[120px]", imgClassName)}
              />
            )}
            {showIcon && <>{icon}</>}
          </div>
        )}

        <div className={cn("emtpy-block-text-container flex flex-col items-center justify-center gap-2 text-center", contentCtnrClassName)}>
          {showTitle && (
            <p className="line-clamp-1 text-sm font-bold text-gray-600">
              {title || defaultTitle}
            </p>
          )}
          {showSubtitle && (
            <p className=" text-xs text-gray-400">
              {subtitle || defaultSubtitle}
            </p>
          )}
          {(showPrimaryBtn || showSecondaryBtn) && (
            <div className="mt-2 flex items-center gap-2 ">
              {showSecondaryBtn && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="flex-1 flex-shrink-0 min-w-fit w-[150px]"
                  onClick={() => onSecodaryClick()}
                >
                  {secondaryBtnLabel}
                </Button>
              )}
              {showPrimaryBtn && (
                <Button
                  size="sm"
                  className="flex-1 flex-shrink-0 min-w-fit w-[150px]"
                  onClick={() => onPrimaryClick()}
                >
                  {primaryBtnLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

EmptyBlock.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  showTitle: PropTypes.bool,
  showSubtitle: PropTypes.bool,
  showPrimaryBtn: PropTypes.bool,
  showSecondaryBtn: PropTypes.bool,
  primaryBtnLabel: PropTypes.node,
  secondaryBtnLabel: PropTypes.node,
  onPrimaryClick: PropTypes.func,
  onSecodaryClick: PropTypes.func,
  showImage: PropTypes.bool,
  imageSrc: PropTypes.string,
  imgClassName: PropTypes.string,
  showIcon: PropTypes.bool,
  icon: PropTypes.node,
  icnOrImgCtnrClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  contentCtnrClassName: PropTypes.string,
};

export default EmptyBlock;
