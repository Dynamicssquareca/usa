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
                <title>Microsoft Dynamics 365 Suite For CRM & Cloud ERP Solutions</title>
                <meta
                    name="description"
                    content="Discover Microsoft Dynamics 365 Suite for seamless CRM and cloud ERP solutions, offering integrated management and enhanced business insights."
                />
             
                <link
                    rel="canonical"
                    href="https://www.dynamicssquare.com/products/microsoft-dynamics-365/"
                />
                <meta property="og:type" content="product" />

                <meta property="og:title" content="Microsoft Dynamics 365 Suite For CRM & Cloud ERP Solutions" />

                <meta property="og:description" content="Discover Microsoft Dynamics 365 Suite for seamless CRM and cloud ERP solutions, offering integrated management and enhanced business insights." />

                <meta property="og:url" content="https://www.dynamicssquare.com/products/microsoft-dynamics-365/" />

                <meta property="og:site_name" content="Dynamics Square USA" />

                <meta property="og:image" content="https://www.dynamicssquare.com/img/d-365-banner.png" />

                <meta property="twitter:card" content="summary_large_image" />

                <meta property="twitter:title" content="Microsoft Dynamics 365 Suite For CRM & Cloud ERP Solutions" />

                <meta property="twitter:description" content="Discover Microsoft Dynamics 365 Suite for seamless CRM and cloud ERP solutions, offering integrated management and enhanced business insights." />

                <meta property="twitter:url" content="https://www.dynamicssquare.com/products/microsoft-dynamics-365/" />

                <meta property="twitter:image" content="https://www.dynamicssquare.com/img/d-365-banner.png" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "Product",
                            "name": "Microsoft Dynamics 365 Suite For CRM & Cloud ERP Solutions",
                            "image": "https://www.dynamicssquare.com/img/d-365-banner.png",
                            "description": "Discover Microsoft Dynamics 365 Suite for seamless CRM and cloud ERP solutions, offering integrated management and enhanced business insights.",
                            "brand": {
                                "@type": "Brand",
                                "name": "Dynamics Square USA"
                            },
                            "offers": {
                                "@type": "AggregateOffer",
                                "url": "https://www.dynamicssquare.com/products/microsoft-dynamics-365/",
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
                                <h2>Empower your business with AI-enabled ERP and CRM solutions!</h2>
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
                                <div className="heading-colo-new" style={{textAlign:'left'}}>
                                    <h2>What is Microsoft Dynamics 365?</h2>
                                    <span>Give your business the much-needed edge with seamless AI-driven solutions</span>
                                    <p><b>Microsoft Dynamics 365</b> is a SaaS-based suite of AI-driven ERP and CRM solutions that effortlessly connects your teams, processes, and data. This seamless integration helps you provide outstanding customer experiences and boosts your operational efficiency.</p>
                                    <p>Dynamics 365 comprises sales, marketing, customer service, finance, human resources, and supply chain management, among others. Every solution within Dynamics 365 has various modules that work in tandem with each other to provide companies with a complete business management solution.</p>
                                    <p>So, to answer the question, what is Dynamics 365, you can call it a suite of applications that can digitally transform your operations.   </p>

                                    <p><b>But, do you actually need it? Let’s find out!</b></p>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>

                <section className="bg-style-one marg-12 marg-13 marg-14">
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

                                <div className="bott-list-tool m-p-30">
                                    <ul>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Poor data management</span>
                                                <span class="tooltips-text">
                                                    <p>Inconsistent and scattered data across systems lead to increased operational costs and challenges</p>
                                                </span>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Manual tasks</span>
                                                <span class="tooltips-text">
                                                    <p>Consumes a lot of productive time in doing repetitive tasks which leads to reduced productivity, higher error rates, and slower response times</p>
                                                </span>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Limited insights</span>
                                                <span class="tooltips-text">
                                                    <p>Non-availability of advanced analytics and AI capabilities can deprive a business of getting deeper and actionable insights into their data</p>
                                                </span>
                                            </div>

                                        </li>
                                    </ul>
                                    <ul>
                                      
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Regulatory compliance</span>
                                                <span class="tooltips-text">
                                                    <p>Becomes important when you operate a business across borders. Failing to comply with regulatory requirements can result in legal actions and operational shutdowns</p>
                                                </span>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Insufficient reporting</span>
                                                <span class="tooltips-text">
                                                    <p>Translates into financial losses, compliance risks, poor decision-making, and customer dissatisfaction</p>
                                                </span>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="tooltips btn btn-secondary">
                                                <i class="bi bi-check-lg"></i> <span>Limited customization</span>
                                                <span class="tooltips-text">
                                                    <p>Necessitates using multiple systems which leads to data silos and operational inefficiency</p>
                                                </span>
                                            </div>

                                        </li>
                                
                                    </ul>
                                    <ul>
                                      
                                      <li>
                                          <div class="tooltips btn btn-secondary">
                                              <i class="bi bi-check-lg"></i> <span>Disconnected systems</span>
                                              <span class="tooltips-text">
                                                  <p>Causes data silos, operational inefficiency, and communication gaps.</p>
                                              </span>
                                          </div>

                                      </li>
                                      <li>
                                          <div class="tooltips btn btn-secondary">
                                              <i class="bi bi-check-lg"></i> <span>Scalability issues</span>
                                              <span class="tooltips-text">
                                                  <p>Makes it challenging for companies to scale their operations as they grow</p>
                                              </span>
                                          </div>

                                      </li>
                                      <li>
                                          <div class="tooltips btn btn-secondary">
                                              <i class="bi bi-check-lg"></i> <span>Poor customer relationship management</span>
                                              <span class="tooltips-text">
                                                  <p>Results in decreased customer satisfaction and loyalty which indicates loss of repeat business opportunities</p>
                                              </span>
                                          </div>

                                      </li>
                              
                                  </ul>
                                   
                                </div>
                                <div className="shot-ct-bottd">
                                    <p>If you are facing one or more of these challenges, you are lagging behind your competitors. It isn’t an option, right? Or is it?</p>
                                </div>
                                <div className="shot-ct shot-ct-m">
                                    <span>Microsoft Dynamics 365 software suite
                                        is the answer to all these challenges</span>
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
                                <div className="heading-colo-new">
                                    <h2>Microsoft Dynamics 365 Capabilities and Features</h2>
                                    <span>Backend or frontend, streamline every aspect of your business for superior performance!</span>
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





                <section className="bg-2112">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-8">
                            <div className="heading-colo-new">
                                    <h2>Microsoft Dynamics 365 Solutions</h2>
                                    <span>Ensure comprehensive business management with the following Microsoft Dynamics 365 solutions!</span>
                                    {/* <p>Automate your business, simplify operations, and redefine the way you deal with new opportunities using powerful Dynamics 365 solutions.</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shpe-bg">
                                    <div className="abs"><img src="/img/home/nee-sahpe.png" alt="bgiconns" width={388} height={216} /></div>
                                </div>
                            </div>


                        </div>
                        <div className="row justify-content-center services">
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
                                        <div className="active-tab-indicator" style={{ left: activeTab === 0 ? "calc(10% - 20px)" : "calc(61% - 20px)" }} />
                                    </div>

                                    <div className={`tab-content ${getSlideDirection()}`}>
                                        {activeTab === 0 &&
                                            <div>

                                                <div className="row gy-4">
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="service-box  service-box-blue service-box-blue-home">
                                                            <div className="top">
                                                                <img
                                                                    src="/img/icons-365-01.png"
                                                                    alt="business-center-logo"
                                                                    className="icon"
                                                                    width="34"
                                                                    height="34"
                                                                />
                                                                <h3>
                                                                    Dynamics 365 <br /> Business Central
                                                                </h3>
                                                            </div>
                                                            <p>Empower your SMB with an all-in-one ERP solution that seamlessly integrates finance, sales, operations, project management, and customer service. Do more, achieve more, and grow more with Dynamics 365 Business Central. </p>
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
                                                                    src="/img/icons-365-02.png"
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
                                                            <p>Attain 106% ROI by implementing Dynamics 365 ERP. Revolutionize your financial management with Dynamics 365 Finance, a comprehensive ERP that combines AI and analytical capabilities. Drive growth, boost efficiency, and improve the financial health of your business now!</p>
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
                                                                    src="/img/icons-365-03.png"
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
                                                            <p>Navigate the supply chain disruptions smoothly with AI-powered insights. Make your business more resilient, proactive, and compliant to achieve unprecedented growth with the help of an all-encompassing ERP—Dynamics 365 Supply Chain Management.</p>
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
                                                                    src="/img/icons-365-04.png"
                                                                    alt="Dynamics 365 Commerce"
                                                                    className="icon"
                                                                    width="34"
                                                                    height="34"
                                                                />
                                                                <h3>
                                                                Dynamics 365<br />
                                                                Commerce
                                                                </h3>
                                                            </div>
                                                            <p>Combines in-store, online, and back-office operations to render a flawless shopping experience and tailored customer engagement.</p>
                                                            <Link href="/products/microsoft-dynamics-365-commerce/">
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
                                                                    src="/img/icons-365-05.png"
                                                                    alt="Dynamics 365 Project Operations"
                                                                    className="icon"
                                                                    width="34"
                                                                    height="34"
                                                                />
                                                                <h3>
                                                                Project<br />
                                                                Operations
                                                                </h3>
                                                            </div>
                                                            <p>Achieve over 106% ROI with Dynamics 365 Project Operations. Right from planning and execution to tracking and analysis, it helps to manage project-based businesses, ensuring projects are on time and within budget.</p>
                                                            <Link href="/products/dynamics-365-project-operations/">
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
                                                                    src="/img/icons-365-06.png"
                                                                    alt="Dynamics 365 Human Resources"
                                                                    className="icon"
                                                                    width="34"
                                                                    height="34"
                                                                />
                                                                <h3>Human<br />
                                                                Resources</h3>
                                                            </div>
                                                            <p>Simplify your HR operations with Dynamics 365 Human Resources. From hiring and onboarding to training and development, this Dynamics 365 ERP lets you use advanced tools to build a vibrant workplace.</p>
                                                            <Link href="/products/dynamics-365-human-resources/">
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
                                                        <div className="service-box service-box-blue service-box-blue-home">
                                                            <div className="top">
                                                                <img
                                                                    src="/img/icons-365-08.png"
                                                                    alt="Dynamics 365 Customer Service"
                                                                    className="icon"
                                                                    width="34"
                                                                    height="34"
                                                                />
                                                                <h3>Dynamics 365<br />
                                                                Customer Service</h3>
                                                            </div>
                                                            <p>Use generative AI and automation to address customer issues faster. Experience a 40% reduction in call-tackling time. You can also create self-service portals and even help customers across multiple channels which include chat, voice, and social media.</p>
                                                            <Link href="/products/microsoft-dynamics-365-customer-service/">
                                                                <a aria-label="microsoft-dynamics-365-finance">
                                                                    <div className="h-s-call" >
                                                                        <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="service-box  service-box-blue service-box-blue-home">
                                                            <div className="top">
                                                                <img
                                                                    src="/img/icons-365-07.png"
                                                                    alt="Dynamics 365 Sales"
                                                                    className="icon"
                                                                    width="34"
                                                                    height="34"
                                                                />
                                                                <h3>
                                                                Dynamics 365<br />
                                                                Sales
                                                                </h3>
                                                            </div>
                                                            <p>Close more deals with ease and confidence by relying on the AI assistant. With this Microsoft Dynamics CRM, empower your sales teams to access real-time actionable insights and tools to nurture relationships, finalize deals, and drive revenue growth.</p>
                                                            <Link href="/products/microsoft-dynamics-365-sales/" >
                                                                <a aria-label="business-central">
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
                                                                    src="/img/icons-365-11.png"
                                                                    alt="Powerapps_power-apps"
                                                                    className="icon"
                                                                    width="34"
                                                                    height="34"
                                                                />
                                                                <h3>
                                                                    Dynamics 365<br />
                                                                    Field Service
                                                                </h3>
                                                            </div>
                                                            <p>Witness a 14% boost in field technician productivity with this feature-rich Dynamics 365 CRM. Use AI-based suggestions to improve service quality, increase first-time fix rates, boost customer gratification, and manage the mobile workforce.</p>
                                                            <Link href="/products/microsoft-dynamics-365-field-service/">
                                                                <a aria-label="microsoft-power-bi">
                                                                    <div className="h-s-call" >
                                                                        <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                  
                                                    {/* <div className="col-lg-4 col-md-6">
                                                        <div className="service-box service-box-blue service-box-blue-home">
                                                            <div className="top">
                                                                <img
                                                                    src="/img/icons-365-09.png"
                                                                    alt="supplychain-logo"
                                                                    className="icon"
                                                                    width="34"
                                                                    height="34"
                                                                />
                                                                <h3>Dynamics 365<br />
                                                                Marketing</h3>
                                                            </div>
                                                            <p>Engage customers with your business, build brand value, and offer an exceptional customer experience. Unify your customer data, avail AI-powered automation, and offer personalized offers to maximize revenue.</p>
                                                            <Link href="/products/dynamics-365-supply-chain-management/">
                                                                <a aria-label="dynamics-365-supply-chain-management">
                                                                    <div className="h-s-call" >
                                                                        <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div> */}
                                                    <div
                                                        className="col-lg-4 col-md-6"
                                                    >
                                                        <div className="service-box service-box-blue service-box-blue-home">
                                                            <div className="top">
                                                                <img
                                                                    src="/img/icons-365-10.png"
                                                                    alt="Dynamics 365 Customer Insights"
                                                                    className="icon"
                                                                    width="34"
                                                                    height="34"
                                                                />
                                                                <h3>
                                                                    Dynamics 365<br />
                                                                    Customer Insights
                                                                </h3>
                                                            </div>
                                                            <p>Get a 360-degree view of customers by combining data from various sources to facilitate tailored marketing. Predict customer churn and revenue, personalize experiences, improve customer engagement, and create segments for marketing and journey management.   </p>
                                                            <Link href="/products/microsoft-dynamics-365-marketing/">
                                                                <a aria-label="microsoft-dynamics-365-sales">
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


                <section>
                    <div className="container">
                        <div className="cal-t-bg">
                            <div className="row g-5">
                                <div className="col-lg-12">
                                    <div className="ffloat-im-top">
                                        <img src="/img/group-352a75.png" alt="group-352a75" />
                                    </div>
                                </div>
                                <div className="col-lg-4 align-self-center">
                                    <div className="ll-left">
                                        <img src="/img/inside-searc-icons.png" alt="inside-searc-icons" /></div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ll-right">
                                        <span>50<sup>%</sup></span>
                                        <p>Over 50% of organizations say that ERP systems like Dynamics 365 helped them reduce operational costs by streamlining processes</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ll-right">
                                        <span>60<sup>%</sup></span>

                                        <p>60% of manufacturing companies have improved supply chain visibility with Dynamics 365 ERP</p></div>
                                </div>
                                <div className="col-lg-12">   <div className="ffloat-im-botm">
                                    <img src="/img/group-352a75.png" alt="group-352a75" />
                                </div></div>


                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-8">
                            <div className="heading-colo-new">
                                    <h2>Benefits of Microsoft Dynamics 365</h2>
                                    <span>Boost productivity, engage customers like never before, foster team collaboration, and make data-driven decisions with confidence!</span>
                                    {/* <p>Automate your business, simplify operations, and redefine the way you deal with new opportunities using powerful Dynamics 365 solutions.</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="row g-5">

                            <div className="col-lg-6">
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-13.png"
                                            alt="Enhanced Productivity:"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Enhanced Productivity:</h3>
                                        <p>Think of your team focusing on things that truly matter to your business. Dynamics 365 automates repetitive and routine tasks to let your teams excel in their strategic roles.</p>
                                    </div>
                                </div>
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-14.png"
                                            alt="Data-driven Insights"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Data-driven Insights</h3>
                                        <p>By providing you with a clear picture of your business, it boosts your confidence in decision-making. With advanced analytics with AI-powered real-time data, you can identify patterns and make crucial adjustments to your strategies.</p>
                                    </div>
                                </div>
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-15.png"
                                            alt="Integration"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Integration</h3>
                                        <p>The ability to seamlessly integrate with other Microsoft products like Office 365 gives it an edge over other solutions. This boosts collaboration and productivity and provides a unified experience across different solutions.</p>
                                    </div>
                                </div>
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-16.png"
                                            alt="Security and Compliance"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Security and Compliance</h3>
                                        <p>Security takes absolute priority when it comes to Microsoft <b>Dynamics 365 software</b> suite. Powerful security features let you stay compliant with regulations, safeguarding your data and maintaining trust.</p>
                                    </div>
                                </div>
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-17.png"
                                            alt="Enhanced Collaboration"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Enhanced Collaboration</h3>
                                        <p>Dynamics 365 encourages better interaction and teamwork. Connected tools make it smoother for teams to interact, manage projects, and stay connected which ultimately leads to more cohesive operations.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-18.png"
                                            alt="Improved Customer Engagement"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Improved Customer Engagement</h3>
                                        <p>When you use Microsoft Dynamics CRM, you get to know your customers better. This helps you engage them in ways tailored to their specific requirements to win their trust and loyalty.</p>
                                    </div>
                                </div>
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-19.png"
                                            alt="Easy Scalability"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Easy Scalability</h3>
                                        <p>Say goodbye to your scalability woes. Microsoft Dynamics 365 scales with your business as its modular design allows you to effortlessly add or remove features without causing any disruption to your operations.</p>
                                    </div>
                                </div>
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-20.png"
                                            alt="Customization"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Customization</h3>
                                        <p>No two businesses are the same, and Dynamics 365 gets that. You can tailor it the way your business demands, be it your workflows, forms, or reports. This ensures the system aligns perfectly with your processes.</p>
                                    </div>
                                </div>
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-21.png"
                                            alt="Cloud-based Accessibility"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Cloud-based Accessibility</h3>
                                        <p>Now access your data and apps on the go anytime, and from anywhere! This provides your remote teams with the flexibility to access real-time data and ensures better collaboration.</p>
                                    </div>
                                </div>
                                <div className="style-grid-1">
                                    <div className="style-grid-icons style-grid-icons-round">
                                        <img
                                            src="/img/icon-new-22.png"
                                            alt="Cost Efficiency"
                                            width={40} height={40}
                                        />
                                    </div>
                                    <div className="style-grid-content style-grid-two">
                                        <h3>Cost Efficiency</h3>
                                        <p>Microsoft Dynamics 365 helps reduce operational costs. It does so by letting you automate processes and ensure optimum resource management. Reduced costs translate into more savings, which improves the financial health of your business.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="heading-colo-new" style={{textAlign:'left'}}>
                                    <h2>Microsoft Dynamics 365 Licensing and Cost?</h2>
                                    <span>How Much is Microsoft Dynamics 365 Licensing and Cost?</span>
                                    <p>Various factors come into play when it comes to Microsoft Dynamics 365 pricing. These factors include:</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="lice-cost-wrper">
                                    <div className="lice-cost-wrper-lst">
                                        <ul>
                                            <li><i class="bi bi-check-lg"></i> <span>Number of users</span></li>
                                            <li><i class="bi bi-check-lg"></i> <span>Geographical location</span></li>
                                            <li><i class="bi bi-check-lg"></i> <span>Support and maintenance</span></li>
                                            <li><i class="bi bi-check-lg"></i> <span>Specific Dynamics 365 modules required</span></li>
                                            <li><i class="bi bi-check-lg"></i> <span>Deployment model</span></li>
                                            <li><i class="bi bi-check-lg"></i> <span>Licensing type</span></li>
                                            <li><i class="bi bi-check-lg"></i> <span>Integration requirements</span></li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="lice-cost-wrper-para">
                                    <p>However, Microsoft offers flexible pricing plans for Dynamics 365 Apps. You can opt for ERP or CRM, or the mixed capabilities of both solutions. Further, you can pay for selected apps despite owning the full CRM or ERP solution.</p>
                                    <p>Contact Dynamics Square for the latest details on Dynamics 365 about licensing and cost. Or you can download our comprehensive guide on pricing and licensing for different apps under Dynamics 365 suite.</p>
                                    <div className="text-lefts">
                                        <Link href="#exampleModal">
                                            <a
                                                data-bs-toggle="modal"
                                                className="btn-get-started scrollto"
                                            >
                                                <span>Dynamics 365 Pricing & Licensing Guide</span>
                                            </a>
                                        </Link>
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
                                        <h3>Looking to Implement Microsoft Dynamics 365 Business Apps?</h3>
                                        <Link href="/contact-us/">
                                            <a className="btn btn-md">Get a Free Demo</a>
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
                                    <p>We are a certified Microsoft Gold Partner who can provide you innovative and business-driven solutions along with seamless experience in upgrading/implementing <b>Dynamics 365 modules</b> without losing your existing data and business processes.</p>
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
                                        <p>We have a proven track record of implementing the Dynamics 365 solution in more than 350 global businesses. Our extensive Dynamics 365 Finance implementation methodology has helped us reach diverse industries.</p>
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
