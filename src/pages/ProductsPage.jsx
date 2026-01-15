import React, { useState } from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { Button } from "../components/ui/button/Button";
import { IconArrowDown, IconSort } from "../assets/icons/interfaceIcons2";
import { array } from "prop-types";
import { List } from "../components/ui/List";
import Card from "../components/ui/Card";
import { Tabs } from "../../lib/turtle-ui/components/tabs/Tabs";
import { IconArrowDownAlt, IconFav } from "../assets/icons/InterfaceIcons";

const PRODUCT_TABS = [
  { id: 1, label: "All" },
  { id: 2, label: "Headphones" },
  { id: 3, label: "Earbuds" },
  { id: 4, label: "Wireless" },
];

const PRODUCTS = [
  {
    id: 1,
    title: "Wireless Earbuds, IPX8",
    price: "$89.00",
    desc: "Organic Cotton, fairtrade certified",
    img: "https://i.pinimg.com/1200x/07/60/ac/0760ac4e1d7ea87bf9c86c3b15627e4e.jpg",
  },
  {
    id: 2,
    title: "AirPods Max",
    price: "$559.00",
    desc: "A perfect balance of high-fidelity audio",
    img: "https://i.pinimg.com/736x/8a/84/63/8a8463af30cf64eb8d028d13d7694ef8.jpg",
  },
  {
    id: 3,
    title: "Bose BT Earphones",
    price: "$289.00",
    desc: "Table with air purifier, stained veneer/black",
    img: "https://i.pinimg.com/1200x/c9/41/b4/c941b45eca03d5fa454096f45b60550c.jpg",
  },
  {
    id: 4,
    title: "VIVEFOX Headphones",
    price: "$39.00",
    desc: "Wired Stereo Headsets With Mic",
    img: "https://i.pinimg.com/736x/8a/8e/2c/8a8e2ce90d882903da3f41a8c8a81db2.jpg",
  },
  {
    id: 1,
    title: "Wireless Earbuds, IPX8",
    price: "$89.00",
    desc: "Organic Cotton, fairtrade certified",
    img: "https://i.pinimg.com/1200x/07/60/ac/0760ac4e1d7ea87bf9c86c3b15627e4e.jpg",
  },
  {
    id: 2,
    title: "AirPods Max",
    price: "$559.00",
    desc: "A perfect balance of high-fidelity audio",
    img: "https://i.pinimg.com/736x/8a/84/63/8a8463af30cf64eb8d028d13d7694ef8.jpg",
  },
  {
    id: 3,
    title: "Bose BT Earphones",
    price: "$289.00",
    desc: "Table with air purifier, stained veneer/black",
    img: "https://i.pinimg.com/1200x/c9/41/b4/c941b45eca03d5fa454096f45b60550c.jpg",
  },
  {
    id: 4,
    title: "VIVEFOX Headphones",
    price: "$39.00",
    desc: "Wired Stereo Headsets With Mic",
    img: "https://i.pinimg.com/736x/8a/8e/2c/8a8e2ce90d882903da3f41a8c8a81db2.jpg",
  },
  {
    id: 1,
    title: "Wireless Earbuds, IPX8",
    price: "$89.00",
    desc: "Organic Cotton, fairtrade certified",
    img: "https://i.pinimg.com/1200x/07/60/ac/0760ac4e1d7ea87bf9c86c3b15627e4e.jpg",
  },
  {
    id: 2,
    title: "AirPods Max",
    price: "$559.00",
    desc: "A perfect balance of high-fidelity audio",
    img: "https://i.pinimg.com/736x/8a/84/63/8a8463af30cf64eb8d028d13d7694ef8.jpg",
  },
  {
    id: 3,
    title: "Bose BT Earphones",
    price: "$289.00",
    desc: "Table with air purifier, stained veneer/black",
    img: "https://i.pinimg.com/1200x/c9/41/b4/c941b45eca03d5fa454096f45b60550c.jpg",
  },
  {
    id: 4,
    title: "VIVEFOX Headphones",
    price: "$39.00",
    desc: "Wired Stereo Headsets With Mic",
    img: "https://i.pinimg.com/736x/8a/8e/2c/8a8e2ce90d882903da3f41a8c8a81db2.jpg",
  },
  {
    id: 1,
    title: "Wireless Earbuds, IPX8",
    price: "$89.00",
    desc: "Organic Cotton, fairtrade certified",
    img: "https://i.pinimg.com/1200x/07/60/ac/0760ac4e1d7ea87bf9c86c3b15627e4e.jpg",
  },
  {
    id: 2,
    title: "AirPods Max",
    price: "$559.00",
    desc: "A perfect balance of high-fidelity audio",
    img: "https://i.pinimg.com/736x/8a/84/63/8a8463af30cf64eb8d028d13d7694ef8.jpg",
  },
  {
    id: 3,
    title: "Bose BT Earphones",
    price: "$289.00",
    desc: "Table with air purifier, stained veneer/black",
    img: "https://i.pinimg.com/1200x/c9/41/b4/c941b45eca03d5fa454096f45b60550c.jpg",
  },
  {
    id: 4,
    title: "VIVEFOX Headphones",
    price: "$39.00",
    desc: "Wired Stereo Headsets With Mic",
    img: "https://i.pinimg.com/736x/8a/8e/2c/8a8e2ce90d882903da3f41a8c8a81db2.jpg",
  },
  {
    id: 1,
    title: "Wireless Earbuds, IPX8",
    price: "$89.00",
    desc: "Organic Cotton, fairtrade certified",
    img: "https://i.pinimg.com/1200x/07/60/ac/0760ac4e1d7ea87bf9c86c3b15627e4e.jpg",
  },
  {
    id: 2,
    title: "AirPods Max",
    price: "$559.00",
    desc: "A perfect balance of high-fidelity audio",
    img: "https://i.pinimg.com/736x/8a/84/63/8a8463af30cf64eb8d028d13d7694ef8.jpg",
  },
  {
    id: 3,
    title: "Bose BT Earphones",
    price: "$289.00",
    desc: "Table with air purifier, stained veneer/black",
    img: "https://i.pinimg.com/1200x/c9/41/b4/c941b45eca03d5fa454096f45b60550c.jpg",
  },
  {
    id: 4,
    title: "VIVEFOX Headphones",
    price: "$39.00",
    desc: "Wired Stereo Headsets With Mic",
    img: "https://i.pinimg.com/736x/8a/8e/2c/8a8e2ce90d882903da3f41a8c8a81db2.jpg",
  },
];

