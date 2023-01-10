import  '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layouts from '../components/Layouts'
import {useRouter} from 'next/router';
import Header from '../components/Header';
import CookieConsent from 'react-cookie-consent';

// function MyApp({ Component, pageProps }) {

//   return 
  
//   <Layouts>
//       <Component {...pageProps} />
//     </Layouts>
// }

// export default MyApp



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if(router.asPath =='/contact-us/' ||
      router.asPath =='/contact-us/?utm_source=email&utm_medium=contact-us&utm_campaign=navtobc_jan&utm_term=ds_us' ||
      router.asPath =='/contact-us/?utm_source=email&utm_medium=contact-us&utm_campaign=business_central_support&utm_term=ds_us' ||
      router.asPath =='/subscriber-thank-you/' ||
      router.asPath =='/email-dynamics365-crm/' ||
      router.asPath =='/emailer-power-bi/' ||
      router.asPath =='/not-for-profit-fundrasing-engagenment/' ||
      router.asPath =='/email-ax-to-finance/' ||
      router.asPath =='/email-gp-to-bc/' ||
      router.asPath =='/email-wms/' ||
      router.asPath == '/thank-you/email-subscriber/' ||
      router.asPath == '/subscribe-updates/' ||
      router.asPath == '/subscribe-updates/?utm_source=email&utm_medium=subscribe_updates&utm_campaign=business_central_support&utm_term=ds_us' ||
      router.asPath == '/subscribe-updates/?utm_source=email&utm_medium=subscribe_updates&utm_campaign=navtobc_jan&utm_term=ds_us' ||
      router.asPath == '/support-dynamics-365/' ||
      router.asPath == '/support-dynamics-365/#' ||
      router.asPath == '/support-dynamics-365/?utm_source=email&utm_medium=banner&utm_campaign=business_central_support&utm_term=ds_us' ||
      router.asPath == '/support-dynamics-365/?utm_source=Email&utm_medium=navtobc_campaign&utm_campaign=business_central_support&utm_term=us' ||
      router.asPath == '/thank-you/' ||
      router.asPath == '/thanks-webinar-registration/' ||
      router.asPath == '/upgrade-nav-to-business-central/' ||
      router.asPath == '/upgrade-nav-to-business-central/#' ||
      router.asPath == '/upgrade-nav-to-business-central/?utm_source=Email&utm_medium=navtobc_campaign&utm_campaign=upgrade_nav_to_business_central&utm_term=us' ||
      router.asPath == '/dynamics-nav-support-ending-soon/'
      
  )  {
    return (
      <>
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
  <Layouts>
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
