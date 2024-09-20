import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const MicrosoftPage = () => {
    const [isOpen, setOpen] = useState(false);
    const [open, setsOpen] = useState(false);

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
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
                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="tabs-container">
                                    <div className="tab-buttons">
                                        <button
                                            className={activeTab === 0 ? "active" : ""}
                                            onClick={() => handleTabClick(0)}
                                        >
                                            Enterprise Resource Planning (ERP)
                                        </button>
                                        <button
                                            className={activeTab === 1 ? "active" : ""}
                                            onClick={() => handleTabClick(1)}
                                        >
                                            Customer Engagement (CRM)
                                        </button>
                                        <div className="active-tab-indicator" style={{ left: `${activeTab * 50}%` }} />
                                    </div>

                                    <div className="tab-content">
                                        {activeTab === 0 && 
                                        <div>

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
                                                        <Link href="/products/dynamics-365-business-central/" >
                                                            <a aria-label="business-central">
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
                                                            <a aria-label="microsoft-dynamics-365-finance">
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
                                                            <a aria-label="dynamics-365-supply-chain-management">
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
                                                            <a aria-label="microsoft-dynamics-365-sales">
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
                                                            <a aria-label="microsoft-power-bi">
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
                                                            <a aria-label="microsoft-dynamics-nav">
                                                                <div className="h-s-call" >
                                                                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>}
                                        {activeTab === 1 && 
                                        
                                        <div>

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
                                                    <Link href="/products/dynamics-365-business-central/" >
                                                        <a aria-label="business-central">
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
                                                        <a aria-label="microsoft-dynamics-365-finance">
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
                                                        <a aria-label="dynamics-365-supply-chain-management">
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
                                                        <a aria-label="microsoft-dynamics-365-sales">
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
                                                        <a aria-label="microsoft-power-bi">
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
                                                        <a aria-label="microsoft-dynamics-nav">
                                                            <div className="h-s-call" >
                                                                <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>


                                    </div>}
                                        
                                        
                                        
                                    </div>

                                    {/* Animated border */}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Solution-banner pp-rrea new-main-heading">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 align-self-center">
                                <h1 className="small-h">Microsoft Dynamics 365</h1>
                                <h2>Empower your business with intelligent solutions!</h2>
                                <p>Unify your business operations with Microsoft Dynamics 365. Enhance efficiency, reduce complexity, and drive growth with intelligent, interconnected solutions.</p>
                                <div>
                                    <div className="text-center text-lg-start">
                                        <Link href="#exampleModal">
                                            <a
                                                data-bs-toggle="modal"
                                                className="btn-get-started scrollto"
                                            >
                                                <span>Get Dynamics 365!</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="banner-ne-im-t">
                                    <div className="bf">
                                        <Image
                                            src="/img/f-o-shadow-1.png"
                                            width={1228}
                                            height={818}
                                            alt="nn"
                                        />
                                    </div>
                                    <Image
                                        src="/img/Finance-banner-pic.png"
                                        alt="Microsoft Dynamics 365 Finance"
                                        width={648}
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
                                <div className="new-pic-bc">
                                    <Image
                                        src="/img/Finance-pic-1.png"
                                        alt="Dynamics 365 Finance"
                                        width={469}
                                        height={404}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-1 align-self-center">
                                {/* <div className="brder-hr"></div> */}
                            </div>
                            <div className="col-lg-6">
                                <div className="nw-bc-lef-h nw-bc-lef-h-gren">
                                    <span>Overview</span>
                                    <h2>What is Microsoft Dynamics 365?</h2>
                                    <p><b>Microsoft Dynamics 365 is a SaaS-based suite of business solutions that comprises sales, marketing, customer service, finance, human resources, and supply chain management, among others.</b></p>
                                    <p>Every solution within Dynamics 365 has various modules that work in tandem with each other to provide companies with a complete business management solution. Besides, they allow easy integration with existing systems to offer a complete tech stack.</p>

                                    <p>The data-driven design of Dynamics 365 connects various business functions to enable data sharing and remove silos. A hyperconnected ecosystem of Microsoft improves efficiency, productivity, and cost-effectiveness which makes MS Dynamics 365 a versatile business solution.</p>

                                    <p>So, to answer the question, what is Dynamics 365, you can call it a suite of applications that can digitally transform your operations.</p>

                                    <p><b>But, do you actually need it? Let’s find out!</b></p>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>

                <section className="bg-style-one marg-12">
                    <div className="bb-img">
                        <img src="/img/mar-i-bg.png" alt="mar-i-bg" width={856} height={388} />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="s-head-two">
                                    <h2>Challenges Microsoft Dynamics 365 Software Suite Addresses</h2>
                                    <p>Are you facing any of these challenges in your day-to-day operations?</p>
                                </div>

                                <div className="bott-list-tool">
                                    <ul>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Fragmented financial data</span>
                                                <span class="tooltips-text">
                                                    <p>Managing finances properly is a major difficulty for businesses of all kinds. The scope of operations</p>
                                                </span>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Manual processes and errors</span>
                                                <span class="tooltips-text">
                                                    <p>Managing finances properly is a major difficulty for businesses of all kinds. The scope of operations</p>
                                                </span>
                                            </div>

                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Lack of scalability and flexibility</span>
                                                <span class="tooltips-text">
                                                    <p>Managing finances properly is a major difficulty for businesses of all kinds. The scope of operations</p>
                                                </span>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Poor budgeting and planning</span>
                                                <span class="tooltips-text">
                                                    <p>Managing finances properly is a major difficulty for businesses of all kinds. The scope of operations</p>
                                                </span>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Inefficient cash flow management</span>
                                                <span class="tooltips-text">
                                                    <p>Managing finances properly is a major difficulty for businesses of all kinds. The scope of operations</p>
                                                </span>
                                            </div>

                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Complex financial reporting</span>
                                                <span class="tooltips-text">
                                                    <p>Managing finances properly is a major difficulty for businesses of all kinds. The scope of operations</p>
                                                </span>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Adherence to regulatory compliance</span>
                                                <span class="tooltips-text">
                                                    <p>Managing finances properly is a major difficulty for businesses of all kinds. The scope of operations</p>
                                                </span>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                                <div className="shot-ct-bott">
                                    <p>How? It does so by centralizing scattered data into a single platform, automating manual and tedious operations to reduce errors, and guaranteeing compliance with changing rules. Besides, it streamlines complicated financial reporting, enhances cash flow control, and optimizes budgeting and planning. Its adaptable and flexible architecture also lets companies easily adapt and expand, therefore guaranteeing long-term accuracy and efficiency.</p>
                                </div>
                                <div className="shot-ct">
                                    <p>Now, the question is, can Financial Management in Microsoft Dynamics 365 Business Central address these challenges?</p>
                                    <span>The short and quick answer is - Yes.</span>
                                </div>
                                <div className="text-center">
                                    <Link href="#exampleModal">
                                        <a
                                            data-bs-toggle="modal"
                                            className="btn-get-started scrollto"
                                        >
                                            <span>Want to learn more? Talk to Our Experts Now!</span>
                                        </a>
                                    </Link>
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
                                    <span>Microsoft Dynamics 365 Capabilities and Features</span>
                                    <h2>Dynamics 365 Finance Modules: Get Everything Simplified</h2>
                                    <p>Microsoft Dynamics 365 Finance resolves the financial queries of the organization and gives a boost to simplify different operations of the business with different modules. Some of its modules are:</p>
                                </div>
                            </div>
                        </div>
                        <div className="row bc--top-pad">
                            <div className="col-lg-3">
                                <div className="bc--feat-box">
                                    <Image
                                        width={57}
                                        height={48}
                                        src="/img/Finance-small-icon-1.png"
                                        alt="Proactive Decision Making"
                                    />
                                    <h3>Proactive Decision Making</h3>
                                    <p>Leverage the advanced capabilities of AI and Copilot to enhance decision-making capabilities. Monitor cash flow, forecast trends, improve profit margins, perform proper budgeting, and analyze existing data to close accounts faster.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="bc--feat-box">
                                    <Image
                                        width={57}
                                        height={48}
                                        src="/img/Finance-small-icon-2.png"
                                        alt="Automate Operations"
                                    />
                                    <h3>Automate Operations</h3>
                                    <p>Move your business towards digitalization while automating core financial processes. It can help you save time, cut labor costs, build an invoice workflow, create rules based on automation, and centralize data across Microsoft business applications.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="bc--feat-box">
                                    <Image
                                        width={57}
                                        height={48}
                                        src="/img/Finance-small-icon-3.png"
                                        alt="Maximize Profit Margins"
                                    />
                                    <h3>Maximize Profit Margins</h3>
                                    <p>Know the fluctuating market demands to understand customer behavior. Based on user insights, focus on products or services with a better margin ratio to maximize profits while reducing insignificant processes.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="bc--feat-box">
                                    <Image
                                        width={57}
                                        height={48}
                                        src="/img/Finance-small-icon-4.png"
                                        alt="Scale Globally"
                                    />
                                    <h3>Scale Globally</h3>
                                    <p>Adapt to the changing global compliances and local tax regulations to build an international business. Accept multi-currency payments from global customers as Dynamics 365 for Finance supports 51 countries and 67 languages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>






                <section className="bbb" style={{ marginTop: '120px' }}>
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
                                        <h3>For personalized or detailed Dynamics 365 Finance pricing, feel free to contact our experts.</h3>
                                        <Link href="/contact-us/">
                                            <a className="btn btn-md">
                                                Contact Dynamics 365 Consultant Now!
                                            </a>
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
                                    <h2>Why are Businesses choosing Dynamics Square over others?</h2>
                                    <p>Partner with Dynamics Square to get access to a team of certified technical consultants who will guide us on the path of successful <Link href="/our-services/dynamics-365-implementation-services/"><a>Dynamics 365 implementation</a></Link>. Also, we will empower you to build a global market presence and optimize your financial processes for maximum business growth.</p>
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
                                            src="/img/Finance-small-icon-5.png"
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
                                            src="/img/Finance-small-icon-6.png"
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
                                            src="/img/Finance-small-icon-7.png"
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
                                            src="/img/Finance-small-icon-8.png"
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