export const ProductsPage = () => {
  const [productsData, setProductsData] = useState(PRODUCTS);
  const [fetchStatus, setFetchStatus] = useState("default"); // "loading" | "error" | "Default
  const [activeTab, setActiveTab] = useState(PRODUCT_TABS[0]);
  const [isFav, setIsFav] = useState(false);

  console.log(productsData, "products");
  return (
    <>
      <div className="h-full p-0 flex flex-row gap-0">
        <div className="mx-auto flex-grow flex flex-col overflow-y-auto panel-scrollbar">
          {/* Header */}
          <div className="sticky top-0  z-10 flex items-center justify-between px-4 py-4">
            <h4 className="text-2xl font-bold whitespace-nowrap">Products</h4>

            <div className="flex items-center gap-5">
              {/* Tabs */}
              <Tabs
                tabs={PRODUCT_TABS}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {/* Sort Button */}
              <Button
                variant="secondary"
                className=" flex  w-[10rem] items-center justify-center gap- rounded-3xl bg-gray-50"
              >
                Sort by
                <IconArrowDownAlt size="20" />
              </Button>
            </div>
          </div>
          {/* Body */}
          <div className="container overflow-y-auto no-scrollbar panel-scrollbar h-full pt-2">
            <div className=" h-full px-4">
              {fetchStatus === "loading" ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <ProductCardSkeleton />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <List
                    uniqueKey="id"
                    data={productsData}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                    render={(item) => (
                      <>
                        <Card id={item?.id} className=" relative ">
                          {/* Wishlist */}
                          <Button
                            variant="secondary"
                            onClick={() => setIsFav(!isFav)}
                            className="absolute top-1.5 right-2 p-2 h-10 w-10 border bg-gray-200 border-gray-200 shadow-none rounded-full items-center justify-center"
                          >
                            <IconFav
                              size="24"
                              className={`transition-colors duration-300 ${
                                isFav
                                  ? "text-red-500 fill-red-500"
                                  : "text-gray-400"
                              }`}
                            />
                          </Button>

                          {/* Image */}
                          <div className="h-44 bg-gray-50  mt-8 rounded-xl flex items-center justify-center">
                            <img
                              src={item?.img || "/images/p1.png"}
                              alt={item?.title}
                              className="max-h-full object-cover"
                            />
                          </div>

                          {/* Content */}
                          <div className="mt-4 space-y-1">
                            <h4 className="font-semibold text-sm line-clamp-1">
                              {item?.title || "Wireless Earbuds, IPX8"}
                            </h4>

                            <p className="text-xs text-gray-500">
                              {item?.desc ||
                                "Organic Cotton, fairtrade certified"}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center text-yellow-500 text-sm">
                              ★★★★★
                              <span className="text-gray-400 text-xs ml-1">
                                (121)
                              </span>
                            </div>

                            {/* Price */}
                            <p className="font-bold">
                              {item?.price || "$89.00"}
                            </p>

                            {/* Button */}
                            <Button
                              variant="secondary"
                              className="mt-2 w-full border rounded-full py-1 text-sm hover:bg-black hover:text-white transition"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </Card>
                      </>
                    )}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductCardSkeleton = () => {
  return (
    <Card>
      <div className="h-44 bg-gray-200 rounded-xl"></div>
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </div>
    </Card>
  );
};
