import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setWindowSize(prev => {
        // only update if width actually changed
        if (prev.width !== newWidth) {
          return { width: newWidth, height: newHeight };
        }
        return prev;
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
