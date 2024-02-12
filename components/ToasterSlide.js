import React, { useState, useEffect } from 'react';
import PrmoTrigerModelHome from './PrmoTrigerModelHome';
import { useRouter } from 'next/router';


const ToasterSlide = ({ commonMessage, allowedURLs, toasterMessages }) => {
  const [showToaster, setShowToaster] = useState(false);
  const [closed, setClosed] = useState(false);
  const [showCount, setShowCount] = useState(0);
  const [showFloatingButton, setShowFloatingButton] = useState(true); // Initially show the floating button
  const router = useRouter();

  // useEffect(() => {
  //   const lastShownDate = localStorage.getItem('toasterLastShown');
  //   const todayDate = new Date().toLocaleDateString();
  //   const storedShowCount = parseInt(localStorage.getItem('toasterShowCount'), 10) || 0;

  //   if (lastShownDate !== todayDate) {
  //     setShowCount(0);
  //     localStorage.setItem('toasterShowCount', '0');
  //   } else {
  //     setShowCount(storedShowCount);
  //   }
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollThreshold = documentHeight * 0.2;

      if (!closed && scrollPosition > scrollThreshold && showCount < 2 && isURLAllowed(router.pathname, allowedURLs)) {
        setShowToaster(true);
      }

      // Check if the footer is visible on the screen
      const footer = document.querySelector('footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        if (footerPosition < windowHeight) {
          setShowFloatingButton(false); // Hide the floating button when the footer is visible
        } else {
          setShowFloatingButton(true); // Show the floating button when the footer is not visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [closed, showCount, allowedURLs, router.pathname]);

  useEffect(() => {
    let timeoutId;

    if (closed) {
      timeoutId = setTimeout(() => {
        setShowFloatingButton(true); // Show the floating button after closing the toaster slide
      }, 3000); // Adjust the delay time as needed (in milliseconds)
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [closed]);

  const handleClose = () => {
    setShowToaster(false);
    setClosed(true);
    setShowFloatingButton(false); // Ensure that the floating button is hidden when the toaster slide is closed

    const newShowCount = showCount + 1;
    setShowCount(newShowCount);
    localStorage.setItem('toasterShowCount', newShowCount.toString());
    localStorage.setItem('toasterLastShown', new Date().toLocaleDateString());
  };

  const handleFloatingButtonClick = () => {
    setShowToaster(true);
    setClosed(false);
    setShowFloatingButton(false); // Ensure that the floating button is hidden when the toaster slide is opened
  };

  const isURLAllowed = (url, allowedURLs) => {
    return allowedURLs.includes(url) || allowedURLs.some(allowedURL => url.startsWith(allowedURL));
  };

  const findMessageForURL = () => {
    const messageForURL = toasterMessages.find(msg => isURLAllowed(router.pathname, msg.urls));
    return messageForURL ? messageForURL : commonMessage;
  };

  const currentMessage = findMessageForURL();

  return (
    <div className={`toaster-container ${showToaster ? 'show' : ''}`}>

      <div className={`toaster-slide ${showToaster ? 'active' : ''}`}>
        <div className='toaster-content'>
          <h3>{currentMessage.heading}</h3>
          <p>{currentMessage.paragraph}</p>
          <a href="#upgradeform"
            data-bs-toggle="modal"

            className="btn-get-started scrollto"
          >
            <span>{currentMessage.buttonText}</span>
          </a>

          <a className='colse-po-bt' onClick={handleClose}>&times;</a>
        </div>




      </div>
      <PrmoTrigerModelHome />
      {showFloatingButton && !showToaster && closed && <div className={`floating-button ${showFloatingButton ? 'show' : ''}`} onClick={handleFloatingButtonClick}>Consult Now!</div>}
    </div>

  );
};

export default ToasterSlide;
