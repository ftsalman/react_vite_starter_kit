import React, { useRef } from "react";
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
  isSearchExpanded,
  setIsSearchExpanded,
  setSearchValue,
  searchValue,
}) => {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={`h-12 w-[700px] pl-10 pr-4 rounded-3xl text-sm border bg-white shadow-sm focus:shadow-input-box-shadow border-[#EFE9FF] text-gray-800 placeholder-gray-400 outline-none transition-all duration-300`}
        autoComplete="off"
      />

      <button
        // ref={buttonRef}
        title="Search - Shift + S"
        // onClick={handleSearchExpand}
        className={` absolute left-0 inset-0 w-10 h-full rounded-md flex justify-center items-center outline-none transition-colors duration-300`}
      >
        <IconSearch />
      </button>
    </div>
  );
};
