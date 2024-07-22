import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Autoplay, FreeMode,Navigation } from "swiper";
import Type from "../components/type";
import Card from "../components/Crads";
import CardVideo from "../components/Cradsvideo";
import FooterHide from "../components/FooterHide";

export default function Home() {
  return (
    <>
      <Head>
        <title>Microsoft Solutions Partner in USA | Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics Square is the USA's leading Microsoft Solutions Partner. Contact us at +1-281-899-0865 for implementation, upgrade, and consulting services."
        />
        <link rel="canonical" href="https://www.dynamicssquare.com/" />
        <meta
          property="og:title"
          content="Microsoft Solutions Partner in USA | Dynamics Square"
        />
        <meta property="og:site_name" content="Dynamics Square" />
        <meta property="og:url" content="https://www.dynamicssquare.com" />
        <meta
          property="og:description"
          content="Dynamics Square is the USA's leading Microsoft Solutions Partner. Contact us at +1-281-899-0865 for implementation, upgrade, and consulting services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.dynamicssquare.com/img/home-page-og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.dynamicssquare.com/"
        />
        <meta
          property="twitter:title"
          content="Microsoft Solutions Partner in USA | Dynamics Square"
        />
        <meta
          property="twitter:description"
          content="Dynamics Square is the USA's leading Microsoft Solutions Partner. Contact us at +1-281-899-0865 for implementation, upgrade, and consulting services."
        />
        <meta
          property="twitter:image"
          content="https://www.dynamicssquare.com/img/home-page-og.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.dynamicssquare.com/#organization",
                  name: "Dynamics Square",
                  url: "https://www.dynamicssquare.com/",
                  sameAs: [
                    "https://www.facebook.com/dynamicssquareusa",
                    "https://twitter.com/dsquare_usa",
                    "https://www.linkedin.com/showcase/dynamics-square-usa/",
                    "https://www.youtube.com/c/DynamicsSquare",
                  ],
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://www.dynamicssquare.com/#logo",
                    inLanguage: "en-US",
                    url: "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
                    contentUrl:
                      "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
                    width: "1024",
                    height: "1024",
                    caption: "Dynamics Square",
                  },
                  image: { "@id": "https://www.dynamicssquare.com/#logo" },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.dynamicssquare.com/#website",
                  url: "https://www.dynamicssquare.com/",
                  name: "Microsoft Dynamics 365 and Cloud consultancy experts at Dynamics Square USA.",
                  description:
                    "Implementing cloud-based ERP, CRM, and other Microsoft cloud solutions simplifies complex business processes and challenges.",
                  publisher: {
                    "@id": "https://www.dynamicssquare.com/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://www.dynamicssquare.com/?s={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: "en-US",
                },
                {
                  "@type": "ImageObject",
                  "@id": "https://www.dynamicssquare.com/#primaryimage",
                  inLanguage: "en-US",
                  url: "https://www.dynamicssquare.com/img/home-page-og.png",
                  contentUrl:
                    "https://www.dynamicssquare.com/img/home-page-og.png",
                  width: "800",
                  height: "400",
                  caption: "dynamicssquare",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.dynamicssquare.com/#webpage",
                  url: "https://www.dynamicssquare.com/",
                  name: "Dynamics Square | CRM and ERP Consultants in the USA",
                  isPartOf: {
                    "@id": "https://www.dynamicssquare.com/#website",
                  },
                  about: {
                    "@id": "https://www.dynamicssquare.com/#organization",
                  },
                  primaryImageOfPage: {
                    "@id": "https://www.dynamicssquare.com/#primaryimage",
                  },
                  datePublished: "2016-10-15T06:09:16+00:00",
                  dateModified: "2022-12-22T09:15:37+00:00",
                  description:
                    "Providing CRM, ERP, and Microsoft cloud solutions tailored to your specific needs, we are CRM and ERP consultants in the USA.",
                  breadcrumb: {
                    "@id": "https://www.dynamicssquare.com/#breadcrumb",
                  },
                  inLanguage: "en-US",
                  potentialAction: [
                    {
                      "@type": "ReadAction",
                      target: ["https://www.dynamicssquare.com/"],
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.dynamicssquare.com/#breadcrumb",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home" },
                  ],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Dynamics Square USA Ltd.",
              description:
                "By providing unbiased advice on ERP and CRM solutions, we help businesses grow at scale.",
              image:
                "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
              alternateName:
                "Dynamics Square Software company in California, USA",
              telephone: "+12137840845, +12818990865",
              email: "info@dynamicssquare.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2372 Morse Ave, Ste. 310",
                addressLocality:
                  "82372 Morse Ave, Ste. 310, Irvine, California 92614",
                addressRegion: "California",
                addressCountry: "USA",
                postalCode: "92614",
              },
              brand: {
                "@type": "Brand",
                name: "Dynamics Square USA Ltd.",
                logo: "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.4",
                reviewCount: "22",
              },
              url: "https://www.dynamicssquare.com/",
              sameAs: [
                "https://www.facebook.com/dynamicssquareusa",
                "https://twitter.com/dsquare_usa",
                "https://www.linkedin.com/showcase/dynamics-square-usa/",
                "https://www.youtube.com/c/DynamicsSquare",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              Headline:
                "We assist you in effectively leveraging CRM, ERP, and cloud technologies.",
              description:
                "There is a goal, a vision, or an issue you need to address. A team of 140+ Microsoft certified consultants, creative thinkers, and developers is proactively available to help you on your digital transformation journey. The mission of our company is to alleviate your problems and make your vision a reality.",
              Keywords: [
                "erp consultants usa",
                "crm consultancy",
                "d365 business central",
                "crm expert online",
                "d365 for finance",
                "dynamics crm implementation",
                "d365 field service",
                "crm implementation services",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Dynamics Square USA Ltd.",
              alternateName:
                "Dynamics Square Software company in California, USA",
              url: "https://www.dynamicssquare.com/",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "localBusiness",
              name: "Dynamics Square USA Ltd.",
              description:
                "By providing unbiased advice on ERP and CRM solutions, we help businesses grow at scale.",
              image:
                "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
              alternateName:
                "Dynamics Square Software company in California, USA",
              telephone: "+12137840845, +12818990865",
              email: "info@dynamicssquare.com",
              priceRange: "$$$-$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2372 Morse Ave, Ste. 310",
                addressLocality:
                  "2372 Morse Ave, Ste. 310, Irvine, California 92614",
                addressRegion: "California",
                addressCountry: "USA",
                postalCode: "92614",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.6855366020848,
                longitude: -117.84693918690395,
              },

              brand: {
                "@type": "Brand",
                name: "Dynamics Square USA Ltd.",
                logo: "https://www.dynamicssquare.com/img/dynamicssqure-logo.svg",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.4",
                reviewCount: "22",
              },

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednessday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "5:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday - closed",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday - Closed",
                },
              ],

              url: "https://www.dynamicssquare.com/",
              sameAs: [
                "https://www.facebook.com/dynamicssquareusa",
                "https://twitter.com/dsquare_usa",
                "https://www.linkedin.com/showcase/dynamics-square-usa/",
                "https://www.youtube.com/c/DynamicsSquare",
              ],
            }),
          }}
        />
      </Head>
      <div className="new-banner">
        <div className="container">
          <div className="row d-flex d-f-c">
            <div className="col-lg-6 align-self-center">
              <div className="home-into-page-title">
                <h1>USA's <span>Leading</span> Microsoft Solutions Partner</h1>
                <p>Get your hands-on with an AI-driven ERP solution; Maximize ROI, Accelerate Business Growth, and Bring Automation - Your Path to Success Starts Here.</p>
                <div className="new-btn-home">
                  <Link href="#exampleModal" >
                    <a className="bts" data-bs-toggle="modal">
                      <span>Talk to an Expert <i className="bi bi-arrow-right"></i></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="home-into-video-title">
                <div className="main-v">
                  <div className="video pulse"
                  >
                    <CardVideo />
                  </div>
                  <div className="over-ima">
                    <img src="/img/hand-icons.png" alt="image" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="bg-2112">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>500+ Global Businesses Trust Us</h2>
                <p>Our AI-driven Microsoft Cloud Solutions are helping 500+ worldwide businesses grow and scale at a rapid rate, leveraging digital transformation.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="home-clint">
              <ul>
                <li>
                  <Image
                    src="/img/clients/JVEquip_logo.png"
                    className="img-fluid"
                    alt="JVEquip_logo"
                    width={200}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src="/img/clients/Spectra-Aluminum-logo-new.png"
                    className="img-fluid"
                    alt="Spectra-Aluminum-logo"
                    width={200}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src="/img/clients/MexiLand_logos.png"
                    className="img-fluid"
                    alt="MexiLand_logos"
                    width={200}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src="/img/clients/VidPro_logo.png"
                    className="img-fluid"
                    alt="VidPro_logo"
                    width={200}
                    height={80}
                  /></li>
                <li>
                  <Image style={{ mixBlendMode: 'darken' }}
                    src="/img/clients/PLASP-LOGO.png"
                    className="img-fluid"
                    alt="PLASP-LOGO"
                    width={200}
                    height={80}
                  />
                </li>
              </ul>
            </div>
            <hr className="hr-custom-home" />
          </div>
        </div>
      </section>

      <section className="bg-2112" style={{ marginTop: "-70px" }}>
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>Get Unmatched Services from Dynamics Square</h2>
                <p>Drive your business success by implementing tailored and powerful innovative solutions for all industries.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="shpe-bg">
                <div className="abs"><img src="/img/home/nee-sahpe.png" alt="bgiconns" /></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="/our-services/dynamics-365-implementation-services/">
                  <a>
                    <div className="gr">
                      <img src="/img/home/Implementation-icon.png" alt="Implementation-icon" width={124} height={124} />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Implementation-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Implementation</h3>
                    <p>Boost your business efficiency with Dynamics 365 implementation services. Unify data, ensure robust cloud security, simplify operations, and automate workflows to reduce IT costs.</p>
                    <div className="h-s-call" >
                      <span>Implement Now </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="/our-services/dynamics-365-upgrade-services/">
                  <a>
                    <div className="gr">
                      <img src="/img/home/Upgrade-icon.png" alt="Upgrade-icon" width={124} height={124} />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Upgrade-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Upgrade</h3>
                    <p>Modernize your business with our Dynamics 365 Upgrade Services. We assess, recommend, and upgrade your legacy solution to garner better growth opportunities.</p>
                    <div className="h-s-call" >
                      <span>Learn More </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="/our-services/dynamics-365-support-services/">
                  <a>

                    <div className="gr">
                      <img src="/img/home/Support-icon.png" alt="Support-icon" width={124} height={124} />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Support-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Support</h3>
                    <p>Access proactive Dynamics 365 Support services from our team of 150+ Microsoft-certified consultants. We tailor solutions to ensure your business's success while managing costs.</p>
                    <div className="h-s-call" >
                      <span>Learn More </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal">

                    <div className="gr">
                      <img src="/img/home/Consulting-Icon.png" alt="Consulting-Icon" width={124} height={124} />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Consulting-Icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Consulting</h3>
                    <p>Maximize ROI and achieve targets with our Dynamics 365 consulting services. We offer comprehensive strategies, expert implementation, and right path to fuel your business's growth.</p>
                    <div className="h-s-call" >
                      <span>Request Consultation </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal">

                    <div className="gr">
                      <img src="/img/home/Audit-icon.png" alt="Audit-icon" width={124} height={124} />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Audit-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Audit</h3>
                    <p>Evaluate your business effectiveness with our business-centric Dynamics 365 Audit services. Get desired results, achieve planned targets, and ensure optimum business performance.</p>
                    <div className="h-s-call" >
                      <span>Optimize My Business </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
              <Link href="#exampleModal">
                  <a data-bs-toggle="modal">
                    <div className="gr">
                      <img src="/img/home/training-icon.png" alt="training-icon" width={124} height={124} />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/training-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Training</h3>
                    <p>Reap utmost value by utilizing advanced features from your newly installed business solutions. We embrace a 360-degree training approach to help you achieve maximum results.</p>
                    <div className="h-s-call" >
                      <span>Empower My Team </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link> 
              </div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="acive-card">
                <div className="left">

                  <span>150+</span>
                  <img src="/img/home/diversity_3.png" alt="diversity_3" />
                </div>
                <div className="right">
                  <div className="bttom-shape">
                    <img src="/img/home/Union.png" alt="Union" />
                  </div>
                  <p>Microsoft-certified technical consultants are just a call away to help you out, irrespective of the errors of the business solution.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="acive-card">
                <div className="left">

                  <span>99%</span>
                  <img src="/img/home/hotel_class.png" alt="hotel_class" />
                </div>
                <div className="right">
                  <div className="bttom-shape">
                    <img src="/img/home/Union.png" alt="Union" />
                  </div>
                  <p>Customer satisfaction is the sole reason we have been working for our 500+ clients round the clock.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="acive-card">
                <div className="left">

                  <span>12+</span>
                  <img src="/img/home/trophy.png" alt="trophy" />
                </div>
                <div className="right">
                  <div className="bttom-shape">
                    <img src="/img/home/Union.png" alt="Union" />
                  </div>
                  <p>Years of experience have taught us to resolve challenging business issues, in no time with a 100% success rate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container hide-tomedia-max">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="new-sub-heading">
              <h2>Industry <br /> Tailored Solutions</h2>
              <p>Bring agility, sustainability, and empower your businesses to achieve more. Get tailored solutions for all industries, harness the data, and capture insights using AI-enabled software.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-hone-section bg-2112">
        <div className="container-fluid">
          <div className="row justify-content-end">

            <div className="col-lg-7 g-0">
              <div className="home-new-ind-slider">
                <Swiper
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  navigation={true}
                  
                  modules={[Pagination, Autoplay, Navigation]}
                  className="mySwiper"
                >

                  <SwiperSlide>
                    <div className="slider-inner pic-1 img-01">
                      <div className="bg-im">
                        <div className="slider-contet">
                          <h3>Manufacturing</h3>
                          <h4>Streamline production with next-gen Manufacturing solutions</h4>
                          <p>Eliminate language barriers, reduce equipment downtime, ensure continuous supply chain, monitor inventory, and improve the overall efficiency of your manufacturing plant.</p>
                          <div className="new-btn-home">
                            <Link href="/industries/manufacturing/" >
                              <a className="bts bts-white">
                                <span>Learn More  <i className="bi bi-arrow-right"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner pic-1 img-02">
                      <div className="bg-im">
                        <div className="slider-contet">
                          <h3>Media and Communications</h3>
                          <h4>Create and distribute data effortlessly with Media and Communications solutions</h4>
                          <p>Build a sustainable flow of content creation, management, and delivery. Drive collaboration, gain total visibility, and increase media reputation through different channels.  </p>
                          <div className="new-btn-home">
                            <Link href="#exampleModal" >
                              <a className="bts bts-white" data-bs-toggle="modal">
                                <span>Talk to an Expert   <i className="bi bi-arrow-right"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner pic-1 img-03">
                      <div className="bg-im">
                        <div className="slider-contet">
                          <h3>Automotive</h3>
                          <h4>Monitor and control the automotive business with Dynamics 365 Automotive solutions</h4>
                          <p>Align with changing consumer preferences, leverage automation, reduce overall business costs, and get predictive analytics for automotive business growth.</p>
                          <div className="new-btn-home">
                            <Link href="#exampleModal" >
                              <a className="bts bts-white" data-bs-toggle="modal">
                                <span>Talk to an Expert   <i className="bi bi-arrow-right"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner pic-1 img-04">
                      <div className="bg-im">
                        <div className="slider-contet">
                          <h3>Government</h3>
                          <h4>Execute administrative policies with Government-specific Microsoft ERP solutions</h4>
                          <p>Enforce policies, monitor resources, enable data security, digitalize information flow, and integrate different departments with one another.  </p>
                          <div className="new-btn-home">
                            <Link href="#exampleModal" >
                              <a className="bts bts-white" data-bs-toggle="modal">
                                <span>Talk to an Expert <i className="bi bi-arrow-right"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner pic-1 img-05">
                      <div className="bg-im">
                        <div className="slider-contet">
                          <h3>Telecommunications</h3>
                          <h4>Get a competitive advantage with advanced Telecommunications solutions</h4>
                          <p>Bring flexibility to business operations, adopt new technologies instantly, upgrade existing processes, and get predicted analysis to stay ahead of the curve. </p>
                          <div className="new-btn-home">
                            <Link href="#exampleModal" >
                              <a className="bts bts-white" data-bs-toggle="modal">
                                <span>Talk to an Expert   <i className="bi bi-arrow-right"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner pic-1 img-06">
                      <div className="bg-im">
                        <div className="slider-contet">
                          <h3>Financial Services</h3>
                          <h4>Simplify and manage complex financial activities with modern financial solutions. </h4>
                          <p>Maintain a consistent flow of funds, eliminate accounting errors, comply with financial regulations, and establish strong communication between departments for focused growth.  </p>
                          <div className="new-btn-home">
                            <Link href="#exampleModal" >
                              <a className="bts bts-white" data-bs-toggle="modal">
                                <span>Talk to an Expert   <i className="bi bi-arrow-right"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner pic-1 img-07">
                      <div className="bg-im">
                        <div className="slider-contet">
                          <h3>Healthcare</h3>
                          <h4>Maximize patient care and optimize resources with powerful Healthcare solutions</h4>
                          <p>Make data-driven decisions, offer better patient care, increase operational efficiency, and get a boost in overall business productivity with minimal administrative costs. </p>
                          <div className="new-btn-home">
                            <Link href="#exampleModal" >
                              <a className="bts bts-white" data-bs-toggle="modal">
                                <span>Talk to an Expert   <i className="bi bi-arrow-right"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner pic-1 img-08">
                      <div className="bg-im">
                        <div className="slider-contet">
                          <h3>Retail</h3>
                          <h4>Understand your customers and market fluctuations with customer-centric Retail solutions</h4>
                          <p>Acquire more customers, retain valuable clients, centralize payment structures, and maximize customer satisfaction throughout the customer sales journey. </p>
                          <div className="new-btn-home">
                            <Link href="#exampleModal" >
                              <a className="bts bts-white " data-bs-toggle="modal">
                                <span>Talk to an Expert   <i className="bi bi-arrow-right"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="container margin-top-300 hide-tomedia-min">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="slider-left-info">
              <div className="bg-posti">
                <img src="/img/home/shape-down.png" alt="shape-down" />
              </div>
              <h2>Industry <br /> Tailored Solutions</h2>
              <p>Bring agility, sustainability, and empower your businesses to achieve more. Get tailored solutions for all industries, harness the data, and capture insights using AI-enabled software.</p>
            </div>
          </div>

        </div>
      </div>

      <section className="bg-top-pd">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>Why Businesses Trust Dynamics Square?</h2>
                <p>Dynamics Square is the leading Microsoft Solution partner, offering future-ready business solutions to global organizations.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="testmonial-slide-home">
                <div className="img-1" >
                  <img src="/img/home/quote-left.png" width={112} height={82} alt="" />
                </div>
                <Swiper
                  autoplay={{
                    delay: 8000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >

                  <SwiperSlide>

                    <div className="test-inner">
                      <p>We were using an outgrown legacy system with potential chances of errors, data loss, and cyber-attacks. These are some of the reasons that pushed us to upgrade to Dynamics 365 Finance and Operations with a cloud deployment. The team at Dynamics Square has successfully implemented this solution in the stated time without any after-sales cost.</p>
                      <span>-Chief Financial Officer at a Non-profit organization</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="test-inner">
                      <p>The NAV to Business Central upgrade was our best choice when it comes to business growth, simplified operations, and establishing communication between different teams in different departments. Dynamics Square has made the entire process smooth and efficient.</p>
                      <span>-Vice Principal at a leading college</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="test-inner">
                      <p>Dynamics Square understood our requirements and suggested Microsoft Power BI for our data analytics needs. They also integrated this with our existing ERP solution for a continuous data flow.</p>
                      <span>-Head of Marketing at the renowned clothing brand</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="test-inner">
                      <p>Dynamics Squared is a fantastic partner and helped us move from an existing CRM to Dynamics 365. The process improvement for our business was significant, and the visibility to our company performance was exactly what we needed. They took the time to understand our needs, and are extremely capable and flexible, which attributed to the success that we had. Glad to have them supporting our business into the future.</p>
                      <span>-Sina Moatamed</span>
                    </div>
                  </SwiperSlide>

                </Swiper>
                <div className="img-2">
                  <img src="/img/home/quote-right.png" width={112} height={82} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services  bg-2112">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>Explore Microsoft Dynamics 365 Solutions: Powerful and Effective</h2>
                <p>Automate your business, simplify operations, and redefine the way you deal with new opportunities using powerful Dynamics 365 solutions.</p>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-box  service-box-blue service-box-blue-home">
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
                  An all-in-one business management solution specifically designed for SMBs and startups that offers a 360-degree holistic view of the entire business with full transparency across different operations.
                </p>
                <Link href="/products/dynamics-365-business-central/">
                  <a>
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue service-box-blue-home">
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
                  Simplify complex financial operations while getting real-time data analytics and accurate insights. Avail automation, minimize investment costs, and monitor financial processes with data-driven insights.
                </p>
                <Link href="/products/microsoft-dynamics-365-finance/">
                  <a>
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue service-box-blue-home">
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
                <p>Automate your entire supply chain process with Dynamics 365 Supply Chain Management. Boost efficiency, cut costs, enhance accuracy, gain real-time insights, and improve customer service.</p>
                <Link href="/products/dynamics-365-supply-chain-management/">
                  <a>
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
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
                <p>Get an omnichannel connection between the sales team, customers, and partners for a collaborative growth approach. Track the sales pipeline, get insights, maximize profit, and close more deals with the minimum resources.</p>
                <Link href="/products/microsoft-dynamics-365-sales/">
                  <a>
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
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
                <p>Analyze and visualize the huge stack of data with interactive graphical representations to make data-driven decisions in real-time. Transform your data to make it accessible and valuable to refine decision-making.</p>
                <Link href="/products/microsoft-power-bi/">
                  <a>
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/home/NAV_scalable.png"
                    alt="Azure-IoT"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>Microsoft <br />
                    Dynamics NAV</h3>
                </div>
                <p>A simple yet powerful ERP solution to manage, control, and track entire business operations with full visibility. Connect different departments, automate sales, and manage all back-end processes with ease.</p>
                <Link href="/products/microsoft-dynamics-nav/">
                  <a>
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            {/* <div
              className="col-lg-3 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/Azure-IoT.svg"
                    alt="Azure-IoT"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>Dynamics 365 <br />
Marketing</h3>
                </div>
                <p>Engage customers with your business, build brand value, and offer an exceptional customer experience. Unify your customer data, avail AI-powered automation, and offer personalized offers to maximize revenue.</p>
                <Link href="/products/azure-iot-internet-of-things/">
                  <a href="/">
                     <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/Azure-IoT.svg"
                    alt="Azure-IoT"
                    className="icon"
                    width="34"
                    height="34"
                  />
                 
                  <h3>
                  Dynamics 365 <br />
                  Field Service
                  </h3>
                </div>
                <p>
                Employ generative AI and the internet of things (IoT) to modernize your business operations while boosting overall agent efficiency. Give a personalized experience to the customer, track resources, and optimize the issue resolution process.
                </p>
                <Link href="/products/azure-iot-internet-of-things/">
                  <a href="/">
                     <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                  </a>
                </Link>
              </div>
            </div> */}
          </div>

        </div>

      </section>

      <section className="call-to-home-action">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className='call-to-home-action-inner text-center'>
                <h3>Roar ahead with <br />AI-Powered Solutions</h3>
                <p>Fear no business competition, conquer endless opportunities, acquire great strength, <br /> and become a fierce brand with Dynamics Square.</p>
                <div className="new-btn-home">
                  <Link href="#exampleModal" >
                    <a className="bts" data-bs-toggle="modal">
                      <span>Talk to an Expert <i className="bi bi-arrow-right"></i></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
           

        </div>
      </section>
        <div className="mass-cut-pic">
              <img src="/img/mascut.png" alt="masscut" width={805} height={754} />
            </div>

      <div className="pd-btm-60 min-w-di">
        <div className='vie'>
          <video id="background-video" autoPlay muted loop playsInline>
            <source src="/video/masscot-background.mp4" type="video/mp4" />
          </video>
          <div className='new'>
            <h3>Roar ahead with AI-Powered Solutions</h3>
            <p>Fear no business competition, conquer endless opportunities, acquire great strength, <br /> and become a fierce brand with Dynamics Square.</p>
            <div className="new-btn-home">
              <Link href="#exampleModal" >
                <a className="bts" data-bs-toggle="modal">
                  <span>Talk to an Expert <i className="bi bi-arrow-right"></i></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="inner-pic">
            {/* <img src="/img/home/hover-servece.png" alt="im" /> */}
            <Card />
          </div>

        </div>

      </div>


      <section className="pddd-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>Our Proven Track Record Says It All: Businesses Got Exclusive Result</h2>
              </div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-lg-4">
              <div className="exp-box exp-box-m">
                <div className="top-sec b-t-pad">
                  <h3>82%</h3>
                  <h4>Businesses Meet Expected ROI</h4>
                  <p>Different businesses have achieved the expected ROI on time after the successful implementation of the Microsoft ERP solution.</p>
                  {/* <a href="/" className="btnnew">Read More</a> */}
                </div>
                <div className="bottom-sec">
                  <img src="/img/home/roi.png" alt="im " />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="exp-box">
                <div className="bottom-sec b-t-pad">
                  <img src="/img/home/2x.png" alt="im " />
                </div>
                <div className="top-sec ">
                  <h3>2x</h3>
                  <h4>Productivity Increases</h4>
                  <p>Due to the centralized data structure, the overall efficiency and productivity of the team have increased by 2X.</p>
                  {/* <a href="/" className="btnnew">Read More</a> */}
                </div>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="exp-box exp-box-m">
                <div className="top-sec b-t-pad">
                  <h3>46%</h3>
                  <h4>Improved Cost Saving</h4>
                  <p>Businesses that have upgraded to Microsoft ERP or CRM solutions have reported improved cost savings while limiting resources.</p>
                  {/* <a href="/" className="btnnew">Read More</a> */}
                </div>
                <div className="bottom-sec">
                  <img src="/img/home/46x.jpg" alt="im" />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="new-btn-home text-center top-bom-home">
                <Link href="/case-studies/" >
                  <a className="bts">
                    <span>Read More <i className="bi bi-arrow-right"></i></span>
                  </a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="new-pad0-home bg-2112">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>We help you to grow your business big</h2>
                <p>At Dynamics Square, we help you execute digital transformation in your organization by optimizing the solutions offered by Microsoft.</p>
              </div>
              <div className="new-btn-home text-center">
                <Link href="#exampleModal" >
                  <a className="bts" data-bs-toggle="modal">
                    <span>Talk To us Now <i className="bi bi-arrow-right"></i></span>
                  </a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
