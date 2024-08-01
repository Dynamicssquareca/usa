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
        <title>Upgrade from Dynamics NAV 2009 Business Central On-Premise</title>
        <meta
          name="description"
          content="Mexi Land worked with Dynamics Square to upgrade Dynamics NAV 2009 to Business Central On-premise. Read the case story to gain insights."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/case-studies/salesforce-to-microsoft-dynamics-365-sales/"
        />
        <meta name="robots" content="noindex, nofollow" />
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
                  src="/img/Dynamics-365-Business-Central.png"
                  alt="Dynamics-365-Business-Centra"
                  width={1024} height={597}
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
            <h2>Objectives of the Migration</h2>
            <p>Dynamics Square proposed migrating to Microsoft Dynamics 365 Sales with the following objectives:</p>
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
                            <p>Implement a highly customizable CRM system to accommodate specific business requirements.</p>
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
                              <p>Develop a strong pricing model to handle different factors affecting the price of the solution.</p>
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
                              <p>Facilitate seamless integration between the CRM and the website so they work in tandem.</p>
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
                              <p>Provide comprehensive, customizable, and feature-rich dashboard and report generation capabilities for better business insights.</p>
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
                <h2>Solutions delivered: <br />Dynamics 365 Sales with Copilot</h2>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="new-case-card-one">
                <h3>Customized Business Process Flow:</h3>
                <ul>
                  <li>Developed a customized business process flow to enhance workflows and boost overall efficiency.</li>
                  <li>Implemented various stages of the sales cycle to enhance clarity and provide clear direction.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="new-case-card-one">
                <h3>Advanced Product Catalogue and Flexible Pricing Models:  </h3>
                <ul>
                  <li>Developed a flexible pricing system to effectively handle fluctuating rates depending on the season, time of day, and day of the week. </li>
                  <li>Helped the client implement a pricing strategy that allowed them to stay competitive and increase their revenue.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="new-case-card-one">
                <h3>Integration with Website:</h3>
                <ul>
                  <li>Integrated Dynamics 365 Sales with the website to automate lead generation directly from web inquiries to track leads and ensure no leads were missed.</li>
                  <li>Integrated the CRM with Outlook, Teams, and Adobe to improve operational efficiency.</li>
                  <li>Enhanced the efficiency and precision of lead management. </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="new-case-card-one">
                <h3>Custom Dashboards and Reports:</h3>
                <ul>
                  <li>Developed custom dashboards to enable the client to get real-time insights into key performance indicators (KPIs) and business metrics.</li>
                  <li>Provided the clients with data-driven decision-making capabilities by creating comprehensive reports for sales analysis, forecasting, and strategic planning.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="new-case-card-one">
                <h3>Configuration of Copilot:</h3>
                <ul>
                  <li>Enabled Microsoft Copilot for smart tips and insights to boost productivity.</li>
                  <li>Utilized predictive analytics and contextual recommendations to enhance user experience.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="industry-more-sec casestudy-list-more">
        <div className="container">
          <header className="section-header">
            <h2>Benefits of this Migration </h2>
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
                          <h3>Enhanced Customization and Flexibility: </h3>
                          <p>Sales productivity increased with better sales cycle management. Dynamics 365 Sales allowed easy customization to meet company needs. </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt ">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Optimized Pricing Strategies:</h3>
                          <p>Advanced pricing model optimized pricing strategy and profitability. Easy sophisticated price management gave the client a competitive advantage.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Improved Lead Management:</h3>
                          <p>The integration of D365 Sales with the website enhanced lead generation and management, resulting in better conversion rates and reduced errors in optimizing the sales pipeline.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Superior Analytics and Reporting:</h3>
                          <p>Custom dashboards and reports let the client make strategic decisions. Real-time sales and customer data enabled proactive management.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Increased Productivity with Copilot:</h3>
                          <p>Copilot's intelligent suggestions and insights reduced routine tasks, enabling sales teams to focus on critical tasks and enhancing user experience, satisfaction, and adoption rates.</p>
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
              <p>The client experienced enhanced functionality, flexibility, and productivity in their CRM system by transitioning from Salesforce to Microsoft Dynamics 365 Sales. The customized business process flow, advanced pricing models, easy integration with the website, adobe and extensive analytical capabilities greatly enhanced their operational efficiency and the ability to make strategic decisions. </p>
              <p>The inclusion of Microsoft Copilot further enhanced productivity, setting the client for future growth and advancement. This migration not only resolved their earlier CRM challenges but also laid the foundation for continuous expansion and success.</p>
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
