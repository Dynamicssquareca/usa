import React, { useState, useEffect } from 'react';
import PrmoTrigerModelHome from './PrmoTrigerModelHome';
import { useRouter } from 'next/router';

const ToasterSlide = ({ allowedURLs }) => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (footerPosition < windowHeight) {
          setShowFloatingButton(false);
        } else {
          setShowFloatingButton(true);
        }
      }
    };

    const handleRouteChange = () => {
      // Check if the current URL is in the allowed list
      setShowFloatingButton(allowedURLs.includes(router.pathname));
    };

    // Initial check when the component mounts
    handleRouteChange();

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

  }, [allowedURLs, router]);

  const handleFloatingButtonClick = () => {
    // Add functionality here if needed
  };

  return (
    <div>
      <PrmoTrigerModelHome />
      {showFloatingButton && (
        <a href="#upgradeform" data-bs-toggle="modal">
          <div id='consult_now' className={`floating-button ${showFloatingButton ? 'show' : ''}`} onClick={handleFloatingButtonClick}>
            Consult Now!
          </div>
        </a>
      )}
    </div>
  );
};

export default ToasterSlide;
