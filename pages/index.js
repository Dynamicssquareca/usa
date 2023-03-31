import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
      <title>
        USA's Trusted Microsoft Gold Partner | Dynamics Square
        </title>
        <meta
          name="description"
          content="Dynamics Square is USA's leading Gold Microsoft Dynamics 365 Partner. Contact us at +1-281-899-0865 for implementation, training & consulting services."
        />
        <link rel="canonical" href="https://www.dynamicssquare.com/" />
        <meta property="og:title" content="USA's Trusted Microsoft Gold Partner | Dynamics Square" />
        <meta property="og:site_name" content="Dynamics Square" />
        <meta property="og:url" content="https://www.dynamicssquare.com" />
        <meta property="og:description" content="Dynamics Square is USA's leading Gold Microsoft Dynamics 365 Partner. Contact us at +1-281-899-0865 for implementation, training and consulting services." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.dynamicssquare.com/img/home-page-og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.com/" />
        <meta property="twitter:title" content="USA's Trusted Microsoft Gold Partner | Dynamics Square" />
        <meta property="twitter:description" content="Dynamics Square is USA's leading Gold Microsoft Dynamics 365 Partner. Contact us at +1-281-899-0865 for implementation, training and consulting services." />
        <meta property="twitter:image" content="https://www.dynamicssquare.com/img/home-page-og.png" />




           <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              
              "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.dynamicssquare.com/#organization",
                "name": "Dynamics Square",
                "url": "https://www.dynamicssquare.com/",
                "sameAs": [
                    "https://www.facebook.com/dynamicssquareusa",
                    "https://twitter.com/dsquare_usa",
                    "https://www.linkedin.com/showcase/dynamics-square-usa/",
                    "https://www.youtube.com/c/DynamicsSquare"
                ],
                "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.dynamicssquare.com/#logo",
                    "inLanguage": "en-US",
                    "url": "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
                    "contentUrl": "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
                    "width": "1024",
                    "height": "1024",
                    "caption": "Dynamics Square"
                },
                "image": { "@id": "https://www.dynamicssquare.com/#logo" }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.dynamicssquare.com/#website",
                "url": "https://www.dynamicssquare.com/",
                "name": "Microsoft Dynamics 365 and Cloud consultancy experts at Dynamics Square USA.",
                "description": "Implementing cloud-based ERP, CRM, and other Microsoft cloud solutions simplifies complex business processes and challenges.",
                "publisher": { "@id": "https://www.dynamicssquare.com/#organization" },
                "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://www.dynamicssquare.com/?s={search_term_string}" }, "query-input": "required name=search_term_string" }],
                "inLanguage": "en-US"
            },
            {
                "@type": "ImageObject",
                "@id": "https://www.dynamicssquare.com/#primaryimage",
                "inLanguage": "en-US",
                "url": "https://www.dynamicssquare.com/img/home-page-og.png",
                "contentUrl": "https://www.dynamicssquare.com/img/home-page-og.png",
                "width": "800",
                "height": "400",
                "caption": "dynamicssquare"
            },
            {
                "@type": "WebPage",
                "@id": "https://www.dynamicssquare.com/#webpage",
                "url": "https://www.dynamicssquare.com/",
                "name": "Dynamics Square | CRM and ERP Consultants in the USA",
                "isPartOf": { "@id": "https://www.dynamicssquare.com/#website" },
                "about": { "@id": "https://www.dynamicssquare.com/#organization" },
                "primaryImageOfPage": { "@id": "https://www.dynamicssquare.com/#primaryimage" },
                "datePublished": "2016-10-15T06:09:16+00:00",
                "dateModified": "2022-12-22T09:15:37+00:00",
                "description": "Providing CRM, ERP, and Microsoft cloud solutions tailored to your specific needs, we are CRM and ERP consultants in the USA.",
                "breadcrumb": { "@id": "https://www.dynamicssquare.com/#breadcrumb" },
                "inLanguage": "en-US",
                "potentialAction": [{ "@type": "ReadAction", "target": ["https://www.dynamicssquare.com/"] }]
            },
            { "@type": "BreadcrumbList", "@id": "https://www.dynamicssquare.com/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }
        ]

            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              
              "@context" : "http://schema.org",
