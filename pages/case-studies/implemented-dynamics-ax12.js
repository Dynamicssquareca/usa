import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";

const Nimr = () => {
  return (
    <>
      <Head>
        <title>Implementation of Dynamics AX 2012 On-Premises - Case Study</title>
        <meta
          name="description"
          content="Discover how a nonprofit advisory organization achieved operational excellence by implementing Dynamics AX 2012 On-Premises in this insightful case study"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/case-studies/implemented-dynamics-ax12/"
        />
      </Head>

      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">A Non-profit Advisory Organization Transforming Health Systems Across Governments, Health Organizations, and the Private Sector. </span>
                  <h1>Case Study</h1>
                  <p>Discover how a nonprofit in Tanzania increased productivity by <b>5X</b> and reduced input costs by <b>78%</b> by efficiently managing finance and operations with <b>Microsoft Dynamics AX 2012</b>.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
              <Image
                  src="/img/ax-feature1.png"
                  alt="cae-side-hand" width={1024} height={597}
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
                <div className="col-lg-3 align-self-center">
                <img
                    src="/img/casestudy-pic.png"
                    alt="casestudy-pic"
                    width="160"
                    height="160"
                  />
                </div>
                <div className="col-lg-9">
                  <p>A nonprofit advisory organization faced integration challenges in finance and operations due to significant growth. The organization partnered with <b>Dynamics Square</b> (USA's trusted <Link href="/"><a>Microsoft Dynamics Partner</a></Link>) to review its financial management requirements and implement Microsoft Dynamics AX 2012 On-premises version. This addressed grant management, project budgeting, time tracking, financial reporting, and other finance-related challenges.</p>
                  <p>The <b>implementation of Microsoft Dynamics AX 2012</b> (or released as <Link href="/products/microsoft-dynamics-365-finance-operations/"><a>Dynamics 365 Finance & Operations</a></Link> back in Nov'16) rapidly improved operations management. Since the implementation of Dynamics AX (now <Link href="/products/microsoft-dynamics-ax/"><a>Microsoft Dynamics AX</a></Link>), the nonprofit continues to make a significant impact on millions of lives globally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why custom-pd-1 custom-pd-2">
        <div className="container">
          <header className="section-header">
            <h2>Business Challenges Faced by the Non-profit</h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <Image src="/img/cast-stu-pic.png" alt="cast-stu-pic" width={484} height={407}/>
            </div>
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Lack of integration among current ERP system's capabilities.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Huge workload of manual processing, maintenance of parallel systems, and extensive reconciliation efforts.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>It was laborious to produce reports and generate accurate insights to support decision-making.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Current processes are structured around constraints of the current systems or are the result of "<b>organic</b>" adjustments.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Need to review the organization's financial management system requirements.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Required an independent, objective third-party perspective to take a fresh look at how work is performed from a best practices perspective.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>It was needed to streamline grant management, project budgeting, time tracking by project and location, and financial reporting from research centers.</p>
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
            <h2>Solution Delivered</h2>
            <p>See How Dynamics AX (now <Link href="/products/microsoft-dynamics-365-finance/"><a>Dynamics 365 Finance</a></Link>) helped upgrade the Business Operations of The Non-profit:</p>
          </header>
          <div className="row mobile-margin-01">
            <div className="col-lg-12">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
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
                        <div className="industries-list-more">
                          <div className="img-wrp">
                            <img
                              src="/img/material-lightbulb-outline.svg"
                              alt="Food-and-beverage"
                            />
                          </div>
                          <div className="text-wrp-content">
                            <p><Link href="/"><a>Dynamics Square</a></Link> implemented Dynamics AX'12 On-premises to address challenges in grant management, project budgeting, time tracking, and financial reporting.</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="NotforProfit"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>AX 2012 streamlined operations, reducing manual processing, and reconciliation effort, and improving workflow efficiency.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="Ecommerce"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>The new financial management system integrated existing systems to lower the manual workload and made report generation effortless.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Implementation of Dynamics AX 2012 enabled the organization to streamline workflow and <b>reduce input costs by 78%</b>, allowing the finance department to focus on critical tasks.</p>
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

      <section className="Solution-business-why custom-pd-3">
        <div className="container">
          <header className="section-header">
            <h2>Benefits Of Dynamics AX Implementation Organization Reaping</h2>
            <p>The nonprofit is leveraging the following functionalities from the Dynamics AX 2012 system to report accurate figures to concerned authorities:</p>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Financial Management and Accounting:</b> The system provides financial management and accounting tools to help the organization manage its finances and ensure accurate financial reporting.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Human Resource Management:</b> Dynamics AX's HR management tools enabled the organization to manage employee data, including payroll, benefits, and other HR-related tasks.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Fixed Assets Accounting:</b> This finance system allows this non-profit body to manage and track its fixed assets, including depreciation and asset acquisition.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Procurement/Purchase Order System:</b> The procurement/purchase order system provides a streamlined process for managing purchases, from requisitions to purchase orders and invoicing. </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Grant Management System:</b> The new finance system enables the employees to manage and track grants, including proposal development, budgeting, and reporting.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Simplified Workflow:</b> The system's simplified workflow helps the organization streamline its processes and increase efficiency by automating tasks and reducing manual efforts. </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Document Management:</b> Document management tools in Dynamics AX enabled admins to store, manage, and retrieve documents, ensuring that the organization's critical documents can easily accessed and remain secure for long-run.</p>
                  </div>
                </div>

                
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/Group1435.png" alt="Group1435" width={640} height={598}/>
            </div>
          </div>
        </div>
      </section>
      <section className="call_to_action call_to_action-height pd-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="MaskGroup8" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Looking to transform your NGO operations and achieve greater impact?</h3>
                <p>Book a free consultation with one of our Dynamics 365 experts to get a customised solution as per your NFP business operations and processes.</p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Speak with our experts today! </span>
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

export default Nimr;
