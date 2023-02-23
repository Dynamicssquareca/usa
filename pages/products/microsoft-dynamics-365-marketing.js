import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const Marketing = () => {
  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Marketing - A Marketing Automation Tool</title>
        <meta
          name="description"
          content="Dynamics 365 Marketing-a cloud SaaS Marketing Automation tool for sales to design, predict, & deliver the right content via the right channels in real-time."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-dynamics-365-marketing/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mobile-1 align-self-center">
              <h1>Dynamics 365 Marketing</h1>
              <p>Transform customer experience, orchestrate customers' personalized journeys across all touchpoints, strengthen relationships and earn loyalty.</p>
              <div>
                <div className="text-center text-lg-start align-self-center">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started with D365 Marketing </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/marketing-banners.png"
                alt="Dynamics 365 Marketing"
                width={808} height={508}
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
                <h2> What Is Dynamics 365 Marketing?</h2>
                <p>Creative selling and getting people interested in your products or services are the crux of marketing. Dynamics 365 Marketing is a SaaS-based business solution from Microsoft that helps you win these crucial marketing components.<br /><br /><Link href="/products/microsoft-dynamics-crm/">This cloud CRM (Customer Relationship Management) solutions</Link> can seamlessly streamline your sales practices, automate marketing campaigns, and deliver a personalized customer experience through its highly integrated and dynamic dashboards.</p>
              </header>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Begin Customer Experiences Transformation Today!</h2>
              </header>
            </div>
          </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
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
                        <div className="wr-in">
                          <img
                            src="/img/icons_centeralised-source.svg"
                            alt="icons_centeralised-source"
                          />
                        </div>
                        <span>Build Seamless Experiences</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Stay organized and operate at scale with Dynamics 365 Marketing. Utilize the integrated Microsoft Teams chat to collaborate and interact across the whole customer journey. Set up discussions at key points in the trip and stay in touch with coworkers to get rapid feedback.</p>
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
                        <div className="wr-in">
                          <img
                            src="/img/icons_Personalized-Communication-.svg"
                            alt="icons_Personalized-Communication"
                          />
                        </div>
                        <span>AI-Driven Personalized Communication</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                    <p>Delight your customers with AI-driven rich personalization tools and easily create engaging content with <Link href="/products/microsoft-dynamics-365-ai/">AI (Artificial Intelligence)</Link> assistance, improving marketing effectiveness. Act on a 360-degree understanding of the customer using the customer-centric intelligence of D365 Marketing.</p>
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
                        <div className="wr-in">
                          <img
                            src="/img/icons_Journey-Mapping.svg"
                            alt="icons_Journey-Mapping"
                          />
                        </div>
                        <span>Customer Journey Mapping</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Step into your customers' shoes and see your business from their perspective. Dynamics 365 generates visual stories of your customer's interactions with your company or brand, allowing you to take the steps necessary to perform as your customers expect.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnewds">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fi1"
                        aria-expanded="false"
                        aria-controls="fi1"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Email-Templates-.svg"
                            alt="icons_Email-Templates"
                          />
                        </div>
                        <span>Real-time Customer Engagement</span>
                      </button>
                    </h3>
                    <div
                      id="fi1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewds"
                    >
                      <div className="accordion-body">
                       <p>Start designing customer-led experiences, orchestrating real-time journeys, and delivering one-on-one experiences by taking advantage of real-time customer data changes to simplify customer journey management with Dynamics 365 Marketing.</p>
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
                        data-bs-target="#fi2"
                        aria-expanded="false"
                        aria-controls="fi2"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Customer-Feedback-.svg"
                            alt="icons_Customer-Feedback"
                          />
                        </div>
                        <span>Earn Customer Loyalty</span>
                      </button>
                    </h3>
                    <div
                      id="fi2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewds"
                    >
                      <div className="accordion-body">
                        <p>Engage one-on-one with your customers using personalized journeys triggered by customer interactions or end-to-end design journeys that increase engagement and earn customer loyalty. Use built-in event triggers for the same purpose or create your own. Dynamics 365 Marketing allows you to turn all customer interactions into loyal customers.</p>
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
                        data-bs-target="#fi3"
                        aria-expanded="false"
                        aria-controls="fi3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Automated-Lead-Scoring.svg"
                            alt="icons_Automated-Lead-Scoring"
                          />
                        </div>
                        <span>Automated Lead Scoring</span>
                      </button>
                    </h3>
                    <div
                      id="fi3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewds"
                    >
                      <div className="accordion-body">
                      <p>Lead scoring is crucial to transform converted leads into potential customers. Dynamics 365 is the best lead-scoring automation tool that processes lead-scoring through different marketing campaigns. This software's smooth and efficient mode of lead scoring helps you bring more potential customers on board.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-02">
                <h2>
                What is included <br />
                in this Marketing module?
                </h2>
              </div>
              <div className="custom-p-001">
                <p>
                Dynamics 365 for Marketing offers a comprehensive marketing bundle. Here are the components that make up this ultimate marketing tool.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="finace-acc finace-acc-market">
                <div className="accordion" id="accnewss">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins1"
                        aria-expanded="false"
                        aria-controls="fins1"
                      >
                        <div className="wr-in">
                          <img src="/img/Group11.png" alt="Group11" />
                        </div>
                        <span>Core Marketing</span>
                      </button>
                    </h3>
                    <div
                      id="fins1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                       <p>This includes a variety of components to streamline your marketing campaign, including marketing forms, segmentation and customer journey tracking, email management, lead management, and marketing analytics.</p>
                      </div>
                    </div>
                  </div>
                  <hr className="cls" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins2"
                        aria-expanded="false"
                        aria-controls="fins2"
                      >
                        <div className="wr-in">
                          <img src="/img/Group12.png" alt="Group12" />
                        </div>
                        <span>Event Management</span>
                      </button>
                    </h3>
                    <div
                      id="fins2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        <p>This tool has a distinctive feature that aids the user in not only visualizing events but also keeping track of various activities that are related to those events.</p>
                      </div>
                    </div>
                  </div>
                  <hr className="cls" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins3"
                        aria-expanded="false"
                        aria-controls="fins3"
                      >
                        <div className="wr-in">
                          <img src="/img/Group13.png" alt="Group13" />
                        </div>
                        <span>Forms Pro</span>
                      </button>
                    </h3>
                    <div
                      id="fins3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                       <p>With the help of this specific feature, users can design online forms for marketing purposes. Users can use this specific function to create forms for purposes other than direct marketing, such as surveys, and others.</p>
                      </div>
                    </div>
                  </div>
                  <hr className="cls" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins4"
                        aria-expanded="false"
                        aria-controls="fins4"
                      >
                        <div className="wr-in">
                          <img src="/img/Group14.png" alt="Group14" />
                        </div>
                        <span>Add-Ons</span>
                      </button>
                    </h3>
                    <div
                      id="fins4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                       <p>Dynamics 365 Marketing comes with some add-ons; Dynamic 365 portals - a platform that allows all the users such as customers, clients, or team members to interact and quickly begin communicating; another add-on is Dynamics 365 Connector - for LinkedIn Lead Generation Forms: you can import the leads that have been generated through the lead tools on LinkedIn.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Marketing Pricing</h2>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-5 col-md-5">
              <div className="box box-22">
                <h3>Dynamics 365 Marketing</h3>
                <p>
                  <b>
                  For businesses that do not utilize any other Dynamics 365 applications 
                  </b>
                </p>
                <div className="price">
                  $1,500<span>Per-User/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  1,000 SMS messages, 10,000 contacts, and 100,000 interactions are also included. 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="box box-22">
                <h3>Dynamics 365 Marketing Attach</h3>
                <p>
                  <b>
                  For companies who have a suitable Dynamics 365 application
                    <sup>3</sup>
                  </b>
                </p>
                <div className="price">
                  $750<span>Per Tenant/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Includes 1,000 SMS messages, 100,000 interactions, and 10,000 contacts.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Started Now!</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 m--t align-self-center">
              <div className="wy-sultion-left-head">
                <h2>
                Elevate Your Marketing Capabilities with D365 Marketing 
                </h2>
                <p>Improve your customer experiences, eliminate repetitive & redundant tasks, and keep the business running smoothly.</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Personalized Customer <br />
                        Journey
                      </h3>
                      <div className="overlay">
                        <p>
                        Utilize past interactions to optimize your offer and increase the likelihood of your potential customers making a purchase. 
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      360-Degree <br />
                      Customer View 
                      </h3>
                      <div className="overlay">
                        <p>
                        D365 Marketing is a tool that gives marketers and salespeople a complete view of the customer throughout the entire marketing and sales cycle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      More Lead
                        <br />
                        Generation
                      </h3>
                      <div className="overlay">
                        <p>
                        Create omnichannel campaigns using email, social media, landing pages, web, phone calls, and personal events and get more done with less.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Increased Profitability
                        <br />
                        & ROI (return on investment)
                      </h3>
                      <div className="overlay">
                        <p>
                        By combining all the functionalities into one place, this Marketing tool allows you to minimize management expenses and help you optimize the use of resources.
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
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Maximize your business potentials</h3>
                <p>
                  Drive new business challenges by implementing Dynamics 365 Marketing
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom07">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/microosoft-partner.png"
                  alt="Microosoft Partner"
                  width={625} height={651}
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h3>Why Pick Dynamics Square as Your Partner for Dynamics 365 Implementation?</h3>
              </div>
              <div className="custom-p-001">
                <p>Since 2011, we have developed and deployed Microsoft technologies-based industry solutions. And because of our real industry experience and knowledge of Microsoft's disruptive technologies, we offer services and solutions that are tailored to your business needs and the demand of today's digital world, powering your enterprise to become more resilient and sustainable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>
                  Have you got
                  <br />
                  questions about Dynamics 365 Marketing?
                </h2>
                <p>Scroll Through the Best Answers Tailored for You!</p>
              </header>
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
                     What is D365 marketing?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Dynamics 365 for Marketing is a Marketing Automation solution that facilitates the buyer's journey from Prospect to Customer. Easy-to-use, tightly integrated with <Link href="/products/microsoft-dynamics-365-sales/">Dynamics 365 for Sales</Link> and other modules, D365 for Marketing has built-in analytics.
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
                    >Which three abilities are present in the marketing section of Dynamics 365? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      In Dynamics 365, you can manage emails and journeys. Management of events. Using Dynamics 365 Customer Voice to create surveys. Using Dynamics 365 Marketing to analyze insights.
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
                      data-bs-target="#faq-content-3"
                    >Is Dynamics 365 a CRM or ERP (Enterprise Resource Planning)?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>CRM and ERP components are combined with productivity tools and artificial intelligence in <Link href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</Link>, a cloud-based business application suite.</p>
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
                    >Is Dynamics 365 better than Salesforce?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Microsoft Dynamics 365 is a bit easier to use for reporting when compared to Salesforce in terms of UI (User Interface) and customization. However, if you want or need an on-premises deployment, Microsoft Dynamics 365 is the only way to go—Salesforce is fully cloud-based.</p>
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
                    >How much does CRM integration like Dynamics 365 Marketing or Sales cost?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>It costs between $5,000 and $20,000 to integrate a CRM system like Dynamics 365 Marketing or Dynamics 365 Sales, depending on whether it is a legacy system or a Web service. If you are integrating legacy systems, budget a higher number, and if you are integrating Web services, budget a lower number.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketing;
