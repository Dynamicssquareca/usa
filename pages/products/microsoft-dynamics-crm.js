import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const MicrosoftDynamicsCrm = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Microsoft Dynamics CRM Partner</title>
        <meta
          name="description"
          content="Looking for a reliable Microsoft Dynamics  CRM partner? Count on us to optimize sales, foster customer connections, and enhance service quality."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-dynamics-crm/"
        />
        <meta property="og:type" content="product" />

        <meta property="og:title" content="Microsoft Dynamics  CRM Partner" />

        <meta property="og:description" content="Looking for a reliable Microsoft Dynamics  CRM partner? Count on us to optimize sales, foster customer connections, and enhance service quality." />

        <meta property="og:url" content="https://www.dynamicssquare.com/products/microsoft-dynamics-crm/" />

        <meta property="og:site_name" content="Dynamics Square USA" />

        <meta property="og:image" content="https://www.dynamicssquare.com/img/crm-new-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:title" content="Microsoft Dynamics  CRM Partner" />

        <meta property="twitter:description" content="Looking for a reliable Microsoft Dynamics  CRM partner? Count on us to optimize sales, foster customer connections, and enhance service quality." />

        <meta property="twitter:url" content="https://www.dynamicssquare.com/products/microsoft-dynamics-crm/" />

        <meta property="twitter:image" content="https://www.dynamicssquare.com/img/crm-new-banner.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Microsoft Dynamics  CRM Partner",
              "image": "https://www.dynamicssquare.com/img/crm-new-banner.png/",
              "description": "Looking for a reliable Microsoft Dynamics  CRM partner? Count on us to optimize sales, foster customer connections, and enhance service quality.",
              "brand": {
                "@type": "Brand",
                "name": "Dynamics Square USA"
              },
              "offers": {
                "@type": "AggregateOffer",
                "url": "https://www.dynamicssquare.com/products/microsoft-dynamics-crm/",
                "priceCurrency": "USD",
                "lowPrice": "50",
                "highPrice": "135"
              }

            }),
          }}
        />
      </Head>

      <section className="Solution-banner pp-rrea new-main-heading">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1 className="small-h">Microsoft Dynamics  CRM</h1>
              <h2>Build Relationships <br /> and Drive ROI</h2>
              <p>Supercharge sales, engage customers with personalized interactions, drive a better customer experience, and accelerate business growth with Microsoft Dynamics CRM.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started Now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="banner-ne-im-t">
                <div className="bf">
                  <Image
                    src="/img/crm-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/crm-new-banner.png"
                  alt="crm"
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
                  <source src="/video/crm-video.mp4"></source>
                </video>
              </div>
            </div>
            <div className="col-lg-1 align-self-center">
              {/* <div className="brder-hr"></div> */}
            </div>
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>What is Microsoft Dynamics  CRM?</h2>
                <p>Microsoft Dynamics  CRM (Customer Relationship Management) is a set of different solutions to help you streamline all operations of sales, marketing, and customer service.</p>
                <p>Leveraging the capabilities of Microsoft Dynamics 365 CRM, you can unify the data, simplify various processes, build long-lasting relationships with customers, enhance customer engagement, and supercharge productivity.</p>
                <p>Moreover, Microsoft Dynamics CRM integration with Microsoft Dynamics ERP helps you have a more comprehensive business solution.</p><br/>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Microsoft CRM is not limited to big businesses anymore</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Manage leads and build relationships</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Close deal faster with tailored customer interaction</span></div>
              </div>
            </div>

          </div>
          <div className="row pp-top-60 pp-bot-60 justify-content-center">
            <div className="col-lg-9" >
              <div className="center-info-fq text-center" style={{ backgroundColor: "#f7f9fb" }}>
                <p><strong>Note:</strong> In a recent update, Microsoft renamed it  <Link href="/products/dynamics-365-customer-engagement/"><a>Microsoft Dynamics 365 Customer Engagement</a></Link> (CE), but business owners, consultants, and decision makers still call it Dynamics 365 CRM. With the updated name, Microsoft has started to primarily focus on offering cloud services while reducing its dependency on on-premises deployment.</p>
              </div>
            </div>
          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Connect Sales and Marketing</h2>
                <p>Microsoft Dynamics CRM unifies the data, systems, and processes of different sales and marketing operations to offer an exceptional experience to a customer through the sales cycle.</p>
                <p>Collaborating in sales and marketing helps a business understand the exact requirements of the customer and furnish them using the right communication channel.</p>
                <p>Dynamics 365 CRM empowers the team to prioritize the right leads, nurture existing leads, and boost sales numbers.</p>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Unify data system and processes.</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Track customer throughout the sales cycle</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Promotes sales and marketing team collaboration</span></div>
              </div>
            </div>

            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/crm-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Connect-Sales-and-Marketing.png"
                  alt="Connect-Sales-and-Marketing"
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
                    src="/img/crm-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Build-Lasting-Customer.png"
                  alt="Build-Lasting-Customer"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Build Lasting Customer Relationships</h2>
                <p>Build stronger relationships with customers by combining different processes of sales and customer support. By combining the data, you will be able to understand customer demands and check for fluctuating marketing trends to build trust among customers.</p>
                <p>You can also track the customer across different milestones of the sales and support journey to resolve their queries in real-time, leading you to build loyalty and exceptional customer satisfaction.</p>
                <p>Microsoft Dynamics 365 CRM is a solution for modern businesses that allows customers  to connect with the business from anywhere and anytime, leveraging mobile applications.</p>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Understand customer demands</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Track fluctuating market trends</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Build loyalty and offer customer satisfaction</span></div>
              </div>
            </div>




          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Simplify Customer Journey</h2>
                <p>Collect and collaborate on the customer data collected through different sources of communication channels to know their preferences and changing trends.</p>
                <p>Such data can help a business approach a customer with tailored interactions and offers to build loyalty and gain trust.</p>
                <p>You can even track, collect, and utilize the historical data of a customer to understand and identify a potential lead.</p>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Unifies different communication channel</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Offer tailored user interaction</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Maintain customer historical data</span></div>
              </div>
            </div>

            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/crm-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Simplify-Customer-Journey.png"
                  alt="Simplify-Customer-Journey"
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
                    src="/img/crm-o-shadow.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/Boost-Sales-Productivity.png"
                  alt="Boost-Sales-Productivity"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Boost Sales Productivity</h2>
                <p>Get full visibility across entire sales activities and make real-time informed decisions to enhance the productivity of your sales team. Also, it lets you get customer insights so that you can focus on the resources to generate better sales revenue.</p>
                <p>You can also distribute the resources and budgets accordingly while forecasting future sales and upcoming opportunities for growth.</p>
                <p>Dynamics 365 CRM empowers sales executives to track, follow-up, and nurture leads until they become resourceful customers.</p>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Get full visibility of sales activities</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Make real-time decisions with insights</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Forecast future sales</span></div>
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
                <h2>Dynamics  CRM Benefits: Leverage AI to Close more Sales</h2>
                <p>Microsoft Dynamics  CRM software offers numerous benefits, including the ability to strengthen customer relationships and close more deals utilizing predictive insights.</p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/Understand-your-Customer.png" alt="Understand-your-Customer" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Understand your Customer</h3>
                  <p>Embedded generative AI enables you to centralize and utilize the data to understand customer behavior and market trends. It will help you personalize your interactions with customers to close more deals.</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/Go-Beyond-Innovation.png" alt="Go-Beyond-Innovation" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Go Beyond Innovation</h3>
                  <p>Dynamics  CRM comes with the advanced capabilities of AI, BI, IoT, and Copilot Assistant to help you move forward with cutting-edge innovation to match up with evolving needs.</p>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/Supercharge-Overall-Efficiency.png"
                    alt="Supercharge-Overall-Efficiency"
                    width={94} height={94}
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Supercharge Overall Efficiency</h3>
                  <p>Establish a central communication bridge for consistent communication between team members, resulting in enhanced productivity and lower operational costs.</p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/Adapt-to-the.png" alt="Adapt-to-the" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Adapt to the Latest Update</h3>
                  <p>Cloud deployment enables the business to embrace the change in technology, innovation, and fluctuating market demands and adapt to offer exceptional performance.</p>
                </div>
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
                <h2>Microsoft Dynamics  CRM Applications: Modern Solutions for Complex Businesses</h2>
                <p>Microsoft Dynamics 365 CRM, or Dynamics 365 Customer Engagement, consists of four major solutions, which are:</p>
              </div>
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
                          <img style={{ width: '80px' }}
                            src="/img/Dynamics-365-Sales-new-ic.png"
                            alt="Dynamics-365-Sales-new-ic"
                          />
                        </div>
                        <span>Dynamics 365 Sales</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p><Link href="/products/microsoft-dynamics-365-sales/"><a>Microsoft Dynamics 365 Sales</a></Link> is a powerful solution to streamline different sales operations, eliminating the complexities of the system. It empowers the sales executives to generate more sales, build strong relationships with customers, and close deals faster.</p>
                        <ul>
                          <li>Track customers throughout the sales journey</li>
                          <li>Nurture the sales leads</li>
                          <li>Leverage AI to automate repetitive tasks</li>
                          <li>Monitor leads and customer interactions</li>
                          <li>Provides a 360-degree view of customers</li>
                        </ul>
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
                          <img style={{ width: '80px' }}
                            src="/img/Dynamics-365-Customer-Service-n.png"
                            alt="Dynamics-365-Customer-Service-n"
                          />
                        </div>
                        <span>Dynamics 365 Customer Service</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p><Link href="/products/microsoft-dynamics-365-customer-service/"><a>Microsoft Dynamics 365 Customer Service</a></Link> offers an advanced set of capabilities to offer an exceptional level of customer experience while utilizing the resources. It enables you to offer a personalized experience to all customers, improve customer satisfaction, and manage multiple requests with ease.</p>
                        <ul>
                          <li>Comes with an AI-powered Microsoft Copilot</li>
                          <li>Offers knowledge management tools</li>
                          <li>Gives an omnichannel experience</li>
                          <li>Enhance agent productivity and performance</li>
                          <li>Maximize operational efficiency</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnewasd">
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
                          <img style={{ width: '80px' }}
                            src="/img/Dynamics-365-Customer-Insights-n.png"
                            alt="Dynamics-365-Customer-Insights-n"
                          />
                        </div>
                        <span>Dynamics 365 Field Service</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        <p><Link href="/products/microsoft-dynamics-365-field-service/"><a>Microsoft Dynamics 365 Field Service </a></Link> enables the organization to deliver great on-site customer service. You can schedule tasks, automate processes, allocate resources, and track all issue resolution tickets until they get resolved.</p>
                        <ul>
                          <li>Real-time issue tracking and resolution</li>
                          <li>Comes with a mobile app to make access easy</li>
                          <li>Integrate Microsoft Teams to enable instant support</li>
                          <li>Automate task scheduling and track status</li>
                          <li>Offers the right set of tools to all technicians</li>

                        </ul>
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
                        <div className="wr-in">
                          <img style={{ width: '80px' }}
                            src="/img/Dynamics-365-Field-Service-n.png"
                            alt="Dynamics-365-Field-Service-n"
                            width={48}
                            height={48}
                          />
                        </div>
                        <span>Dynamics 365 Customer Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        <p>Microsoft Dynamics 365 Customer Insights lets you track your customers and collect their data. It enables you to run marketing campaigns and record customer behavior to perform data analysis for a more personalized approach.</p>
                        <ul>
                          <li>Record customer interactions and behaviors</li>
                          <li>Unifies data of different applications</li>
                          <li>Run marketing campaigns using customer data</li>
                          <li>Understand customer demands using AI</li>
                          <li>Triggers personalized content for customers</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
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
                <h3>Transform your customer experience and drive business impact  <span>Empower your sales team with AI-powered insights</span>
                </h3>
                <p>The solutions in Dynamics 365 CRM will revolutionize your business and push you to generate maximum revenue while meeting customer expectations.</p>

                <a href="#exampleModal"

                  data-bs-toggle="modal" className="btn btn-md" >Start your Free Trial Today!</a>

              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>Microsoft Dynamics  CRM Solutions</h2>
                <p>Employ our reliable and trustworthy services to supercharge your customer management game.</p>
              </div>
            </div>
          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="/our-services/dynamics-365-implementation-services/">
                  <a>
                    <div className="gr">
                      <img src="/img/home/Implementation-icon.png" alt="Implementation-icon" />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Implementation-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Dynamics  CRM <br />Implementation Service</h3>
                    <p>Leverage Dynamics Square’s expertise and perfect infrastructure for a successful Microsoft Dynamics 365 CRM implementation.</p>
                    <div className="h-s-call" >
                      <span>Implement Now </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="/microsoft-dynamics-365-partner/">
                  <a>
                    <div className="gr">
                      <img src="/img/home/Upgrade-icon.png" alt="Upgrade-icon" />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Upgrade-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Dynamics  CRM <br />Customized Service</h3>
                    <p>Extend D365 CRM's capabilities to match your specific processes with reliable Dynamics  CRM customization services.</p>
                    <div className="h-s-call" >
                      <span>Customizations Now</span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="/our-services/dynamics-365-support-services/">
                  <a>

                    <div className="gr">
                      <img src="/img/home/Support-icon.png" alt="Support-icon" />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Support-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Dynamics  CRM <br />Support Service</h3>
                    <p>Focus on your business, not IT issues. Leave your Microsoft Dynamics 365 CRM support to the professionals at Dynamics Square.</p>
                    <div className="h-s-call" >
                      <span>Support Now </span> <i className="bi bi-arrow-right"></i>
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
                <h2>Microsoft Dynamics  CRM Pricing</h2>
                <p>There is no combined license to access all solutions in Microsoft Dynamics  CRM (CE). However, you can access the desired solution or set of solutions by purchasing their licenses.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="top-text-wrpaer">
                <img src="/img/Dynamics-365-Sales-new-ic.png" alt="Dynamics-365-Sales-new-ic" width='94' height='94' />
                <h4>Dynamics 365 Sales Pricing</h4>
                <p>The Microsoft Dynamics 365 Sales pricing and licensing come in four different plans, which are:</p>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>
                    D365 Sales Team Member
                  </h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$8</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Access data from Outlook, web, and mobile
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Access data from Outlook, web, and mobile
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Create tables and share information
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>Perform basic activities and chat with support</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Add or remove a contact or connection</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>D365 Sales Professional</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$65</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>All features of the Team Member License</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Invoices and lead Management</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Manages campaigns and quotes</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Check lead quality and track opportunity</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Business audit and define internal relationships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>D365 Sales Enterprise</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$95</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>All features of Sales Professional</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Embedded intelligence and forecasting</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Establish product relationships</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Define sales goals and territories</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Configure and define business units</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>D365 Sales Premium</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$135</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>All features of the Sales Enterprise</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Notes analysis</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Connection insights</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Comes with predictive forecasting</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Relationship insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text-wrpaer">
                <img src="/img/Dynamics-365-Customer-Service-n.png" alt="Dynamics-365-Customer-Service-n" width='94' height='94' />
                <h4>Dynamics 365 Customer Service</h4>
                <p>The Microsoft Dynamics 365 Customer Service pricing comes in two licensing plans:</p>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>
                    D365 Customer Service Team Members
                  </h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$8</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Access data from Outlook, web, and mobile</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Read D365 application data</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Create, update, and delete activities and contacts</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Perform basic activities and chat with support</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Send emails, record, and export/import data</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>D365 Customer Service Professional</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$50</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>All features of the Team Member license</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Create, update, and delete accounts and case</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Access to a knowledge base</li>
                      <li>
                        <i className="bi bi-check-lg"></i>SLA management</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Auditing and business process customization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>D365 Customer Service Enterprise</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$95</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>All features of the Customer Service Enterprise</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Comes with an embedded license</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Service scheduling</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Manage, schedule, and dispatch resources</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Embedded with D365 Customer Voice and Mobile offline capabilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>



          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text-wrpaer">
                <img src="/img/Dynamics-365-Field-Service-n.png" alt="Dynamics-365-Field-Service-n" width='94' height='94' />
                <h4>Dynamics 365 Field Service</h4>
                <p>The Microsoft Dynamics 365 Field Service offers two licensing options, which are:</p>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>D365 Field Service Team Member</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$8</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Access data from Outlook, web, and mobile</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Read D365 application data</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Create, update, and delete activities and contacts.</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Work order management</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Yammer collaboration with a separate license</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>D365 Field Service Contractor</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$50</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Read all D365 Field Service data</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Create and modify activities, assets, and order</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Schedule and handle your own resources</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Add or remove connections</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Define, manage, and configure work hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>D365 Field Service</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$95</span> per user/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>All features of a contractor license</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Create, update, and edit field service cases</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Create and modify invoices, and dispatch</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Schedule different activities</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Comes with a Field Service mobile app</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text-wrpaer">
                <img src="/img/Dynamics-365-Customer-Insights-n.png" alt="Dynamics-365-Customer-Insights-n" width='94' height='94' />
                <h4>Dynamics 365 Customer Insights</h4>
                <p>The license for Microsoft Dynamics 365 Customer Insights offers two separate solutions: Dynamics 365 Customer Insights - Journey (earlier known as <Link href="/products/microsoft-dynamics-365-marketing/"><a>Dynamics 365 Marketing</a></Link>) and Dynamics 365 Customer Insights - Data.</p>
              </div>

            </div>
            <div className="col-lg-5">
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>Dynamics 365 Customer Insights</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$1,700</span> per tenant/month
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Allows users to install both applications in four different environments.</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Base capacity of 10K people interacted via the Journey App.</li>
                      <li><i className="bi bi-check-lg"></i>Base capacity of 100K unified people for profile unification via Data app.</li>
                      <li>
                        <i className="bi bi-check-lg"></i>You can purchase additional licenses to increase capacity.</li>
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
                  <h3>For more detailed Microsoft Dynamics  CRM pricing and licensing, feel free to contact our team.</h3>
                  <Link href="/contact-us/">
                    <a className="btn btn-md">Contact Dynamics 365 Licensing Expert!</a>
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
                <h2>Why Choose Dynamics Square over others?</h2>
                <p>Dynamics Square has been in the market for 12+ years, offering reliable and cost-effective services to help businesses grow and scale with consistency.</p>
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
                    src="/img/group_3250.png"
                    alt="Microsoft Gold Partner"
                  />
                </div>
                <div className="rig">
                  <h3>Microsoft Gold Partner</h3>
                  <p>Dynamics Square is an authorized Microsoft Gold partner or <a href="/">Microsoft Dynamics partner</a> with the perfect resources and infrastructure to support your business regardless of complexity.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/group_3247.png"
                    alt="Industry-Specific Solutions"
                  />
                </div>
                <div className="rig">
                  <h3>Industry-Specific Solutions</h3>
                  <p>Irrespective of your business's uniqueness, we will customize the solution and make it a perfect fit for your business to meet your unique needs.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/group_3249.png"
                    alt="Agile Methodology"
                  />
                </div>
                <div className="rig">
                  <h3>Agile Methodology</h3>
                  <p>We follow Microsoft’s certified methodology to offer our services, whether implementation, support, or customizing a solution.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/group_3248.png"
                    alt="Training and User Adoption"
                  />
                </div>
                <div className="rig">
                  <h3>Training and User Adoption</h3>
                  <p>After the support, we will make sure that the changes or updates made are conveyed to the users via training or learning material.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default MicrosoftDynamicsCrm;
