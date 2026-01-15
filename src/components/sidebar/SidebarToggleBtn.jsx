import { IconCheveronLeft } from "../../assets/icons/interfaceIcons2";
import { useI18Next } from "../../hooks/usei18next";
import { useSidebar } from "../../hooks/useSidebar";
import { Button } from "../ui/button/Button";

export const SidebarToggleBtn = () => {
  const { isExpanded, onCollapse } = useSidebar();

  const { isRtl } = useI18Next();

  const positionClassess = isRtl
    ? "top-1/2 left-0 z-50 transform -translate-x-1/2 -translate-y-1/2"
    : "top-1/2 right-0 z-50 transform translate-x-1/2 -translate-y-1/2";

  const getIconClass = () => {
    if (isExpanded) {
      return isRtl ? "rotate-180" : "rotate-0";
    } else {
      return isRtl ? "rotate-0" : "rotate-180";
    }
  };

  return (
    <Button
      variant="brand-primary"
      className={`absolute hidden md:flex ${positionClassess} size-6 p-1 rounded-full`}
      onClick={() => onCollapse()}
    >
      <span className={`${getIconClass()} duration-300`}>
        <IconCheveronLeft size="20" color="#ffff" />
      </span>
    </Button>
  );
};
