import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const Dcube = () => {
  return (
    <>
      <Head>
        <title>NIMR Tanzania + MSH: Implementation of Dynamics AX 2012 </title>
        <meta
          name="description"
          content="NIMR Tanzania and MSH collaborated to deploy Dynamics AX 2012, an advanced ERP platform that streamlines their processes and data management."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/case-studies/msh-dynamics-ax-implementation/"
        />
      </Head>

      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">
                 <b>NIMR Tanzania + MSH:</b> Transforming Health Systems with Strategies, Tools, and Management Support for Governments, Health Organizations, and the Private Sector. 
                  </span>
                  <h1>NIMR Tanzania & Management Sciences for Health (MSH)</h1>
                  <p>Discover how a nonprofit advisory organization boosted its productivity by 5X and slashed input costs by 78% through seamless <b>management of finance and operations</b> using <b>Microsoft Dynamics AX 2012</b> (now <b>Dynamics 365 Finance</b>).</p>
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
                 <div> <img src="/img/msh-logo.svg" alt="msh-logo" width="140" /></div>
                </div>
                <div className="col-lg-9">
                  <p><a href="http://www.nimr.or.tz/" target="_blank" rel="nofollow">NIMR Tanzania</a>, a nonprofit advisory organization that underwent significant growth, faced challenges due to the lack of integration among its finance and operations systems. <a href="https://msh.org/" rel="nofollow" target="_blank">MSH</a> (Management Sciences for Health) partnered with <a href="https://angelcom.com/" target="_blank" rel="nofollow">AccTech Systems</a> to review NIMR's financial management system requirements, and brought onboard <b>Dynamics Square</b> (a leading <Link href="/"><a>Microsoft Gold Partner</a></Link> and Cloud Solution Provider in the USA) to implement <b>Microsoft Dynamics AX 2012</b> On-premises version (<Link href="/products/microsoft-dynamics-365-finance-operations/"><a>Dynamics 365 Finance & Operations</a></Link>, now <b>Dynamics 365 Finance</b>) to address NIMR's grant management, project budgeting, time tracking, financial reporting, and other finance related challenges. <br /><br />By implementing a modern financial solution like <b>Microsoft Dynamics AX 2012</b>, NIMR Tanzania is efficiently managing its operations, and providing a better experience globally. This nonprofit has made a significant impact on millions of lives and continues to do so. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why custom-pd-1 custom-pd-2">
        <div className="container">
          <header className="section-header">
            <h2>Business Challenges NIMR Tanzania Faced</h2>
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
                    <p>Lack of integration among current systems supporting operations.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Manual processing, maintenance of parallel systems, and extensive reconciliation efforts.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Producing reports and satisfying information requests is a labor-intensive process.</p>
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
                    <p>Need to review NIMR's financial management system requirements.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Require an independent, objective third party perspective to take a fresh look at how work is performed from a best practices perspective.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The need to streamline grant management, project budgeting, time tracking by project and location, and financial reporting from research centers.</p>
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
            <h2>Implemented Solution </h2>
            <p>See how Dynamics AX helped upgrading Business Operations at Discovery Cube</p>
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
                            <p><Link href="/"><a>Dynamics Square</a></Link> implemented Dynamics AX 2012 On-premises to address NIMR's challenges in grant management, project budgeting, time tracking, and financial reporting.</p>
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
                              <p>Dynamics AX 2012 streamlined NIMR Tanzania's operations, reducing manual processing, reconciliation efforts, and improving workflow efficiency.</p>
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
                              <p>The new finance management system integrated existing systems, reducing manual processing and reconciliation, making report generation effortless.</p>
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
                              <p><Link href="/products/microsoft-dynamics-ax/"><a>Implementation of Dynamics AX 2012</a></Link> enabled NIMR to streamline workflow and reduce input costs by 78%, allowing finance people to focus on critical tasks.</p>
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
            <h2>Benefits of Dynamics AX Implementation</h2>
            <p>NIMR is utilizing the following functionalities from the Dynamics AX 2012 system to report accurate figures to MSH:</p>
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
                    <p><b>Financial Management and Accounting:</b> The system provides financial management and accounting tools to help NIMR manage their finances and ensure accurate financial reporting.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Human Resource Management:</b> Dynamics AX's HR management tools enable NIMR to manage employee data, including payroll, benefits, and other HR-related tasks.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Fixed Assets Accounting:</b> This finance system allows NIMR to manage and track their fixed assets, including depreciation and asset acquisition.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Procurement/Purchase Order System:</b> The procurement/purchase order system provides the nonprofit with a streamlined process for managing purchases, from requisitions to purchase orders and invoicing.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Grant Management System:</b> The new finance system enables NIMR to manage and track grants, including proposal development, budgeting, and reporting.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Simplified Workflow:</b> The system's simplified workflow helps the organization streamline their processes and increase efficiency by automating tasks and reducing manual efforts.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Document Management:</b> Document management tools in Dynamics AX enable NIMR Tanzania to store, manage, and retrieve documents, ensuring that the organization's critical documents are easily accessible and secure. </p>
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

export default Dcube;
