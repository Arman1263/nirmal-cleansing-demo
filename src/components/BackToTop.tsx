import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#1C1917] text-white shadow-xl hover:bg-[#2E6F40] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F40] focus-visible:ring-offset-2 transition-all duration-300 transform hover:scale-110 active:scale-95 animate-in fade-in"
      aria-label="Scroll back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

