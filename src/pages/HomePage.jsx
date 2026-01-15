import React, { useEffect, useState } from "react";
import { CardContainer } from "../components/ui/CardContainer";
import Card from "../components/ui/Card";
import {
  IconArrowOutward,
  IconArrowRightAlt,
  IconArrowUpward,
  IconStar,
  IconWhatsApp,
} from "../assets/icons/interfaceIcons2";
import { IconArrowNorthEast, IconFav } from "../assets/icons/InterfaceIcons";
import { Button } from "../../lib/turtle-ui/components/button/Button";
import { DataList } from "../../lib/turtle-ui/components/list/DataList";
import { Link } from "react-router-dom";

const MORE_PRODUCTS = [
  {
    id: 1,
    title: "More Products",
    descp: "460 Plus Items",
    Product: [
      {
        id: 1,
        img: "https://i.pinimg.com/1200x/0c/d8/bb/0cd8bb100504d9bad6a694d1420709e7.jpg",
      },
      {
        id: 2,
        img: "https://i.pinimg.com/1200x/0c/d8/bb/0cd8bb100504d9bad6a694d1420709e7.jpg",
      },
      {
        id: 3,
        img: "https://i.pinimg.com/736x/bd/33/7c/bd337c47ad2630b241caa5387d499218.jpg",
      },
    ],
  },
];

const PRODUCT_SLIDES = [
  {
    img: "/imgs/headphone.png",
    badge: "🎧 Music is Classic",
    title: "Sequoia Inspiring",
    subtitle: "Musico.",
    step: "01",
    featureTitle: "Clear Sounds",
    featureDesc: "Making your dream music come true",
  },
  {
    img: "/imgs/VR_.png",
    badge: "🎶 Feel the Bass",
    title: "Deep Bass",
    subtitle: "Experience.",
    step: "02",
    featureTitle: "Powerful Beats",
    featureDesc: "Feel every beat with crystal clarity",
  },
  {
    img: "/imgs/laptop.png",
    badge: "🎼 Studio Quality",
    title: "Pro Audio",
    subtitle: "Headphones.",
    step: "03",
    featureTitle: "Noise Cancellation",
    featureDesc: "Pure sound without distractions",
  },
];

