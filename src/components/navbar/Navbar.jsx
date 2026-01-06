import React, { useState } from "react";
import { NavAvathar } from "./NavAvathar";
import { Link } from "react-router-dom";
import { List } from "../ui/List";
import { NavSearch } from "./NavSearch";
import { Navcart } from "./Navcart";
import { Navfav } from "./Navfav";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SCREEN_SIZES } from "../../utils/utils";
import { useToggle } from "../../hooks/useToggle";

const NAV_LIST = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Shop", path: "/shop" },
  { id: 3, label: "Collections", path: "/collections" },
  { id: 4, label: "Pages", path: "/pages" },
  { id: 5, label: "Blogs", path: "/blogs" },
  { id: 6, label: "About", path: "/about" },
  { id: 7, label: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isSearchExpanded, toggleSearch] = useToggle(false);
  const [searchValue, setSearchValue] = useState("");
  const { width: windowWidth } = useWindowSize();
  
  return (
    <nav className="w-full h-[3.75rem] px-2.5 md:px-8 py-3 flex items-center justify-between border-b border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2.5 flex-shrink-0">
        <Link to="/" className="text-2xl font-extrabold whitespace-nowrap hover:opacity-80 transition-opacity">
          Flone.
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center justify-center flex-grow mx-4">
        <List
          uniqueKey="id"
          data={NAV_LIST}
          className="flex items-center justify-center gap-6 text-sm font-medium"
          render={(item) => (
            <Link
              to={item?.path}
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              {item?.label}
            </Link>
          )}
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="flex items-center gap-1">
          <NavSearch
            isSearchExpanded={
              SCREEN_SIZES.lg < windowWidth ? isSearchExpanded : true
            }
            setIsSearchExpanded={toggleSearch}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <NavAvathar />
          <Navfav />
          <Navcart />
        </div>
      </div>
    </nav>
  );
};