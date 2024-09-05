// import  '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layouts from '../components/Layouts'
import { useRouter } from 'next/router';
import Header from '../components/Header';
import CookieConsent from 'react-cookie-consent';
import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import ScrollPopupModal from '../components/ScrollPopupModal';
import ToasterSlide from '../components/ToasterSlide';

// function MyApp({ Component, pageProps }) {

//   return 

//   <Layouts>
//       <Component {...pageProps} />
//     </Layouts>
// }

// export default MyApp



function MyApp({ Component, pageProps }) {

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

    router.events.on("routeChangeComplete", () => {
      setProgress(600);
    });
  });

  const commonMessage = {
    heading: 'Power Up Your Business with Microsoft AI Solutions',
    paragraph: 'Maximize Efficiency and Profitability',
    buttonText: 'Consult Now!'
  };
  const toasterMessages = [
    {
      urls: ['/products/microsoft-dynamics-nav'], // URLs where this message should appear
      heading: 'Upgrade your NAV with Powerful AI Capabilities',
      paragraph: 'Enhance Efficiency and Profitability',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/dynamics-nav-to-business-central'], // URLs where this message should appear
      heading: 'Upgrade your NAV with Powerful AI Capabilities',
      paragraph: 'Simplify Business and Increase Profits',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/ebook/upgrade-nav-to-business-central'], // URLs where this message should appear
      heading: 'Upgrade your NAV with Powerful AI Capabilities',
      paragraph: 'Simplify Business and Increase Profits',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/products/microsoft-dynamics-gp'], // URLs where this message should appear
      heading: 'Migrate your Outdated GP with AI-enabled Solution ',
      paragraph: 'Reliable and Cost-Effective',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/dynamics-gp-to-business-central-migration'], // URLs where this message should appear
      heading: 'Leave GP Behind, Leap into the Future with Business Central',
      paragraph: 'Accept Success with Effortless Migration ',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/products/microsoft-dynamics-ax'], // URLs where this message should appear
      heading: 'Leverage Superiour Business Intelligence and Data Insights',
      paragraph: 'Simplify Complex Finance and Operations',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/our-services/dynamics-365-implementation-services'], // URLs where this message should appear
      heading: 'Save upto 40% on Implementation Cost',
      paragraph: 'Optimize Business and Boost Productivity',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/our-services/dynamics-365-support-services'], // URLs where this message should appear
      heading: 'Focus on your Growth, let us Simplify your Business with Modern Tech',
      paragraph: 'Minimize Downtime, Maximize Productivity',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/our-services/dynamics-365-upgrade-services'], // URLs where this message should appear
      heading: 'Save upto 40% on Upgrade Cost',
      paragraph: 'Eliminate Complexity and Maximize ROI',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/products/dynamics-365-business-central'], // URLs where this message should appear
      heading: 'Power Up Your Business with Microsoft AI Solutions',
      paragraph: 'Maximize Efficiency and Profitability',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/products/microsoft-dynamics-365-finance-operations'], // URLs where this message should appear
      heading: 'Automate Finances with Microsoft AI Solutions',
      paragraph: 'Maximize Efficiency and Profitability',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/products/microsoft-dynamics-365-finance'], // URLs where this message should appear
      heading: 'Automate Finances with Microsoft AI Solutions',
      paragraph: 'Maximize Efficiency and Profitability',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/products/dynamics-365-supply-chain-management'], // URLs where this message should appear
      heading: 'Modernize Supply Chain with Microsoft AI Solutions',
      paragraph: 'Maximize Efficiency and Profitability',
      buttonText: 'Consult Now!'
    },
    {
      urls: ['/blog', '/blog/'], 
      heading: 'Power Up Your Business with Microsoft AI Solutions',
    paragraph: 'Maximize Efficiency and Profitability',
    buttonText: 'Consult Now!'
    }
    // Add more objects for different URLs as needed
  ];




  const router = useRouter();
  if (router.asPath == '/contact-us/' ||
    router.asPath == '/contact-test/' ||
    router.asPath == '/contact-us/?utm_source=email&utm_medium=contact-us&utm_campaign=navtobc_jan&utm_term=ds_us' ||
    router.asPath == '/contact-us/?utm_source=email&utm_medium=contact-us&utm_campaign=business_central_support&utm_term=ds_us' ||
    router.asPath == '/subscriber-thank-you/' ||
    router.asPath == '/not-for-profit-fundrasing-engagenment/' ||
    router.asPath == '/thank-you/email-subscriber/' ||
    router.asPath == '/subscribe-updates/' ||
    router.asPath == '/subscribe-updates/?utm_source=email&utm_medium=subscribe_updates&utm_campaign=business_central_support&utm_term=ds_us' ||
    router.asPath == '/subscribe-updates/?utm_source=email&utm_medium=subscribe_updates&utm_campaign=navtobc_jan&utm_term=ds_us' ||
    router.asPath == '/thank-you/' ||
    router.asPath == '/thanks-webinar-registration/' ||
    router.asPath == '/dynamics-nav-support-ending-soon/' ||
    router.asPath == '/schedule-a-demo/' ||
    router.asPath == '/test-form/' 

  ) {
    return (
      <>
        <LoadingBar
          color='#bb2b36'
          progress={progress}
          waitingTime={400}
          height={2}
          onLoaderFinished={() => setProgress(0)}
        />
        <Header />
        <Component {...pageProps} />
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="myAwesomeCookieName2"
        >
          We use cookies on our website to give you the most relevant experience
          by remembering your preferences and repeat visits. By clicking "Accept",
          you consent to the use of ALL the cookies. Do not sell my personal
          information.
        </CookieConsent>
      </>
    )

  };

  return <>
    <LoadingBar
      color='#bb2b36'
      progress={progress}
      waitingTime={400}
      height={2}
      onLoaderFinished={() => setProgress(0)}
    />
    <Layouts>
      <ScrollPopupModal />
      <ToasterSlide allowedURLs={[
        '/products/microsoft-dynamics-nav',
        '/dynamics-nav-to-business-central',
        '/blog/8-steps-to-upgrade-nav-to-business-central',
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
        '/blog',
        '/products/dynamics-365-supply-chain-management',
        '/products/microsoft-dynamics-365-finance',
        '/products/microsoft-dynamics-365-finance-operations',
        '/products/dynamics-365-business-central',

      ]} commonMessage={commonMessage} toasterMessages={toasterMessages} />
      <Component {...pageProps} />
    </Layouts>
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myAwesomeCookieName2"
    >
      We use cookies on our website to give you the most relevant experience
      by remembering your preferences and repeat visits. By clicking "Accept",
      you consent to the use of ALL the cookies. Do not sell my personal
      information.
    </CookieConsent>
  </>
}

export default MyApp
