import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { t } from "i18next";
import { useClickOutside } from "../../../lib/turtle-ui/hooks";
import { IconSearch } from "../../assets/icons/interfaceIcons2";

const SEARCHBAR_STYLE = {
  true: "w-[200px] px-4 py-2 shadow-input-box-shadow",
  false: "w-10 placeholder:opacity-0 delay-150",
};

const PREFIX_CONTAINER_STYLE = {
  true: "pointer-events-none focus:shadow-none text-gray-500",
  false: "pointer-events-auto focus:shadow-input-box-shadow text-gray-800",
};

export const PageSearchBar = ({
  // isSearchExpanded = false,
  // setIsSearchExpanded = () => {},
  setSearchValue = "",
  searchValue = () => {},
}) => {
  // const { t, i18n } = useTranslation();
  // const isRtl = i18n.dir() === "rtl";
  
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  const searchbarRef = useClickOutside(() => {
    if (!searchValue) {
      setIsSearchExpanded?.(false);
    }
  });

  //expand searchbar and focus
  const handleSearchExpand = () => {
    setIsSearchExpanded?.(true);
    setTimeout(() => {
      inputRef?.current?.focus(); // Apply focus after the DOM updates
    }, 0);
  };

  // const handleKeyPress = useCallback(
  //   (event) => {
  //     if (event.shiftKey && event.key === "S" && !isSearchExpanded) {
  //       event.preventDefault();
  //       buttonRef?.current?.click();
  //     }
  //   },
  //   [isSearchExpanded]
  // );

  const handleKeyPressInSearchBar = (e) => {
    if (e.key === "Escape" && searchValue !== "") {
      e.preventDefault();
    }

    if (e.key === "Escape" && searchValue === "") {
      setIsSearchExpanded(false);
    }
  };

  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyPress);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, [handleKeyPress]);

  return (
    <div className="relative" ref={searchbarRef}>
      <input
        type="search"
        placeholder={t("placeholder.search")}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={`${SEARCHBAR_STYLE[isSearchExpanded]} ${
          isSearchExpanded ? "pl-10" : ""
        } h-10 outline-0 rounded-lg text-sm border shadow-sm focus:shadow-input-box-shadow disabled:bg-white transform duration-300 border-[#EFE9FF] text-gray-800`}
        disabled={!isSearchExpanded}
        ref={inputRef}
        onKeyDown={handleKeyPressInSearchBar}
      />

      <button
        ref={buttonRef}
        title="Search - Shift + S"
        onClick={handleSearchExpand}
        className={`${PREFIX_CONTAINER_STYLE[isSearchExpanded]} absolute left-0 inset-0 w-10 h-full rounded-md flex justify-center items-center outline-none transition-colors duration-300`}
      >
        <IconSearch size={isSearchExpanded ? 16 : 18} />
      </button>
    </div>
  );
};

PageSearchBar.propTypes = {
  isSearchExpanded: PropTypes.bool,
  setIsSearchExpanded: PropTypes.func,
  setSearchValue: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

PageSearchBar.displayName = "PageSearchbar";
