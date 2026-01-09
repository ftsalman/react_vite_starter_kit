import React from "react";
import { Button } from "../ui/button/Button";
import { IconFav } from "../../assets/icons/InterfaceIcons";

export const Navfav = () => {
  return (
    <>
    <Button
    variant="tertiary"
    className=" bg-white border-gray-200 rounded-full p-1 w-10 h-10 shadow"

    >
    <IconFav size="24"/>
 

    </Button>
    </>
  );
};
