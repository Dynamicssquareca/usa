import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import React, { useState } from "react";
import Blog from "../../components/Blog";
import ModalVideo from "react-modal-video";
const PowerVirtualAgents = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Exploring Microsoft Power Virtual Agents to Create Bots</title>
        <meta
          name="description"
          content="Implement Microsoft Power Virtual Agents - low code bots, maximizing customer engagement and response times. Contact Dynamics Square to boost your ops."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-power-virtual-agents/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft
                <br />
                Power Virtual Agents
              </h1>
              <p>Bring low-code and pro-code bot development into one canvas. Create and deploy intelligent conversational bots to rapidly respond to employee and customer needs - at scale - with Power Virtual Agents.</p>
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
              <Image
                src="/img/virtual-agent-banner-01.svg"
                alt="virtual-agent-banner-01"
                width={1024} height={586}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
         <div className="row justify-content-center">
          <div className="col-lg-9">
          <header className="section-header">
            <h2>What Is Microsoft Power Virtual Agents?</h2>
            <p>If you're looking to find faster ways to engage with your employees and customers, Power Agents are here for you to end your pursuit. Power Agents, help you build ultra-modern, AI-powered bots, making human-tech interaction less complex.<br /><br />In other words, Power Agents, with low-code approach/UI-based app development empower you to simplify or automate communication within the organization and with your customers. By creating this extra help, you can understand more about your employees as well as customers, and can easily resolve issues requiring complex conversations. </p>
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
                            src="/img/icons-power-apps_Quick-and-Easy.svg"
                            alt="icons-power-apps_Quick-and-Easy"
                          />
                        </div>
                        <span>Agile Bot Creation</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Enable faster and more powerful bots' development using automation, AI-Builder, and collaborative low-code graphical interface. No need for experience/training in coding. Make, test, and publish your intelligent bots now with ease.</p>
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
                            src="/img/icons-power-apps_App-Development.svg"
                            alt="icons-power-apps_App-Development"
                          />
                        </div>
                        <span>Quick Actions Anywhere</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Understand your customers and employees by communicating with them in multiple languages across websites, mobile apps, Facebook, Microsoft Teams, or any other channel supported by <Link href="/products/azure-iot-internet-of-things/">Azure Bot Framework</Link>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="acccm">
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
                          <img
                            src="/img/icons-power-apps_Enhancing-Capabilities.svg"
                            alt="icons-power-apps_Enhancing-Capabilities"
                          />
                        </div>
                        <span>Compliance and Governance</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                       <p>Keep compliance and governance in check by deploying bots using central administration, built-in security roles, and simple management across environments.</p>
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-apps_Responsive-Design.svg"
                            alt="icons-power-apps_Responsive-Design"
                          />
                        </div>
                        <span>Track Critical KPIs</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                       <p>With self-learning AI powered by natural language processing (NLP), you can track critical KPIs and identify potential bot topics automatically.</p>
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
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Why choose Power Virtual Agents?</h2>
                <h3>With hundreds of pre-built connectors, numerous templates, and AI assistance, it's easy to automate repetitive tasks.</h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Simplified 
                        <br />
                        Integration
                      </h3>
                      <div className="overlay">
                        <p>
                        You can register, create the bot, and embed it on your website in just a few clicks. Neither complex systems nor infrastructure needs to be maintained.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Low-Code
                        <br />
                        Approach
                      </h3>
                      <div className="overlay">
                        <p>Empower your team to build intelligent bots without the need for intermediaries, coding, or AI expertise. The power of bots can improve engagement, and hence the efficiency of the sales team.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Automate
                        <br />
                        Queries
                      </h3>
                      <div className="overlay">
                        <p>A chatbot powered by Power Virtual Agent allows you to automate the most common queries.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Customer
                        <br />
                        Experience
                      </h3>
                      <div className="overlay">
                        <p>Using personalized bot conversations, improve customer experience by enabling self-help for customers and quickly resolving their issues.</p>
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
                    src="/img/virtual-agent-side.png"
                    className="fix-im"
                    alt="virtual-agent-side"
                    width={553} height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)"><a 
                        onClick={() => setOpen(true)}
                      >
                        <Image
                          src="/img/video-Virtual Agents.png"
                          alt="power-apps-video-banner"
                          width={390} height={259}
                        />
                        <span className="cente-icns">
                          <img src="/img/play_icons.svg" alt="play_icons" />
                        </span></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Power Virtual Agents Services</h2>
                <p>Power Agents automate repetitive tasks and business processes, allowing you to focus your energy on what's important.</p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>Our experts successfully implement Power Virtual Agents solutions on time and within budget to ensure you have the right solution to answer your employees and customers.</p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>Manage your smart bots with Dynamics Square's 24/7 support.</p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
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
          <header className="section-header">
            <h2>Power Virtual Agents Pricing</h2>
            <p>See Power Apps plans, pricing, and availability for your business.</p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Power Virtual Agents</h3>
                <div className="price">
                  $200<span>Per month for 2,000 sessions(2)</span>
                </div>
                <p className="small-tt">
                Run intelligent chatbots across websites and other channels. 
                </p>
                <ul>
                  <li>Requires access to the Microsoft 365 admin center with global administrator or billing administrator roles.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Session's add-on</h3>
                <div className="price">
                  $100<span>Per month for 1,000 sessions(2)</span>
                </div>
                <p className="small-tt">Add additional sessions to your Power Virtual Agents plan.</p>
                <ul>
                  <li>Requires a Power Virtual Agents license.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Activate Power Agents Now!</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="call-to-action-content">
                <h3>Looking To Incorporate Conversational Bots Into Your Business Processes?</h3>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Talk To Our Experts</span>
                  </a>
                </div>
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
                <h3>Important Power BI Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  {/* <li>
                    <Link href="https://www.dynamicssquare.com/blog/what-is-power-bi/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>What is
                        Power BI?
                      </a>
                    </Link>
                  </li> */}
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/watch?v=Evkj4zfpk0Q"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Free Power BI
                      Webinar
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://docs.microsoft.com/en-us/power-bi/consumer/end-user-license"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Licensing Guide
                    </a>
                  </li>
                  {/* <li>
                    <Link href="/power-bi-architecture/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Architecture
                      </a>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/power-bi-reports/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Reports
                      </a>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/implement-power-bi-for-your-business/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Why Your
                        Business Should Implement Power BI?
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

export default PowerVirtualAgents;
