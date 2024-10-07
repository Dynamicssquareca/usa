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
                <title>Microsoft Cloud for Nonprofit | Dynamics Square USA</title>
                <meta
                    name="description"
                    content="Empower your nonprofit with Microsoft Cloud for Nonprofit by Dynamics Square. Streamline operations and drive mission success."
                />
                <link
                    rel="canonical"
                    href="https://www.dynamicssquare.com/industries/microsoft-cloud-for-nonprofit/"
                />
                <meta property="og:type" content="product" />

                <meta property="og:title" content="Microsoft Cloud for Nonprofit | Dynamics Square USA" />

                <meta property="og:description" content="Empower your nonprofit with Microsoft Cloud for Nonprofit by Dynamics Square. Streamline operations and drive mission success." />

                <meta property="og:url" content="https://www.dynamicssquare.com/industries/microsoft-cloud-for-nonprofit/" />

                <meta property="og:site_name" content="Dynamics Square USA" />

                <meta property="og:image" content="https://www.dynamicssquare.com/img/nonprofit-cloude-new-banner.png" />

                <meta property="twitter:card" content="summary_large_image" />

                <meta property="twitter:title" content="Microsoft Cloud for Nonprofit | Dynamics Square USA" />

                <meta property="twitter:description" content="Empower your nonprofit with Microsoft Cloud for Nonprofit by Dynamics Square. Streamline operations and drive mission success." />

                <meta property="twitter:url" content="https://www.dynamicssquare.com/industries/microsoft-cloud-for-nonprofit/" />

                <meta property="twitter:image" content="https://www.dynamicssquare.com/img/nonprofit-cloude-new-banner.png" />
              

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
                                        src="/img/nonprofit-cloude-new-banner.png"
                                        alt="nonprofit-cloude-new-banner.png"
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
                                        src="/img/nonprofit-cloude-new-side.png"
                                        alt="nonprofit-cloude-new-side"
                                        width={760}
                                        height={760}
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

                                    <h2>Microsoft Solutions for Nonprofits</h2>
                                    <p>Microsoft Cloud for Nonprofit comprises a range of pre-configured solutions designed to address the unique requirements of nonprofit organizations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 pd-001 sliding-row">
                            <div className="col-lg-3 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher card-ancher-h">
                                    <div className="card-with-one-img">
                                        <img src="/img/scalable-1.png" alt="Customer Engagement (CRM)" width={32} height={32} />
                                    </div>
                                    <h3>Dynamics 365 for Nonprofits</h3>
                                    <p>It enables efficient management of donor relationships, tracking of fundraising operations, and the acquisition of important donors’ insights. Nonprofits can specifically go for <a href="/products/dynamics-365-business-central/">Microsoft Dynamics 365 Business Central</a> to seamlessly manage their day-to-day operations.</p>
                                    {/* <span><a href="/products/microsoft-dynamics-crm/">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher card-ancher-h">
                                    <div className="card-with-one-img">
                                        <img src="/img/scalable-2.png" alt="Power Platform for Nonprofits" width={32} height={32} />
                                    </div>
                                    <h3>Power Platform for Nonprofits</h3>
                                    <p>It allows nonprofits to customize applications based on their requirements and automate tasks, resulting in streamlined processes and improved efficiency.</p>
                                    {/* <span><a href="/products/microsoft-dynamics-crm/">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher card-ancher-h">
                                    <div className="card-with-one-img">
                                        <img src="/img/scalable-3.png" alt="Microsoft 365 for Nonprofits" width={32} height={32} />
                                    </div>
                                    <h3>Microsoft 365 for Nonprofits</h3>
                                    <p>It offers familiar productivity tools to improve collaboration and communication among your team members and volunteers.</p>
                                    {/* <span><a href="/products/microsoft-dynamics-crm/">Learn More <i className="bi bi-arrow-right"></i></a></span> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex sliding-col">
                                <div className="card-with-one card-ancher card-ancher-h">
                                    <div className="card-with-one-img">
                                        <img src="/img/scalable-4.png" alt="LinkedIn for Nonprofits" width={32} height={32} />
                                    </div>
                                    <h3>LinkedIn for Nonprofits</h3>
                                    <p>Establish connections with prospective funders, volunteers, and collaborators via the impactful global professional network.</p>
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
                                    <h2>Benefits of Microsoft Cloud for Nonprofits</h2>
                                    <p>Microsoft Cloud for Nonprofit comprises a range of pre-configured solutions designed to address the unique requirements of nonprofit organizations.</p>
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
                                                    <span>Donor and Volunteer Management</span>
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
                                                                    <h4>Personalized Engagement</h4>
                                                                    <p>Tailor messages for better communication and outreach using <b>Dynamics CRM</b>.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Automated Processes</h4>
                                                                    <p>Simplify tasks and boost operational efficiency.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                            <div className="busines-service-list-hhs">
                                                                <p>Improve the loyalty of donors and increase the involvement of volunteers by using advanced, intuitive solutions.</p>
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
                                                    <span>Fundraising and Donation Management</span>
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
                                                                <p>Utilize Dynamics 365 resources for Nonprofits precisely made to suit the requirements of charitable organizations to drive successful fundraising campaigns. </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Campaign Management</h4>
                                                                    <p>Take full charge and manage campaigns end-to-end. Strategize and implement fundraising initiatives in an impactful manner.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Empower Fundraisers</h4>
                                                                    <p>Use Microsoft Sales Copilot and <a href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</a> in combination to reinforce relationships with donors and achieve the intended fundraising outcomes.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Donor Insights</h4>
                                                                    <p>Get valuable insights into donor behavior and preferences to modify and enhance your fundraising campaigns.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                            <div className="busines-service-list-hhs">
                                                                <p>Enhance the effectiveness and results of your fundraising campaigns by optimizing costs with Microsoft Cloud for Nonprofit.</p>
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
                                                    <span>Program Delivery and Impact Tracking</span>
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
                                                                <p>Deliver your programs and monitor their effectiveness using the Program Impact dashboard, built on the Nonprofit Common Data Model. On the dashboard, you will find these four options:</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Impact Delivered</h4>
                                                                    <p>Obtain a thorough overview of all programs, their total revenue, and the members they have served thus far. Supervise and manage programs from initiation to completion.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Program Summary</h4>
                                                                    <p>Use the '<b>Program Summary</b>' tab to gain deeper insights. Check out the important program metrics, such as the total number of active programs, status, number of programs by start date, number of donors, budget, and program participants. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Program Monitoring</h4>
                                                                    <p>Monitor, measure, and assess the impact of your programs in terms of revenue raised. Apply the time filter, check important parameters like revenue raised over time graph and people served this calendar year, and more.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Program Impact</h4>
                                                                    <p>Get insights into the program’s objectives, key performance indicators, outcomes, number of individuals, causes served, and so on.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                            <div className="busines-service-list-hhs">
                                                                <p>Ensure the progress of your programs is on track and showcase their effectiveness with confidence.</p>
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
                                                    <span>Financial Management</span>
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
                                                                <p>Maintain financial transparency and effectiveness through the utilization of powerful financial management tools.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Payment Processing</h4>
                                                                    <p>Experience hassle-free donation and award management with robust tools for smooth and uninterrupted payment processing.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Financial Visibility</h4>
                                                                    <p>Get real-time information regarding financial health, fund allocation, and expenditures.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Unified Data</h4>
                                                                    <p>The centralization of data from various departments, including finance, operations, fundraising, and programs help eliminate data silos. This ensures data consistency and accuracy, leading to precise insights and improved decision-making.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Compliance</h4>
                                                                    <p>Ensure adherence to financial regulations and standards.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                            <div className="busines-service-list-hhs">
                                                                <p>Keep your nonprofit’s finances in check and maintain donor trust with Microsoft Cloud for Nonprofit.</p>
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
                                                    <span>Collaboration and Productivity</span>
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
                                                                <p>Enhance collaboration and productivity across your organization with advanced tools. Improve collaboration and productivity across your nonprofit organization with advanced tools from Microsoft Cloud suite for nonprofit.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft 365 for Nonprofits</h4>
                                                                    <p>Leverage the familiar suite of productivity tools with SharePoint for seamless document management and information sharing.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Microsoft Teams for Nonprofits</h4>
                                                                    <p>Engage and collaborate in real-time with team members, irrespective of their location.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Power Automate for Nonprofits</h4>
                                                                    <p>Automate and streamline repetitive tasks and create new workflows based on your requirements to improve operational efficiency.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                            <div className="busines-service-list-hhs">
                                                                <p>Encourage your team to collaborate in an effective and effortless manner. </p>
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
                                                    data-bs-target="#fin6"
                                                    aria-expanded="false"
                                                    aria-controls="fin6"
                                                >
                                                    <span>Security and Compliance</span>
                                                </button>
                                            </h3>
                                            <div
                                                id="fin6"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accnew"
                                            >
                                                <div className="accordion-body">
                                                    <div className="row busines-service-list-pad">
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="busines-service-list-hhs">
                                                                <p>Safeguard your organization's data using strong security measures and comprehensive compliance features.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Data Security</h4>
                                                                    <p>Protect critical information with advanced security measures.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Compliance Tools</h4>
                                                                    <p>Ensure compliance with industry norms and regulations.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Risk Management</h4>
                                                                    <p>Detect and mitigate potential risks.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                            <div className="busines-service-list-hhs">
                                                                <p>Microsoft Defender for Cloud comprises capabilities that ensure the security and compliance of your data.</p>
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
                                                    data-bs-target="#fin7"
                                                    aria-expanded="false"
                                                    aria-controls="fin7"
                                                >
                                                    <span>Scalability and Flexibility</span>
                                                </button>
                                            </h3>
                                            <div
                                                id="fin7"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accnew"
                                            >
                                                <div className="accordion-body">
                                                    <div className="row busines-service-list-pad">
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="busines-service-list-hhs">
                                                                <p>Expand your operations using adaptable cloud solutions purposely designed to accommodate the growth of your nonprofit organization.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Scalable Solutions</h4>
                                                                    <p>Expand your capabilities as your nonprofit grows.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Flexible Tools</h4>
                                                                    <p>Customize applications to meet the specific requirements of your nonprofit.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-10 col-md-10">
                                                            <div className="busines-service-list">
                                                                <div className="icons">
                                                                    <i className="bi bi-check-lg"></i>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>Future-proof</h4>
                                                                    <p>Keep up with the most recent technological advancements with timely updates and upgrades from Microsoft.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                            <div className="busines-service-list-hhs">
                                                                <p>Adopt and thrive with the ability to scale and customize as per your needs.</p>
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
                                        <h3>Donor and Volunteer Management</h3>
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
                                        <h3>Fundraising and Donation Management</h3>
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
                                        <h3>Program Delivery and Impact Tracking</h3>
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
                                        <h3>Financial Management</h3>
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
                                        <h3>Collaboration and Productivity</h3>
                                    </div>
                                    <div
                                        className="nav-link"
                                        id="v-pills-Inventory-01-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Inventory-01"
                                        role="tab"
                                        aria-controls="v-pills-Inventory-01"
                                        aria-selected="false"
                                    >
                                        <h3>Security and Compliance</h3>
                                    </div>
                                    <div
                                        className="nav-link"
                                        id="v-pills-Inventory-02-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Inventory-02"
                                        role="tab"
                                        aria-controls="v-pills-Inventory-02"
                                        aria-selected="false"
                                    >
                                        <h3>Scalability and Flexibility</h3>
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
                                                        <h4>Personalized Engagement</h4>
                                                        <p>Tailor messages for better communication and outreach using <b>Dynamics CRM</b>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Automated Processes</h4>
                                                        <p>Simplify tasks and boost operational efficiency.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                <div className="busines-service-list-hhs">
                                                    <p>Improve the loyalty of donors and increase the involvement of volunteers by using advanced, intuitive solutions.</p>
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
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="busines-service-list-hhs">
                                                        <p>Utilize Dynamics 365 resources for Nonprofits precisely made to suit the requirements of charitable organizations to drive successful fundraising campaigns. </p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-md-10">
                                                    <div className="busines-service-list">
                                                        <div className="icons">
                                                            <i className="bi bi-check-lg"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4>Campaign Management</h4>
                                                            <p>Take full charge and manage campaigns end-to-end. Strategize and implement fundraising initiatives in an impactful manner.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-md-10">
                                                    <div className="busines-service-list">
                                                        <div className="icons">
                                                            <i className="bi bi-check-lg"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4>Empower Fundraisers</h4>
                                                            <p>Use Microsoft Sales Copilot and <a href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</a> in combination to reinforce relationships with donors and achieve the intended fundraising outcomes.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-md-10">
                                                    <div className="busines-service-list">
                                                        <div className="icons">
                                                            <i className="bi bi-check-lg"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4>Donor Insights</h4>
                                                            <p>Get valuable insights into donor behavior and preferences to modify and enhance your fundraising campaigns.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                    <div className="busines-service-list-hhs">
                                                        <p>Enhance the effectiveness and results of your fundraising campaigns by optimizing costs with Microsoft Cloud for Nonprofit.</p>
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
                                                    <p>Deliver your programs and monitor their effectiveness using the Program Impact dashboard, built on the Nonprofit Common Data Model. On the dashboard, you will find these four options:</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Impact Delivered</h4>
                                                        <p>Obtain a thorough overview of all programs, their total revenue, and the members they have served thus far. Supervise and manage programs from initiation to completion.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Program Summary</h4>
                                                        <p>Use the '<b>Program Summary</b>' tab to gain deeper insights. Check out the important program metrics, such as the total number of active programs, status, number of programs by start date, number of donors, budget, and program participants. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Program Monitoring</h4>
                                                        <p>Monitor, measure, and assess the impact of your programs in terms of revenue raised. Apply the time filter, check important parameters like revenue raised over time graph and people served this calendar year, and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Program Impact</h4>
                                                        <p>Get insights into the program’s objectives, key performance indicators, outcomes, number of individuals, causes served, and so on.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                <div className="busines-service-list-hhs">
                                                    <p>Ensure the progress of your programs is on track and showcase their effectiveness with confidence.</p>
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
                                                    <p>Maintain financial transparency and effectiveness through the utilization of powerful financial management tools.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Payment Processing</h4>
                                                        <p>Experience hassle-free donation and award management with robust tools for smooth and uninterrupted payment processing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Financial Visibility</h4>
                                                        <p>Get real-time information regarding financial health, fund allocation, and expenditures.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Unified Data</h4>
                                                        <p>The centralization of data from various departments, including finance, operations, fundraising, and programs help eliminate data silos. This ensures data consistency and accuracy, leading to precise insights and improved decision-making.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Compliance</h4>
                                                        <p>Ensure adherence to financial regulations and standards.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                <div className="busines-service-list-hhs">
                                                    <p>Keep your nonprofit’s finances in check and maintain donor trust with Microsoft Cloud for Nonprofit.</p>
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
                                                    <p>Enhance collaboration and productivity across your organization with advanced tools. Improve collaboration and productivity across your nonprofit organization with advanced tools from Microsoft Cloud suite for nonprofit.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft 365 for Nonprofits</h4>
                                                        <p>Leverage the familiar suite of productivity tools with SharePoint for seamless document management and information sharing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Microsoft Teams for Nonprofits</h4>
                                                        <p>Engage and collaborate in real-time with team members, irrespective of their location.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Power Automate for Nonprofits</h4>
                                                        <p>Automate and streamline repetitive tasks and create new workflows based on your requirements to improve operational efficiency.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                <div className="busines-service-list-hhs">
                                                    <p>Encourage your team to collaborate in an effective and effortless manner. </p>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-Inventory-01"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-Inventory-01-tab"
                                    >

                                        <div className="row busines-service-list-pad">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="busines-service-list-hhs">
                                                    <p>Safeguard your organization's data using strong security measures and comprehensive compliance features.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Data Security</h4>
                                                        <p>Protect critical information with advanced security measures.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Compliance Tools</h4>
                                                        <p>Ensure compliance with industry norms and regulations.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Risk Management</h4>
                                                        <p>Detect and mitigate potential risks.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                <div className="busines-service-list-hhs">
                                                    <p>Microsoft Defender for Cloud comprises capabilities that ensure the security and compliance of your data.</p>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-Inventory-02"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-Inventory-02-tab"
                                    >

                                        <div className="row busines-service-list-pad">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="busines-service-list-hhs">
                                                    <p>Expand your operations using adaptable cloud solutions purposely designed to accommodate the growth of your nonprofit organization.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Scalable Solutions</h4>
                                                        <p>Expand your capabilities as your nonprofit grows.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Flexible Tools</h4>
                                                        <p>Customize applications to meet the specific requirements of your nonprofit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10">
                                                <div className="busines-service-list">
                                                    <div className="icons">
                                                        <i className="bi bi-check-lg"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Future-proof</h4>
                                                        <p>Keep up with the most recent technological advancements with timely updates and upgrades from Microsoft.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12" style={{ paddingTop: "15px" }}>
                                                <div className="busines-service-list-hhs">
                                                    <p>Adopt and thrive with the ability to scale and customize as per your needs.</p>
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
