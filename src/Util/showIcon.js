// useWindowResize.js
import { useState, useEffect } from "react";

function useWindowResize() {
  const [showIconOnly, setShowIconOnly] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setShowIconOnly(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return showIconOnly;
}

export default useWindowResize;
