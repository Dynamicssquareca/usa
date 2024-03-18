import React, { useState, useEffect } from 'react';
import PrmoTrigerModelHome from './PrmoTrigerModelHome';
import { useRouter } from 'next/router';


const ToasterSlide = ({ commonMessage, allowedURLs, toasterMessages }) => {
  const [showToaster, setShowToaster] = useState(false);
  const [closed, setClosed] = useState(false);
  const [showCount, setShowCount] = useState(0);
  const [showFloatingButton, setShowFloatingButton] = useState(true); // Initially show the floating button
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollThreshold = documentHeight * 0.2;

      // Check if the URL is allowed and other conditions to show the toaster
      if (
        !closed &&
        scrollPosition > scrollThreshold &&
        showCount < 2 &&
        isURLAllowed(router.pathname, allowedURLs)
      ) {
        setShowToaster(true);
      }

      // Check if the URL is allowed to show the floating button
      if (isURLAllowed(router.pathname, allowedURLs)) {
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
      } else {
        // If the URL is not allowed, hide the floating button
        setShowFloatingButton(false);
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
      }, 500); // Adjust the delay time as needed (in milliseconds)
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

      {/* <div className={`toaster-slide ${showToaster ? 'active' : ''}`}>
        <div className='toaster-content'>
          <h3>{currentMessage.heading}</h3>
          <p>{currentMessage.paragraph}</p>
          <div id='consult_now'>
          <a href="#upgradeform"
            data-bs-toggle="modal"

            className="btn-get-started scrollto"
          >
            <span>{currentMessage.buttonText}</span>
          </a>
          </div>

          <a className='colse-po-bt' onClick={handleClose}>&times;</a>
        </div>
      </div> */}
      <PrmoTrigerModelHome />
     {/* <a href="#upgradeform"
            data-bs-toggle="modal"><div id='consult_now' className="floating-button" >Consult Now!</div></a> */}
    </div>

  );
};

export default ToasterSlide;
