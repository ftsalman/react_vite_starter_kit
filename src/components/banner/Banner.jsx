import React, { useState, useEffect } from "react";
import { IconCross } from "../../assets/icons/interfaceIcons2";

const Banner = () => {
  const [currentOffer, setCurrentOffer] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const offers = [
    "🎉 FREE SHIPPING on orders over $50! Limited time offer.",
    "🔥 FLASH SALE: 30% OFF on all summer collections!",
    "✨ New Arrivals: Discover our latest fashion collection!",
    "⭐ Special Deal: Buy 1 Get 1 Free on selected items!",
    "🎁 Exclusive: Use code WELCOME20 for 20% off your first order!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-indigo-400 via-indigo-600 to-blue-400 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">F</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">Flone.</h2>
              <p className="text-xs opacity-90">Premium Fashion Store</p>
            </div>
          </div>

          {/* Horizontal Sliding Offers */}
          <div className="flex-1 mx-4 overflow-hidden">
            <div className="relative w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentOffer * 100}%)` }}
              >
                {offers.map((offer, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex items-center justify-center text-sm md:text-base font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <span className="animate-pulse">🏃‍♂️</span>
                      <span className="text-white">{offer}</span>
                      <span className="hidden md:inline-flex items-center gap-1 ml-4 bg-white/20 px-3 py-1 rounded-full text-xs">
                        ⏳ Limited Time
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-1 mt-1">
              {offers.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentOffer(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentOffer
                      ? "bg-white w-6"
                      : "bg-white/50 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition"
            aria-label="Close banner"
          >
            <IconCross />
          </button>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
    </div>
  );
};

export default Banner;