export const HomePage = () => {
  const [isFav, setIsFav] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const refreshImage = () => {
    setCurrentSlide((prev) =>
      prev === PRODUCT_SLIDES.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === PRODUCT_SLIDES.length - 1 ? 0 : prev + 1
      );
    }, 4000); // change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row px-3  overflow-y-auto h-screen no-scrollbar">
        <div className="flex-grow">
          {/* Main Layout */}
          <div className="container p-4 flex-grow space-y-2">
            {/* LEFT MAIN CONTENT */}
            <CardContainer className="lg:col-span-8 rounded-3xl p-6 flex flex-col justify-between min-h-[400px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* LEFT CONTENT */}
                <div className="space-y-6">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full text-sm shadow">
                    {PRODUCT_SLIDES[currentSlide].badge}
                  </span>

                  {/* Heading */}
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    {PRODUCT_SLIDES[currentSlide].title} <br />{" "}
                    {PRODUCT_SLIDES[currentSlide].subtitle}
                  </h1>

                  {/* Info Row */}
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-light text-gray-300">
                      {PRODUCT_SLIDES[currentSlide].step}
                    </div>
                    <div>→→→→</div>
                    <div className="flex-1">
                      <p className="font-semibold">
                        {PRODUCT_SLIDES[currentSlide].featureTitle}
                      </p>
                      <p className="text-sm text-gray-500">
                        {PRODUCT_SLIDES[currentSlide].featureDesc} <br />
                        stay with Sequoia Sounds!
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <Link to="products">
                    <Button
                      variant="secondary"
                      className="flex items-center gap-3 bg-lime-300 hover:bg-lime-400 transition px-6 py-3 rounded-full font-semibold w-fit"
                    >
                      View All Products
                      <span className="p-2 bg-black rounded-full hover:scale-105 transition-all duration-500">
                        <img
                          src="/svgs/redirect_icon.svg"
                          alt=""
                          className="  w-5"
                        />
                      </span>
                    </Button>
                  </Link>

                  {/* Social Icons */}
                  <div className="flex gap-2 pt-4 text-gray-500">
                    <h2>follow us on :</h2>
                    <div className="flex items-center justify-center gap-2">
                      <span className="hover:scale-110 transition-all duration-500 cursor-pointer">
                        <IconWhatsApp size="20" />
                      </span>
                      <span className="hover:scale-110 transition-all duration-500 cursor-pointer">
                        <img
                          src="/imgs/spotify.png"
                          alt="spotify"
                          className="w-5 h-5"
                        />
                      </span>
                      <span className="hover:scale-110 transition-all duration-500 cursor-pointer">
                        <img
                          src="/imgs/instagram.png"
                          alt="instagram"
                          className="w-5 h-5"
                        />
                      </span>
                      <span className="hover:scale-110 transition-all duration-500 cursor-pointer">
                        <img
                          src="/imgs/linkedin.png"
                          alt="linkedin"
                          className="w-5 h-5"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative flex justify-center items-center">
                  {/* Floating dots */}
                  <span className="absolute top-10 left-10 w-3 h-3 bg-gray-300 rounded-full" />
                  <span className="absolute bottom-16 right-10 w-2 h-2 bg-gray-400 rounded-full" />
                  {/* Product Image */}
                  <img
                    src={PRODUCT_SLIDES[currentSlide].img}
                    alt={PRODUCT_SLIDES[currentSlide].title}
                    className="max-w-[320px]  animate-float"
                  />

                  {/* Bottom circular button */}
                  <Button
                    variant="secondary"
                    onClick={refreshImage}
                    className="absolute bottom-0 bg-white shadow-md p-4 rounded-full hover:rotate-180 transition-transform duration-500"
                  >
                    ⟳
                  </Button>
                </div>
              </div>
            </CardContainer>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 ">
              <CardContainer className="col-start-1 min-h-20 rounded-3xl">
                <DataList
                  data={MORE_PRODUCTS}
                  className=" flex flex-col "
                  render={(item) => (
                    <div key={item?.id} className="space-y-4 relative">
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.descp}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {item.Product.map((pdut) => (
                          <Card
                            key={pdut?.id}
                            className=" w-24 rounded-3xl p-0"
                          >
                            <img
                              src={pdut?.img}
                              alt="more-products"
                              className="rounded-2xl w-full object-cover"
                            />
                          </Card>
                        ))}
                      </div>

                      <Button
                        variant="secondary"
                        onClick={() => setIsFav(!isFav)}
                        className="absolute top-0 right-0 p-2 border bg-gray-200 border-gray-200 shadow-none rounded-full items-center justify-center"
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
                    </div>
                  )}
                />
              </CardContainer>
              <CardContainer className="p-6 rounded-3xl">
                <div className="relative flex flex-col items-center">
                  {/* Background Circle */}
                  <div
                    className="
        absolute top-12 z-0
        flex flex-col items-center justify-center
        text-white text-xs font-semibold
        w-24 h-24 sm:w-28 sm:h-28
        rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800
      "
                  >
                    <h2 className="text-base sm:text-lg font-bold">5M+</h2>
                    <span>Downloads</span>
                  </div>

                  {/* Avatar Stack */}
                  <div className="flex -space-x-3 sm:-space-x-4 z-10">
                    {[
                      "https://i.pinimg.com/1200x/9a/58/72/9a587266603249ff0d9203bf85fc35a4.jpg",
                      "https://i.pinimg.com/736x/12/f3/18/12f318af1ab11a5e72b7b777dab0a938.jpg",
                      "https://i.pinimg.com/1200x/66/b1/90/66b1900c9cfd14b94b3d8e8844f67a30.jpg",
                    ].map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="avatar"
                        className="
            w-14 h-14 sm:w-16 sm:h-16
            rounded-full border-4 border-white
            object-cover cursor-pointer
            hover:scale-110 transition duration-300
          "
                      />
                    ))}
                  </div>

                  {/* Reviews Button */}
                  <Button
                    variant="secondary"
                    className="mt-20 sm:mt-24 z-10  bg-white rounded-full px-4 py-2 flex items-center gap-2 text-sm sm:text-baseshadow"
                  >
                    <IconStar
                      size="20"
                      filled
                      className="text-yellow-400 hover:scale-110 transition"
                    />
                    4.6 reviews
                  </Button>
                </div>
              </CardContainer>
              {/* card3 */}
              <CardContainer className="relative rounded-3xl overflow-hidden p-6">
                {/* Background Image */}
                <img
                  src="/imgs/sensor.png"
                  alt="VR"
                  className="absolute right-0 bottom-0 w-[270px] object-contain opacity-90"
                />

                {/* Content */}
                <div className="relative  z-10 space-y-5">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-3xl shadow-none"
                  >
                    ❤️‍🔥 Popular
                  </Button>

                  <h3 className="text-xl font-semibold leading-tight">
                    Listening Has <br /> Been Released
                  </h3>

                  {/* Avatars */}
                  <div className="flex -space-x-3 sm:-space-x-4">
                    {[
                      "https://i.pinimg.com/1200x/f0/79/a2/f079a2487f85c3fcc3252fdeb2cbda12.jpg",
                      "https://i.pinimg.com/736x/54/83/39/5483399969863889be98d4435132e9a9.jpg",
                      "https://i.pinimg.com/1200x/a0/a0/c7/a0a0c7542ad3f147c7db19aba0bfd2cc.jpg",
                    ].map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="avatar"
                        className="
            w-14 h-14 sm:w-16 sm:h-16
            rounded-full border-4 border-white
            object-cover cursor-pointer
            hover:scale-110 transition duration-300
          "
                      />
                    ))}
                  </div>

                  <Button
                    variant="secondary"
                    className=" absolute top-0 right-0 rounded-full w-14 h-14 hover:scale-105 transition-all duration-200 "
                  >
                    <IconArrowNorthEast size="20" />
                  </Button>

                  {/* rating */}
                  <Button
                    variant="secondary"
                    size="sm"
                    className=" absolute -bottom-10   right-0 rounded-3xl bg-white/50  hover:scale-105 transition-all duration-200 "
                  >
                    <IconStar
                      size="20"
                      filled
                      className="text-yellow-400 hover:scale-110 transition"
                    />
                    4.6
                  </Button>
                </div>
              </CardContainer>
            </div>
          </div>
        </div>

        {/* Side Section */}
        <div className="lg:sticky top-0 h-fit lg:w-[327px] flex flex-col gap-4 flex-shrink-0 p-4 container">
          <CardContainer className="bg-white p-6 rounded-3xl">
            <div className="space-y-4">
              <h3 className="font-semibold"> Popular Colors </h3>
              <div className="flex gap-2">
                {[
                  "bg-gray-800",
                  "bg-blue-500",
                  "bg-red-500",
                  "bg-green-500",
                  "bg-yellow-500",
                ].map((color, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-full border-4 border-gray-200 shadow ${color} cursor-pointer hover:scale-110 transition-transform`}
                  />
                ))}
              </div>
            </div>
          </CardContainer>

          {/* Product Card */}

          <CardContainer className="relative p-6 rounded-3xl min-h-[220px] overflow-hidden">
            {/* Content */}
            <div className="flex flex-col justify-between h-full">
              <h2 className="text-md font-bold leading-tight">
                New Gen <br /> X-blue
              </h2>
            </div>

            <Button
              variant="secondary"
              className=" absolute bottom-4 left-2 rounded-full w-14 h-14 hover:scale-105 transition-all duration-200 "
            >
              <IconArrowNorthEast size="20" />
            </Button>

            {/* Image */}
            <img
              src="/imgs/_airpod.png"
              alt="X-blue"
              className="absolute  bottom-0 right-0 w-50 object-contain"
            />
          </CardContainer>

          {/* VR Card */}

          <CardContainer className="relative min-h-[350px]  rounded-3xl overflow-hidden">
            <div className=" space-y-2">
              <img
                src="/imgs/vr.png"
                alt="VR"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <Button
                variant="secondary"
                className=" absolute z-10 rounded-full w-14 h-14  shadow top-2 right-3"
              >
                <IconArrowNorthEast size="20" />
              </Button>
              <div className=" absolute bottom-3 z-10">
                <h3 className=" text-sm font-bold">
                  Light Grey Surface <br /> Headphone
                </h3>
                <p className=" text-xs text-gray-400">Boosted with Bass</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
          </CardContainer>
        </div>
      </div>
    </>
  );
};
