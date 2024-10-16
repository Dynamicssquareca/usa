import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const MicrosoftDynamics365FinanceOperations = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Finance and Operations</title>
        <meta
          name="description"
          content="Looking for a Microsoft Dynamics 365 Finance and Operations Partner in the USA? Contact Dynamics Square for all F&O implementation and support needs."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance-operations/"
        />
        <meta property="og:type" content="product" />

        <meta property="og:title" content="Microsoft Dynamics 365 Finance and Operations" />

        <meta property="og:description" content="Looking for a Microsoft Dynamics 365 Finance and Operations Partner in the USA? Contact Dynamics Square for all F&O implementation and support needs." />

        <meta property="og:url" content="https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance-operations/" />

        <meta property="og:site_name" content="Dynamics Square USA" />

        <meta property="og:image" content="https://www.dynamicssquare.com/img/f-and-o-image.png" />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:title" content="Microsoft Dynamics 365 Finance and Operations" />

        <meta property="twitter:description" content="Looking for a Microsoft Dynamics 365 Finance and Operations Partner in the USA? Contact Dynamics Square for all F&O implementation and support needs." />

        <meta property="twitter:url" content="https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance-operations/" />

        <meta property="twitter:image" content="https://www.dynamicssquare.com/img/f-and-o-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Microsoft Dynamics 365 Finance and Operations",
              "image": "https://www.dynamicssquare.com/img/f-and-o-image.png/",
              "description": "Looking for a Microsoft Dynamics 365 Finance and Operations Partner in the USA? Contact Dynamics Square for all F&O implementation and support needs.",
              "brand": {
                "@type": "Brand",
                "name": "Dynamics Square USA"
              },
              "offers": {
                "@type": "AggregateOffer",
                "url": "https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance-operations/",
                "priceCurrency": "USD",
                "lowPrice": "180",
                "highPrice": "300"
              }
            }),
          }}
        />

      </Head>

      <section className="Solution-banner pp-rrea new-main-heading">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1 className="small-h">Microsoft Dynamics 365 Finance and Operations</h1>
              <h2>Strengthen your Finances and Operations</h2>
              <p>Unify and streamline finances and operations across different departments with Dynamics 365 Finance & Operations.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Free Call!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="banner-ne-im-t">
                <div className="bf">
                  <Image
                    src="/img/f-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                    priority
                  />
                </div>
                <Image
                  src="/img/f-and-o-image.png"
                  alt="f&o"
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
                <video autoPlay muted loop playsInline>
                  <source src="/video/f&o-video.mp4"></source>
                </video>
              </div>
            </div>
            <div className="col-lg-1 align-self-center">
              <div className="brder-hr"></div>
            </div>
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>What is Dynamics 365 Finance and Operations?</h2>
                <p>Microsoft Dynamics 365 for Finance and Operations, or <strong>D365 F&O</strong>, is a powerful cloud-based ERP solution designed to manage complex and diversified processes related to financial and supply chain operations.</p>
                <p>Medium to large-sized businesses use <strong>Dynamics 365 F&O</strong> for its AI, BI, and automation capabilities. It lets businesses manage global operations while pushing growth towards scalability.</p>
                <p>D365 Finance and Operations was rebranded by Microsoft in October 2019 as two separate ERP applications—Dynamics 365 Finance and <Link href="/products/dynamics-365-supply-chain-management/"><a>Dynamics 365 Supply Chain Management</a></Link>. However, legacy users still call it Dynamics 365 Finance and Operations (F&O).</p>
                {/* <p>Organizations willing to upgrade can use these applications independently, enabling them to customize these solutions to their specific business requirements. However, several organizations use these applications in combination to create an all-encompassing ERP that can take care of every macro and micro process of the business.</p>
                <p>Organizations willing to upgrade can use these applications independently, enabling them to customize these solutions to their specific business requirements. However, several organizations use these applications in combination to create an all-encompassing ERP that can take care of every macro and micro process of the business.</p> */}
                <p>Microsoft Dynamics 365 Finance and Operations manages key financial processes, supply chain operations, human resources, product information, vendor collaboration, transportation, and more.</p>
                <p><strong>D365 F&O enables you to make:</strong></p>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Make smart decisions with real-time data</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Simplify business operations with advanced tools</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Adapt to changing customer demands using cloud capabilities</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Drive growth and save on operational costs</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Scale globally by adapting to regulations and compliances</span></div>
                {/* <p>With a centralized communication bridge between the business and users, it pushes the business towards maximized ROI and productivity.</p> */}
              </div>
            </div>

          </div>
          <div className="row pp-top-60 pp-bot-60 justify-content-center">
            <div className="col-lg-9" >
              <div className="center-info-fq text-center">
                <p><strong>Note:</strong> Dynamics 365 F&O was earlier known as <Link href="/products/microsoft-dynamics-ax/"><a>Dynamics AX</a></Link> (Axapta) and specifically designed as an on-premises ERP solution. With the modernization of business solutions, Microsoft upgraded Dynamics AX to Dynamics F&O to cater to more advanced tools and capabilities for modern businesses.</p>
              </div>
            </div>
          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Simplify Financial Operations</h2>
                <p>Track, manage, and control all financial operations, regardless of business complexity. Along with streamlining finance, you can focus on managing accounts, payrolls, general ledger, budgeting, treasury, expenses, human resources, and a lot more while gathering all the information in real-time.</p>
                <p>D365 Finance and Operations comes with an interactive user experience to help you utilize all tools and capabilities without any hassle.</p>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Build enhanced expense management reports</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Follow different regulatory compliances</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Automate settlements in the general ledger</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Manage asset leasing</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Get financial insights</span></div>
              </div>
            </div>

            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/f-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Simplify-Financial-Operations.png"
                  alt="Simplify-Financial-Operations"
                  width={600}
                  height={400}
                />
              </div>
            </div>

          </div>
          <div className="row pp-top-60 pp-bot-60 pp-mar-30 rever-1">
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/f-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Track-Inventory-on-the-Go.png"
                  alt="Track-Inventory-on-the-Go"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Track Inventory on the Go</h2>
                <p>Inventory management is an essential part of the entire business, and you can do it seamlessly with Dynamics 365 for Finance and Operations ERP solution. It empowers you to make strategies for replenishment orders, optimize surplus inventory, track orders, and perform inventory forecasting.</p>
                <p><strong>The inventory module of Dynamics 365 F&O will enable you to:</strong></p>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Get real-time feedback on different processes</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Allocate resources whenever needed for optimum performance</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Get multi-currency support for international markets</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Manage inbound and outbound operations</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Control quality assurance to enhance product quality in your supply chain</span></div>
              </div>
            </div>




          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Plug and Play Integrations</h2>
                <p>D365 Finance and Operations is a flexible solution when it comes to integrating native Microsoft solutions. By integrating different add-ons and solutions, you will be able to enhance the performance of the entire solution. And the best part about the <Link href="/products/microsoft-dynamics-365/"><a>Microsoft Dynamics 365 ecosystem</a></Link> is that you can integrate any solution with just a click.</p>
                <p>Even when the job of the add-on is done, you can disintegrate it without losing any data. That’s how the connection between native Microsoft solutions works, and you can establish the connection by yourself without relying on your <Link href="/our-services/dynamics-365-support-services/"><a>Dynamics 365 support</a></Link> partner.</p>
                <p>Based on your requirements, <Link href="/products/microsoft-power-platform/"><a>Microsoft Power Platform</a></Link>, Office, Azure Data Lake, and third-party apps with Dynamics 365 Finance and Operations.</p>
              </div>
            </div>

            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/f-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Plug-and-Play-Integrations.png"
                  alt="Plug-and-Play-Integrations"
                  width={600}
                  height={400}
                />
              </div>
            </div>

          </div>
          <div className="row pp-top-60 pp-bot-60 pp-mar-30 rever-1">
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/f-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Supports-Globalization.png"
                  alt="Supports-Globalization"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Supports Globalization</h2>
                <p>The Globalization Studio in Dynamics 365 Finance and Operations supports 51 countries and 57 languages so that you can expand your business beyond global boundaries. Microsoft knows the fact that a country's compliances and regulations change with time; that's why it continuously releases updates to support your ongoing business.</p>
                <p><strong>Dynamics 365 for Finance & Operations offers features such as:</strong></p>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Electronic reporting</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Global tax acceptance</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Tax determination and calculation</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Automated electronic invoicing</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Configurable business documents</span></div>
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
                <h2>Microsoft Dynamics 365 Finance and Operations Features: Perfect Tools for Unique Businesses</h2>
                <p>Dynamics 365 F&O comes with a variety of tools and functionalities to streamline different departments of a business. Some of the capabilities are:</p>
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
                        <span>Financial Management</span>
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
                                <p>Manage, track, and record all financial transactions, and prepare detailed financial reports.</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Budget Planning</h4>
                                <p>Optimize and manage budgets while calculating credit and/or debit funds in real-time.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Financial Reporting </h4>
                                <p>Build financial reports to keep track of accounts, cash flow, revenue, and other essential factors as well.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Cash Management</h4>
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
                                <h4>Tax Calculation</h4>
                                <p>Calculate taxes for different regions in separate reports to simplify tax calculation and submission.</p>
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
                                <p>Maintain credit limits and perform basic collection activities for your customers. </p>
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
                                <p>Calculate and distribute revenue for multi-element products or services with ease. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Expense Management </h4>
                                <p>Manage and track all expenses for a business while generating precise reports for revenue analysis. </p>
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
                        <span>Manufacturing</span>
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
                                <h4>Capacity Planning </h4>
                                <p>Build a strategy based on raw materials and production goals to plan the plant's overall capacity. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Scheduling</h4>
                                <p>Use finite and infinite scheduling to schedule the production of different goods. </p>
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
                                <p>Forecast demands to furnish upcoming requirements based on existing customer data. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Supply Planning</h4>
                                <p>Plan the demand for materials based on fluctuating requirements. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Control</h4>
                                <p>Streamline the production lifecycle, prompt order fulfillment, and optimize raw materials. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Shop Floor Control </h4>
                                <p>Manage the basic operations of the floor while tracking the work ethics of the employees. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Resource Management</h4>
                                <p>Manage, track, and calculate all resources to simplify the manufacturing process. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Distribution Planning </h4>
                                <p>Manage direct and indirect procurement and build a distribution strategy.  </p>
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
                        <span>Supply Chain Management</span>
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
                                <h4>Vendor Collaboration </h4>
                                <p>Establish a smooth vendor collaboration to match customer demands with vendor needs. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Demand Planning</h4>
                                <p>Leverage the most advanced demand-planning solution to build an agile and sustainable supply chain that is fueled by intelligence and collaboration. </p>
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
                                <p>Track goods based on different parameters to simplify stock management processes. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Multi-location Warehouse Management </h4>
                                <p>Manage different warehouses with a centralized approach to unify the business operations. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Procurement </h4>
                                <p>Smoothen the process of sourcing and finding the right materials for the highest quality. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Transportation Management </h4>
                                <p>Track and streamline all transportation communication with precise tracking of data. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Optimize Resources </h4>
                                <p>Track the consumption of resources in real-time and optimize them for better ROI. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Vendor Collaboration </h4>
                                <p>Collaborate with vendors, manage contracts, and negotiate with vendors for the right price. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Warehouse Optimization </h4>
                                <p>Optimize core warehousing activities to ensure higher profitability and efficiency. </p>
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
                        <span>Customer Service </span>
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
                                <h4>Case Routing </h4>
                                <p>Allocate the right issues to the right agent based on complexity and executive experience. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Case Management</h4>
                                <p>Track the progress of the open ticket until it gets resolved while allotting the right resources at the right time. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Track Core Activities</h4>
                                <p>Track all customer service activities, along with keeping records of all actions.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sentiment based Routing </h4>
                                <p>Transfer the case to the right executive based on the emotional feedback of the customer.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Proactive Delivery </h4>
                                <p>Ship and deliver products on time using embedded IoT and better visibility across the chain. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Embedded Intelligence </h4>
                                <p>Analyze customer interactions and make personalized decisions in real-time. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Optimize Service Operations </h4>
                                <p>Streamline business operations with a unified data source and gain comprehensive insights. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Build Proactive Customer Relationships </h4>
                                <p>Track and build personalized interactions with customers to build a strong relationship.   </p>
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
                                <h4>Work Order</h4>
                                <p>Specify the service work required at the location of the customer. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Communication Tools </h4>
                                <p>Establish communication between service agents, technicians, dispatchers, and customers. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Asset Management </h4>
                                <p>Track the equipment, resources, and service history of each customer. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Preventive Maintenance </h4>
                                <p>Track the health of all equipment and schedule maintenance for them when required. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Billing Capabilities </h4>
                                <p>Generate invoices for products and services based on the customer’s usage. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Time Tracking</h4>
                                <p>Track the amount of time spent on each project to calculate the efficiency and ROI of the executive.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Data Reporting</h4>
                                <p>Collect data and generate reports based on different customer activities. </p>
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
                                <p>Maintain stock levels while keeping an eye on purchase order requests and fulfillment. </p>
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
                  <h3>Financial Management </h3>
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
                  <h3>Manufacturing </h3>
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
                  <h3>Supply Chain Management </h3>
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
                  <h3>Customer Service</h3>
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
                  <h3>Field Service </h3>
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
                          <p>Manage, track, and record all financial transactions, and prepare detailed financial reports.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Budget Planning</h4>
                          <p>Optimize and manage budgets while calculating credit and/or debit funds in real-time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Financial Reporting </h4>
                          <p>Build financial reports to keep track of accounts, cash flow, revenue, and other essential factors as well.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cash Management</h4>
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
                          <h4>Tax Calculation</h4>
                          <p>Calculate taxes for different regions in separate reports to simplify tax calculation and submission.</p>
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
                          <p>Maintain credit limits and perform basic collection activities for your customers. </p>
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
                          <p>Calculate and distribute revenue for multi-element products or services with ease. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Expense Management </h4>
                          <p>Manage and track all expenses for a business while generating precise reports for revenue analysis. </p>
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
                          <h4>Capacity Planning </h4>
                          <p>Build a strategy based on raw materials and production goals to plan the plant's overall capacity. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Scheduling</h4>
                          <p>Use finite and infinite scheduling to schedule the production of different goods. </p>
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
                          <p>Forecast demands to furnish upcoming requirements based on existing customer data. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Supply Planning</h4>
                          <p>Plan the demand for materials based on fluctuating requirements. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Control</h4>
                          <p>Streamline the production lifecycle, prompt order fulfillment, and optimize raw materials. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Shop Floor Control </h4>
                          <p>Manage the basic operations of the floor while tracking the work ethics of the employees. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Management</h4>
                          <p>Manage, track, and calculate all resources to smooth the manufacturing process. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Distribution Planning </h4>
                          <p>Manage direct and indirect procurement and build a distribution strategy.  </p>
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
                          <h4>Demand Planning</h4>
                          <p>Leverage the most advanced demand-planning solution to build an agile and sustainable supply chain that is fueled by intelligence and collaboration. </p>
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
                          <p>Track goods based on different parameters to simplify stock management processes. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Multi-location Warehouse Management </h4>
                          <p>Manage different warehouses with a centralized approach to unify the business operations. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Procurement </h4>
                          <p>Manage and smooth the process of sourcing and finding the right materials for the highest quality. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Transportation Management </h4>
                          <p>Track and streamline all transportation communication with precise tracking of data. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Optimize Resources </h4>
                          <p>Track the consumption of resources in real-time and optimize them for better ROI. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Vendor Collaboration </h4>
                          <p>Collaborate with vendors, manage contracts, and negotiate with vendors for the right price. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Warehouse Optimization </h4>
                          <p>Optimize core warehousing activities to ensure higher profitability and efficiency. </p>
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
                          <h4>Case Routing </h4>
                          <p>Allocate the right issues to the right agent based on complexity and executive experience. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Case Management</h4>
                          <p>Track the progress of the open ticket until it gets resolved while allotting the right resources at the right time. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Track Core Activities</h4>
                          <p>Track all customer service activities, along with keeping records of all actions.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sentiment based Routing </h4>
                          <p>Transfer the case to the right executive based on the emotional feedback of the customer.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Proactive Delivery </h4>
                          <p>Ship and deliver products on time using embedded IoT and better visibility across the chain. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Embedded Intelligence </h4>
                          <p>Analyze customer interactions and make personalized decisions in real-time. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Optimize Service Operations </h4>
                          <p>Streamline business operations with a unified data source and gain comprehensive insights. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Build Proactive Customer Relationships </h4>
                          <p>Track and build personalized interactions with customers to build a strong relationship.   </p>
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
                          <h4>Work Order</h4>
                          <p>Specify the service work required at the location of the customer. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Communication Tools </h4>
                          <p>Establish communication between service agents, technicians, dispatchers, and customers. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Asset Management </h4>
                          <p>Track the equipment, resources, and service history of each customer. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Preventive Maintenance </h4>
                          <p>Track the health of all equipment and schedule maintenance for them when required. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Billing Capabilities </h4>
                          <p>Generate invoices for products and services based on the customer’s usage. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Time Tracking</h4>
                          <p>Track the amount of time spent on each project to calculate the efficiency and ROI of the executive.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Data Reporting</h4>
                          <p>Collect data and generate reports based on different customer activities. </p>
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
                          <p>Maintain stock levels while keeping an eye on purchase order requests and fulfillment. </p>
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

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 align-self-center">
              <div className="left--side-title">
                <h2>Dynamics 365 for Finance & Operations Benefits: Give Your Business a Digital Makeover </h2>
                <p>Microsoft Dynamics 365 Finance and Operations or D365 F&O comes with several benefits that support businesses as they grow and expand to greater heights.</p>
                {/* <div className="btn--bc">
                  <Link href="/dynamics-365-business-central-features/">
                    <a className="btn btn-md">Read Essential Features</a>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="right--side-pic">
                <Image
                  width={468}
                  height={447}
                  src="/img/ds-rockets.png"
                  alt="Dynamics 365 Business Central Features Skyrocket your
                  Business Growth"
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
                  src="/img/Built-In-Analytics-icon.png"
                  alt="Built-In-Analytics-icon"
                />
                <h3>Built-In Analytics </h3>
                <p>Cloud deployment enables organizations to get access to real-time analytics for a well-informed decision-making process. Such data insights will help you make intelligent decisions with 100% visibility across different processes.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="bc--feat-box">
                <Image
                  width={57}
                  height={48}
                  src="/img/Interactive-User-Experience-icon.png"
                  alt="Interactive-User-Experience-icon"
                />
                <h3>Interactive User Experience </h3>
                <p>Microsoft offers interactive and consistent user experience across all its business solutions. This empowers users to operate different solutions in an efficient manner from the first point of contact. </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="bc--feat-box">
                <Image
                  width={57}
                  height={48}
                  src="/img/Easy-to-Scale-icon.png"
                  alt="Easy-to-Scale-icon"
                />
                <h3>Easy to Scale </h3>
                <p>With increasing customer demands, you can easily increase the ERP's performance by upgrading its hardware and capabilities within minutes. Also, there would not be any need to invest huge amounts of money to scale your system. </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="bc--feat-box">
                <Image
                  width={57}
                  height={48}
                  src="/img/Avail-Automation-icon.png"
                  alt="Avail-Automation-icon"
                />
                <h3>Avail Automation</h3>
                <p>Automation lets you enhance the efficiency and productivity of users by automating most of the manual and recurring processes. Also, sharing data from one department to another can be seamlessly performed by D365 F&O. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mines-m-t">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>Microsoft Dynamics 365 for Finance and Operations: Latest Update 2024</h2>
              </div>
            </div>
          </div>

          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <p>Businesses have to implement Dynamics 365 Finance & Operations as a whole irrespective of their specific requirements. It leads to a complex, time-consuming, and costly implementation. Microsoft understood this concern of different businesses and split the whole solution into two powerful ERPs:</p>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Microsoft Dynamics 365 Finance</span></div>
                <div className="points-ui"><i className="bi bi-check-lg"></i> <span>Microsoft Dynamics 365 Supply Chain Management</span></div>
                <p>All capabilities and tools of D365 F&O have been divided into these two solutions so that businesses can go with the desired set of capabilities they require to grow their business. Also, it has become way more cost-effective and comes with a variety of licensing options.</p>
                <p>However, most businesses, decision-makers, and consultants consider this a single solution: Microsoft Dynamics 365 Finance and Operations.</p>
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/f-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Finance-and-Operations-Licensing-pic.png"
                  alt="Finance-and-Operations-Licensing-pic"
                  width={600}
                  height={400}
                />
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
                <h3>Switch to Microsoft Dynamics 365 Finance and Operations  <span>Avail Automation and Eliminate Complexity </span>
                </h3>
                <p>Revolutionize your business to withstand changing market demands and grow even in the toughest situations with Dynamics 365 for Finance and Operations.  </p>
                <Link href="/contact-us/">
                  <a className="btn btn-md">Talk to a D365 F&O Expert Now!</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>D365 Finance and Operations Licensing</h2>
                <p>With the release of <Link href="/products/microsoft-dynamics-365-finance/"><a>Dynamics 365 Finance</a></Link> and Dynamics 365 Supply Chain Management, Microsoft has stopped offering any licensing options for D365 Finance and Operations. Now, organizations will have to purchase a separate license for both these solutions.</p>
                <p><strong>However, you will be required to purchase at least 20 licenses to use any of the solutions.</strong></p>
                <p>Dynamics 365 Finance is available in 4 licensing options:</p>
                <ul className="ne-list-tags">
                  <li>Team Members</li>
                  <li>Finance</li>
                  <li>Finance Premium</li>
                  <li>Operations Activity</li>
                </ul>
                <br />
                <p>Dynamics 365 Supply Chain is available in 4 licensing options:</p>
                <ul className="ne-list-tags">
                  <li>Team Members</li>
                  <li>Operations Activity</li>
                  <li>Supply Chain Management</li>
                  <li>Supply Chain Management Premium </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/f-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Operations-Licensing-f-o.png"
                  alt="Operations-Licensing-f-o"
                  width={600}
                  height={400}
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="pri-wrper-bc" style={{ marginTop: '-90px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="heading-colo-bg">
                <h2>Dynamics 365 Finance and Supply Chain Management Pricing</h2>
                <p>Based on your business requirements, you can opt for any ERP solution individually or in combination to accelerate your business.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="top-text-wrpaer">
                <img src="/img/Dynamics-365-Finance-new.png" alt="Dynamics-365-Finance-new" width='120' height='120' />
                <h4>Dynamics 365 Finance</h4>
                <p><Link href="/products/microsoft-dynamics-365-finance/"><a>Microsoft Dynamics 365 for Finance</a></Link> is a robust ERP solution that can streamline complex financial processes with ease. It comes with a set of advanced tools and capabilities required by a modern business to deal with modern issues.</p>
              </div>
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>
                    Dynamics 365 Finance
                  </h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$180</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Cash Flow Management
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Cash Management
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Business Accounting
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Tax Management </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Financial Planning </li>
                      <li>
                        <i className="bi bi-check-lg"></i>And More</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="top-text-wrpaer">
                <img src="/img/Dynamics-365-Supply-Chain-new-pic.png" alt="Dynamics-365-Supply-Chain-new-pic" width='120' height='120' />
                <h4>Dynamics 365 Supply Chain</h4>
                <p><Link href="/products/dynamics-365-supply-chain-management/"><a>Microsoft Dynamics 365 for Supply Chain Management</a></Link> is designed to cater to the business requirements of medium and large-sized organizations. It integrates and unifies data from different sources to manage supply chain operations.</p>
              </div>
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>Dynamics 365 Supply Chain </h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$180</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Supply Chain Planning</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Order Management </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Order Fulfillment</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Assets Management </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Shop Floor Management </li>
                      <li>
                        <i className="bi bi-check-lg"></i>And More</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bbb" style={{ marginTop: '120px' }}>
        <div className="heross">
          <video
            playsInline
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
                  <h3>For detailed or personalized pricing information, feel free to contact our team</h3>
                  <Link href="/schedule-a-demo/">
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
                <h2>Dynamics Square: <br />Your Partner in Growth! </h2>
                <p>Dynamics Square is a certified <Link href="/"><a>Microsoft Dynamics Partner</a></Link> offering its reliable, trustworthy, and cost-effective services to global businesses. </p>
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
                    src="/img/Experienced-Consultants-icon.png"
                    alt="Experienced-Consultants-icon"
                  />
                </div>
                <div className="rig">
                  <h3>Experienced Consultants </h3>
                  <p>We have 150+ consultants, available 24x7, to help you get started and resolve your complex issues in no time.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/Adequate-Resources-icon.png"
                    alt="Adequate-Resources-icon"
                  />
                </div>
                <div className="rig">
                  <h3>Adequate Resources</h3>
                  <p>With sufficient resources and good infrastructure, our team will support your business growth while meeting your business demands.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/Instant-Support-icon.png"
                    alt="Instant-Support-icon"
                  />
                </div>
                <div className="rig">
                  <h3>Instant Support </h3>
                  <p>We have a separate team to offer your remote and on-site support so that you can resume your business regardless of complexity and irregularities. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/Personalized-Solutions-icon.png"
                    alt="Personalized-Solutions-icon"
                  />
                </div>
                <div className="rig">
                  <h3>Personalized Solutions </h3>
                  <p>We understand the uniqueness of your business and offer you a personalized solution that perfectly matches your business requirements. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default MicrosoftDynamics365FinanceOperations;
