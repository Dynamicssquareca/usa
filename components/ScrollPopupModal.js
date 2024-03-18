import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Formpop from './Formpop';
import { useRouter } from 'next/router';
const ScrollPopupModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Add your specific URL conditions here
    const notAllowedURLs = [
      '/products/microsoft-dynamics-nav',
      '/dynamics-nav-to-business-central',
      '/blog/8-steps-to-upgrade-nav-to-business-central',
      '/ebook/upgrade-nav-to-business-central',
      '/ebook/upgrade-nav-to-business-central',
      '/blog/dynamics-nav-to-dynamics-365-business-central',
      '/blog/everything-know-about-microsoft-dynamics-nav',
      '/products/microsoft-dynamics-gp',
      '/dynamics-gp-to-business-central-migration',
      '/blog/comparing-dynamics-gp-vs-business-central',
      '/blog/steps-to-migrate-gp-to-business-central',
      '/products/microsoft-dynamics-ax',
      '/blog/upgrade-from-ax-2012-to-d365-finance-and-operations',
      '/blog/migrate-dynamics-ax-to-dynamics-365',
      '/our-services/dynamics-365-implementation-services',
      '/our-services/dynamics-365-support-services',
      '/our-services/dynamics-365-upgrade-services',
      '/products/microsoft-dynamics-365-finance-operations',
      '/products/dynamics-365-supply-chain-management',
      '/products/microsoft-dynamics-365-finance',
      '/products/microsoft-dynamics-365-finance-operations',
      '/products/dynamics-365-business-central'
    ];

    const isNotAllowedURL = notAllowedURLs.includes(router.pathname);
    const hasClosedPopup = Cookies.get('hasClosedPopup');

    if (!isNotAllowedURL && !hasClosedPopup) {
      const timerId = setTimeout(() => {
        setIsVisible(true);
      }, 25000); // Adjust the time (in milliseconds) according to your needs

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [router.pathname]);

  const handleClose = () => {
    setIsVisible(false);
    Cookies.set('hasClosedPopup', true, { expires: 1 });
  };

  return (
    <>
      {isVisible && (
       <>
        <div className="backdrop-mod">
<div className="popup-cust">
          <div className="content">
            <h3>Schedule a FREE No Obligation Discussion With Us!</h3>
            <button className='bbt' onClick={handleClose}><span aria-hidden="true">×</span></button>
            <Formpop />
          </div>
        </div>
        </div>
       </>
        
      )}
    </>
  );
};

export default ScrollPopupModal;
