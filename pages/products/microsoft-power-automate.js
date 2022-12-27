import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import Blog from "../../components/Blog";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const PowerAutomate = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Power Automate - Create Low Code Automation Tools</title>
        <meta
          name="description"
          content="Implement Microsoft Power Automate - a low-cost low-code automation from Microsoft. Reduce lead times & increase output while improving process control."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-power-automate/"
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
              <h1>Microsoft Power Automate</h1>
              <p>Enable automation in different apps and services with a breeze, solve real business problems rapidly, and enhance performance, reliability, and productivity with Microsoft Power Automate.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Start Automating</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/power-automate-banner.svg"
                alt="power-automate-banner"
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
            <h2>What Is Microsoft Power Automate?</h2>
            <p>
            Whether you want to call multiple data flows or reduce the need to duplicate work and effort or would like to send out total reports in time, you're looking for automation. With a no-code approach, you can create workflows and connect them to hundreds of popular apps and services.<br /><br />Power Automate helps your team easily get started by enabling automation, creating useful apps, and building workflows with little effort, saving a lot of time and tons of development costs.  
            </p>
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
                            src="/img/icons-power-automate_Quick-and-Secure.svg"
                            alt="icons-power-automate_Quick-and-Secure"
                          />
                        </div>
                        <span>Agility & Security</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Power Automate Platform comes loaded with powerful features such as drag and drop, prebuilt connectors, and low-code development to quickly and securely create automated systems.</p>
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
                            src="/img/icons-power-automate_Enhanced-Efficiency.svg"
                            alt="icons-power-automate_Enhanced-Efficiency"
                          />
                        </div>
                        <span>Increased Efficiency</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Record your processes from start to end and visualize and analyze the workflows to understand whether they will happen, reducing the guesswork while automating flow processes to finalize them for your data or system.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="acccm">
                  <hr className="mob-disp" />
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
                            src="/img/icons-power-automate_AI-Support.svg"
                            alt="icons-power-automate_AI-Support"
                          />
                        </div>
                        <span>AI-Driven</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        <p>Power Automate is driven by Microsoft's AI technology. Artificial Intelligence not only makes automation easy and interesting but also assists users in several ways. Start creating new flows based on existing business models.</p>
                        <p>The Power Automate platform also helps you in analyzing and visualizing data using different innovative <Link href="/products/microsoft-dynamics-365-ai/">Microsoft Dynamics 365 AI</Link> tools. </p>
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
                            src="/img/icons-power-automate_Highly-Compatible.svg"
                            alt="icons-power-automate_Highly-Compatible"
                          />
                        </div>
                        <span>High Compatibility</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                       <p>The best part of this automation platform is that it's highly compatible with different devices and platforms. Meaning, apps developed using this platform are consistent (offering the same features and functionality) with web, desktop, smartphone/mobiles, or Microsoft Teams.</p>
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
                <h2>What are the features of Microsoft Power Automate? </h2>
                <h3>Power Automate is available in four different versions. You can choose the one that is best for your needs.</h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Power Automate
                        <br />
                        for Desktop 
                      </h3>
                      <div className="overlay">
                        <p>
                        Create automated flows or automate your Windows desktop to reduce repetitive tasks. With Power Automate, you have the power of UI-based Robotics Process Automation (RPA) to automate flows right from the menu of your Windows 11.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Power Automate
                        <br />
                        for Mobiles 
                      </h3>
                      <div className="overlay">
                        <p>
                        Run and manage cloud flows on the go; that is, complete creating automated flows on your mobile phone itself from anywhere, any time at your convenience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Power Automate
                        <br />
                        for Web
                      </h3>
                      <div className="overlay">
                        <p>
                        With a central portal like Power Automate for the web, you can create and save flows, check them later, and can do more from any device and web browser.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Power Automate
                        <br />
                        for Microsoft Teams 
                      </h3>
                      <div className="overlay">
                        <p>
                        Power Automate for Microsoft Teams allows you to create flows in the Microsoft cloud for teamwork, allowing collaboration and enhancing productivity.
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
                    src="/img/power automate-side.png"
                    className="fix-im"
                    alt="power automate-side"
                    width={553} height={531}
                  />

                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a data-bs-toggle="modal" onClick={() => setOpen(true)}>
                          <Image
                            src="/img/Video Power-automate.png"
                            alt="Power-automate"
                            width={390} height={259}
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
                <h2>Power Automate Services</h2>
                <p>
                Transform the way business is done, streamline and digitize how you operate and manage your services.
                </p>
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
                  <p>
                  Successfully implement Power Automate solutions with <Link href="/">Dynamics Square</Link>. We are a Microsoft Gold Certified Partner and deliver innovative solutions on time, within the budget, without compromising.
                  </p>
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
                  <p>
                  Get constant and seamless support from the Dynamics Square team to ensure you have what you have been waiting for years.
                  </p>
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
         <div className="row justify-content-center">
          <div className="col-lg-9">
          <header className="section-header">
            <h2>Non-Scary Power Automate Pricing</h2>
            <p>Things with us are less spooky. Here are the plans that are best for businesses looking for predictable licensing by the user or by the flow.</p>
          </header>
          </div>
         </div>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-99">
                <h3>License by user</h3>
                <span className="cs-colo">Per user plan</span>
                <div className="price">
                  $15<span>Per-User/Month</span>
                </div>
                <p className="small-tt">
                Automate cloud apps, services, and data by using digital process automation (DPA). Users can create and run unlimited flows with this plan. 
                </p>
                <p>Includes the following:</p>
                <ul>
                  <li>Cloud flows (DPA)</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>License by user</h3>
                <span className="cs-colo">Per user plan with attended RPA</span>
                <div className="price">
                  $40<span>Per-User/Month</span>
                </div>
                <p className="small-tt">
                Provides the same features as the base user plan, plus the ability to automate desktop legacy apps via robotic process automation (RPA).  
                </p>
                <p>Includes the following: </p>
                <ul>
                  <li>Cloud flows (DPA)</li>
                  <li>Desktop flows (RPA) in attended mode</li>
                  <li>5,000 AI Builder credits/month</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>License by flow</h3>
                <span className="cs-colo">Per-flow plan</span>
                <div className="price">
                  $100
                  <span>Per Active User/App/Month minimum 5 flows(1,2)</span>
                </div>
                <p className="small-tt">
                Streamline digital process automation (DPA) for unlimited users within an organization. 
                </p>
                <p>Includes the following:</p>
                <ul>
                  <li>Cloud flows (DPA)</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Power Apps Now</span>
                  </a>
                </Link>
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
                  <li>
                    <Link href="/what-is-power-bi/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>What is
                        Power BI?
                      </a>
                    </Link>
                  </li>
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
                  <li>
                    <Link href="/power-bi-architecture/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Architecture
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/power-bi-reports/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Reports
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/implement-power-bi-for-your-business/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Why Your
                        Business Should Implement Power BI?
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

export default PowerAutomate;
