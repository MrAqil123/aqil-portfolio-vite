"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            flex h-12 w-12 items-center justify-center rounded-full
            bg-blue-600 text-white shadow-lg transition-transform duration-300
            hover:bg-blue-700 hover:scale-110
          "
        >
          <span className="mt-[2px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-white"></span>
        </button>
      )}
    </div>
  );
}

