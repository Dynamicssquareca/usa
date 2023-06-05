import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";
const Finance = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  const [showItems, setShowItems] = useState(5);
  const data = [
    {
      id: "faq1",
      title: "1. What's included in Dynamics 365 for finance? ",
      content:
        "<p>Dynamics 365 for Finance is an enterprise-grade, cloud-based finance ERP solution which includes the functionality for intelligent financial management, accounting, budgeting, forecasting for finances and inventory, and analytics. If you're looking to build finance and business operation agility, this ERP solution can be the best fit.</p>",
    },
    {
      id: "faq2",
      title:
        "2. How does Microsoft Dynamics 365 help manage the finances of a business? ",
      content:
        '<p><a href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365 Suite</a> helps businesses manage their finances by providing insights and streamlining financial operations for greater transparency and efficiency.</p>'
    },
    {
      id: "faq3",
      title:
        "3. What are some functionalities that differ between Dynamics 365 Finance and Dynamics 365 for Finance and Operations? ",
      content: "<p>Microsoft has rebranded <a href='/products/microsoft-dynamics-365-finance-operations/'>Dynamics 365 F&O</a> into two separate modules - <b>Dynamics 365 Finance</b> and <b>Dynamics 365 Supply Chain Management</b>.</p><p>Dynamics 365 Finance offers tools for financial management and financial reporting, while Dynamics 365 Finance and Operations includes  <a href='/products/dynamics-365-supply-chain-management/'>supply chain management</a> and manufacturing management modules. </p>"
    },
    {
      id: "faq4",
      title: "4. What are the core capabilities of Dynamics 365 Finance? ",
      content: "<p>Dynamics 365 Finance has capabilities such as cash flow management, accounts payable/receivable, budget control, financial reporting/analysis, and more. You can optimize your financial operations on a scale. Connect with your Microsoft Cloud Solution Partner like <b>Dynamics Square</b> (a Dynamics 365 Partner you can trust!) for implementation support. </p>"
    },
    {
      id: "faq5",
      title: "5. Which types of organization can use Dynamics 365? " ,
      content: "<p>Dynamics 365 for Finance is a perfect fit for businesses that deal more with financial management. However, organizations of any size, industry type, or of geographic location can use this ERP solution for smart management of their finances. </p><p>Get in touch with our Dynamics 365 Consultants for Dynamics 365 Consulting and Dynamic 365 Pricing.</p>"
    },
    {
      id: "faq6",
      title: "6. Does D365 for finance aid businesses in compliance? ",
      content: "<p><b>Yes</b>, D365 for Finance includes functionality for managing regulatory compliance. </p>"
    },
    {
      id: "faq7",
      title: "7. What is Microsoft Dynamics 365 Finance? ",
      content: "<p>Microsoft Dynamics 365 Finance is a cloud-based ERP software designed and developed for intelligent financial management. You can use your financial data to improve forecasting and make better decisions. </p><p>Talk to Dynamics 365 partner for Dynamics 365 Consulting Services. The team will briefly explain to you how this finance ERP works and how you can do more with less using this new version of Dynamics 365 Finance and operations (or <b>Dynamics AX</b>).</p>"
    },
    {
      id: "faq8",
      title:
        "8. Is Dynamics 365 Finance the same as Dynamics 365 Business Central? ",
      content: "<p>Dynamics 365 Finance is different from Dynamics 365 Business Central, which is an all-in-one ERP designed for small to medium-sized businesses. <a href='/products/dynamics-365-business-central/'>Business Central </a> is a basic version of Dynamics 365 Finance, which is a fully integrated finance management solution.</p>"
    },
    {
      id: "faq9",
      title:
        "9. Which version of Dynamics 365 should I use for my company: Finance or Business Central?",
      content: "<p>The choice between Dynamics 365 Finance and Dynamics 365 Business Central depends on the size and complexity of your business operations. Contact a <a href='/microsoft-dynamics-365-partner/'>Dynamics 365 Partner</a> like Dynamics Square for its implementation and customization.</p>"
    },
    {
      id: "faq10",
      title: "10. Is Dynamics 365 Finance the same as Dynamics AX? ",
      content: "<p>Dynamics 365 Finance is the successor to Dynamics AX and has been built on the same codebase after several enhancements and upgrades.</p><p><b>Note</b>: Microsoft upgraded Dynamics AX to <b>Dynamics 365 F&O</b>, and then recently rebranded D365 F&O into two separate business modules - <b>Dynamics 365 Finance</b> and <b>Dynamics 365 Supply Chain Management</b>.</p>"
    },
    {
      id: "faq11",
      title: "11. Can you integrate Dynamics 365 Finance with other apps? ",
      content: "<p><b>Yes</b>, Dynamics 365 Finance gets fully integrated with other Microsoft apps and third-party software available at AppSource.</p>"
    },
    {
      id: "faq12",
      title: "12. Is Dynamics training available online? ",
      content: "<p><b>Yes</b>, there are online training courses available for Dynamics 365 Finance.</p><p>However, if you need business-oriented training, contact your <b>Microsoft Gold Partner</b>.</p>"
    },
    {
      id: "faq13",
      title: "13. Is my data secure with Dynamics 365 Finance Online? ",
      content: "<p><b>Yes</b>, data is secure with Dynamics 365 Finance Online with built-in Azure security features that adhere to industry-standard protocols."
    },
    {
      id: "faq14",
      title: "14. Is there a trial version to explore Dynamics 365 Finance? ",
      content: "<p><b>Yes</b>, Microsoft offers a <b>FREE</b> trial version for Dynamics 365 apps. Hence, Dynamics 365 Finance is not an exception. The <a href='/schedule-a-demo/'>FREE DEMO</a> allows newcomers to test the software before making an investment. </p>"
    },
    {
      id: "faq15",
      title: "15. Who implements Dynamics 365 Finance? ",
      content: "<p>Dynamics 365 Finance can be implemented by in-house IT teams or by <a href='/microsoft-dynamics-365-partner/'>Microsoft Dynamics Partner</a> such as <b>Dynamics Square</b>.</p>"
    },
    {
      id: "faq16",
      title:
        "16. How much time does it take to Implement Dynamics 365 Finance?",
      content: "<p>The time to <a href='/dynamics-365-finance-implementation/'>Implement Dynamics 365 Finance</a> depends on the scope and complexity of the project. In most cases, it takes a minimum of <b>8</b> to <b>12</b> months, and can be more if operations are complex and spread across various locations.</p>"
    },
    {
      id: "faq17",
      title: "17. What is the role of Dynamics Square in D365 Finance setup?",
      content: "<p>Dynamics Square provides end-to-end support for implementing Dynamics 365 Finance, including configuration, customization, deployment, and <b>post-go-live support</b>.</p>"
    },
    {
      id: "faq18",
      title:
        "18. How does post-deployment support work for Dynamics 365 Finance?",
      content: "<p>Post-deployment support/post-go-live support for Dynamics 365 Finance includes maintenance, training, and technical support provided by the <a href='/contact-us/'>Experts at Dynamics Square</a>.</p>"
    },
    {
      id: "faq19",
      title: "19. Is it easy to find a Microsoft Dynamics 365 Partner?",
      content: "<p><b>Yes</b>, there are many <a href='/microsoft-dynamics-365-partner/'>Microsoft Dynamics 365 Consultants</a> available, and it is easy to find one through online search or through Microsoft's partner directory. For effortless ways, click on: <a rel='nofollow' target='_blank' href='https://publicistpaper.com/how-to-find-a-dynamics-365-partner-for-your-business/'>How to find a Dynamics 365 Partner for your business?</a></p>"
    },
    {
      id: "faq20",
      title: "20. Which industries is Dynamics 365 Finance good for?",
      content: "<p>Dynamics 365 Finance is suitable for industries such as manufacturing and distribution, retail, financial services, e-Commerce, <a href='/industries/microsoft-cloud-for-nonprofit/'>healthcare</a>, non-profits hubs, <a href='/industries/food-and-beverages/'>food and beverages</a>, and more.</p>"
    },
  ];

  const handleLoadMore = () => {
    setShowItems(showItems + 3);
  };

  return (
    <>
      <Head>
        <title>Dynamics 365 Finance & Operations Partner | Demo & Pricing</title>
        <meta
          name="description"
          content="Optimize your finance operations with Microsoft Dynamics 365 Finance. Achieve better financial visibility, make informed decisions, and ensure global compliance.  Call +1 281 899 0865 for a FREE DEMO today."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance/"
        />
      </Head>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="NhoeKnSp7IM"
        onClose={() => setOpen(false)}
      />

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Dynamics 365 Finance</h1>
              <p style={{ marginBottom: "-20px" }}>
                <strong>
                  Maximize Profits. Minimize Risks. Strengthen Financial
                  Visibility{" "}
                </strong>
              </p>
              <p>
                Transform your finance management with Dynamics 365 for Finance.
                Automate financial operations, gain real-time insight and
                minimize financial risks while ensuring compliance with global
                financial regulations.{" "}
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>
                        Get Started <i class="bi bi-arrow-right"></i>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Dynamics-365-Finance-Banner.svg"
                alt="Microsoft Dynamics 365 Finance"
                width={868}
                height={487}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
              <header className="section-header">
                <h2>What is Dynamics 365 Finance? </h2>
                <p>
                  Microsoft Dynamics 365 for Finance is an AI-driven,
                  cloud-based, enterprise-grade finance enterprise planning
                  (ERP) solution. Popularly, this was known as{" "}
                  <b>Dynamics AX</b> or{" "}
                  <Link href="/products/microsoft-dynamics-365-finance-operations/">
                    <a>Dynamics 365 Finance and Operations</a>
                  </Link>{" "}
                  (D365 F&O). As of November 2019, this cloud ERP solution is
                  now available in two separate modules -{" "}
                  <b>Dynamics 365 Finance</b> and{" "}
                  <Link href="/products/dynamics-365-supply-chain-management/">
                    <a>Dynamics 365 Supply Chain Management</a>
                  </Link>
                  .
                </p>
                <p>
                  Companies looking to manage <b>10,000+</b> transactions per
                  day can implement this ERP to improve their business health.
                  Organizations that deal with financials can drive agility and
                  growth using power tools like financial reporting, embedded
                  analytics, and AI-driven insights in D365 Finance.
                </p>
                <p>
                  <strong>
                    Empower your organization with financial tools that
                    streamline finances, improve productivity, and help enhance
                    informed decision-making.{" "}
                  </strong>
                </p>
                <p>
                  Connect with our team for{" "}
                  <Link href="/our-services/dynamics-365-implementation-services/">
                    <a>Dynamics 365 Implementation Services</a>
                  </Link>{" "}
                  and support.{" "}
                </p>
              </header>
            </div>
          </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/Budget.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Budget Forecasting and Planning</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Optimize your production planning, enhance
                          forecasting, increase financial reporting and
                          visibility, and make impactful budgets with accurate
                          financial analysis and insights using Dynamics 365
                          Finance.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/Financials-3.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Financial Management </span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Say hello to Dynamics 365 Finance for efficient
                          financial management, including core financials such
                          as payables, financial statements, receivables, taxes,
                          and record organization.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnews">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/Project.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Project Management </span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Track project status and automate project management
                          operations for strategic impact with Microsoft
                          Dynamics 365 Finance.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/International-Accounting-3.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Cash Flow Prediction </span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Proactively reduce costs and streamline spending with
                          Dynamics 365 Finance. Incorporate automation, budget
                          control, and financial intelligence for better cost
                          management, informed decisions, and growth.
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

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5  align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Capabilities of Microsoft Dynamics 365 Finance </h2>
                <h3>
                  Minimize global financial complexity and risk by simplifying
                  regulatory reporting, electronic invoicing, and global
                  payments. See how you can maximize financial visibility and
                  profitability:{" "}
                </h3>
              </div>

              {/* <div className="downlad_guid">
                        <Link href="#">
                        <span>Download Microsoft Guide</span>
                        </Link>
                     </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6 col-md-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Faster & Informed <br />
                        Decision-Making
                      </h3>
                      <div className="overlay">
                        <p>
                          Integrate financials into core processes and use the
                          built-in artificial intelligence and data-driven tools
                          to improve informed decision-making with Dynamics 365
                          for Finance.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Increased <br />
                        Productivity
                      </h3>
                      <div className="overlay">
                        <p>
                          Strengthen financial and operating models. Accelerate
                          productivity with efficient billing and financial
                          reporting.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Finance <br />
                        Automation
                      </h3>
                      <div className="overlay">
                        <p>
                          Automate finance operations and ensure collaborative
                          finances with Dynamics 365 for Finance Capabilities.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Global-Compliance <br />& Risk Management
                      </h3>
                      <div className="overlay">
                        <p>
                          Improve financial controls, manage global compliances,
                          and minimize financial risks with Dynamics 365 for
                          Finance.{" "}
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
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/finace-video-banner.png"
                    className="fix-im"
                    alt="Dynamics 365 Finance Service"
                    width={570}
                    height={531}
                  />
                  {/* <img
                    src="/img/ico6.svg"
                    className="flot-img"
                    alt="ico6"
                  /> */}
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image
                            src="/img/video-Finance.png"
                            alt="video-Finance"
                            width={390}
                            height={259}
                          />
                          <span className="cente-icns">
                            <img src="/img/play_icons.svg" alt="play_icons" />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Dynamics 365 Finance Service </h2>
                <p>
                  Simplify financials, enhance strategic approach, and build
                  financial intelligence with{" "}
                  <strong>Dynamics 365 Finance Services</strong> from{" "}
                  <Link href="/">
                    <a>Dynamics Square</a>
                  </Link>
                  .
                </p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>
                    Save up to <b>40%</b> when{" "}
                    <b>Implementing Dynamics 365 Finance</b>. Enable smoother
                    financial practices and maximize performance.{" "}
                  </p>
                  <div className="action-content">
                    <Link href="/dynamics-365-finance-implementation/">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>
                    Optimize and simplify core finance processes by upgrading to
                    Dynamics 365 Finance from <b>legacy ERP systems</b>.
                  </p>
                  <div className="action-content">
                    <Link href="/products/microsoft-dynamics-365-finance/">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                    Ensure seamless, uninterrupted, and productive financial
                    flow with our proactive support services.
                  </p>
                  <div className="action-content">
                    <Link href="/products/microsoft-dynamics-365-finance/">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Dynamics 365 Finance Pricing and Licensing </h2>
                <p>
                  Microsoft's Finance solution offers various licensing options.{" "}
                  <Link href="/contact-us/">
                    <a>Contact us</a>
                  </Link>{" "}
                  for the license type that best suits your business needs.
                </p>
              </header>
            </div>
          </div>

          <div className="row gy-4 p-9">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>For First Time Dynamics 365 Implementation</h3>
                <div className="price">
                  $180<span>Per-User/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    An intelligent, automated, and trusted core financial
                    management solution.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>For Subsequent Dynamics 365 Apps </h3>
                <div className="price">
                  $30<span>Per-User/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    An intelligent, automated, and trusted core financial
                    management solution.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="text-center">
                <a
                  rel="nofollow"
                  href="https://go.microsoft.com/fwlink/?LinkId=866544&clcid=0x409"
                  className="btn-get-started scrollto"
                >
                  <span>
                    Click to Download Dynamics 365 Pricing and Licensing Guide
                    from Microsoft
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>
                  Looking for a Trusted Microsoft Dynamics 365 Partner to
                  Implement Dynamics 365 Finance?{" "}
                </h3>
                <p>
                  Whether you're new to Dynamics 365 Finance, already using it,
                  or would like to migrate your operations from{" "}
                  <Link href="/products/microsoft-dynamics-ax/">
                    <a> Dynamics AX</a>
                  </Link>{" "}
                  or Dynamics 365 Finance and Operations to{" "}
                  <b>Dynamics 365 F&SCM</b> or looking for a new Dynamics 365
                  Implementation partner that listens to your problems, talk to
                  our experts. We're always there for you!
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get In Touch</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
              <header className="section-header">
                <h2>Have You Got Questions About Dynamics 365 Finance? </h2>
                <p>Discover Them In Our FAQs Tailored for You!</p>
              </header>
            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqs">
                {data.slice(0, showItems).map((item, index) => (
                  <div key={index} className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                      >
                        {item.title}
                      </button>
                    </h3>
                    <div className="accordion-content"></div>
                    <div
                      id={item.id}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqs"
                    >
                      <div className="accordion-body">
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}

                {showItems < data.length && (
                  <div className="text-center">
                    <a
                      className={`load-more-btn btn-get-started scrollto ${
                        showItems >= data.length - 3 ? "hide" : ""
                      }`}
                      onClick={handleLoadMore}
                    >
                      Load More
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
          <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>
              Whether you are a start-up, an SMB, or an enterprise, the Dynamics
              Square blog is the best place to get inspired and learn more about
              Microsoft Business Applications.
            </p>
          </header>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/pdf/Nucleus-Research.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Nucleus
                        Research Report 2020 - Dynamics 365 Finance
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/forrester.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Forrester
                        Report - The Economic Impact of Dynamics 365 Finance
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Top-8-Trends-Every-CFO-Should-Know.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Top 8 Trends
                        Every CFO Should Know
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/A-New-Approach-to-Evaluating-ERP.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>A New Approach
                        to Evaluating ERP
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Modular-ERP-The-Key-to-Corporate-Agility.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Modular ERP:
                        The Key to Corporate Agility
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Licensing
                        Guide
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
                    <Link href="https://youtu.be/jTgqXkQvv1c">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                        Finance: Collections automation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://youtu.be/jTgqXkQvv1c">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                        Finance: Vendor invoice automation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://youtu.be/V8EErSL028w">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                        Finance: Asset leasing
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Finance;
