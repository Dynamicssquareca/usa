import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

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
                <title>Dynamics 365 Finance Partner - Dyanmics Square</title>
                <meta
                    name="description"
                    content="Maximize financial performance with Dynamics Square, a trusted Dynamics 365 Finance partner offering seamless integration and customized solutions for your business."
                />
                <meta name="robots" content="noindex, nofollow" />
                <link
                    rel="canonical"
                    href="https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance/"
                />
                <meta property="og:type" content="product" />

                <meta property="og:title" content="Dynamics 365 Finance Partner - Dyanmics Square" />

                <meta property="og:description" content="Maximize financial performance with Dynamics Square, a trusted Dynamics 365 Finance partner offering seamless integration and customized solutions for your business." />

                <meta property="og:url" content="https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance/" />

                <meta property="og:site_name" content="Dynamics Square USA" />

                <meta property="og:image" content="https://www.dynamicssquare.com/img/Finance-banner-pic.png" />

                <meta property="twitter:card" content="summary_large_image" />

                <meta property="twitter:title" content="Dynamics 365 Finance Partner - Dyanmics Square" />

                <meta property="twitter:description" content="Maximize financial performance with Dynamics Square, a trusted Dynamics 365 Finance partner offering seamless integration and customized solutions for your business." />

                <meta property="twitter:url" content="https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance/" />

                <meta property="twitter:image" content="https://www.dynamicssquare.com/img/Finance-banner-pic.png" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "Product",
                            "name": "Dynamics 365 Finance Partner - Dyanmics Square",
                            "image": "https://www.dynamicssquare.com/img/Finance-banner-pic.png",
                            "description": "Maximize financial performance with Dynamics Square, a trusted Dynamics 365 Finance partner offering seamless integration and customized solutions for your business.",
                            "brand": {
                                "@type": "Brand",
                                "name": "Dynamics Square USA"
                            },
                            "offers": {
                                "@type": "AggregateOffer",
                                "url": "https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance/",
                                "priceCurrency": "USD",
                                "lowPrice": "180",
                                "highPrice": "300"
                            }
                        }),
                    }}
                />

            </Head>

            <main>

                <section className="Solution-banner new-main-heading bg-gg-coloor">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 align-self-center">
                                <h1 className="small-h">Microsoft Cloud for Nonprofit </h1>
                                <h2>Little Efforts Count. Let’s Make It Big</h2>
                                <p>Boost campaigns, find and engage supporters, donors, and volunteers, streamline fundraising efforts, and maximize your nonprofit’s potential with Microsoft Cloud. </p>
                                <div>
                                    <div className="text-center text-lg-start">
                                        <Link href="#exampleModal">
                                            <a
                                                data-bs-toggle="modal"
                                                className="btn-get-started scrollto"
                                            >
                                                <span>Get a Free Consultation! </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="banner-ne-im-t">
                                    <Image
                                        src="/img/d-365-banner.png"
                                        alt="d-365-banner.png"
                                        width={679}
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
                                        src="/img/picture-1-may.png"
                                        alt="Dynamics 365 Finance"
                                        width={590}
                                        height={499}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-1 align-self-center">
                                {/* <div className="brder-hr"></div> */}
                            </div>
                            <div className="col-lg-6">
                                <div className="nw-bc-lef-h nw-bc-lef-h-blue">
                                    <h2>What is Microsoft Cloud for Nonprofit? </h2>
                                    <p><b>Microsoft Cloud for nonprofit</b> is a complete collection of cloud-based products specifically created to cater to the distinct requirements of nonprofit organizations. Utilizing the reliable Microsoft Cloud platform, this system effortlessly incorporates well-known resources, such as LinkedIn, Microsoft Azure, Microsoft 365, Dynamics 365, and <a href="/products/microsoft-power-automate/">Microsoft Power Automate</a>. This combination provides a comprehensive method for managing your operations and enhancing the effectiveness of your goal. </p>
                                    <p><strong>Microsoft Cloud for Nonprofit allows you to:</strong></p>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Optimize program design and delivery initiatives</span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Streamline fundraising initiatives and centralize donor information</span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Enhance program management efficiency and empower volunteers</span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Obtain actionable insights to enhance decision-making</span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Ensure the confidentiality and compliance of your data</span></div>
                                    <p><b>Experience</b> Microsoft Cloud for nonprofits and harness its potential to accelerate the outcomes of your mission objectives</p>
                                </div>
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
                                        <h2>Accelerate Your Mission with Microsoft Cloud for Nonprofit</h2>
                                        <p>Modernize the process of donor engagement by creating tailored experiences. Use tools to save your time and streamline donation management and payment processing.</p>
                                        <a href="#" className="btn-white-new">Connect with our Expert</a>
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




                <section className="mines-m">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-8">
                                <div className="heading-colo-bg">

                                    <h2>Dynamics 365 for Nonprofits</h2>
                                    <p>The Dynamics 365 suite combines various business solutions, including Microsoft Dynamics ERP, Microsoft Dynamics CRM, Microsoft Cloud for Industry, Collaboration, Power Platform, AI, Mixed Reality, Services, and Microsoft Platform.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 pd-001 sliding-row">
                            <div className="col-lg-3 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher card-ancher-h">
                                    <div className="card-with-one-img">
                                        <img src="/img/scalable-1.png" alt="Customer Engagement (CRM)" width={32} height={32} />
                                    </div>
                                    <h3>Customer Engagement (CRM)</h3>
                                    <p>Give your sales, marketing, and service teams smart tools to improve customer relationships and boost growth. From AI-powered analytics to sales and marketing automation and customer journey to lead management, Dynamics 365 CRM helps your team surpass consumer expectations at every touchpoint.</p>
                                    {/* <span><a href="/products/microsoft-dynamics-crm/">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher card-ancher-h">
                                    <div className="card-with-one-img">
                                        <img src="/img/scalable-2.png" alt="Power Platform for Nonprofits" width={32} height={32} />
                                    </div>
                                    <h3>Power Platform for Nonprofits</h3>
                                    <p>Give your sales, marketing, and service teams smart tools to improve customer relationships and boost growth. From AI-powered analytics to sales and marketing automation and customer journey to lead management, Dynamics 365 CRM helps your team surpass consumer expectations at every touchpoint.</p>
                                    {/* <span><a href="/products/microsoft-dynamics-crm/">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher card-ancher-h">
                                    <div className="card-with-one-img">
                                        <img src="/img/scalable-3.png" alt="Microsoft 365 for Nonprofits" width={32} height={32} />
                                    </div>
                                    <h3>Microsoft 365 for Nonprofits</h3>
                                    <p>Give your sales, marketing, and service teams smart tools to improve customer relationships and boost growth. From AI-powered analytics to sales and marketing automation and customer journey to lead management, Dynamics 365 CRM helps your team surpass consumer expectations at every touchpoint.</p>
                                    {/* <span><a href="/products/microsoft-dynamics-crm/">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher card-ancher-h">
                                    <div className="card-with-one-img">
                                        <img src="/img/scalable-4.png" alt="LinkedIn for Nonprofits" width={32} height={32} />
                                    </div>
                                    <h3>LinkedIn for Nonprofits</h3>
                                    <p>Give your sales, marketing, and service teams smart tools to improve customer relationships and boost growth. From AI-powered analytics to sales and marketing automation and customer journey to lead management, Dynamics 365 CRM helps your team surpass consumer expectations at every touchpoint.</p>
                                    {/* <span><a href="/products/microsoft-dynamics-crm/">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
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
                                    <h2>Dynamics 365 Finance Modules: Get Everything Simplified</h2>
                                    <p>Microsoft Dynamics 365 Finance resolves the financial queries of the organization and gives a boost to simplify different operations of the business with different modules. Some of its modules are:</p>
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
                                                    <span>Core Finance</span>
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
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="busines-service-list-hhs">
                                                                <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
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
                                                    <span>Budgeting and Forecasting</span>
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
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="busines-service-list-hhs">
                                                                <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
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
                                                    <span>Cost Management</span>
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
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="busines-service-list-hhs">
                                                                <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
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
                                                    <span>Financial Reporting and Analysis</span>
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
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="busines-service-list-hhs">
                                                                <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
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
                                                    data-bs-target="#fin5"
                                                    aria-expanded="false"
                                                    aria-controls="fin5"
                                                >
                                                    <span>Field Service</span>
                                                </button>
                                            </h3>
                                            <div
                                                id="fin5"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accnew"
                                            >
                                                <div className="accordion-body">
                                                    <div className="row busines-service-list-pad">
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="busines-service-list-hhs">
                                                                <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>360-degree View</h4>
                                                                    <p>Get all the information about your donors and volunteers in one place.</p>
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
                            <div className="col-lg-5 no-pad">
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
                                        <h3>Core Finance</h3>
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
                                        <h3>Budgeting and Forecasting</h3>
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
                                        <h3>Cost Management</h3>
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
                                        <h3>Financial Reporting and Analysis</h3>
                                    </div>
                                    <div
                                        className="nav-link"
                                        id="v-pills-Inventory-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Inventory"
                                        role="tab"
                                        aria-controls="v-pills-Inventory"
                                        aria-selected="false"
                                    >
                                        <h3>Advanced Modules</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-Finance"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-Finance-tab"
                                    >
                                        <div className="row busines-service-list-pad">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="busines-service-list-hhs">
                                                    <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
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

                                        <div className="row busines-service-list-pad">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="busines-service-list-hhs">
                                                    <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
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
                                            <div className="col-lg-12 col-md-12">
                                                <div className="busines-service-list-hhs">
                                                    <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
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
                                            <div className="col-lg-12 col-md-12">
                                                <div className="busines-service-list-hhs">
                                                    <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-Inventory"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-Inventory-tab"
                                    >

                                        <div className="row busines-service-list-pad">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="busines-service-list-hhs">
                                                    <p>One of the most challenging aspects of running a nonprofit organization is donor and volunteer management. Using Microsoft Cloud for nonprofits, you can build and manage relationships with supporters and volunteers.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>360-degree View</h4>
                                                        <p>Get all the information about your donors and volunteers in one place.</p>
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
                                        <h3>Ensure Timely and Efficient Delivery of Programs with Microsoft Cloud for Nonprofit</h3>
                                        <p>Engage volunteers through the Volunteer Engagement solution and facilitate community training to provide customized training to communities and participants at scale.</p>
                                        <Link href="/contact-us/">
                                            <a className="btn btn-md">Yes, I want to Scale My Business!</a>
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
                                    <h2>Partner with Dynamics Square to Deploy Microsoft Dynamics 365 Apps</h2>
                                    <p>We are a certified Microsoft Gold Partner who can you innovative and business-driven solutions along with seamless experience in upgrading/implementing <b>Dynamics 365 modules</b> without losing your existing data and business processes.</p>
                                    <p>Being a reputed <a href="/"> Microsoft Dynamics partner</a> in the USA for more than 12 years now, we have successfully deployed over 350 projects. Here’s why you should consider Dynamics Square:</p>
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
                                        <p>We have a proven track record of implementing the <Link href="/products/microsoft-dynamics-365/"><a>Dynamics 365 solution</a></Link> in more than 350 global businesses. Our extensive Dynamics 365 Finance implementation methodology has helped us reach diverse industries.</p>
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
