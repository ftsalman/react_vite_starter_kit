import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { IconCheverontDown, IconCross } from "../../assets/icons/interfaceIcons2";
import { useDebounce, useEffectAfterMount, useToggle } from "../../../lib/turtle-ui/hooks";
import { Button } from "../../../lib/turtle-ui/components";
import { cn } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import { inputboxVariants } from "../../../lib/turtle-ui/components/input-box/inputBoxVariants";
import { createPortal } from "react-dom";
import EmptyBlock from "./EmptyBlock";
import { List } from "./List";
import { IconSearch } from "../../../lib/turtle-ui/assets/icons/InterfaceIcons";

export const Select = ({
  options = [],
  selectedOption = null,
  onSelectOpen = null,
  onSelect = null,
  onSearchChange = null,
  isLoading = false,
  labelKey = "",
  valueKey = "",
  renderOption = null,
  render = null,
  className = "",
  optionClassName = "",
  selectedOptionClassName = "",
  optionContainerClassName = "",
  containerClassName = "",
  showClearBtn = true,
  showSearch = true,
  placeholder = "Select an Option",
  error = false,
  disabled = false,
  iniYPosition = "bottom",
  iniXPosition = "left",
}) => {
  const { t } = useTranslation();

  const [isSelectOpen, toggleSelect] = useToggle();
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [position, setPosition] = useState({});

  const selectRef = useRef(null);
  const optionContainerRef = useRef(null);

  const searchInputRef = useRef(null);

  // const handleCalculatePosition = () => {
  //   if (selectRef.current && optionContainerRef.current) {
  //     const rect = selectRef.current.getBoundingClientRect();
  //     setPosition({
  //       top: rect.bottom + window.scrollY,
  //       left: rect.left + window.scrollX,
  //       width: rect.width,
  //     });
  //   }
  // };

  // const handleCalculatePosition = () => {
  //   if (selectRef.current && optionContainerRef.current) {
  //     const rect = selectRef.current.getBoundingClientRect();
  //     const dropdownHeight = optionContainerRef.current.offsetHeight; // Assuming you know the height of the dropdown

  //     // Calculate space available below and above
  //     const spaceBelow = window.innerHeight - rect.bottom;
  //     const spaceAbove = rect.top;

  //     // If there's enough space below, show it below, else show it above
  //     if (spaceBelow >= 200) {
  //       setPosition({
  //         top: rect.bottom + window.scrollY, // Position dropdown below
  //         left: rect.left + window.scrollX,
  //         width: rect.width,
  //       });
  //     } else if (spaceAbove >= 200) {
  //       setPosition({
  //         top: rect.top + window.scrollY - 216, // Position dropdown above
  //         left: rect.left + window.scrollX,
  //         width: rect.width,
  //       });
  //     } else {
  //       // Fallback if there's not enough space (for example, center it or show it in a different way)
  //       setPosition({
  //         top: rect.bottom + window.scrollY, // default fallback
  //         left: rect.left + window.scrollX,
  //         width: rect.width,
  //       });
  //     }
  //   }
  // };

  const handleCalculateYPosition = (rect, menuHeight, currPos = {}) => {
    const { top, bottom } = rect;
    const { innerHeight, scrollY } = window;

    const spaceBelow = innerHeight - bottom;
    const spaceAbove = top;

    const POSITIONS = {
      bottom: bottom + scrollY + 8,
      top: top + scrollY - menuHeight - 8,
    };

    let topPos = POSITIONS[iniYPosition];

    if (iniYPosition === "bottom") {
      if (spaceBelow >= menuHeight) topPos = POSITIONS.bottom;
      else if (spaceAbove >= menuHeight) topPos = POSITIONS.top;
      else topPos = POSITIONS.bottom;
    } else {
      if (spaceAbove >= menuHeight) topPos = POSITIONS.top;
      else if (spaceBelow >= menuHeight) topPos = POSITIONS.bottom;
      else topPos = POSITIONS.top;
    }

    return {
      ...currPos,
      top: topPos,
    };
  };

  const handleCalculateXPosition = (rect, menuWidht, currPos = {}) => {
    const { right, left } = rect;
    const { innerWidth, scrollX } = window;

    const spaceLeft = left;
    const spaceRight = innerWidth - right;

    const POSITIONS = {
      left: {
        left: rect.left + rect.width - menuWidht,
      },
      right: {
        left: left + scrollX,
      },
    };

    let xPos = POSITIONS[iniXPosition];

    xPos = POSITIONS.left;

    // if (iniXPosition === "left") {
    //   if (spaceLeft >= menuWidht) xPos = POSITIONS.left;
    //   else if (spaceRight >= menuWidht) xPos = POSITIONS.right;
    //   else xPos = POSITIONS.left; // fallback
    // } else {
    //   if (spaceRight >= menuWidht) xPos = POSITIONS.right;
    //   else if (spaceLeft >= menuWidht) xPos = POSITIONS.left;
    //   else xPos = POSITIONS.right; // fallback
    // }

    return {
      ...currPos,
      ...xPos,
    };
  };

  const handleCalculatePosition = () => {
    if (selectRef.current && optionContainerRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const menuHeight = optionContainerRef.current.offsetHeight;
      const menuWidth = optionContainerRef.current.offsetWidth;

      let positionDet = {
        width: rect.width,
        position: "absolute",
      };

      positionDet = handleCalculateYPosition(rect, menuHeight, positionDet);
      positionDet = handleCalculateXPosition(rect, menuWidth, positionDet);

      setPosition(positionDet);
    }
  };

  const handleToggleSelect = () => {
    setIsSearchEmpty(true);
    toggleSelect();

    if (!isSelectOpen) {
      onSelectOpen?.(toggleSelect);
    }
  };

  const hasChecked = (currOption) => {
    return (
      selectedOption?.[valueKey] === currOption[valueKey] &&
      selectedOption?.[labelKey] === currOption[labelKey]
    );
  };

  const handleSelectOption = (option = {}, isSelected = false) => {
    onSelect?.(hasChecked(option) ? {} : option, isSelected);
    toggleSelect();
  };

  const handleSearchChange = (value) => {
    setIsSearchEmpty(value === "");
    onSearchChange?.(value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target) &&
        optionContainerRef.current &&
        !optionContainerRef.current.contains(event.target)
      ) {
        toggleSelect(false);
        onSearchChange?.("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef, optionContainerRef, toggleSelect]);

  useEffect(() => {
    if (isSelectOpen) {
      handleCalculatePosition();
      document.body.style.pointerEvents = "none";
      optionContainerRef.current?.style.setProperty(
        "pointer-events",
        "auto",
        "important"
      );

      //  auto Focus search
      if (showSearch) {
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 0);
      }
    }

    return () => {
      document.body.style.pointerEvents = "auto";
    };
  }, [isSelectOpen]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (isSelectOpen) {
  //       toggleSelect(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [isSelectOpen]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (isSelectOpen) {
        for (let entry of entries) {
          handleCalculatePosition();
        }
      }
    });

    if (selectRef.current) observer.observe(selectRef.current);

    return () => observer.disconnect();
  }, [handleCalculatePosition, isSelectOpen]);

  const showContainer = isSelectOpen;

  if (!renderOption && (!labelKey || !valueKey)) {
    return console.error(
      "You must provide labelKey and valueKey when renderOption is not provided"
    );
  }

  return (
    <>
      <div className={cn("relative w-full", containerClassName)}>
        <button
          ref={selectRef}
          role="button"
          type="button"
          disabled={disabled}
          className={cn(
            "outline-none text-start w-full px-4 py-2 min-h-11 flex items-center justify-between gap-3 rounded-lg border border-gray-200",
            inputboxVariants({
              variant: error ? "error" : "secondary",
            }),
            className
          )}
          onClick={!disabled && handleToggleSelect}
        >
          {/* isLoading ? (
          <div className="flex flex-grow gap-2 text-sm text-gray-400">
            <div className="w-full h-4 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
          ) : */}
          {selectedOption?.[valueKey] ? (
            <>
              {render ? (
                render?.(selectedOption)
              ) : (
                <div
                  className={cn(
                    "flex flex-grow gap-2 text-xs w-full",
                    selectedOptionClassName
                  )}
                >
                  <p className="text-sm line-clamp-1 text-gray-800">
                    {selectedOption[labelKey] || "Not available"}
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-grow gap-2 text-sm text-gray-400">
              {placeholder}
            </div>
          )}
          {selectedOption?.[valueKey] && showClearBtn && (
            <Button
              className="flex-shrink-0 p-1 size-6 rounded-md"
              variant="tertiary"
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.(null);
              }}
            >
              <IconCross />
            </Button>
          )}
          <div className="flex-shrink-0">
            <IconCheverontDown />
          </div>
        </button>

        {showContainer &&
          createPortal(
            <div
              ref={optionContainerRef}
              style={position}
              className={cn(
                " z-50 mb-2 rounded-lg shadow-md transition-transform duration-500"
              )}
            >
              <div
                className={cn(
                  "rounded-lg border-2 overflow-clip border-gray-200 bg-white  transition-transform duration-500",
                  optionContainerClassName
                )}
              >
                <div className="overflow-auto  flex flex-col max-h-[200px] panel-scrollbar text-sm transition-transform duration-500">
                  {showSearch && (
                    <SearchBox
                      ref={searchInputRef}
                      onSearchChange={handleSearchChange}
                    />
                  )}
                  <div className="flex-grow">
                    {isLoading ? (
                      <List
                        className="grid-cols-1 gap-0 divide-y divide-gray-50"
                        data={Array.from({ length: 5 })}
                        render={() => (
                          <div className="h-10 bg-gray-200 animate-pulse"></div>
                        )}
                      />
                    ) : !options?.length ? (
                      <EmptyBlock
                        containerClassName="empty-block-xs bg-gray-50 py-4"
                        showPrimaryBtn={false}
                        imgClassName="w-[50px]"
                        subtitle="No results found"
                        showImage={false}
                      />
                    ) : (
                      <>
                        {options.map((option, index) => {
                          let renderedOption = null;

                          const isSelected = hasChecked(option);

                          if (renderOption) {
                            renderedOption = renderOption(option, isSelected);
                            if (!renderedOption) return null;
                          }

                          return (
                            <div
                              role="button"
                              onClick={() =>
                                handleSelectOption(option, isSelected)
                              }
                              key={index}
                              tabIndex="0"
                              className={cn(
                                `outline-none px-4 py-2 flex items-center border-b h-10  ${
                                  isSelected
                                    ? "bg-brand-secondary-50 border-b-brand-secondary-100"
                                    : "border-gray-100 hover:bg-gray-50 focus:bg-gray-50 duration-300 transition-all"
                                }`,
                                optionClassName
                              )}
                            >
                              {renderOption ? (
                                renderedOption
                              ) : (
                                <>
                                  {option[labelKey] || (
                                    <p className="text-xs text-gray-400">
                                      Not Available
                                    </p>
                                  )}
                                </>
                              )}
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>,
            document.getElementById("portal")
          )}
      </div>
    </>
  );
};

const SearchBox = ({ onSearchChange = () => {}, ref }) => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffectAfterMount(() => {
    onSearchChange?.(searchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="sticky top-0 z-30 bg-white">
      <div className="relative">
        <div className="pointer-events-none absolute top-0 z-30 left-0 inset-y-0 px-2 flex items-center justify-center text-inherit">
          <IconSearch />
        </div>
        <input
          ref={ref}
          type="search"
          name=""
          id=""
          className="sticky top-0 pl-8 px-4 h-10 w-full py-2 flex-shrink-0 text-sm outline-none border-b border-gray-200 focus:text-gray-800 text-gray-400"
          placeholder={t("Search")}
          value={searchTerm}
          onChange={({ target: { value } }) => setSearchTerm(value)}
        />
      </div>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  selectedOption: PropTypes.object,
  onSelectOpen: PropTypes.func,
  onSelect: PropTypes.func,
  onSearchChange: PropTypes.func,
  isLoading: PropTypes.bool,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  renderOption: PropTypes.func,
  render: PropTypes.func,
  className: PropTypes.string,
  optionClassName: PropTypes.string,
  selectedOptionClassName: PropTypes.string,
  optionContainerClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  showClearBtn: PropTypes.bool,
  error: PropTypes.bool,
};

SearchBox.propTypes = {
  onSearchChange: PropTypes.func,
};
