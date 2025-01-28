import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollFix() {
  const location = useLocation();

  useEffect(() => {
    //Scroll to top of the page when the location changes
    window.scrollTo(0, 0);

    //Scroll to the element with the id from the hash in the URL
    if (location.hash) {
      const hashId = location.hash.substring(1);

      //Wait for the page to render before scrolling
      setTimeout(() => {
        const headerOffset = 61; //Offset for navbar
        const targetElement = document.getElementById(hashId);

        //Scroll to the element with the id from the hash
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
