import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import FormCaseScroll from "../../components/FormCaseScroll"; 
const CaseStudyTwo = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Check local storage to see if the form has already been submitted
    const formSubmittedState = localStorage.getItem('formSubmitted') === 'true';
    if (formSubmittedState) {
      setShowPopup(false);
      return; // Exit if the form was already submitted
    }

    const handleScroll = () => {
      const position = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolledPercentage = (position / (scrollHeight - clientHeight)) * 100;

      setScrollPosition(scrolledPercentage);

      if (scrolledPercentage > 10 && !showPopup) {
        setShowPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [scrollPosition, showPopup]);

  const handlePopupClose = () => {
    setShowPopup(false); // Hide the popup
    localStorage.setItem('formSubmitted', 'true'); // Save state to local storage
  };

  return (
    <>
      <Head>
        <title>Dynamics 365 Business Central and CRM implementation - Case Study</title>
        <meta
          name="description"
          content="Optimize operations and enhance customer relationships with Dynamics 365 Business Central and CRM implementation for growth and efficiency."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/case-studies/business-central-with-crm-implementation/"
        />
      <meta property="og:locale" content="US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dynamics 365 Business Central and CRM implementation - Case Study" />
        <meta property="og:description" content="Optimize operations and enhance customer relationships with Dynamics 365 Business Central and CRM implementation for growth and efficiency." />
        <meta property="og:url" content="https://www.dynamicssquare.com/case-studies/business-central-with-crm-implementation/" />
        <meta property="og:site_name" content="Dynamics Square USA" />
        <meta property="og:image" content="https://www.dynamicssquare.com/img/truecare-inner.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_us" />
        <meta name="twitter:title" content="Dynamics 365 Business Central and CRM implementation - Case Study" />
        <meta name="twitter:description" content="Optimize operations and enhance customer relationships with Dynamics 365 Business Central and CRM implementation for growth and efficiency." />
        <meta name="twitter:image" content="https://www.dynamicssquare.com/img/truecare-inner.png" />
      </Head>
      <div className={showPopup ? "blur-content" : ""}>
      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">A leading manufacturer of high-quality medical supplies in Florida, USA </span>
                  <h1>Case Study</h1>
                  <p>D365 Business Central and CRM implementation </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
                <Image
                  src="/img/truecare-inner.png"
                  alt="truecare-inner"
                  width={981} height={732}
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
                  <p>The client is a leading producer of premium medical supplies in Florida, USA. They wanted to improve sales output and operational efficiency. The organization previously used QuickBooks and a variety of different systems. They were struggling to manage customer service, financial accuracy, and operations. We proposed and implemented Microsoft Dynamics 365 Business Central and Dynamics 365 Sales and Customer Service to handle these problems.</p>
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
                    <p><b>Operational Inefficiencies:</b> The organization struggled with inefficiencies resulting from using several systems for various purposes, therefore causing mistakes and duplication of work. </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Inaccurate Financials:</b> QuickBooks and other systems did not offer the precision required for financial reporting and KPI tracking. </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Customer Service Limitations:</b> The lack of integration and coordination between systems restricted the client from providing professional customer service. </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Sales Productivity Issues:</b> Limited view of sales operations and scattered tools impacted sales processes. </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Employee Transition Difficulties:</b> Employees suffered inefficiencies and friction when switching between several platforms. </p>
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
            <h2>Objectives of the Implementation </h2>
            <p>With the following goals in mind, Dynamics Square proposed a complete solution to address the challenges faced by the organization: </p>
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
                            <p><b>Boost Operating Efficiency:</b> Simplify processes and reduce mistakes through integrated solutions. </p>
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
                              <p><b>Improve Financial Accuracy:</b> Boost financial accuracy by means of detailed reporting.</p>
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
                              <p><b>Track KPIs Effectively:</b> Offer strong data for monitoring important performance markers. </p>
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
                              <p><b>Boost Sales Productivity:</b> Increase efficiency and productivity within the sales team. </p>
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
                              <p><b>Professionalize Customer Service:</b> Improve the quality of customer interactions and service. </p>
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
                              <p><b>Facilitate Employee Transitions:</b> Simplify software transitions and reduce system-wide duplicating of work to help employee transitions. </p>
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
                <h2>Solutions Delivered: Microsoft Dynamics 365 Business Central and Sales/Customer Service </h2>
              </header>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 d-flex">
              <div className="new-case-card-one">
                <h3>Business Central Implementation </h3>
                <ul>
                  <li>Improved finance, inventory, sales, marketing, procurement, project management, and warehouse management.  </li>
                  <li>Integrated True Commerce EDI for efficient order processing, improved shipping and logistics, warehouse systems, automated financial reconciliation, and payroll processing. </li> 
                  <li>The solution enhanced communication and scheduling and provided standard and custom Power BI reports for advanced data analysis. </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 d-flex">
              <div className="new-case-card-one">
                <h3>Sales/Customer Service Implementation </h3>
                <ul>
                  <li>Implemented standard features including an account dashboard, outbound email campaign management, visitor tracking, lead generation, and customer quote management. </li>

                  <li>Integrated with Business Central for smooth data flow and Outlook for improved email and calendar integration.</li> 

                  <li>The combination of these features and integrations simplified CRM processes and boosted overall productivity. </li>
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
                          <h3>Improved Efficiency </h3>
                          <p>The combined implementation of ERP and CRM simplified operations and reduced errors. </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt ">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Improved Financial Accuracy </h3>
                          <p>Accurate financial data and KPI tracking were attained, therefore supporting better decision-making. </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Increased Sales Productivity </h3>
                          <p>More efficient processes led to improved sales productivity and better visibility of sales activities. </p>
                        </div>
                      </div>
                    </SwiperSlide>
                 
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Professional Customer Service </h3>
                          <p>Better integration and more simplified processes resulted in improved customer service. </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide hh-heigt">
                        <div className="new-case-card-one col-d-bl">
                          <h3>Simplified Employee Transitions </h3>
                          <p>Reduced duplication of efforts and simplified transitions between software systems. </p>
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
              <p>Microsoft Dynamics 365 Business Central and Dynamics 365 Sales/Customer Service provided the client with a complete solution to increase operational efficiency, financial accuracy, and sales productivity. Integration of several systems enabled professional customer service and simplified processes, therefore positioning the business for ongoing development and success. </p>
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

      </div>

       {/* Pop-up Form */}
       {showPopup && <FormCaseScroll onClose={handlePopupClose} />}
      <style jsx>{`
        .blur-content {
          filter: blur(7px);
          transition: filter 0.3s ease;
        }
      `}</style>

    </>
  );
};

export default CaseStudyTwo;
