import React from "react";
import { PageSearchBar } from "../ui/PageSearchBar";
import { IconSearch } from "../../assets/icons/interfaceIcons2";

export const NavSrchBar = ({
  isSearchExpanded,
  setIsSearchExpanded,
  setSearchValue,
  searchValue,
}) => {
  return (
    <>
      <div className=" relative">
        <input
          type="serch"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={`h-10 w-[350px] pl-10 pr-4 rounded-lg text-sm  border bg-white  focus:shadow-input-box-shadow border-[#EFE9FF] text-gray-800 placeholder-gray-400  outline-none transition-all duration-300`}
          autoComplete="off"
        />
        <button
          title="Search - Shift + S"
          className={` absolute left-0 inset-0 w-10 h-full rounded-md flex justify-center items-center outline-none transition-colors duration-300`}
        >
          <IconSearch />
        </button>
      </div>
    </>
  );
};
