import React, { createContext, useEffect, useState } from "react";
import { productsDummyData } from "../constants/assets";


export  const  ShopContext =  createContext();


export const ShopContextProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  useEffect(()=>{

    setProducts(productsDummyData);
  },[])

  return (

<></>

  );
};