"@type" : "Organization",
"name" : "Dynamics Square USA Ltd.",
"description" : "By providing unbiased advice on ERP and CRM solutions, we help businesses grow at scale.",
"image" : "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
"alternateName" : "Dynamics Square Software company in California, USA",
"telephone" : "+12137840845, +12818990865",
"email" : "info@dynamicssquare.com",
"address" : {
"@type" : "PostalAddress",
"streetAddress" : "2372 Morse Ave, Ste. 310",
"addressLocality" : "82372 Morse Ave, Ste. 310, Irvine, California 92614",
"addressRegion" : "California",
"addressCountry" : "USA",
"postalCode" : "92614"
},
  "brand":{
  "@type":"Brand",
  "name":"Dynamics Square USA Ltd.",
  "logo": "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg"
 },
"aggregateRating": 
    {
      "@type": "AggregateRating",
	  "ratingValue": "4.4",
	  "reviewCount": "22"
	},
"url" : "https://www.dynamicssquare.com/",
"sameAs" : [
"https://www.facebook.com/dynamicssquareusa",
"https://twitter.com/dsquare_usa",
"https://www.linkedin.com/showcase/dynamics-square-usa/",
"https://www.youtube.com/c/DynamicsSquare"
]

            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
    "@type": "WebPage",
    "Headline": "We assist you in effectively leveraging CRM, ERP, and cloud technologies.",
    "description": "There is a goal, a vision, or an issue you need to address. A team of 140+ Microsoft certified consultants, creative thinkers, and developers is proactively available to help you on your digital transformation journey. The mission of our company is to alleviate your problems and make your vision a reality.",
    "Keywords" :["erp consultants usa","crm consultancy","d365 business central","crm expert online","d365 for finance","dynamics crm implementation","d365 field service","crm implementation services"]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context" : "https://schema.org",
    "@type" : "WebSite",
    "name" : "Dynamics Square USA Ltd.",
    "alternateName" : "Dynamics Square Software company in California, USA",
    "url" : "https://www.dynamicssquare.com/"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context" : "http://schema.org",
"@type" : "localBusiness",
"name" : "Dynamics Square USA Ltd.",
"description" : "By providing unbiased advice on ERP and CRM solutions, we help businesses grow at scale.",
"image" : "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
"alternateName" : "Dynamics Square Software company in California, USA",
"telephone" : "+12137840845, +12818990865",
"email" : "info@dynamicssquare.com",
"priceRange": "$$$-$$$",
"address" : {
"@type" : "PostalAddress",
"streetAddress" : "2372 Morse Ave, Ste. 310",
"addressLocality" : "2372 Morse Ave, Ste. 310, Irvine, California 92614",
"addressRegion" : "California",
"addressCountry" : "USA",
"postalCode" : "92614"
},
 "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.6855366020848,
        "longitude": -117.84693918690395
      },
      
  "brand":{
  "@type":"Brand",
  "name":"Dynamics Square USA Ltd.",
  "logo": "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg"
 },
"aggregateRating": 
    {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
	  "reviewCount": "22"
	},
    
    "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednessday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "5:00"
        },
         {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday - closed"
          
      
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday - Closed"
        
        }
        ],
    
      
