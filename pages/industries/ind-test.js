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
                                <h1 className="small-h">Microsoft Dynamics 365</h1>
                                <h2>Empower your business with intelligent solutions!</h2>
                                <p>Unify your business operations with <b> Microsoft Dynamics 365</b>. Enhance efficiency, reduce complexity, and drive growth with intelligent, interconnected solutions.</p>
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
                                <div className="nw-bc-lef-h nw-bc-lef-h-gren">
                                    <h2>What is Dynamics 365 Finance?</h2>
                                    <p>Microsoft Dynamics 365 Finance is a powerful cloud-based ERP solution to manage, maintain, and resolve complex financial issues of an organization. Microsoft has designed this tool so perfectly that it helps businesses grow while eliminating financial redundancies from the system.</p>
                                    <p><strong>Dynamics 365 Finance offers you:</strong></p>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Advanced analytics and reporting</span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Compliance with industry standards</span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Invoicing and billing</span></div>
                                    <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Cost Accounting</span></div>
                                    <p>While Dynamics 365 for Finance isn't new, it's now standalone, offering focused finance management after separating from the broader Dynamics 365 Finance and Operations (earlier known as <Link href="/products/microsoft-dynamics-ax/"><a>Dynamics AX</a></Link>).</p>
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
                                    <div className="pictur-cta-rigt">
                                        <img src="/img/frame-123.png" alt="shape" />
                                    </div>
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
                                    <h2>Key Capabilities of the Microsoft Dynamics 365 Suite</h2>
                                    <p>The Dynamics 365 suite combines various business solutions, including Microsoft Dynamics ERP, Microsoft Dynamics CRM, Microsoft Cloud for Industry, Collaboration, Power Platform, AI, Mixed Reality, Services, and Microsoft Platform.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 pd-001 sliding-row">
                            <div className="col-lg-4 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher">
                                    <div className="card-with-one-img">
                                        <img src="/img/icon-new-07.png" alt="Customer Engagement (CRM)" width={40} height={40} />
                                    </div>
                                    <h3>Customer Engagement (CRM)</h3>
                                    <p>Give your sales, marketing, and service teams smart tools to improve customer relationships and boost growth. From AI-powered analytics to sales and marketing automation and customer journey to lead management, Dynamics 365 CRM helps your team surpass consumer expectations at every touchpoint.</p>
                                    <span><a href="/products/microsoft-dynamics-crm/">Learn More <i className="bi bi-arrow-right"></i></a></span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher">
                                    <div className="card-with-one-img">
                                        <img src="/img/icon-new-08.png" alt="Enterprise Resource Planning (ERP)" width={40} height={40} />
                                    </div>
                                    <h3>Enterprise Resource Planning (ERP)</h3>
                                    <p>Optimize and simplify your key business processes with strong ERP solutions. Handle your finances, optimize your supply chain and logistics, boost retail experiences, and oversee projects with the help of AI-driven real-time insights and automation. Now ensure operational efficiency at every level.</p>
                                    <span><a href="/products/microsoft-dynamics-erp/">Learn More <i className="bi bi-arrow-right"></i></a></span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher">
                                    <div className="card-with-one-img">
                                        <img src="/img/icon-new-09.png" alt="Unified Data & AI Capabilities" width={40} height={40} />
                                    </div>
                                    <h3>Unified Data & AI Capabilities</h3>
                                    <p>Unified data is the consolidation of data into a single platform, and it forms a solid foundation for the powerful <b>Microsoft Dynamics 365 integration</b> capability. Now leverage integrated data, AI-driven insights, and automation to improve decision-making and ensure smooth operations.</p>
                                    {/* <span><a href="#">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher">
                                    <div className="card-with-one-img">
                                        <img src="/img/icon-new-10.png" alt="Scalability and Customization" width={40} height={40} />
                                    </div>
                                    <h3>Scalability and Customization</h3>
                                    <p>Change and scale in line with a modular system meant to adapt as your company grows. Whether you require a solution for a small team or a large enterprise, Microsoft Dynamics 365 suite provides configurable choices that adapt to your changing business demands.</p>
                                    {/* <span><a href="#">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher">
                                    <div className="card-with-one-img">
                                        <img src="/img/icon-new-11.png" alt="Security & Compliance" />
                                    </div>
                                    <h3>Security & Compliance</h3>
                                    <p>Protect your business using enterprise-grade security. Developed on Microsoft Azure, Dynamics 365 guarantees risk management, compliance, and data protection using top-tier security mechanisms and role-based access to sensitive business data.</p>
                                    {/* <span><a href="#">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher">
                                    <div className="card-with-one-img">
                                        <img src="/img/icon-new-12.png" alt="Cloud & Mobility" />
                                    </div>
                                    <h3>Cloud & Mobility</h3>
                                    <p>The flexibility and accessibility of cloud-based solutions allow you to remain connected and responsive. Through cloud and mobile access, running operations both in the office and remotely helps you enable a modern and connected workforce.</p>
                                    {/* <span><a href="#">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mines-m-t">
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
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>General Ledger </h4>
                                                                    <p>Manage different accounts, track transactions, maintain financial records, and build financial reports.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Accounts Receivable</h4>
                                                                    <p>Create tax invoices, maintain a balance sheet, track customer invoices, and manage incoming payments.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Accounts Payable</h4>
                                                                    <p>Manage vendor invoices, automate the invoice approval journal, and build payment workflows.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Fixed Assets</h4>
                                                                    <p>Maintain a balance between the open customer balance and the open vendor balance to track all cash. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Bank and Cash Management</h4>
                                                                    <p>Maintain bank accounts, forecast cash flow, reconcile bank statements, and generate reports.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Credit and Collections</h4>
                                                                    <p>Manage customer credit, control sales flow, get a centralized view of accounts, and perform the collection generation process.</p>
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
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Budgeting</h4>
                                                                    <p>Get the budgets of different departments, perform budget planning, control budgets, and follow the organization’s policies.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Forecasting</h4>
                                                                    <p>Track expenses, forecast income, maintain cash flow, and manage revenue based on historical data.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Strategy Building</h4>
                                                                    <p>Build different strategies, analyze market trends, maintain financial scenarios, and find areas for improvement.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Expense Management</h4>
                                                                    <p>Store payment information, track all credit transactions, and automate reimbursement of expenses.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Revenue Recognition</h4>
                                                                    <p>Manage multi-order elements, follow industry-specific guidelines, and perform the revenue recognition process.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Sensitivity Analysis </h4>
                                                                    <p>Analyze the sensitivity of the performed forecasts, cross-check different assumptions, and find potential risks.</p>
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
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Cost Accounting</h4>
                                                                    <p>Track all processes, analyze involved costs, maintain a cost accounting ledger, and streamline cost behavior.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Inventory Management </h4>
                                                                    <p>Manage stock levels, track movements, automate the product location process, and optimize purchasing. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Project Management</h4>
                                                                    <p>Manage different projects altogether, build strategies, track progress, and control costs.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Cost Allocation</h4>
                                                                    <p>Distribute costs for projects, identify areas for improvement, and follow the cost allocation methodology.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Demand Forecasting</h4>
                                                                    <p>Forecast future demands, perform production planning, optimize purchasing, and manage inventory levels.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Time and Expense Tracking</h4>
                                                                    <p>Track the time and expenses of employees, manage each project cost, and perform accurate cost allocation.</p>
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
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Financial Reporting</h4>
                                                                    <p>Maintain a balance sheet, build cash flow statements, and generate comprehensive financial reports.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Business Intelligence</h4>
                                                                    <p>Analyze financial data, filter out useful information, build interactive reports, and gain useful insights.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Compliance Reporting</h4>
                                                                    <p>Generate meaningful reports, comply with tax authorities, and follow international tax regulations.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Multi-Company Reporting</h4>
                                                                    <p>Connect different entities, including subsidiaries, get a holistic view of the entire business, and build centralized financial reports.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Data Visualizations</h4>
                                                                    <p>Fetch important information out of data, visualize data using interactive elements, and make informed decisions.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Audit Trails</h4>
                                                                    <p>Maintain the entire audit log, record all activities, track the source of records, and trace the entire financial data.</p>
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
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Project Operations</h4>
                                                                    <p>Track the progress of each project from start to finish, strategize resource distribution, and manage budgeting.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Supply Chain Management</h4>
                                                                    <p>Streamline supply chain operations, track goods from production to distribution, and automate core processes.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Manufacturing and Production</h4>
                                                                    <p>Simplify different production processes, schedule manufacturing, and maintain optimum quality.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Human Resource</h4>
                                                                    <p>Manage employees, perform payroll processes, and simplify all human resource processes.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Retail Management</h4>
                                                                    <p>Manage your entire commerce business, track inventory levels, link all POS systems, and fulfill stocks on time.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Warehouse Management</h4>
                                                                    <p>Optimize core warehouse processes, control inventory levels, and simplify the shipping of goods.</p>
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

                        <div className="row busines-bg g-0">
                            <div className="col-lg-3 no-pad">
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
                            <div className="col-lg-9">
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
                                                        <h4>General Ledger </h4>
                                                        <p>Manage different accounts, track transactions, maintain financial records, and build financial reports.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Accounts Receivable</h4>
                                                        <p>Create tax invoices, maintain a balance sheet, track customer invoices, and manage incoming payments.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Accounts Payable</h4>
                                                        <p>Manage vendor invoices, automate the invoice approval journal, and build payment workflows.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Fixed Assets</h4>
                                                        <p>Maintain resources and track the assets of the organization, including machines, land, and inventory.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Bank and Cash Management</h4>
                                                        <p>Maintain bank accounts, forecast cash flow, reconcile bank statements, and generate reports.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Credit and Collections</h4>
                                                        <p>Manage customer credit, control sales flow, get a centralized view of accounts, and perform the collection generation process.</p>
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
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Budgeting</h4>
                                                        <p>Get the budgets of different departments, perform budget planning, control budgets, and follow the organization’s policies.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Forecasting</h4>
                                                        <p>Track expenses, forecast income, maintain cash flow, and manage revenue based on historical data.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Strategy Building</h4>
                                                        <p>Build different strategies, analyze market trends, maintain financial scenarios, and find areas for improvement.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Expense Management</h4>
                                                        <p>Store payment information, track all credit transactions, and automate reimbursement of expenses.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Revenue Recognition</h4>
                                                        <p>Manage multi-order elements, follow industry-specific guidelines, and perform the revenue recognition process.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Sensitivity Analysis </h4>
                                                        <p>Analyze the sensitivity of the performed forecasts, cross-check different assumptions, and find potential risks.</p>
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
                                                        <h4>Cost Accounting</h4>
                                                        <p>Track all processes, analyze involved costs, maintain a cost accounting ledger, and streamline cost behavior.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Inventory Management </h4>
                                                        <p>Manage stock levels, track movements, automate the product location process, and optimize purchasing. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Project Management</h4>
                                                        <p>Manage different projects altogether, build strategies, track progress, and control costs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Cost Allocation</h4>
                                                        <p>Distribute costs for projects, identify areas for improvement, and follow the cost allocation methodology.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Demand Forecasting</h4>
                                                        <p>Forecast future demands, perform production planning, optimize purchasing, and manage inventory levels.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Time and Expense Tracking</h4>
                                                        <p>Track the time and expenses of employees, manage each project cost, and perform accurate cost allocation.</p>
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
                                                        <h4>Financial Reporting</h4>
                                                        <p>Maintain a balance sheet, build cash flow statements, and generate comprehensive financial reports.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Business Intelligence</h4>
                                                        <p>Analyze financial data, filter out useful information, build interactive reports, and gain useful insights.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Compliance Reporting</h4>
                                                        <p>Generate meaningful reports, comply with tax authorities, and follow international tax regulations.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Multi-Company Reporting</h4>
                                                        <p>Connect different entities, including subsidiaries, get a holistic view of the entire business, and build centralized financial reports.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Data Visualizations</h4>
                                                        <p>Fetch important information out of data, visualize data using interactive elements, and make informed decisions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Audit Trails</h4>
                                                        <p>Analyze customer interactions and make personalized decisions in real-time. </p>
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
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Project Operations</h4>
                                                        <p>Track the progress of each project from start to finish, strategize resource distribution, and manage budgeting.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Supply Chain Management</h4>
                                                        <p>Streamline supply chain operations, track goods from production to distribution, and automate core processes.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Manufacturing and Production</h4>
                                                        <p>Simplify different production processes, schedule manufacturing, and maintain optimum quality.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Human Resource</h4>
                                                        <p>Manage employees, perform payroll processes, and simplify all human resource processes.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Retail Management</h4>
                                                        <p>Manage your entire commerce business, track inventory levels, link all POS systems, and fulfill stocks on time.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Warehouse Management</h4>
                                                        <p>Optimize core warehouse processes, control inventory levels, and simplify the shipping of goods.</p>
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
