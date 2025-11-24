import React, { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export const NavAvathar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Link to="/">
        <img
          src="https://i.pinimg.com/736x/34/5c/6d/345c6d52234bbc72407ea25d49ad945e.jpg"
          alt="avathar"
          className="outline-0 cursor-pointer size-10 object-cover  shrink-0 rounded-full border-2 border-[#F89F53]"
          title="avathar"
          onClick={() => {
            // setIsProfileMenuOpen(!isProfileMenuOpen);
          }}
          loading="lazy"
          onError={(e) => {
            e.target.src = "/images/profile-default.png";
          }}
        />
      </Link>

      {/* Profile DropDown */}

      {isProfileMenuOpen &&
        //    <NavProfileMenu
        //     />
        alert(" I'am being built. 🫷⏳")}
    </>
  );
};