"url" : "https://www.dynamicssquare.com/",
"sameAs" : [
"https://www.facebook.com/dynamicssquareusa",
"https://twitter.com/dsquare_usa",
"https://www.linkedin.com/showcase/dynamics-square-usa/",
"https://www.youtube.com/c/DynamicsSquare"
]
            })
          }}
        />
      </Head>

      <section id="hero" className="hero hero-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  align-self-center">
              <h1>
              USA's  Leading <br /> Microsoft Dynamics <br /> Partner
              </h1>
              <p>Simplify your end-to-end business processes and maximise outcomes with business applications from your trusted <b>Microsoft Dynamics 365 Partner</b>.</p>
              <div>
                <div className="text-center text-lg-start btn-welcome">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to an Expert </span>
                    </a>
                  </Link>
                </div>
                <div className="bnner_inline_images">
                  <ul>
                    <li>
                      <Image
                        src="/img/Microsoft-Partner-black.png"
                        alt="Microsoft Partner black.png"
                        width={206}
                        height={67}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img hero-img-home"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="banner-service-wraper">
                <ul className="list-n fist-m">
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/dynamics-365-business-central/">
                        <a>
                          <img
                            src="/img/business-center-logo.svg"
                            alt="business-center-logo"
                            width="34"
                            height="34"
                          />
                          <span>
                            Business <br />
                            Central
                          </span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/microsoft-azure/">
                        <a>
                          <img src="/img/azur-icons.svg" alt="azur-icons" width="34"
                            height="34" />
                          <span>Azure</span>
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n fist-m-2">
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/microsoft-power-apps/">
                        <a>
                          <img
                            src="/img/Powerapps_power-apps.svg"
                            alt="Powerapps_power-apps" width="34"
                            height="34"
                          />
                          <span>
                            Power
                            <br /> Apps
                          </span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/microsoft-dynamics-365-finance/">
                        <a>
                          <img src="/img/finace-icons.svg" alt="finace-icons" width="34"
                            height="34" />
                          <span>Finance</span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/microsoft-dynamics-365-customer-service/">
                        <a>
                          <img
                            src="/img/customer-service-icons.svg"
                            alt="customer-service-icons"
                            width="34"
                            height="34"
                          />
                          <span>
                            Customer
                            <br /> Service
                          </span>
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n  fist-m-3">
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/dynamics-365-supply-chain-management/">
                        <a>
                          <img
                            src="/img/supplychain-logo.svg"
                            alt="supplychain-logo"
                            width="34"
                            height="34"
                          />
                          <span>
                            Supply
                            <br />
                            Chain
                          </span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li className="list-n-wrp-size">
                    <div className="list-n-wrp">
                      <Link href="/products/microsoft-dynamics-365/">
                        <a>
                          <img
                            src="/img/ds-365.png"
                            alt="Microsoft Dynamics 365 Partner"
                            width="34"
                            height="34"
                          />
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/microsoft-dynamics-365-field-service/">
                        <a>
                          <img
                            src="/img/feald-service-logo.svg"
                            alt="feald-service-logo"
                            width="34"
                            height="34"
                          />
                          <span>
                            Field <br /> Service
                          </span>
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n  fist-m-2">
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/microsoft-power-bi/">
                        <a>
                          <img src="/img/powerbilogo.png" alt="powerbilogo" />
                          <span>Power BI</span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/microsoft-dynamics-365-marketing/">
                        <a>
                          <img src="/img/marketing.svg" alt="marketing" />
                          <span>Marketing</span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/microsoft-dynamics-365-sales/">
                        <a>
                          <img
                            src="/img/Sales_scalable.svg"
                            alt="Sales_scalable"
                          />
                          <span>Sales</span>
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n fist-m">
                  <li>
                    <div className="list-n-wrp">
                      <Link href="/products/dynamics-365-human-resources/">
                        <a>
                          <img
                            src="/img/human-resource.svg"
                            alt="human-resource"
                          />
                          <span>
                            Human <br /> Resources
                          </span>
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Dedicated Microsoft Dynamics Partner</h2>
                <p>As a <b>Dynamics 365 Partner</b>, We Implement Microsoft Business Applications to help you scale your business like never before!</p>
              </header>
            </div>
          </div>

          <div className="row gy-2">
            <div className="col-lg-4 col-md-6">
              <div className="service-box  service-box-blue">
                <div className="top">
                  <img
                    src="/img/business-center-logo.svg"
                    alt="business-center-logo"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Dynamics 365 <br /> Business Central
                  </h3>
                </div>
                <p>
                  Manage and drive end-to-end enterprise processes with a
                  360-degree view across your sales insights, automate finance
                  practices, and drive effective customer engagement with
                  Business Central.
                </p>
                <Link href="/products/dynamics-365-business-central/">
                  <a className="read-more">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/finace-icons.svg"
                    alt="finace-icons"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Finance
                  </h3>
                </div>
                <p>
                  Improve your financial visibility with built-in AI-driven
                  analytics & insights and reporting capabilities. Automate your
                  financial practices while minimizing investment costs and
                  global financial complexity.
                </p>
                <Link href="/products/microsoft-dynamics-365-finance/">
                  <a className="read-more">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/supplychain-logo.svg"
                    alt="supplychain-logo"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Supply Chain
                  </h3>
                </div>
                <p>
                  Automate your supply chain practices and drive smoother flow
                  across your operational unit with real-time efficiency all
                  through highly customized and integrated Dynamics 365 Supply
                  Chain Solutions.
                </p>
                <Link href="/products/dynamics-365-supply-chain-management/">
                  <a className="read-more">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/Sales_scalable.svg"
                    alt="Sales_scalable"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Sales
                  </h3>
                </div>
                <p>
                  Connect your sales team, customers, and vendors with
                  omnichannel facility to drive innovation and maximize profit.
                  Predict & manage your sales pipeline with real-time AI
                  insights and close deals faster.
                </p>
                <Link href="/products/microsoft-dynamics-365-sales/">
                  <a className="read-more">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/powerbilogo.png"
                    alt="Powerapps_power-apps"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Microsoft <br />
                    Power BI
                  </h3>
                </div>
                <p>
                  Continuously monitor your overall business practices with
                  powerful visual insights and key analytics in real-time to
                  make improved decisions supporting your sales strategies and
                  impacting productivity.
                </p>
                <Link href="/products/microsoft-power-bi/">
                  <a className="read-more">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/Azure-IoT.svg"
                    alt="Azure-IoT"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Internet Of <br />
                    Things
                  </h3>
                </div>
                <p>
                  With Integrated enterprise solutions, improve and accelerate
                  data-exchanging practices over a secured network. Seamlessly
                  connect your devices to ensure smoother data transformation.
                </p>
                <Link href="/products/azure-iot-internet-of-things/">
                  <a className="read-more">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services bg-shape">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Microsoft Dynamics 365 for Industries</h2>
                <p>
                  Become an Industry leader by implementing powerful Microsoft
                  Business Apps
                </p>
              </header>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/StartUp-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Startup</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Startup</h3>
                  <p>
                    Quickly boost your business capabilities and lead your
                    business toward a productive and efficient route through
                    Microsoft Dynamics solutions.
                  </p>
                  <Link href="/industries/startups/">
                    <a className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Not for Profit--icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="Not for Profit"
                  />
                  <h3>Not for Profit</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Not for Profit</h3>
                  <p>
                    Our Dynamics 365 experts can implement an efficient and
                    highly configured solution to support your non-profit
                    practices across your non-profit hub.
                  </p>
                  <Link href="/industries/microsoft-cloud-for-nonprofit/">
                    <a className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/E-Commerce-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>E-Commerce</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>E-Commerce</h3>
                  <p>
                    Drive unified e-commerce experience across your sales models
                    to ensure seamless customer fulfillment, enable secure
                    transactions, and meet demands.
                  </p>
                  <Link href="/industries/ecommerce/">
                    <a className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Manufacturing & Distribution-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Manufacturing & Distribution</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Manufacturing & Distribution</h3>
                  <p>
                    Ensure robust manufacturing and distribution practices
                    throughout your enterprise by implementing MS Dynamics
                    solutions for your industry.
                  </p>
                  <Link href="/industries/microsoft-cloud-for-manufacturing/">
                    <a className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Professional Services-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Professional Services</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Professional Services</h3>
                  <p>
                    Our experienced Dynamics consultants can deploy optimal MS
                    Dynamics solutions configured to your specific business
                    context to maximize outcomes.
                  </p>
                  <Link href="/industries/professional-services/">
                    <a className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Food & Beverages-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Food & Beverages</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Food & Beverages</h3>
                  <p>
                    Understanding your root industrial requirements, our experts
                    can develop a growth-hacking MS Dynamics solution for your
                    food & beverages industry.
                  </p>
                  <Link href="/industries/food-and-beverages/">
                    <a className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Health-Check">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Microsoft Dynamics Efficiency Audit</h2>
                <p>Discover new business opportunities with your <b>Microsoft Gold Partner</b> to upgrade your business capabilities, and drive business-continuity. Get Dynamics 365 system health check with Dynamics Square at no cost.</p>
              </header>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 aos-init align-self-center">
              <Image
                src="/img/system-health-check.png"
                className="system-health-check"
                alt="Dynamics 365 System Health Check"
                width={553}
                height={531}
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content align-self-center">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Evaluating your current business needs and future
                      considerations, we drive a system check to analyze your
                      concurrent system{" "}
                      <Link href="/our-services/dynamics-365-upgrade-services/">
                        upgrading
                      </Link>{" "}
                      needs while supporting your future potentials.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Our experienced{" "}
                      <Link href="/">Dynamics 365 consultants</Link> can
                      diagnose your system to identify your actual system
                      upgrading needs and suggest you the best possible solution
                      suited to your customized business needs.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      After performing system analysis, decision be yours
                      whether you want to go ahead with new system
                      configurations or would love to stay with your existing
                      one. Further, you can schedule{" "}
                      <Link href="/products/microsoft-dynamics-365/">
                        Microsoft Dynamics 365
                      </Link>{" "}
                      Demo to upgrade your system capabilities.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <Link href="/free-dynamics-365-system-health-check/">
                <a className="read-more">
                  Get System Health Check
                  <i className="bi bi-long-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="counts" className="counts counts-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-user-check.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span className="inner">135+</span>
                  <p>Microsoft Consultants</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-award.png"
                    alt="Icon awesome-award"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span className="inner">11+</span>
                  <p>Years of Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-globe-asia.png"
                    alt="Icon awesome-globe-asia"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span className="inner">6+</span>
                  <p>Global Presence</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon ionic-md-thumbs-up.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span className="inner">99%</span>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>
                  What our clients have <br /> to say about us
                </h2>
              </div>
              <div className="testimonials-slider swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper test-client-page"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile">
                            
                            <div className="imginner">
                              <img src="/img/Icon metro-quote.png" alt="metro-quote" />
                            </div>
                            <p>
                              We selected them because their communication is
                              excellent, their response times are outstanding,
                              and their ability to solve our problems through
                              various development projects has helped us
                              leverage our ERP in a way that would have taken us
                              much longer and with much greater expense. In my
                              opinion I would rank them as a 5 out of 5.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile">
                            
                            <div className="imginner">
                              <img src="/img/Icon metro-quote.png" alt="metro-quote" />
                            </div>
                            <p>
                              The team at Dynamics Square are very dedicated,
                              flexible, and attentive and will take care of all
                              your IT needs in a very efficient and timely
                              manner. Highly recommended!
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile">
                            
                            <div className="imginner">
                              <img
                                src="/img/Icon metro-quote.png"
                                alt="metro-quote"
                              />
                            </div>
                            <p>
                              We probed three MS Dynamic Partners, and one of
                              the key factors in making our decision to go ahead
                              with Dynamics Square was the outstanding customer
                              service experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="testimonials-bg">
                <div className="testimonials-rigt-iner">
                  <Image
                    src="/img/testmonial-side-pic.png"
                    className="testmonial-side-pic"
                    alt="/testmonial-side-pic"
                    width={802}
                    height={764}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="clients" className="clients">
        <div className="container" data-aos="fade-up">
          <div className="clients-slider swiper">
            <div className="swiper-wrapper align-items-center">
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: true,
                }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <Image
                      src="/img/clients/JVEquip_logo.png"
                      className="img-fluid"
                      alt="JVEquip_logo"
                      width={200}
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <Image
                      src="/img/clients/Spectra-Aluminum-logo-new.png"
                      className="img-fluid"
                      alt="Spectra-Aluminum-logo"
                      width={200}
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <Image
                      src="/img/clients/MexiLand_logos.png"
                      className="img-fluid"
                      alt="MexiLand_logos"
                      width={200}
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <Image
                      src="/img/clients/VidPro_logo.png"
                      className="img-fluid"
                      alt="VidPro_logo"
                      width={200}
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <Image
                      src="/img/clients/PLASP-LOGO.png"
                      className="img-fluid"
                      alt="PLASP-LOGO"
                      width={200}
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <Image
                      src="/img/clients/SOS-MANUFACTURING-LOGO.png"
                      className="img-fluid"
                      alt="SOS-MANUFACTURING-LOGO"
                      width={200}
                      height={80}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}

      <section id="casestudys" className="casestudys ">
        <div className="container" data-aos="fade-up">
          <div className="row  gy-4">
            <div className="col-lg-5 align-self-center">
              <Image
                src="/img/case-study-side-banner.png"
                alt="case-study-side-banner"
                width={640}
                height={592}
              />
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>Glimpse Of What We Delivered</h2>
                <p>Dynamics 365 Case Stories</p>
              </div>
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper casestudys-sled-1"
              >
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      
                      <p>
                        Streamline Manufacturing & Accounting with D365 Business
                        Central On-Premise
                      </p>
                      {/* <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>2X</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                        <div className="case-content">
                          <p>80%</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                      </div> */}
                      <div className="case-button">
                        <Link href="/case-studies/nav13-business-central-upgrade/">
                          <a className="btn btn-md btn-custom-1">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      
                      <p>
                        Implemented Custom EFT Module to improvise Payment
                        Methods
                      </p>
                      {/* <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>4x</p>
                          <span>Improved Inventory System</span>
                        </div>
                        <div className="case-content">
                          <p>100%</p>
                          <span>Alliance with HMRC</span>
                        </div>
                      </div> */}
                      <div className="case-button">
                        <Link href="/case-studies/dynamics-nav13-eft-implementation/">
                          <a className="btn btn-md btn-custom-1">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      
                      <p>
                        Implementation of Microsoft Dynamics Business Central
                        Cloud
                      </p>
                      {/* <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>10x</p>
                          <span>Improved Customer Experience</span>
                        </div>
                        <div className="case-content">
                          <p>50%</p>
                          <span>Increased Sales Revenue</span>
                        </div>
                      </div> */}
                      <div className="case-button">
                        <Link href="/case-studies/nav13-to-d365-business-central-upgrade/">
                          <a className="btn btn-md btn-custom-1">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
