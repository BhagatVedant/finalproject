import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollFix() {
  const location = useLocation();

  useEffect(() => {
    //Scroll to top first
    window.scrollTo(0, 0);

    if (location.hash) {
      const hashId = location.hash.substring(1);

      setTimeout(() => {
        const headerOffset = 61; //Offset for navbar
        const targetElement = document.getElementById(hashId);

        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            window.pageYOffset + elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 500);
    }
  }, [location]);

  return null;
}

export default ScrollFix;
