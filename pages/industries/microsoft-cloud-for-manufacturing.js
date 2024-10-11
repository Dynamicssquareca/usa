import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, FreeMode, Pagination,Navigation } from "swiper";

const MicrosoftPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [previousTab, setPreviousTab] = useState(0); // To track previous tab for animation

    const handleTabClick = (index) => {
        setPreviousTab(activeTab); // Store the current tab as previous
        setActiveTab(index);       // Set the new active tab
    };

    const getSlideDirection = () => {
        return activeTab > previousTab ? "slide-in-left" : "slide-in-right";
    };



    return (
        <>
            <Head>
                <title>Microsoft Cloud For Manufacturing - Dynamics Square</title>
                <meta
                    name="description"
                    content="Connect and streamline, people, workflow, and processes to support your production line, bring efficiency, and improve your customer experience with Microsoft Cloud for Manufacturing."
                />
               
                <link
                    rel="canonical"
                    href="https://www.dynamicssquare.com/industries/microsoft-cloud-for-manufacturing/"
                />
                <meta property="og:type" content="product" />

                <meta property="og:title" content="Microsoft Cloud For Manufacturing - Dynamics Square" />

                <meta property="og:description" content="Connect and streamline, people, workflow, and processes to support your production line, bring efficiency, and improve your customer experience with Microsoft Cloud for Manufacturing." />

                <meta property="og:url" content="https://www.dynamicssquare.com/industries/microsoft-cloud-for-manufacturing/" />

                <meta property="og:site_name" content="Dynamics Square USA" />

                <meta property="og:image" content="https://www.dynamicssquare.com/img/clouse-for-manufacturing-banner.png" />

                <meta property="twitter:card" content="summary_large_image" />

                <meta property="twitter:title" content="Microsoft Cloud For Manufacturing - Dynamics Square" />

                <meta property="twitter:description" content="Connect and streamline, people, workflow, and processes to support your production line, bring efficiency, and improve your customer experience with Microsoft Cloud for Manufacturing." />

                <meta property="twitter:url" content="https://www.dynamicssquare.com/industries/microsoft-cloud-for-manufacturing/" />

                <meta property="twitter:image" content="https://www.dynamicssquare.com/img/clouse-for-manufacturing-banner.png" />


            </Head>

            <main>

                <section className="Solution-banner new-main-heading bg-gg-coloor">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 align-self-center">
                                <h1 className="small-h">Microsoft Cloud for Manufacturing</h1>
                                <h2>Design and operate with AI-driven Intelligent Factories</h2>
                                <p>Transform your manufacturing facility by using capabilities such as mixed reality, digital twins, and AI with Microsoft Cloud for Manufacturing.</p>
                                <div>
                                    <div className="text-center text-lg-start">
                                        <Link href="#exampleModal">
                                            <a
                                                data-bs-toggle="modal"
                                                className="btn-get-started scrollto"
                                            >
                                                <span>Know more!</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="banner-ne-im-t">
                                    <Image
                                        src="/img/clouse-for-manufacturing-banner.png"
                                        alt="clouse-for-manufacturing-banner"
                                        width={664}
                                        height={355}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">


                        <div className="row pp-top-60 pp-bot-60 rever-1">
                            <div className="col-lg-5 align-self-center">
                                <div className="new-pic-bc text-center">
                                    <Image
                                        src="/img/clouse-for-manufacturing-side.png"
                                        alt="clouse-for-manufacturing-side"
                                        width={629}
                                        height={434}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-1 align-self-center">
                                {/* <div className="brder-hr"></div> */}
                            </div>
                            <div className="col-lg-6">
                                <div className="nw-bc-lef-h nw-bc-lef-h-blue">
                                    <h2>Challenges Faced by Manufacturing Companies</h2>
                                    <p>Manufacturing companies realize that production issues are prevalent. Due to those hurdles, they may experience market and supply chain disruptions, thus they must invest in technology intelligently to grow and sustain themselves. </p>
                                    <p>Manufacturers require an ecosystem that empowers them to overcome problems. Microsoft Cloud for Manufacturing helps firms combine data, workflows, staff, technology, and smart solutions. It accelerates digital transformation across four important manufacturing value chain challenges:</p>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>No real-time production visibility or cost optimization </span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Supply chain disruption prediction and mitigation </span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Enhancing consumer experiences and innovation </span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Effectively creating, stimulating, and validating goods</span></div>

                                </div>
                            </div>

                        </div>


                    </div>
                </section>

                <section className="bg-bb">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <>
                                    <Swiper
                                        autoplay={{
                                            delay: 66666,
                                            disableOnInteraction: false,
                                        }}
                                        breakpoints={{
                                            640: {
                                              slidesPerView: 1,
                                              spaceBetween: 20,
                                            },
                                            768: {
                                              slidesPerView: 1,
                                              spaceBetween: 40,
                                            },
                                            1024: {
                                              slidesPerView: 2,
                                              spaceBetween: 10,
                                            },
                                            1300: {
                                              slidesPerView: 3,
                                              spaceBetween: 10,
                                            },
                                            1400: {
                                              slidesPerView: 3,
                                              spaceBetween: 10,
                                            },
                                          }}
                                          slidesPerView={'auto'}
                                         centeredSlides={true}
                                        spaceBetween={30}
                                        freeMode={true}
                                        navigation={true}
                                        // pagination={{
                                        //     clickable: true,
                                        // }}
                                        modules={[Autoplay, FreeMode, Pagination,Navigation]}
                                        className="mySwiper new-indus-swiper"
                                    >
                                        <SwiperSlide>
                                            <div className="swiper-n-inner-card">
                                                <h3>Commission Intelligent Factory</h3>
                                                <p><b>Microsoft Manufacturing software suite</b> helps build the smart factory of the future. IT and OT-powered intelligent factories allow businesses to securely extract data and get insights for predictive maintenance and autonomous machine optimization at scale. It gives onsite workers information via collaboration platforms like Microsoft Teams to speed up onboarding and upskilling.</p>

                                                <p><b>Key aspects are:</b></p>
                                                <ul>
                                                    <li><i className="bi bi-check-lg"></i><span>Connected and informed workers</span></li>
                                                    <li><i className="bi bi-check-lg"></i><span>Production monitoring and optimization</span></li>
                                                    <li><i className="bi bi-check-lg"></i><span>Maintenance and quality</span></li>
                                                </ul>
                                                {/* <a href="">Learn how! <i className="bi bi-arrow-right"></i></a> */}
                                            </div>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-n-inner-card">
                                                <h3>Build Resilient Supply Chains</h3>
                                                <p>Manufacturers must analyze supplier data and market indications to manage supply chain disruptions. This information can help them predict and manage supply chain interruptions. Microsoft Cloud for Manufacturing uses AI capabilities embedded in business applications available in the suite to evaluate data and insights. This helps build a resilient and sustainable supply chain by estimating and preventing disruptions.</p>

                                                <p><b>Key aspects are:</b></p>
                                                <ul>
                                                    <li><i className="bi bi-check-lg"></i><span>Visibility and risk management</span></li>
                                                    <li><i className="bi bi-check-lg"></i><span>Forecasting and planning</span></li>
                                                    <li><i className="bi bi-check-lg"></i><span>Warehousing and fulfilment</span></li>

                                                </ul>
                                                {/* <a href="">Learn how! <i className="bi bi-arrow-right"></i></a> */}
                                            </div>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-n-inner-card">
                                                <h3>Modernize Digital Sales & Services</h3>
                                                <p>A business's ultimate goal is client satisfaction. Manufacturers must digitize sales and services to drive innovation and improve consumer experiences across the buying journey. Microsoft Cloud for Manufacturing includes intelligent business apps using mixed reality and AI. With real-time sales and service data, they can create and launch new products and services rapidly and affordably without sacrificing quality.</p>

                                                <p><b>Key aspects are:</b></p>
                                                <ul>
                                                    <li><i className="bi bi-check-lg"></i><span>Optimizing sales and service with real-time insights </span></li>
                                                    <li><i className="bi bi-check-lg"></i><span>Improving customer service with AI-powered chats </span></li>
                                                    <li><i className="bi bi-check-lg"></i><span>Mixed-reality solutions create immersive experiences</span></li>

                                                </ul>
                                                {/* <a href="">Learn how! <i className="bi bi-arrow-right"></i></a> */}
                                            </div>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-n-inner-card">
                                                <h3>Innovative Product Design & Validation</h3>
                                                <p>Manufacturers need scalable, on-demand high-performance computing and industrial Metaverse capabilities to design, stimulate, and validate products. Microsoft Cloud for Manufacturing provides this. Metaverse features like digital twins, mixed reality, and AI aid end-to-end product design and validation. This drives innovation in manufacturing and helps ensure product quality.</p>

                                                <p><b>Key aspects are:</b></p>
                                                <ul>
                                                    <li><i className="bi bi-check-lg"></i><span>Creating and stimulating products, machines, and processes</span></li>
                                                    <li><i className="bi bi-check-lg"></i><span>Forecasting using historical data and algorithms </span></li>
                                                    <li><i className="bi bi-check-lg"></i><span>Evaluating and optimizing product design</span></li>

                                                </ul>
                                                {/* <a href="">Learn how! <i className="bi bi-arrow-right"></i></a> */}
                                            </div>

                                        </SwiperSlide>
                                    </Swiper>
                                </>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="container">
                        <div className="col-n-cta-new">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="ss-heading">
                                        <h2>Set up AI-driven Intelligent Factories with Dynamics Square</h2>
                                        <p>Let’s build smart factories that allow you to get real-time insights to streamline operations and drive efficiency and innovation.</p>
                                        <a href="#exampleModal" data-bs-toggle="modal" className="btn-white-new">Know More!</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    {/* <div className="pictur-cta-rigt">
                                       <div className="absii">
                                       <img src="/img/frame-123.png" alt="shape" />
                                       </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>






                <section className="mines-m-aa">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-8">
                                <div className="heading-colo-bg">
                                    <h2>Explore Solutions for Manufacturing</h2>
                                    <p>Check out the solutions that can help you revamp your business by bringing innovation into it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-lg-none">
                            <div className="col-lg-12">
                                <div className="finace-acc">
                                    <div className="accordion" id="accnew">
                                        <div className="accordion-item">
                                            <h3 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#fin1"
                                                    aria-expanded="false"
                                                    aria-controls="fin1"
                                                >
                                                    <span>Commission Intelligent Factory</span>
                                                </button>
                                            </h3>
                                            <div
                                                id="fin1"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accnew"
                                            >
                                                <div className="accordion-body">
                                                    <div className="row busines-service-list-pad">

                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Dynamics 365 Supply Chain Management </h4>
                                                                    <p>It helps analyze production and operations data including supplier information and market signals.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft Power Platform </h4>
                                                                    <p>It offers data solutions to simplify data management across Microsoft services like Microsoft 365, <a href="/products/microsoft-azure/">Microsoft Azure</a>, Dynamics 365 and <a href="/products/microsoft-power-platform/">Microsoft Power Platform</a> itself. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft Fabric </h4>
                                                                    <p>It improves data integration and analysis within the manufacturing industry. It does so by unifying OT with IT.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Azure IoT Operations </h4>
                                                                    <p>It helps capture data from multiple systems and integrate with solutions like Microsoft Fabric to deploy the industrial metaverse.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Dynamics 365 Guides </h4>
                                                                    <p>It provides detailed instructions to help workers do complex tasks with precision and efficiency.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Azure AI Services </h4>
                                                                    <p>It allows manufacturers to introduce AI capabilities into their processes and solutions.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft Defender for IoT </h4>
                                                                    <p>It allows real-time asset discovery and manages cyber threat protection for IoT and industrial infrastructure.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft 365 for frontline workers </h4>
                                                                    <p>It helps workers connect and collaborate for increased operational efficiency.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Dynamics 365 Remote Assist </h4>
                                                                    <p>It helps connect field technicians with remote experts to address challenges quickly and effectively.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft Purview </h4>
                                                                    <p>It helps improve data governance, visibility, and security of manufacturing operations.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft HoloLens 2 </h4>
                                                                    <p>It facilitates immersive collaboration, digital twins and simulation, and self-guided instructions for workers. </p>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="accordion-item">
                                            <h3 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#fin2"
                                                    aria-expanded="false"
                                                    aria-controls="fin2"
                                                >
                                                    <span>Build Resilient Supply Chains</span>
                                                </button>
                                            </h3>
                                            <div
                                                id="fin2"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accnew"
                                            >
                                                <div className="accordion-body">
                                                    <div className="row busines-service-list-pad">

                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Dynamics 365 Supply Chain Management </h4>
                                                                    <p>It assists in evaluating data related to production and operations, including details about suppliers and market trends.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Dynamics 365 Finance </h4>
                                                                    <p>It brings agility in financial planning, budgeting, and forecasting through the use of Copilot within the scope of business performance management capabilities.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft Power BI </h4>
                                                                    <p>It helps transform businesses by offering actionable insights across various operations.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft Sustainability Manager </h4>
                                                                    <p>It helps manufacturers reduce their environmental impact using data and AI. </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="accordion-item">
                                            <h3 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#fin3"
                                                    aria-expanded="false"
                                                    aria-controls="fin3"
                                                >
                                                    <span>Modernize Digital Sales & Services</span>
                                                </button>
                                            </h3>
                                            <div
                                                id="fin3"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accnew"
                                            >
                                                <div className="accordion-body">
                                                    <div className="row busines-service-list-pad">

                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Dynamics 365 Customer Service </h4>
                                                                    <p>With connected field service and service operations profit center, it helps improve the overall customer experience.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Dynamics 365 Sales </h4>
                                                                    <p>It streamlines sales processes that include lead management, opportunity management, sales forecasting, and so on.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Dynamics 365 Customer Insights </h4>
                                                                    <p>It provides a 360-degree customer view and creates delightful experiences.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Dynamics 365 Field Service </h4>
                                                                    <p>With connected field service, optimized service operations, and contractor support, it ensures efficient field service management.  </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft 365 for frontline workers </h4>
                                                                    <p>It helps connect and engage the workforce, enhance workforce management, and onboard and train employees.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft Power BI </h4>
                                                                    <p>It helps businesses transform by providing critical insights related to various operations.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="accordion-item">
                                            <h3 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#fin4"
                                                    aria-expanded="false"
                                                    aria-controls="fin4"
                                                >
                                                    <span>Innovative Product Design & Validation</span>
                                                </button>
                                            </h3>
                                            <div
                                                id="fin4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accnew"
                                            >
                                                <div className="accordion-body">
                                                    <div className="row busines-service-list-pad">

                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Azure Compute </h4>
                                                                    <p>It allows manufacturers to leverage high-performance computing to efficiently run their applications and workloads.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Azure IoT Operations </h4>
                                                                    <p>A set of modular, scalable, and highly available data services; it enables manufacturers to transform their physical operations.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Azure Machine Learning </h4>
                                                                    <p>It is a powerful component of the Microsoft Cloud for Manufacturing suite that enables safe and productive use of machine learning models.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Azure AI Services</h4>
                                                                    <p>It enables businesses to incorporate artificial intelligence functionalities into their procedures and solutions.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Azure SQL Database </h4>
                                                                    <p>A fully managed PaaS database engine that allows seamless scaling of relational databases.</p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row busines-bgs g-0">
                            <div className="col-lg-4 no-pad">
                                <div
                                    className="nav flex-column nav-pills  bus-ser-left"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <div
                                        className="nav-link active"
                                        id="v-pills-Finance-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Finance"
                                        role="tab"
                                        aria-controls="v-pills-Finance"
                                        aria-selected="true"
                                    >
                                        <h3>Commission Intelligent Factory</h3>
                                    </div>
                                    <div
                                        className="nav-link"
                                        id="v-pills-Sales-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Sales"
                                        role="tab"
                                        aria-controls="v-pills-Sales"
                                        aria-selected="false"
                                    >
                                        <h3>Build Resilient Supply Chains</h3>
                                    </div>
                                    <div
                                        className="nav-link"
                                        id="v-pills-Purchase-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Purchase"
                                        role="tab"
                                        aria-controls="v-pills-Purchase"
                                        aria-selected="false"
                                    >
                                        <h3>Modernize Digital Sales & Services</h3>
                                    </div>
                                    <div
                                        className="nav-link"
                                        id="v-pills-Management-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Management"
                                        role="tab"
                                        aria-controls="v-pills-Management"
                                        aria-selected="false"
                                    >
                                        <h3>Innovative Product Design & Validation</h3>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-Finance"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-Finance-tab"
                                    >
                                        <div className="row busines-service-list-pad">

                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Dynamics 365 Supply Chain Management </h4>
                                                        <p>It helps analyze production and operations data including supplier information and market signals.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft Power Platform </h4>
                                                        <p>It offers data solutions to simplify data management across Microsoft services like Microsoft 365, <a href="/products/microsoft-azure/">Microsoft Azure</a>, Dynamics 365 and <a href="/products/microsoft-power-platform/">Microsoft Power Platform</a> itself. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft Fabric </h4>
                                                        <p>It improves data integration and analysis within the manufacturing industry. It does so by unifying OT with IT.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Azure IoT Operations </h4>
                                                        <p>It helps capture data from multiple systems and integrate with solutions like Microsoft Fabric to deploy the industrial metaverse.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Dynamics 365 Guides </h4>
                                                        <p>It provides detailed instructions to help workers do complex tasks with precision and efficiency.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Azure AI Services </h4>
                                                        <p>It allows manufacturers to introduce AI capabilities into their processes and solutions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft Defender for IoT </h4>
                                                        <p>It allows real-time asset discovery and manages cyber threat protection for IoT and industrial infrastructure.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft 365 for frontline workers </h4>
                                                        <p>It helps workers connect and collaborate for increased operational efficiency.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Dynamics 365 Remote Assist </h4>
                                                        <p>It helps connect field technicians with remote experts to address challenges quickly and effectively.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft Purview </h4>
                                                        <p>It helps improve data governance, visibility, and security of manufacturing operations.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft HoloLens 2 </h4>
                                                        <p>It facilitates immersive collaboration, digital twins and simulation, and self-guided instructions for workers. </p>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-Sales"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-Sales-tab"
                                    >

                                        <div className="accordion-body">
                                            <div className="row busines-service-list-pad">

                                                <div className="col-lg-6 col-md-6">
                                                    <div className="busines-service-list">
                                                        <div className="icons">
                                                            <i className="bi bi-check-lg"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4>Dynamics 365 Supply Chain Management </h4>
                                                            <p>It assists in evaluating data related to production and operations, including details about suppliers and market trends.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="busines-service-list">
                                                        <div className="icons">
                                                            <i className="bi bi-check-lg"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4>Dynamics 365 Finance </h4>
                                                            <p>It brings agility in financial planning, budgeting, and forecasting through the use of Copilot within the scope of business performance management capabilities.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="busines-service-list">
                                                        <div className="icons">
                                                            <i className="bi bi-check-lg"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4>Microsoft Power BI </h4>
                                                            <p>It helps transform businesses by offering actionable insights across various operations.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="busines-service-list">
                                                        <div className="icons">
                                                            <i className="bi bi-check-lg"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4>Microsoft Sustainability Manager </h4>
                                                            <p>It helps manufacturers reduce their environmental impact using data and AI. </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-Purchase"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-Purchase-tab"
                                    >
                                        <div className="row busines-service-list-pad">

                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Dynamics 365 Customer Service </h4>
                                                        <p>With connected field service and service operations profit center, it helps improve the overall customer experience.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Dynamics 365 Sales </h4>
                                                        <p>It streamlines sales processes that include lead management, opportunity management, sales forecasting, and so on.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Dynamics 365 Customer Insights </h4>
                                                        <p>It provides a 360-degree customer view and creates delightful experiences.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Dynamics 365 Field Service </h4>
                                                        <p>With connected field service, optimized service operations, and contractor support, it ensures efficient field service management.  </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft 365 for frontline workers </h4>
                                                        <p>It helps connect and engage the workforce, enhance workforce management, and onboard and train employees.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft Power BI </h4>
                                                        <p>It helps businesses transform by providing critical insights related to various operations.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-Management"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-Management-tab"
                                    >

                                        <div className="row busines-service-list-pad">

                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Azure Compute </h4>
                                                        <p>It allows manufacturers to leverage high-performance computing to efficiently run their applications and workloads.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Azure IoT Operations </h4>
                                                        <p>A set of modular, scalable, and highly available data services; it enables manufacturers to transform their physical operations.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Azure Machine Learning </h4>
                                                        <p>It is a powerful component of the Microsoft Cloud for Manufacturing suite that enables safe and productive use of machine learning models.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Azure AI Services</h4>
                                                        <p>It enables businesses to incorporate artificial intelligence functionalities into their procedures and solutions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Azure SQL Database </h4>
                                                        <p>A fully managed PaaS database engine that allows seamless scaling of relational databases.</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

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
                                        <h3>Let’s Set up Resilient and Sustainable Supply Chains with Dynamics Square</h3>
                                        <p>Overcome supply chain disruptions with Microsoft Cloud for Manufacturing. Use AI-driven insights to predict and mitigate risks to stay ahead in the competitive market.</p>
                                        <Link href="/contact-us/">
                                            <a className="btn btn-md">Learn How!</a>
                                        </Link>
                                    </div>
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
                                    <h2>Spread the Word and Make an Impact with Dynamics Square</h2>
                                    <p>Dynamics Square is a prominent <a href="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation partner</a>, specializing in assisting nonprofit organizations. We help you leverage the potential of Microsoft Cloud for Nonprofit.</p>
                                    <p>Our team of expert consultants will assist you:</p>
                                </div>
                            </div>
                            <div className="col-lg-5 align-self-center">
                                <div className="right--side-pic right--side-pic-b">
                                    <Image
                                        width={579}
                                        height={376}
                                        src="/img/ds-new-shape.png"
                                        alt="ds-new-shape-logo"
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
                                            src="/img/apps-color-1.png"
                                            alt="Proven Track Record"
                                        />
                                    </div>
                                    <div className="rig">
                                        <h3>Proven Track Record</h3>
                                        <p>We have a proven track record of implementing the <a href="/products/microsoft-dynamics-365/">Dynamics 365 solution</a> in more than 350 global businesses. Our extensive Dynamics 365 Finance implementation methodology has helped us reach diverse industries.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bc---soprt">
                                    <div className="lef">
                                        <Image
                                            width={57}
                                            height={48}
                                            src="/img/apps-color-2.png"
                                            alt="Personalized Approach"
                                        />
                                    </div>
                                    <div className="rig">
                                        <h3>Personalized Approach</h3>
                                        <p>Once you contact us, we will understand your business requirements, goals, and challenges to offer you a personalized solution that perfectly aligns with your unique business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bc---soprt">
                                    <div className="lef">
                                        <Image
                                            width={57}
                                            height={48}
                                            src="/img/apps-color-3.png"
                                            alt="Agile Support System"
                                        />
                                    </div>
                                    <div className="rig">
                                        <h3>Agile Support System</h3>
                                        <p>Dynamics Square is available for you before and after the implementation so that your business runs smoothly even in hard times. We will offer support, maintenance, and optimization services to help you gain a competitive advantage.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bc---soprt">
                                    <div className="lef">
                                        <Image
                                            width={57}
                                            height={48}
                                            src="/img/apps-color-4.png"
                                            alt="Global Infrastructure"
                                        />
                                    </div>
                                    <div className="rig">
                                        <h3>Global Infrastructure</h3>
                                        <p>We are well versed in the infrastructure needed to offer reliable services, whether remote or on-site. Our 24x7 global support is always available by your side, following global compliances.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>



        </>
    );
};

export default MicrosoftPage;
