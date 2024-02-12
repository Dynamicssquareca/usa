import React, { useState, useEffect } from 'react';
import PrmoTrigerModelHome from './PrmoTrigerModelHome';
import { useRouter } from 'next/router';


const ToasterSlidecupy = ({ commonMessage, allowedURLs, toasterMessages }) => {
  const [showToaster, setShowToaster] = useState(false);
  const [closed, setClosed] = useState(false);
  const [showCount, setShowCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const lastShownDate = localStorage.getItem('toasterLastShown');
    const todayDate = new Date().toLocaleDateString();
    const storedShowCount = parseInt(localStorage.getItem('toasterShowCount'), 10) || 0;

    if (lastShownDate !== todayDate) {
      setShowCount(0);
      localStorage.setItem('toasterShowCount', '0');
    } else {
      setShowCount(storedShowCount);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollThreshold = documentHeight * 0.3;

      if (!closed && scrollPosition > scrollThreshold && showCount < 2 && isURLAllowed(router.pathname, allowedURLs)) {
        setShowToaster(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [closed, showCount, allowedURLs, router.pathname]);

  const handleClose = () => {
    setShowToaster(false);
    setClosed(true);

    const newShowCount = showCount + 1;
    setShowCount(newShowCount);
    localStorage.setItem('toasterShowCount', newShowCount.toString());
    localStorage.setItem('toasterLastShown', new Date().toLocaleDateString());
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
      <PrmoTrigerModelHome />
    </div>
  );
};

export default ToasterSlidecupy;
