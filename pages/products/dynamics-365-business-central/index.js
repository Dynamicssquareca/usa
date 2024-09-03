import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Blog from "../../../components/Blog";
const BusinessCentralNew = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>
          Microsoft Dynamics 365 Business Central Partner | Dynamics Square
        </title>
        <meta
          name="description"
          content="Dynamics 365 Business Central: A comprehensive ERP solution for SMB's businesses, offering financial, inventory, and CRM capabilities. Book a free demo Today!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/dynamics-365-business-central/"
        />

        <meta property="og:type" content="product" />

        <meta
          property="og:title"
          content="Microsoft Dynamics 365 Business Central Partner | Dynamics Square"
        />

        <meta
          property="og:description"
          content="Dynamics 365 Business Central: A comprehensive ERP solution for SMB's businesses, offering financial, inventory, and CRM capabilities. Book a free demo Today!"
        />

        <meta
          property="og:url"
          content="https://www.dynamicssquare.com/products/dynamics-365-business-central/"
        />

        <meta property="og:site_name" content="Dynamics Square USA" />

        <meta
          property="og:image"
          content="https://www.dynamicssquare.com/img/microsoft-dynamics-365-business-central.png"
        />

        <meta property="twitter:card" content="summary_large_image" />

        <meta
          property="twitter:title"
          content="Microsoft Dynamics 365 Business Central Partner | Dynamics Square"
        />

        <meta
          property="twitter:description"
          content="Dynamics 365 Business Central: A comprehensive ERP solution for SMB's businesses, offering financial, inventory, and CRM capabilities. Book a free demo Today!"
        />

        <meta
          property="twitter:url"
          content="https://www.dynamicssquare.com/products/dynamics-365-business-central/"
        />

        <meta
          property="twitter:image"
          content="https://www.dynamicssquare.com/img/microsoft-dynamics-365-business-central.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Microsoft Dynamics 365 Business Central Partner | Dynamics Square",
              image:
                "https://www.dynamicssquare.com/img/microsoft-dynamics-365-business-central.png/",
              description:
                "Dynamics 365 Business Central: A comprehensive ERP solution for SMB's businesses, offering financial, inventory, and CRM capabilities. Book a free demo Today!",
              brand: {
                "@type": "Brand",
                name: "Dynamics Square USA",
              },
              offers: {
                "@type": "AggregateOffer",
                url: "https://www.dynamicssquare.com/products/dynamics-365-business-central/",
                priceCurrency: "USD",
                lowPrice: "8",
                highPrice: "100",
              },
            }),
          }}
        />
      </Head>

      <section className="Solution-banner pp-rrea">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1>Microsoft Dynamics 365 Business Central</h1>
              <p>
                Enhance Business Efficiency, Fuel Steady Growth, and Streamline
                Processes with the Microsoft's AI-Powered ERP - Dynamics 365
                Business Central{" "}
              </p>
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
                  src="/img/microsoft-dynamics-365-business-central.png"
                  alt="Microsoft Dynamics 365 Business Central"
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
                <h2>What is Microsoft Dynamics 365 Business Central?</h2>
                <p>
                  Formerly known as{" "}
                  <Link href="/products/microsoft-dynamics-nav/">
                    <a>Dynamics NAV</a>
                  </Link>
                  , Microsoft Dynamics 365 Business Central is an AI-powered
                  business management solution tailored for startups or small to
                  mid-sized businesses. It not only has the ability to manage
                  internal business operations but also provides basic CRM
                  features, making it an all-encompassing tool for growing
                  businesses.
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
                  comes to integration, no other{" "}
                  <Link href="/products/microsoft-dynamics-erp/">
                    <a>Dynamics ERP solution</a>
                  </Link>{" "}
                  is as flexible and transparent as Microsoft 365 Business
                  Central.
                </p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
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
                  alt="Business Central Integrates Solution for AI and BI"
                  width={597}
                  height={381}
                />
              </div>
            </div>
          </div>
          <div className="row pp-bot-60">
            <div className="col-lg-6 order-first order-md-last align-self-center">
              <div className="nw-bc-lef-h">
                <h2>Comes with Plug and Play Integrations</h2>
                <p>
                  Connect with any third-party application or any solution in
                  the Dynamics 365 ecosystem without any hassle using APIs.
                  Whether it is about integrating Business Central with{" "}
                  <Link href="/products/microsoft-power-bi/">
                    <a>Power BI</a>
                  </Link>{" "}
                  or Continia, establish a connection within minutes.{" "}
                </p>
                <p>
                  These integrations will help a business deal with complex
                  business processes while enhancing the capabilities of a
                  specific module.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-first align-self-center">
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
                  src="/img/plug-play-integratio.png"
                  alt="Integrating Business Central with Power BI and Continia"
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
                <p>
                  Business Central is a versatile puzzle piece designed to
                  seamlessly fit into any business landscape. No matter your
                  industry, tailor Business Central ERP to perfectly align with
                  your distinct business requirements.{" "}
                </p>
                <p>
                  Leverage customized modules, features, and capabilities to
                  accelerate your business growth and outpace competitors. These
                  bespoke adjustments ensure the solution resonates with your
                  business, amplifying its efficiency.{" "}
                </p>
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
                  src="/img/tailer-maid.png"
                  alt="Tailor Made for Unique Needs with Business Central ERP"
                  width={396}
                  height={381}
                />
              </div>
            </div>
          </div>
          <div className="row pp-bot-60">
            <div className="col-lg-5 order-first order-md-last align-self-center">
              <div className="nw-bc-lef-h">
                <h2>Stay Connected to Your Business On-the-Go </h2>
                <p>
                  Experience unmatched consistency, no matter the device.
                  Whether you're at the office or on the move, tap into the full
                  power of Business Central - be it on desktop, tablet, or
                  mobile. Enjoy flexibility across Windows, Android, and iOS,
                  both on-site and cloud-based.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 order-first align-self-center">
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
                  src="/img/stay-connected -the-Go.png"
                  alt="D365 Business Central Stay Connected to Your Business"
                  width={550}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <div className="heading-colo-bg">
                <h2>
                  Business Central Modules: A Perfect ERP for Any Business
                </h2>
                <p>
                  Microsoft Dynamics Business Central fits in any business
                  regardless of complexity with the variety of modules. These
                  modules are:
                </p>
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
                        <span>Finance Management</span>
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
                                <h4>Internal Transactions</h4>
                                <p>
                                  {" "}
                                  Manage and customize internal transactions
                                  with restricted access.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Cash flow Forecasting</h4>
                                <p>
                                  Predict Sales and Expenses analyzing cash
                                  balances and account schedules.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Budgeting</h4>
                                <p>
                                  Control and monitor overall business finances
                                  with accurate budgeting.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Costing</h4>
                                <p>
                                  Reconcile inventory and manufacturing costs
                                  utilizing the general ledger.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Consolidation & Multi-Companies</h4>
                                <p>
                                  Manage multiple business accounts to analyze
                                  company finances.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Costs and Income Allocation</h4>
                                <p>
                                  Allocate resources based on income using a
                                  common journal.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Banking</h4>
                                <p>
                                  Monitor bank account transactions by
                                  integrating a banking add-on.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Cost Accounting</h4>
                                <p>
                                  Distribute the budget by planned and actual
                                  costs of projects.{" "}
                                </p>
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
                                <p>
                                  Control and manage fixed assets for optimum
                                  ROI.{" "}
                                </p>
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
                                <p>
                                  Receive payments, collect balances, and settle
                                  bank accounts with ease.{" "}
                                </p>
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
                                <p>
                                  Manage outgoing payments, track cheques, and
                                  make instant payments.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>General Ledger</h4>
                                <p>
                                  Manage Credit and Debit transactions to get
                                  complete financial data.
                                </p>
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
                        <span>Sales and Marketing</span>
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
                                <h4>Customer management</h4>
                                <p>
                                  Manage your customers, resolve their queries,
                                  and build a good relationship.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Quote</h4>
                                <p>
                                  Create, edit, and send sales invoices to
                                  clients before final prices.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales order</h4>
                                <p>
                                  Craft sales orders include drop-shipping and
                                  partial-shipping options.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Invoices</h4>
                                <p>
                                  Based on negotiations, generates sales
                                  invoices for clients.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Drop Shipments</h4>
                                <p>
                                  Ship goods directly to the customer using a
                                  purchase order.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Returns</h4>
                                <p>
                                  Process refunds and manage stock information
                                  in real-time of stocks.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Assembly Order</h4>
                                <p>
                                  Fulfill orders using linked assembly in case
                                  of product unavailability.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Order Planning & Promising</h4>
                                <p>
                                  Schedule deliveries and process delivery
                                  orders on time.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Single invoice Multiple Shipments</h4>
                                <p>
                                  Ship multiple products to clients using a
                                  single invoice.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Cancel Unpaid Invoices </h4>
                                <p>
                                  Generate sales invoices for unpaid invoices.
                                </p>
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
                                <h4>Manage Suppliers</h4>
                                <p>
                                  Track raw materials and finalized products
                                  received from suppliers.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Optimize Warehouse </h4>
                                <p>
                                  Optimize warehouse space to store more
                                  inventory.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Track Goods during Transportation </h4>
                                <p>
                                  Track all movements of raw materials and
                                  finished products.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Communication </h4>
                                <p>
                                  Build a sustainable flow of data between
                                  different team members.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Adopt New Technologies </h4>
                                <p>
                                  Accept new technologies to enhance the quality
                                  of processes.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Built-in Intelligence </h4>
                                <p>
                                  Monitor entire inventory with advanced tech
                                  for real-time insights.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Enhance Profitability </h4>
                                <p>
                                  Optimize vendors and avoid unnecessary costs
                                  to enhance overall profits.
                                </p>
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
                        <span>Project Management</span>
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
                                <h4>Project Creation </h4>
                                <p>
                                  Enables the organization to create, schedule,
                                  and manage projects.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Resource Allocations</h4>
                                <p>
                                  Allocate resources for each project based on
                                  priority and utilization.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Time Sheet Management </h4>
                                <p>
                                  Updates job tasks, planning lines, and
                                  timesheet lines in real time.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Budget Management </h4>
                                <p>
                                  Distribute budget on various projects based on
                                  costs and effectiveness.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Resource Consumptions </h4>
                                <p>
                                  Track and record consumption of all resources
                                  with real-time data updates.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Supplies </h4>
                                <p>
                                  Track all supplies utilized for a project
                                  until completion with data monitoring.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project WIP Methods </h4>
                                <p>
                                  Create accurate financial statements and job
                                  estimates.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Progress and Performance </h4>
                                <p>
                                  Generate accurate financial reporting and the
                                  cost of consumed materials.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Invoicing</h4>
                                <p>
                                  Build and share sales invoices for a
                                  particular project.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Merge Duplicate Records</h4>
                                <p>
                                  Delete similar records from the data to
                                  eliminate confusion.
                                </p>
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
                        <span>Inventory Management</span>
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
                                <h4>Item Master Management </h4>
                                <p>
                                  List products or create product cards based on
                                  business.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Bill of Materials </h4>
                                <p>
                                  Generate different bills of parent items or
                                  stock components for sale.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Categorization </h4>
                                <p>Keep a broad view and categorize items. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Attributes </h4>
                                <p>
                                  Distribute attributes of different items to
                                  make them easier to find.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Catalog </h4>
                                <p>
                                  Creates an item card that a company offers
                                  without keeping stock.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Counting </h4>
                                <p>
                                  Track inventory and stocks while maintaining
                                  data in real time.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Availability </h4>
                                <p>
                                  Check out the item availability and influence
                                  with ease.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Transfer </h4>
                                <p>
                                  Streamline all inventory transfer orders used
                                  to move items.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Reservation </h4>
                                <p>
                                  Reserve a few items for sales, service,
                                  purchase, and production orders.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Tracking </h4>
                                <p>
                                  Track products using a serial or lot number of
                                  a recall situation.{" "}
                                </p>
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
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Warehouse Management</span>
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
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Receiving </h4>
                                <p>
                                  Track and record information on all products
                                  received in the warehouse.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Shipments </h4>
                                <p>
                                  Maintains a record of shipments at the
                                  warehouse along with sales order data.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Putting Items Away </h4>
                                <p>
                                  Classify products based on customer demand and
                                  consumption.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Moving Items </h4>
                                <p>
                                  Empower the company to manage goods
                                  transportation between locations.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Picking Items </h4>
                                <p>
                                  Select the items based on data set up for
                                  different purposes.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Automated Data Capture Systems (ADCS) </h4>
                                <p>
                                  Track items moving inside the warehouse using
                                  a barcode.{" "}
                                </p>
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
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Manufacturing Management</span>
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
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Planning</h4>
                                <p>
                                  Plan, suggest changes, and balance demands
                                  based on the supply chain.{" "}
                                </p>
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
                                <p>
                                  Build the strategy for manufacturing,
                                  distribution, and procurement.
                                </p>
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
                                <p>
                                  Maximize sales, push production limits, and
                                  enable demand forecasts.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>
                                  Creation of Production Order from Sales Order
                                </h4>
                                <p>
                                  Generate production orders with the
                                  specifications of the sales orders.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Order Planning</h4>
                                <p>
                                  Forecast sales and product demand utilizing
                                  BOM (Bill of Material).{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>MRP & MPS</h4>
                                <p>
                                  Automate the supply chain using the MRP and
                                  MPS (Master Production Schedule.)
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Requisition Worksheet</h4>
                                <p>
                                  Create supply chain data and detect demand for
                                  refilled items.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Calculate Work Centre Calendar</h4>
                                <p>
                                  Rescheduled work center calendar with an
                                  unexpected change in plan.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Availablity</h4>
                                <p>
                                  You can learn more about a specific item's
                                  influence and availability.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Order</h4>
                                <p>
                                  Create production orders with ease - manually
                                  or automatically.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Subcontracting</h4>
                                <p>
                                  Outsource required and preferred processes or
                                  operations.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Consumption & Output</h4>
                                <p>
                                  Record the consumption of resources and
                                  materials.{" "}
                                </p>
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
                  <h3>Finance Management</h3>
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
                  <h3>Sales and Marketing</h3>
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
                  <h3>Supply Chain Management</h3>
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
                  <h3>Project Management</h3>
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
                  <h3>Inventory Management</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Project-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Project"
                  role="tab"
                  aria-controls="v-pills-Project"
                  aria-selected="false"
                >
                  <h3>Warehouse Management</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Manufacturing-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Manufacturing"
                  role="tab"
                  aria-controls="v-pills-Manufacturing"
                  aria-selected="false"
                >
                  <h3>Manufacturing Management</h3>
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
                          <h4>Internal Transactions</h4>
                          <p>
                            {" "}
                            Manage and customize internal transactions with
                            restricted access.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cash flow Forecasting</h4>
                          <p>
                            Predict Sales and Expenses analyzing cash balances
                            and account schedules.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Budgeting</h4>
                          <p>
                            Control and monitor overall business finances with
                            accurate budgeting.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Costing</h4>
                          <p>
                            Reconcile inventory and manufacturing costs
                            utilizing the general ledger.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Consolidation & Multi-Companies</h4>
                          <p>
                            Manage multiple business accounts to analyze company
                            finances.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Costs and Income Allocation</h4>
                          <p>
                            Allocate resources based on income using a common
                            journal.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Banking</h4>
                          <p>
                            Monitor bank account transactions by integrating a
                            banking add-on.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cost Accounting</h4>
                          <p>
                            Distribute the budget by planned and actual costs of
                            projects.{" "}
                          </p>
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
                          <p>
                            Control and manage fixed assets for optimum ROI.{" "}
                          </p>
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
                          <p>
                            Receive payments, collect balances, and settle bank
                            accounts with ease.{" "}
                          </p>
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
                          <p>
                            Manage outgoing payments, track cheques, and make
                            instant payments.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>General Ledger</h4>
                          <p>
                            Manage Credit and Debit transactions to get complete
                            financial data.
                          </p>
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
                          <h4>Customer management</h4>
                          <p>
                            Manage your customers, resolve their queries, and
                            build a good relationship.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Quote</h4>
                          <p>
                            Create, edit, and send sales invoices to clients
                            before final prices.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales order</h4>
                          <p>
                            Craft sales orders include drop-shipping and
                            partial-shipping options.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Invoices</h4>
                          <p>
                            Based on negotiations, generates sales invoices for
                            clients.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Drop Shipments</h4>
                          <p>
                            Ship goods directly to the customer using a purchase
                            order.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Returns</h4>
                          <p>
                            Process refunds and manage stock information in
                            real-time of stocks.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Assembly Order</h4>
                          <p>
                            Fulfill orders using linked assembly in case of
                            product unavailability.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning & Promising</h4>
                          <p>
                            Schedule deliveries and process delivery orders on
                            time.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Single invoice Multiple Shipments</h4>
                          <p>
                            Ship multiple products to clients using a single
                            invoice.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cancel Unpaid Invoices </h4>
                          <p>Generate sales invoices for unpaid invoices.</p>
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
                          <h4>Manage Suppliers</h4>
                          <p>
                            Track raw materials and finalized products received
                            from suppliers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Optimize Warehouse </h4>
                          <p>
                            Optimize warehouse space to store more inventory.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Track Goods during Transportation </h4>
                          <p>
                            Track all movements of raw materials and finished
                            products.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Communication </h4>
                          <p>
                            Build a sustainable flow of data between different
                            team members.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Adopt New Technologies </h4>
                          <p>
                            Accept new technologies to enhance the quality of
                            processes.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Built-in Intelligence </h4>
                          <p>
                            Monitor entire inventory with advanced tech for
                            real-time insights.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Enhance Profitability </h4>
                          <p>
                            Optimize vendors and avoid unnecessary costs to
                            enhance overall profits.
                          </p>
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
                          <h4>Project Creation </h4>
                          <p>
                            Enables the organization to create, schedule, and
                            manage projects.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Allocations</h4>
                          <p>
                            Allocate resources for each project based on
                            priority and utilization.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Time Sheet Management </h4>
                          <p>
                            Updates job tasks, planning lines, and timesheet
                            lines in real time.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Budget Management </h4>
                          <p>
                            Distribute budget on various projects based on costs
                            and effectiveness.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Consumptions </h4>
                          <p>
                            Track and record consumption of all resources with
                            real-time data updates.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Supplies </h4>
                          <p>
                            Track all supplies utilized for a project until
                            completion with data monitoring.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project WIP Methods </h4>
                          <p>
                            Create accurate financial statements and job
                            estimates.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Progress and Performance </h4>
                          <p>
                            Generate accurate financial reporting and the cost
                            of consumed materials.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Invoicing</h4>
                          <p>
                            Build and share sales invoices for a particular
                            project.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>
                            Delete similar records from the data to eliminate
                            confusion.
                          </p>
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
                          <h4>Item Master Management </h4>
                          <p>
                            List products or create product cards based on
                            business.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Bill of Materials </h4>
                          <p>
                            Generate different bills of parent items or stock
                            components for sale.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Categorization </h4>
                          <p>Keep a broad view and categorize items. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Attributes </h4>
                          <p>
                            Distribute attributes of different items to make
                            them easier to find.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Catalog </h4>
                          <p>
                            Creates an item card that a company offers without
                            keeping stock.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Counting </h4>
                          <p>
                            Track inventory and stocks while maintaining data in
                            real time.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availability </h4>
                          <p>
                            Check out the item availability and influence with
                            ease.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Transfer </h4>
                          <p>
                            Streamline all inventory transfer orders used to
                            move items.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Reservation </h4>
                          <p>
                            Reserve a few items for sales, service, purchase,
                            and production orders.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Tracking </h4>
                          <p>
                            Track products using a serial or lot number of a
                            recall situation.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Project"
                  role="tabpanel"
                  aria-labelledby="v-pills-Project-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Receiving </h4>
                          <p>
                            Track and record information on all products
                            received in the warehouse.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Shipments </h4>
                          <p>
                            Maintains a record of shipments at the warehouse
                            along with sales order data.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Putting Items Away </h4>
                          <p>
                            Classify products based on customer demand and
                            consumption.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Moving Items </h4>
                          <p>
                            Empower the company to manage goods transportation
                            between locations.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Picking Items </h4>
                          <p>
                            Select the items based on data set up for different
                            purposes.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Automated Data Capture Systems (ADCS) </h4>
                          <p>
                            Track items moving inside the warehouse using a
                            barcode.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Manufacturing"
                  role="tabpanel"
                  aria-labelledby="v-pills-Manufacturing-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Planning</h4>
                          <p>
                            Plan, suggest changes, and balance demands based on
                            the supply chain.{" "}
                          </p>
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
                          <p>
                            Build the strategy for manufacturing, distribution,
                            and procurement.
                          </p>
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
                          <p>
                            Maximize sales, push production limits, and enable
                            demand forecasts.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Creation of Production Order from Sales Order</h4>
                          <p>
                            Generate production orders with the specifications
                            of the sales orders.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning</h4>
                          <p>
                            Forecast sales and product demand utilizing BOM
                            (Bill of Material).{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>MRP & MPS</h4>
                          <p>
                            Automate the supply chain using the MRP and MPS
                            (Master Production Schedule.)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Requisition Worksheet</h4>
                          <p>
                            Create supply chain data and detect demand for
                            refilled items.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Calculate Work Centre Calendar</h4>
                          <p>
                            Rescheduled work center calendar with an unexpected
                            change in plan.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>
                            You can learn more about a specific item's influence
                            and availability.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Order</h4>
                          <p>
                            Create production orders with ease - manually or
                            automatically.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Subcontracting</h4>
                          <p>
                            Outsource required and preferred processes or
                            operations.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Consumption & Output</h4>
                          <p>
                            Record the consumption of resources and materials.{" "}
                          </p>
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
                  <Link href="/dynamics-365-business-central-features/">
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
                <h3>Simplify Operations</h3>
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
                <h3>Full Data Security </h3>
                <p>
                  All your data is safe and secured with the trust of{" "}
                  <Link href="/products/microsoft-azure/">
                    <a>Microsoft Azure</a>
                  </Link>{" "}
                  - Microsoft Cloud Services. Business Central follows an
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
                <Link href="/contact-us/">
                  <a className="btn btn-md">
                    {" "}
                    Connect with the Business Central Expert
                  </a>
                </Link>
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
                <Link href="/dynamics-365-business-central-implementation/">
                  <a>
                    <div className="gr">
                      <img
                        src="/img/home/Implementation-icon.png"
                        alt="Business Central Implementation Icons"
                      />
                      <video autoPlay muted loop>
                        <source
                          src="/video/Implementation-icon.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <h3>
                      Business Central <br /> Implementation
                    </h3>
                    <p>
                      Supercharge your business operations with a tailored
                      Business Central implementation to get maximum growth,
                      streamlined revenue and enhanced performance.{" "}
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
                <Link href="/dynamics-365-business-central-upgrade/">
                  <a>
                    <div className="gr">
                      <img
                        src="/img/home/Upgrade-icon.png"
                        alt="Business Central Upgrade Icons"
                      />
                      <video autoPlay muted loop>
                        <source
                          src="/video/Upgrade-icon.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <h3>
                      Business Central <br /> Upgrade
                    </h3>
                    <p>
                      Modernize your system while simplifying processes by
                      upgrading your legacy system to Business Central - an
                      advanced solution for modern businesses.{" "}
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
                <Link href="/dynamics-365-business-central-support/">
                  <a>
                    <div className="gr">
                      <img
                        src="/img/home/Support-icon.png"
                        alt="Business Central Support Icons"
                      />
                      <video autoPlay muted loop>
                        <source
                          src="/video/Support-icon.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <h3>
                      Business Central <br /> Support
                    </h3>
                    <p>
                      Get consistent Business Central support to operate the
                      business without any bugs, issues, or unexpected
                      interruptions from our certified consultants.
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
                    Business Central <br /> Essentials
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
                <p style={{ marginBottom: "30px" }}>
                  For more detailed{" "}
                  <Link href="/dynamics-365-business-central-pricing-licensing/">
                    <a>Business Central pricing</a>
                  </Link>{" "}
                  or any additional information, feel free to contact our team.{" "}
                </p>
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
                  Other than trust, reliable services, and competitive pricing,{" "}
                  <br /> below are the few points that make us superior in{" "}
                  <Link href="/products/microsoft-dynamics-365/">
                    <a>Microsoft Dynamics 365</a>
                  </Link>{" "}
                  market.
                </p>
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
                    src="/img/business-centric-solutions.png"
                    alt="business-centric-solutions"
                  />
                </div>
                <div className="rig">
                  <h3>Business-Centric Solutions</h3>
                  <p>
                    We personalize Business Central based on your unique
                    business and its operations to match up with market needs
                    and customer demands.{" "}
                  </p>
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
                  <p>
                    As a{" "}
                    <Link href="/">
                      <a>Microsoft Dynamics Partner</a>
                    </Link>
                    , we have 150+ Microsoft-certified Dynamics 365 consultants.
                    We are available to help you resolve any issue and build
                    growth strategies.{" "}
                  </p>
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
                  <p>
                    Dynamics Square USA has sufficient resources and
                    infrastructure to support growing businesses with Business
                    Central{" "}
                    <Link href="/our-services/dynamics-365-support-services/">
                      <a>Dynamics 365 support services</a>
                    </Link>
                    .{" "}
                  </p>
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
                  <p>
                    Based on the complexity of a business issue or interruption,
                    we do offer on-site support services for the utmost customer
                    satisfaction at affordable prices.{" "}
                  </p>
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
                    We are the USA's reliable and trusted{" "}
                    <Link href="/microsoft-dynamics-365-partner/">
                      <a>Microsoft Dynamics 365 partner</a>
                    </Link>
                    , helping businesses work to their full potential while
                    scaling operations for enhanced growth.
                  </p>
                  <Link href="/schedule-a-demo/">
                    <a className="btn btn-md">
                      Yes, I want to Scale My Business!
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
            <div className="col-lg-6 align-self-center">
              <div className="bc-more-sec">
                <h2>
                  Reap Supreme Benefits by Modernizing Business Operations{" "}
                </h2>
                <p>
                  Business Central does 80% of your work that comes under
                  business management so that you can focus on growing the
                  business rather than streamlining different operations. The
                  rest (20%) is for you, 10% to explore your business for more
                  growth opportunities, and the remaining 10% to supervise the
                  entire business, whether everything is working fine or not.
                  This is one of the benefits you will get after{" "}
                  <Link href="/dynamics-365-business-central-implementation/">
                    <a>Business Central implementation</a>
                  </Link>
                  . However, some other key benefits are listed below:
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
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>Unify Data for Easy Access</span>
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                        <p>
                          The best part about cloud-based ERPs is the
                          centralized data servers that let businesses store
                          their entire data in a unified storage system. You can
                          easily collect data from different departments on the
                          same server, and your team can fetch the data whenever
                          required based on the level of access they have.
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
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="bi bi-check-lg"></i>
                        <span> Secure your Data from all Cyber Threats</span>
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                        <p>
                          Data for businesses is so important that it has become
                          the lifeline to survive in the fierce competition.
                          With the trust of Microsoft Azure, all your data is
                          safe and secured from all cyber and malicious attacks,
                          replacing the use of on-premises systems.{" "}
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
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>
                          Auto System Update: 100% Free and Effortless{" "}
                        </span>
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                        <p>
                          Modern businesses are subject to updating or upgrading
                          to cope with changing business requirements. Microsoft
                          understands this and releases such updates and
                          upgrades twice a year to help you focus on scaling
                          your business rather than investing hefty amounts in
                          updating the system.{" "}
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
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>
                          Easy Office Integration for Enhanced Productivity{" "}
                        </span>
                      </button>
                    </h3>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                        <p>
                          From personal to professional life, we are surrounded
                          by the applications of Office 365. With Business
                          Central, you can integrate the applications of Office
                          365 and the{" "}
                          <Link href="/products/microsoft-dynamics-365/">
                            <a>Dynamics 365 Ecosystem</a>
                          </Link>{" "}
                          to enhance overall productivity by using the same apps
                          we have been using for decades.{" "}
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
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>
                          Analyze and Visualize Data for Proper Utilization{" "}
                        </span>
                      </button>
                    </h3>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#accordionbc"
                    >
                      <div className="accordion-body">
                        <p>
                          Utilizing the information hidden in the data has
                          become a must-do task because we process a lot of data
                          daily. Dynamics Business Central Integration with
                          Power BI offers a platform that helps businesses
                          analyze and visualize huge piles of data in minutes,
                          leading to data-driven decisions.{" "}
                        </p>
                      </div>
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
                <h2>
                  Check out our Best <br /> Resources for Business Central
                </h2>
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
