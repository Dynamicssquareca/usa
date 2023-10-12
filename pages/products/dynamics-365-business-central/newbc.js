import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper";
import ModalVideo from "react-modal-video";
import Blog from "../../../components/Blog";
import HorizontalScroll from "../../../components/HorizontalScroll";

const BusinessCentralNew = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>
          Dynamics 365 Business Central Partner USA | Dynamics Square
        </title>
        <meta
          name="description"
          content="Looking for a trusted Dynamics 365 Business Central partner in the USA? Contact Dynamics Square to drive growth and sustainability in your business."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/dynamics-365-business-central/"
        />
        <meta name="robots" content="noindex, nofollow"></meta>
        <meta
          name="keywords"
          content="Business Central, Microsoft Dynamics 365 Business Central, Dynamics 365 Business Central, Microsoft Dynamics 365 Pricing, Business Central Team Member License, Dynamics 365 Business Central Essentials, ERP Microsoft Dynamics 365, Microsfot 365 Business, Dynamics 365 Business Central Pricing, Microsoft Business Central Partner, Business Central Integration, Microsoft Business Central Cost, Business Central Support, Microsoft Dynamics 365 Business Central Cost"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.com/products/dynamics-365-business-central/"
        />
        <meta
          property="og:title"
          content="Dynamics 365 Business Central: Microsoft's Leading Cloud ERP"
        />
        <meta
          property="og:description"
          content="Business Central brings ops to a unified cloud platform for high productivity. Contact a Dynamics 365 implementation partner like Dynamics Square for support."
        />
        <meta
          property="og:image"
          content="https://www.dynamicssquare.com/img/Dynamics-365-Business-Central.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.dynamicssquare.com/products/dynamics-365-business-central/"
        />
        <meta
          property="twitter:title"
          content=" Dynamics 365 Business Central: Microsoft's Leading Cloud ERP"
        />
        <meta
          property="twitter:description"
          content="Business Central brings ops to a unified cloud platform for high productivity. Contact a Dynamics 365 implementation partner like Dynamics Square for support."
        />
        <meta
          property="twitter:image"
          content="https://www.dynamicssquare.com/img/Dynamics-365-Business-Central.png"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner pp-rrea">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1>Microsoft Dynamics 365 Business Central</h1>
              <p>
                Streamline your growing business, boost growth, and drive
                sustainability with Dynamics 365 Business Central - the ultimate
                cloud-based accounting and ERP solution. Get in touch with a
                trusted Business Central partner today and take your business to
                new heights!
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="banner-ne-im-t">
                <div className="bf">
                  <Image
                    src="/img/b-c-shadow.png"
                    width={2456}
                    height={1636}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/bc-new-banner.png"
                  alt="Dynamics 365 Business Central"
                  width={1207}
                  height={710}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>What is Dynamics 365 Business Central?</h2>
                <p>
                  Formerly known as Dynamics NAV, Microsoft Dynamics 365
                  Business Central is an AI-powered business management solution
                  tailored for startups or small to mid-sized businesses. It not
                  only has the ability to manage internal business operations
                  but also provides CRM features, making it an all-encompassing
                  tool for growing businesses.
                </p>
                <p>
                  Dynamics 365 Business Central provides a comprehensive view of
                  your business, delivering real-time insights on every
                  operational aspect. It streamlines processes across
                  departments such as finance, sales, inventory, manufacturing,
                  project management, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>
                  The Solution for <br /> Today and Beyond
                </h2>
                <p>
                  Business Central is a modern business management solution
                  designed to keep your business in sync with ever-changing
                  market and customer demands. D365 BC integrates advanced
                  technologies such as AI (artificial intelligence) and BI
                  (business intelligence), offering exceptional tools for slick
                  business management.
                </p>
                <p>
                  Being a simple-to-use ERP business solution, Microsoft BC
                  offers an interactive and responsive user interface that lets
                  the user make smart decisions and avail collaboration. When it
                  comes to integration, no other Dynamics ERP solution is as
                  flexible and transparent as Microsoft 365 Business Central.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="new-pic-bc">
                <div className="over-la-pic">
                  <Image
                    src="/img/mash-bc-1.png"
                    alt="Dynamics 365 Business Central"
                    width={1634}
                    height={714}
                  />
                </div>
                <Image
                  src="/img/bc-lader-picq.png"
                  alt="bc-lader-pic"
                  width={784}
                  height={458}
                />
              </div>
            </div>
          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6 order-first order-md-last">
              <div className="nw-bc-lef-h">
                <h2>
                  The Solution for <br /> Today and Beyond
                </h2>
                <p>
                  Business Central is a modern business management solution
                  designed to keep your business in sync with ever-changing
                  market and customer demands. D365 BC integrates advanced
                  technologies such as AI (artificial intelligence) and BI
                  (business intelligence), offering exceptional tools for slick
                  business management.
                </p>
                <p>
                  Being a simple-to-use ERP business solution, Microsoft BC
                  offers an interactive and responsive user interface that lets
                  the user make smart decisions and avail collaboration. When it
                  comes to integration, no other Dynamics ERP solution is as
                  flexible and transparent as Microsoft 365 Business Central.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-first">
              <div className="new-pic-bc">
                <Image
                  src="/img/plug-play-integratio.png"
                  alt="bc-lader-pic"
                  width={482}
                  height={474}
                />
              </div>
            </div>
          </div>
          <div className="row pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>
                  Tailor-Made for Your <br /> Unique Needs
                </h2>
                <p>
                  Business Central is a modern business management solution
                  designed to keep your business in sync with ever-changing
                  market and customer demands. D365 BC integrates advanced
                  technologies such as AI (artificial intelligence) and BI
                  (business intelligence), offering exceptional tools for slick
                  business management.
                </p>
                <p>
                  Being a simple-to-use ERP business solution, Microsoft BC
                  offers an interactive and responsive user interface that lets
                  the user make smart decisions and avail collaboration. When it
                  comes to integration, no other Dynamics ERP solution is as
                  flexible and transparent as Microsoft 365 Business Central.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="new-pic-bc">
                <div className="over-la-pic">
                  <Image
                    src="/img/mash-bc-1.png"
                    alt="Dynamics 365 Business Central"
                    width={1634}
                    height={714}
                  />
                </div>
                <Image
                  src="/img/Group-ai.png"
                  alt="bc-lader-pic"
                  width={784}
                  height={458}
                />
              </div>
            </div>
          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6 order-first order-md-last">
              <div className="nw-bc-lef-h">
                <h2>
                  Stay Connected to Your <br /> Business On-the-Go
                </h2>
                <p>
                  Experience unmatched consistency, no matter the device.
                  Whether you're at the office or on the move, tap into the full
                  power of Business Central - be it on desktop, tablet, or
                  mobile. Enjoy flexibility across Windows, Android, and iOS,
                  both on-site and cloud-based.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-first">
              <div className="new-pic-bc">
                <Image
                  src="/img/plug-play-integratio.png"
                  alt="bc-lader-pic"
                  width={482}
                  height={474}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixt-back-col">
    <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="heading-colo-bg">
                <h2>
                  Business Central Modules: A Perfect ERP for Any Business
                </h2>
                <p style={{marginBottom:'-60px'}}>
                  Microsoft Dynamics Business Central fits in any business
                  regardless of complexity with the variety of modules. These
                  modules are:
                </p>
              </div>
            </div>
          </div>
      
        </div>
    <HorizontalScroll />
    </div>
    </>
  );
};

export default BusinessCentralNew;
