import React from "react";
import { Button } from "../ui/button/Button";
import { IconCart } from "../../assets/icons/InterfaceIcons";

export const Navcart = () => {
  return (
    <>
      <Button 
      variant="tertiary"
      className=" bg-white border-gray-200 rounded-full p-1 w-10 h-10 shadow"
      
      >
        <IconCart />
      </Button>
    </>
  );
};
