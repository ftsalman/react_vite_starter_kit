import React, { useEffect, useRef, useState } from "react";
import { IconCheverontDown } from "../../assets/icons/interfaceIcons2";
import { Menu } from "./Menu";
import { useI18Next } from "../../hooks/usei18next";

export const CountriesSelect = ({
  options = [],
  selectedOption,
  onSelect,
  labelKey = "label",
  valueKey = "code",
  placeholder = "Select an option",
  render,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef();
  const { i18n, isRtl } = useI18Next();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative w-60">

      {/* Selected box */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between text-gray-600  px-4 py-2 text-sm  rounded-md bg-white"
      >
        {selectedOption ? (
          render ? (
            render(selectedOption)
          ) : (
            <span>{selectedOption[labelKey]}</span>
          )
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}

        <IconCheverontDown />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <Menu
          className={`absolute mt-2 bg-white rounded-lg shadow-lg border z-[60] max-h-60 overflow-y-auto w-full ${
            isRtl ? "left-0" : "right-0"
          }`}
        >
          {options.map((item) => (
            <button
              key={item[valueKey]}
              onClick={() => handleSelect(item)}
              className={`h-8 p-2 flex text-xs items-center cursor-pointer justify-between rounded-xl ${
                selectedOption?.[valueKey] === item[valueKey]
                  ? "bg-yellow-50 text-yellow-500"
                  : "hover:bg-gray-50"
              }`}
            >
              {renderOption ? renderOption(item) : item[labelKey]}
            </button>
          ))}
        </Menu>
      )}
    </div>
  );
};
