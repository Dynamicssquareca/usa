import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const CaseStudyTwo = () => {
  return (
    <>
      <Head>
        <title>Reimplementation of Microsoft Dynamics 365 Sales</title>
        <meta
          name="description"
          content="Revamp your sales with Microsoft Dynamics 365 Sales reimplementation. Optimize processes, boost efficiency, and drive growth with tailored solutions."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/case-studies/implementation-microsoft-dynamics-365-sales/"
        />
      <meta property="og:locale" content="US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Reimplementation of Microsoft Dynamics 365 Sales" />
        <meta property="og:description" content="Revamp your sales with Microsoft Dynamics 365 Sales reimplementation. Optimize processes, boost efficiency, and drive growth with tailored solutions." />
        <meta property="og:url" content="https://www.dynamicssquare.com/case-studies/implementation-microsoft-dynamics-365-sales/" />
        <meta property="og:site_name" content="Dynamics Square USA" />
        <meta property="og:image" content="https://www.dynamicssquare.com/img/stainless-inner.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_us" />
        <meta name="twitter:title" content="Reimplementation of Microsoft Dynamics 365 Sales" />
        <meta name="twitter:description" content="Revamp your sales with Microsoft Dynamics 365 Sales reimplementation. Optimize processes, boost efficiency, and drive growth with tailored solutions." />
        <meta name="twitter:image" content="https://www.dynamicssquare.com/img/stainless-inner.png" />
      </Head>

      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">A well-established metal distribution and processing firm in Florida, USA</span>
                  <h1>Case Study</h1>
                  <p>Reimplementation of Microsoft Dynamics 365 Sales</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
                <Image
                  src="/img/stainless-inner.png"
                  alt="stainless-inner"
                  width={724} height={462}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cast-studi-into">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row bg-case">
                <div className="col-lg-3 align-self-center text-center">
                  <img
                    src="/img/casestudy-pic.png"
                    alt="casestudy-pic"
                    width="160"
                    height="160"
                  />
                </div>
                <div className="col-lg-9 align-self-center">
                  <p>A medium-sized, Florida-based company, that specializes in the distribution and processing of metals, was facing a lot of challenges with their current CRM system. They experienced operational challenges because of their previous implementation which was poorly done and the result of inadequate gathering of requirements, analysis, and system architecture. The system was not efficient in managing sales workflow and fell short of meeting their requirements, which caused lots of operational challenges.</p>
                  <p>The system was inundated with multiple instances of the same accounts and contacts, and each new lead coming through the website's contact form was creating a new account without checking for duplicates. Moreover, the client required the CRM to be integrated with QuickBooks and additional solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why custom-pd-1 custom-pd-2">
        <div className="container">
          <header className="section-header">
            <h2>Business Challenges Faced by the Company</h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <Image src="/img/cast-stu-pic.png" alt="cast-stu-pic" width={484} height={407} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Data Duplicity:</b> Due to the absence of validation checks for new leads, the CRM system was burdened with hundreds of duplicate accounts and contacts.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Integration Needs:</b> The system needed integration with the WordPress website and Microsoft 365 products, as well as QuickBooks and other solutions to enhance operational efficiency.   </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Challenges in Lead Management:</b> Ineffective lead management processes were obstructing potential sales opportunities.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Customer and Opportunity Management:</b> The current system was not able to efficiently handle customer relations and maximize opportunities.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Workflow and Activity Management:</b> The existing workflows and business processes required refinement to optimize activity coordination.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Dashboard Configuration:</b> There was a demand for more detailed and customizable dashboards to gain deeper business insights.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-more-sec casestudy-list-more">
        <div className="container">
          <header className="section-header">
            <h2>Objectives of the Reimplementation</h2>
            <p>Dynamics Square proposed a complete overhaul of Microsoft Dynamics 365 Sales to achieve the following goals:</p>
          </header>
          <div className="row mobile-margin-01">
            <div className="col-lg-12">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                    }}
                    breakpoints={{
                      200: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1300: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    slidesPerView={3}
                    spaceBetween={15}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="industries-list-more r--more">
                          <div className="img-wrp">
                            <img
                              src="/img/material-lightbulb-outline.svg"
                              alt="Food-and-beverage"
                            />
                          </div>
                          <div className="text-wrp-content">
                            <p><b>Data Cleaning:</b> Remove duplicate entries to maintain clean and accurate data for precise operations and decision-making.</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more r--more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="NotforProfit"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p><b>Better Lead and Customer Management:</b> Improve the management of leads and customer relationships to increase the probability of revenue and growth.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more r--more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="Ecommerce"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p><b>Optimized Opportunity and Activity Management: </b>Improve the efficiency of workflows and processes.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more r--more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="Ecommerce"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p><b>Integration with QuickBooks and Other Solutions: </b>Allow smooth interoperability for enhanced operational capabilities.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more r--more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="Ecommerce"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p><b>Custom Dashboards and Reports:</b> Deliver in-depth and actionable insights for the business.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>Solutions delivered: <br />Microsoft Dynamics 365 Sales</h2>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="new-case-card-one">
                <h3>Data Cleaning and System Refinement:</h3>
                <ul>
                  <li>Removed identical data and refined system and custom views.</li>
                  <li>Set up and configured dashboards for real-time insights</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="new-case-card-one">
                <h3>Enhanced Security Setup:  </h3>
                <ul>
                  <li>Implemented robust security measures to manage two entities with different sales teams under one Dynamics environment.</li>
                  <li>Enhanced security translated into enhanced risk management and adherence to data privacy regulations.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="new-case-card-one">
                <h3>Integration with WordPress and Outlook:</h3>
                <ul>
                  <li>Connected the CRM with the client’s WordPress website and Outlook for improved lead management and communication.</li>
                  <li>This increased sales by reducing the possibility of losing sales opportunities across the platforms.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="new-case-card-one">
                <h3>Automated Email Notifications:</h3>
                <ul>
                  <li>Configured automatic email notifications for various stages of the sales process.</li>
                  <li>This included follow-up emails for quotes not converted to orders, confirmation emails for new orders, and thank you emails for created invoices.</li>
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </section>



      <section className="industry-more-sec casestudy-list-more">
        <div className="container">
          <header className="section-header">
            <h2>Benefits of the Reimplementation</h2>
          </header>
          <div className="row mobile-margin-01">
            <div className="col-lg-12">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                    }}
                    breakpoints={{
                      200: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1300: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    slidesPerView={3}
                    spaceBetween={15}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Automation and Efficiency: </h3>
                          <p>Automated tasks were performed without human interaction which reduced errors to zero. Integrations bridged gaps in cross-functional communication and eliminated data duplicity.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt ">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Comprehensive Customer View:</h3>
                          <p>Provided a 360-degree view of customer interactions and reports.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Improved Productivity and Data Insights:</h3>
                          <p>Automation enhanced productivity and lead-to-customer conversion rates. Improved customer experience led to repeat sales. Accurate sales and employee closure data.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                 
                    


                  </Swiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="case-consultion">
              <h3>Conclusion</h3>
              <p>The client experienced substantial improvements in CRM capabilities and operational productivity by reimplementing Dynamics 365 Sales. The reimplementation of the solution led to clean and accurate data, simplified workflows, seamless integration, increased efficiency, and superior customer management. The comprehensive dashboards and analytical reports delivered crucial insights that helped in decision-making and laying the groundwork for sustained growth and achievement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>







      <section className="call_to_action call_to_action-height pd-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Consult To Reveal Best Approach</h3>
                <p>
                  Connect with us to facilitate your system to drive a parallel
                  approach in the market you deal with. We help enterprises to
                  implement their unique needs.
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to an ERP Expert</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyTwo;
