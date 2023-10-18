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
          Microsoft Dynamics 365 Business Central Partner | Dynamics Square{" "}
        </title>
        <meta
          name="description"
          content="- Looking for a trusted Microsoft Dynamics 365 Business Central Partner? Discover how Dynamics Square delivers the optimal business management solution for you.  "
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
          content="- Looking for a trusted Microsoft Dynamics 365 Business Central Partner? Discover how Dynamics Square delivers the optimal business management solution for you."
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
          content="- Looking for a trusted Microsoft Dynamics 365 Business Central Partner? Discover how Dynamics Square delivers the optimal business management solution for you."
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
              <p>Enhance Business Efficiency, Fuel Steady Growth, and Streamline Processes with the Microsoft,s AI-Powered ERP - Dynamics 365 Business Central </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started</span>
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
                  Formerly known as <Link href="/products/microsoft-dynamics-nav/"><a>Dynamics NAV</a></Link>, Microsoft Dynamics 365
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
                  comes to integration, no other <Link href="/products/microsoft-dynamics-erp/"><a>Dynamics ERP solution</a></Link> is as
                  flexible and transparent as Microsoft 365 Business Central.
                </p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
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
          <div className="row pp-bot-60">
            <div className="col-lg-6 order-first order-md-last align-self-center">
              <div className="nw-bc-lef-h">
                <h2>
                Comes with Plug and Play Integrations 
                </h2>
                <p>Connect with any third-party application or any solution in the Dynamics 365 ecosystem without any hassle using APIs. Whether it is about integrating Business Central with <Link href="/products/microsoft-power-bi/"><a>Power BI</a></Link> or Continia, establish a connection within minutes. </p>
                <p>These integrations will help a business deal with complex business processes while enhancing the capabilities of a specific module. If your business deals with complex financial scenarios, you can integrate <Link href="/products/microsoft-dynamics-365-finance/"><a>Dynamics 365 for Finance</a></Link> and simplify all financial operations.  </p>
              </div>
            </div>
            <div className="col-lg-6 order-first align-self-center">
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
            <div className="col-lg-6 align-self-center">
              <div className="nw-bc-lef-h">
                <h2>
                  Tailor-Made for Your <br /> Unique Needs
                </h2>
                <p>Business Central is a versatile puzzle piece designed to seamlessly fit into any business landscape. No matter your industry, tailor Business Central ERP to perfectly align with your distinct business requirements. </p>
                <p>Leverage customized modules, features, and capabilities to accelerate your business growth and outpace competitors. These bespoke adjustments ensure the solution resonates with your business, amplifying its efficiency. </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/mash-bc-2.png"
                    alt="Dynamics 365 Business Central"
                    width={891}
                    height={769}
                  />
                </div>
                <Image
                  src="/img/Group-ai.png"
                  alt="bc-lader-pic"
                  width={1194}
                  height={812}
                />
              </div>
            </div>
          </div>
          <div className="row pp-bot-60">
            <div className="col-lg-5 order-first order-md-last align-self-center">
              <div className="nw-bc-lef-h">
                <h2>Stay Connected to Your Business On-the-Go </h2>
                <p>Experience unmatched consistency, no matter the device. Whether you're at the office or on the move, tap into the full power of Business Central - be it on desktop, tablet, or mobile. Enjoy flexibility across Windows, Android, and iOS, both on-site and cloud-based. </p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 order-first align-self-center">
              <div className="new-pic-bc">
                <Image
                  src="/img/stay-connected -the-Go.png"
                  alt="bc-lader-pic"
                  width={550}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <HorizontalScroll />

      <section className="bc-fut-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 align-self-center">
              <div className="left--side-title">
                <h2>
                  Dynamics 365 Business Central Features <br /> Skyrocket your
                  Business Growth
                </h2>
                <p>
                  Microsoft Dynamics 365 Business Central offers various
                  features that make it a perfect solution for all businesses.
                </p>
                <div className="btn--bc">
                  <Link href="/contact-us/">
                    <a className="btn btn-md">Read Essential Features</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="right--side-pic">
                <Image
                  width={468}
                  height={447}
                  src="/img/ds-rockets.png"
                  alt="ds-rockets"
                />
              </div>
            </div>
          </div>

          <div className="row bc--top-pad">
            <div className="col-lg-3">
              <div className="bc--feat-box">
                <Image
                  width={57}
                  height={48}
                  src="/img/centralized-data-servers.png"
                  alt="centralized-data-servers"
                />
                <h3>Centralized Data Servers</h3>
                <p>
                  Being a cloud-based solution, Business Central empowers
                  businesses to centralize their entire data on the cloud. Also,
                  it enables users to connect, collaborate, and communicate on a
                  single platform.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="bc--feat-box">
                <Image
                  width={57}
                  height={48}
                  src="/img/ai-driven-automation.png"
                  alt="ai-driven-automation"
                />
                <h3>AI-Driven Automation</h3>
                <p>
                  With the help of advanced technologies like AI and BI, you can
                  use seamless automation to enhance the overall productivity of
                  the team. Such automation tools minimize the manual and
                  recurring tasks in the system.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="bc--feat-box">
                <Image
                  width={57}
                  height={48}
                  src="/img/simplify-business-operations.png"
                  alt="simplify-business-operations"
                />
                <h3>Simplify Business Operations</h3>
                <p>
                  Fluctuating markets and customer demand make the existing
                  process complex and slow. Microsoft Dynamics Business Central
                  is a modern solution that simplifies processes regardless of
                  complexity and pushes a business toward scalability.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="bc--feat-box">
                <Image
                  width={57}
                  height={48}
                  src="/img/security-and-compliance.png"
                  alt="security-and-compliance"
                />
                <h3>Data Security and Compliance</h3>
                <p>
                  All your data is safe and secured with the trust of <Link href="/products/microsoft-azure/"><a>Microsoft
                  Azure</a></Link> - Microsoft Cloud Services. Business Central follows an
                  encrypted protocol and possesses all compliance certifications
                  for global business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-banner-call-to">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ll-pic">
                <img src="/img/mas-bc-pic.png" alt="mas-bc-pic" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="col-to-content">
                <h3>
                  Switch to Microsoft <br /> Dynamics 365 Business Central{" "}
                  <span>Open the Door to Endless Opportunities</span>
                </h3>
                <p>
                  Business Central will digitally transform your business to
                  help you stay ahead in the market while growing continuously.
                </p>
                <a className="btn btn-md" href="">
                  Connect with the Business Central Exports
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-bc">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>D365 Business Central Services</h2>
                <p>
                  Check out our efficient, reliable, and cost-effective services
                  that enable Dynamics Business Central to focus on your
                  business Growth.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="/our-services/dynamics-365-implementation-services/">
                  <a>
                    <div className="gr">
                      <img
                        src="/img/home/Implementation-icon.png"
                        alt="Implementation-icon"
                      />
                      <video autoPlay muted loop>
                        <source
                          src="/video/Implementation-icon.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <h3>Implementation</h3>
                    <p>
                      Boost your business efficiency with Dynamics 365
                      implementation services. Unify data, ensure robust cloud
                      security, simplify operations, and automate workflows to
                      reduce IT costs.
                    </p>
                    <div className="h-s-call">
                      <span>Implement Now </span>{" "}
                      <i className="bi bi-arrow-right"></i>
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
                      <img
                        src="/img/home/Upgrade-icon.png"
                        alt="Upgrade-icon"
                      />
                      <video autoPlay muted loop>
                        <source
                          src="/video/Upgrade-icon.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <h3>Upgrade</h3>
                    <p>
                      Modernize your business with our Dynamics 365 Upgrade
                      Services. We assess, recommend, and upgrade your legacy
                      solution to garner better growth opportunities.
                    </p>
                    <div className="h-s-call">
                      <span>Learn More </span>{" "}
                      <i className="bi bi-arrow-right"></i>
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
                      <img
                        src="/img/home/Support-icon.png"
                        alt="Support-icon"
                      />
                      <video autoPlay muted loop>
                        <source
                          src="/video/Support-icon.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <h3>Support</h3>
                    <p>
                      Access proactive Dynamics 365 Support services from our
                      team of 150+ Microsoft-certified consultants. We tailor
                      solutions to ensure your business's success while managing
                      costs.
                    </p>
                    <div className="h-s-call">
                      <span>Learn More </span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pri-wrper-bc">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>Dynamics 365 Business Central Pricing & Licensing</h2>
                <p>
                  Choose the perfect Business Central licensing plan that suits
                  your unique business.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="price0-bc-new">
                <div className="pr-head">
                  <h3>
                    Business Central <br /> Essential
                  </h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$70</span> Per-User/Month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Financial Management
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Inventory Management
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Order Management
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Purchase Order
                        Management
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Project Management
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Additional
                        Capabilities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price0-bc-new">
                <div className="pr-head">
                  <h3>
                    Business Central <br /> Premium
                  </h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$100</span> Per-User/Month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>All Essentials
                        Features
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Service Order
                        Management
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Manufacturing
                        Management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price0-bc-new">
                <div className="pr-head">
                  <h3>
                    Business Central <br /> Team Member
                  </h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$8</span> Per-User/Month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Access data within
                        Microsoft BC
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Update existing data
                        and entries
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Approve or reject
                        tasks in workflows
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Create or edit sales
                        or purchase quote
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Create or edit
                        personal information.
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Edit job time sheets
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Microsoft Power Apps
                        integration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="text-center" style={{ padding: "60px" }}>
                <a
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn btn-md btn-mod-c"
                >
                  Contact Licensing Consultant Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="left--side-title">
                <h2>
                  Why are Businesses choosing <br /> Dynamics Square over
                  others?
                </h2>
                <p>
                  Other than trust, reliable services, and cost-effective
                  pricing, <br /> below are the few points that make
                </p>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="right--side-pic right--side-pic-b">
                <Image
                  width={579}
                  height={376}
                  src="/img/ds-new-shape.png"
                  alt="ds-new-shape"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/business-centric-solutions.png"
                    alt="business-centric-solutions"
                  />
                </div>
                <div className="rig">
                  <h3>Business-Centric Solutions</h3>
                  <p>We personalize Business Central based on your unique business and its operations to match up with market needs and customer demands. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/certified-consultants.png"
                    alt="certified-consultants"
                  />
                </div>
                <div className="rig">
                  <h3>Microsoft Certified Consultants</h3>
                  <p>As a <Link href="/"><a>Microsoft Solutions Partner</a></Link>, we have 150+ Microsoft-certified Dynamics 365 consultants. We are available to help you resolve any issue and build growth strategies. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/sufficient-resources.png"
                    alt="sufficient-resources"
                  />
                </div>
                <div className="rig">
                  <h3>Sufficient Resources</h3>
                  <p>Dynamics Square USA has sufficient resources and infrastructure to support growing businesses with Business Central <Link href="/our-services/dynamics-365-support-services/"><a>Dynamics 365 support services</a></Link>. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/on-site-support.png"
                    alt="on-site-support"
                  />
                </div>
                <div className="rig">
                  <h3>On-site Support</h3>
                  <p>Based on the complexity of a business issue or interruption, we do offer on-site support services for the utmost customer satisfaction at affordable prices. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bbb">
        <div className="heross">
          <video
            playsinline
            autoPlay
            muted
            loop
            poster="/video/Rectangle-scree.png"
            className="background"
          >
            <source type="video/mp4" src="/video/Banner-DS-US.mp4" />
          </video>
          <div className="container">
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="psot-cl">
                  <h3>
                    Your Trusted Dynamics 365 Business Central Partner of 200+
                    Businesses
                  </h3>
                  <p>
                    We are the USA's reliable and trusted Microsoft Dynamics 365
                    partner, helping businesses work to their full potential
                    while scaling operations for enhanced growth.
                  </p>
                  <a className="button" href="#">
                    Yes, I want to Scale My Business!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="bc-more-sec">
                <h2>Reap Supreme Benefits by Modernizing Business Operations </h2>
                <p>
                  Business Central does 80% of your work that comes under
                  business management so that you can focus on growing the
                  business rather than streamlining different operations. The
                  rest (20%) is for you, 10% to explore your business for more
                  growth opportunities, and the remaining 10% to supervise the
                  entire business, whether everything is working fine or not.
                  This is one of the benefits you will get after <Link href="/dynamics-365-business-central-implementation/"><a>Business
                  Central implementation</a></Link>. However, some other key benefits are
                  listed below:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="acc-new-bc">
                <div className="accordion" id="accordionbc">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                      <i className="bi bi-check-lg"></i> <span>Unify Data for Easy Access</span>
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                       <p>The best part about cloud-based ERPs is the centralized data servers that let businesses store their entire data in a unified storage system. You can easily collect data from different departments on the same server, and your team can fetch the data whenever required based on the level of access they have.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="bi bi-check-lg"></i><span> Secure your Data from all Cyber Threats</span>
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                        <p>Data for businesses is so important that it has become the lifeline to survive in the fierce competition. With the trust of Microsoft Azure, all your data is safe and secured from all cyber and malicious attacks, replacing the use of on-premises systems. </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="bi bi-check-lg"></i> <span>Auto System Update: 100% Free and Effortless </span>
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                      <p>Modern businesses are subject to updating or upgrading to cope with changing business requirements. Microsoft understands this and releases such updates and upgrades twice a year to help you focus on scaling your business rather than investing hefty amounts in updating the system. </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        <i className="bi bi-check-lg"></i> <span>Easy Office Integration for Enhanced Productivity </span>
                      </button>
                    </h3>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                      <p>From personal to professional life, we are surrounded by the applications of Office 365. With Business Central, you can integrate the applications of Office 365 and the <Link href="/products/microsoft-dynamics-365/"><a>Dynamics 365 Ecosystem</a></Link> to enhance overall productivity by using the same apps we have been using for decades.  </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        <i className="bi bi-check-lg"></i> <span>Analyze and Visualize Data for Proper Utilization  </span>
                      </button>
                    </h3>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                      <p>Utilizing the information hidden in the data has become a must-do task because we process a lot of data daily. Dynamics Business Central Integration with Power BI offers a platform that helps businesses analyze and visualize huge piles of data in minutes, leading to data-driven decisions. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-faq faq">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>Have you got questions about Business Central?</h2>
                <p>
                Click through to our FAQ for the best answers!
                </p>
              </div>
            </div>
          </div>
        
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Dynamics 365 Business Central is a complete business solution package that comes with both on-cloud and on-premised facilitation and is designed to support and drive entire enterprise practices. Business Central is simple to use and comprises excel-like functionality, thereby, advanced excel users can instantly start leveraging the Business Central capabilities. It empowers enterprises to streamline and automate their tasks and processes by enabling connected and collaborative experiences. With Business Central, enterprises can manage their end-to-end process flow from <Link href="/products/microsoft-dynamics-365-finance/">finance</Link> and <Link href="/products/dynamics-365-supply-chain-management/">supply chain</Link> to <Link href="/products/microsoft-dynamics-365-sales/">sales</Link>, warehousing, <Link href="/products/dynamics-365-project-operations/">project management</Link>, manufacturing & distribution to project automation, <Link href="/products/microsoft-power-bi/">reporting & analytics</Link>, and more. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                     What is the relationship between Business Central and Dynamics NAV?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    Dynamics 365 Business Central is the updated version of <Link href="/products/microsoft-dynamics-nav/">Dynamics NAV</Link>. With its upgrade, Microsoft changed its name too. The Core functionality remains the same and is updated with advanced features and navigation to support modern enterprises to serve every industry. However, existing Dynamics NAV users can still avail themselves of <Link href="/our-services/dynamics-365-support-services/">Dynamics Square's Support Services</Link>. Dynamics Square offers exceptionally reliable and efficient NAV and <Link href="/dynamics-365-business-central-support/">Business Central Support Services</Link> at cost-effective rates. 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                     What do I need to do to upgrade to Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      If you are willing to upgrade to Dynamics 365 Business Central, Dynamics Square can implement a highly configured solution for your business. <Link href="/our-services/dynamics-365-upgrade-services/">Upgrading to Dynamics 365</Link> either from NAV or other existing systems requires experts' practice and years of proficiency. The team at Dynamics Square comprises all the required skill sets and years of expertise to implement a solution fulfilling your customized business needs.
                      </p>
                      <p>
                      For more clarification or avail of our <Link href="/free-dynamics-365-system-health-check/">free system health check</Link>, or call us today for any Dynamics 365 help.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                    How does Dynamics 365 Business Central support different industries?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Business Central is designed and configured to support all industries from <Link href="/industries/ecommerce/">E-commerce</Link> to <Link href="/industries/food-and-beverages/">food & beverages</Link>, <Link href="/industries/manufacturing/">Manufacturing, and Distribution</Link>, and <Link href="/industries/professional-services/">Professional Services</Link> to <Link href="/industries/microsoft-cloud-for-nonprofit/">Non-Profit</Link>. Business Central could be quite an effective deal for your Startups too if you are willing to jumpstart your business and start simplifying and enabling automation in your practices from the very initial.</p>
                     <p>To know more about how Business Central can be implemented for your specific industry to drive an effective and efficient approach throughout your business premises, <Link href="/contact-us/">contact our professionals</Link> today.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                     What is the price of Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        When you plan for Dynamics 365 Business Central
                        implementation, your pricing may vary depending on your
                        process requirement and the complexity of your business
                        flow. Here are the standard options available for buying
                        Business Central:
                      </p>
                      <ul>
                        <li>
                          Essential - You will be charged $70 per user/per month
                          for the Business Central essential plan.
                        </li>
                        <li>
                          Premium - Premium plan will ask you to pay $100 per
                          user/per month.
                        </li>
                        <li>Team Member</li>
                      </ul>
                      <p>
                        To know which plan would be a cost-effective and
                        process-efficient deal for your business, just call our
                        experts, we are here to help.
                      </p>
                      <p>Know more about <Link href="/dynamics-365-business-central-pricing-licensing/"><a>affordable Pricing and Licensing for Dynamics 365 Business Central</a></Link> in detail.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                     How can I continue to receive Dynamics 365 Business Central support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics Square has a highly embedded support system to
                        provide timely, efficient, and flexible support to our
                        clients. Whether your requirement goes for end-user
                        training, prepaid hour support, or ad-hoc support, we
                        believe in a flexible support model suited to your
                        specific requirement and budget.
                      </p>
                      <p>Connect to our experts today to learn more about how our <Link href="/dynamics-365-business-central-support/"><a>Dynamics 365 Business Central Support</a></Link> model works and which <b>Business Central Support Plan</b> could be vital for your business. Our team of Dynamics 365 experts will help you with every step of your digital transformation journey.  </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                     How does Dynamics 365 Business Central integrate with Power BI?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Business Central is an all-in-one solution for all your business requirements. Enterprises can manage their entire practices including sales, finance, customers, manufacturing, supply chain, project operations, <Link href="/products/dynamics-365-human-resources/">human resources</Link>, and reporting & analytics.</p>
                      <p>Since Business Central is quite flexible and thereby, can be integrated with any of Microsoft's business applications as well as with your existing system configurations. Thus, if your requirement goes for advanced reporting capabilities, then <Link href="/products/microsoft-power-bi/">Power BI</Link> is the high-end solution. You can <a href="https://blog.dynamicssquare.com/an-introduction-to-microsoft-power-bi/">integrate Business Central with Power BI</a> to drive effective reporting strategies and avail of required key analytics to strengthen your decision-making.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs-extra">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
              <h2>Check out our Best <br /> Resources for Business Central</h2>
              
              </div>
            </div>
          </div>
          <div className="row top-2 gx-5">
           <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/pdf/Is-Your-Business-Outgrowing-Your-Accounting-Software.pdf">
                      <a>
                        {" "}
                        <i className="bi bi-file-earmark-pdf"></i> Is Your
                        Business Outgrowing Your Accounting Software?
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Business-Owners-Guide.pdf">
                      <a>
                        {" "}
                        <i className="bi bi-file-earmark-pdf"></i> Business
                        Owner's Guide
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Reimagine-Productivity.pdf">
                      <a>
                        {" "}
                        <i className="bi bi-file-earmark-pdf"></i> Reimagine
                        Productivity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf">
                      <a>
                        {" "}
                        <i className="bi bi-file-earmark-pdf"></i> Licensing
                        Guide
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Four-Technology-Trends-Helping-Businesses-Thrive-in-a-Digital-World.pdf">
                      <a>
                        <i className="bi bi-file-earmark-pdf"></i> Technology
                        Trends Helping Businesses Thrive in a Digital World
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Reinvent-productivity-with-Dynamics-365-and-Microsoft-365.pdf">
                      <a>
                        <i className="bi bi-file-earmark-pdf"></i> Reinvent
                        productivity with Dynamics 365 and Microsoft 365
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/The-Total-Economic-Impact-of-Microsoft-Dynamics-365-Business-Central.pdf">
                      <a>
                        <i className="bi bi-file-earmark-pdf"></i> The Total
                        Economic Impact of Dynamics 365 Business Central
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h3>Learn More</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/why-choose-microsoft-dynamics-365-business-central/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i> Why Choose
                        Microsoft Dynamics 365 Business Central?
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/dynamics-365-business-central/advantages-capabilities/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i> Advantages
                        and Capabilities
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.dynamicssquare.com/dynamics-nav-to-business-central/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i> Why to
                        Upgrade Dynamics NAV to Business Central
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="https://www.dynamicssquare.com/reasons-to-upgrade-accounting-software/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i> Is Your
                        Business Outgrowing Your Accounting Software?
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessCentralNew;
