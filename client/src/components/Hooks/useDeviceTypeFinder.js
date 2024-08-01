import { useState, useEffect } from "react";

const useDeviceTypeFinder = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > 1024) {
      setDevice("desktop");
    } else if (width < 1024 && width >= 768) {
      setDevice("tablet");
    } else if (width < 768) {
      setDevice("mobile");
    }
  }, [width]);

  return { device };
};

export default useDeviceTypeFinder;
