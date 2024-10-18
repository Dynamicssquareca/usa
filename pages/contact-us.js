import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
// import FormFooterSubscriber from "../components/FormFooterSubscriber";
import Link from "next/link";
import Image from "next/image";
import ZohoForm from "../components/ZohoForm";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Autoplay, FreeMode, Navigation } from "swiper";
const ContactUs = () => {

  return (
    <>
      <Head>
      <title>Contact Dynamics Square | Book Free Consultation</title>
          <meta
            name="description"
            content="Contact Dynamics Square experts for Dynamics 365 CRM/ERP implementation, Support and Upgrade benefits. Book a free online consultation to know more."
          />
          <link
            rel="canonical"
            href="https://www.dynamicssquare.com/contact-us/"
          />

      </Head>
      <main>
        <section className="Solution-banner about-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">

                <div className="new-contant-head">
                  <h1>Ready for Business Innovation? Let’s talk!</h1>
                  <p>Leverage Microsoft solutions customized specifically for your business needs!</p>
                  <div className="new-flex-wraper">
                    <h2>Why Choose Dynamics Square</h2>
                    <div className="new-flex-se">
                      <div className="left">
                        <img src="/img/card_travel.png" alt="card_travel" />
                      </div>
                      <div className="right">
                        <span>350+ Successful Handovers and Counting!</span>
                      </div>
                    </div>
                    <div className="new-flex-se">
                      <div className="left">
                        <img src="/img/workspace_premi.png" alt="workspace_premi" />
                      </div>
                      <div className="right">
                        <span>150+ Qualified Professionals at Your Disposal!</span>

                      </div>
                    </div>
                    <div className="new-flex-se">
                      <div className="left">
                        <img src="/img/chronic.png" alt="chronic" />
                      </div>
                      <div className="right">
                      <span>24/7 Round-the-Clock Support!</span>
                      </div>
                    </div>
                    <div className="new-flex-se">
                      <div className="left">
                        <img src="/img/diversity-3.png" alt="diversity-3" />
                      </div>
                      <div className="right">
                      <span>2x Boost in Efficiency and Productivity!</span>
                    
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-7 align-self-center">
                <ZohoForm />
              </div>
            </div>
          </div>
        </section>

        <section className="cont-into cont-into-bg">
          <div className="container">
            <div className="pddd-30">
              <div className="row pddd-40">
                <div className="col-lg-3 col-sm-12">
                  <div className="addre-left">
                    <h4>California</h4>
                    <p>2372 Morse Ave, Ste. 310<br /> Irvine, CA 92614</p>
                    <p>+1 213 784 0845</p>
                    <a
                      href="https://goo.gl/maps/HJtMuiqBdqw2eDuU9"
                      target="_blank"
                    >
                      Locate Us on Google
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="addre-left">
                    <h4>Texas</h4>
                    <p>10101 Southwest Freeway<br /> Houston, TX 77074</p>
                    <p>+1 281 899 0865</p>
                  </div>

                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="addre-left">
                    <h4>Illinois</h4>
                    <p>111 North Wabash Ave. Ste.100 <br />The Garland Building Chicago, IL 60602</p>
                    <p>+1 312 488 1043</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="addre-left">
                    <h4>New Jersey</h4>
                    <p>500 Paterson Plank <br />Road Union City, NJ 07087</p>
                    <p>+1 732 893 0520</p>
                  </div>
                </div>



              </div>
              <div className='row pad-599'>
                <div className="col-lg-3 col-sm-12">
                  <div className="addre-left">
                    <h4>Massachusetts</h4>
                    <p>867 Boylston Street <br />Boston, MA 02116</p>
                    <p>+1 617 765 7669</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className='picc'>
                    <img src="/img/m-partner.png" alt="m-partner" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className="col-lg-9">
                <div className="new-co-title new-co-title-ll text-center">
                  <h3>Why Businesses Trust Dynamics Square?</h3>
                  <p>Dynamics Square is the leading Microsoft Solution partner, offering future-ready business solutions to global organizations.</p>
                </div>
              </div>

            </div>
            <div className="row justify-content-center" style={{paddingTop:'60px'}}>
              <div className="col-lg-11">
                <div className="testmonial-slide-home">
                  <div className="img-1">
                    <img src="/img/home/quote-left.png" alt="" />
                  </div>
                  <Swiper
                    autoplay={{
                      delay: 8000,
                      disableOnInteraction: true,
                    }}
                    pagination={{
                      dynamicBullets: true,
                      clickable: true,
                    }}

                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                  >

                    <SwiperSlide>

                      <div className="test-inner">
                        <p>We were using an outgrown legacy system with potential chances of errors, data loss, and cyber-attacks. These are some of the reasons that pushed us to upgrade to Dynamics 365 Finance and Operations with a cloud deployment. The team at Dynamics Square has successfully implemented this solution in the stated time without any after-sales cost.</p>
                        <span>-Chief Financial Officer at a Non-profit organization</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-inner">
                        <p>The NAV to Business Central upgrade was our best choice when it comes to business growth, simplified operations, and establishing communication between different teams in different departments. Dynamics Square has made the entire process smooth and efficient.</p>
                        <span>-Vice Principal at a leading college</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-inner">
                        <p>Dynamics Square understood our requirements and suggested Microsoft Power BI for our data analytics needs. They also integrated this with our existing ERP solution for a continuous data flow.</p>
                        <span>-Head of Marketing at the renowned clothing brand</span>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                  <div className="img-2">
                    <img src="/img/home/quote-right.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pddd-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-co-title new-co-title-ll text-center">
                  <h3>Our Proven Track Record Says It All: Businesses Got Exclusive Result</h3>
                </div>
              </div>
            </div>
            <div className="row g-2 pd-600">
              <div className="col-lg-4">
                <div className="exp-box exp-box-m">
                  <div className="top-sec b-t-pad">
                    <h3>82%</h3>
                    <h4>Businesses Meet Expected ROI</h4>
                    <p>Different businesses have achieved the expected ROI on time after the successful implementation of the Microsoft ERP solution.</p>
                    {/* <a href="/" className="btnnew">Read More</a> */}
                  </div>
                  <div className="bottom-sec">
                    <img src="/img/home/roi.png" alt="im " />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="exp-box">
                  <div className="bottom-sec b-t-pad">
                    <img src="/img/home/2x.png" alt="im " />
                  </div>
                  <div className="top-sec ">
                    <h3>2x</h3>
                    <h4>Productivity Increases</h4>
                    <p>Due to the centralized data structure, the overall efficiency and productivity of the team have increased by 2X.</p>
                    {/* <a href="/" className="btnnew">Read More</a> */}
                  </div>

                </div>
              </div>
              <div className="col-lg-4">
                <div className="exp-box exp-box-m">
                  <div className="top-sec b-t-pad">
                    <h3>46%</h3>
                    <h4>Improved Cost Saving</h4>
                    <p>Businesses that have upgraded to Microsoft ERP or CRM solutions have reported improved cost savings while limiting resources.</p>
                    {/* <a href="/" className="btnnew">Read More</a> */}
                  </div>
                  <div className="bottom-sec">
                    <img src="/img/home/46x.jpg" alt="im" />
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="new-btn-home text-center top-bom-home">
                  <Link href="/case-studies/" >
                    <a className="bts">
                      <span>Read More <i className="bi bi-arrow-right"></i></span>
                    </a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="hero-bgs">
          <div className="container">
            <header className="section-header">
              <h2>Our offices around the world</h2>
            </header>
            <div className="row hero-bg-3">
              <div className="col-md-12">
                <ul
                  className="nav nav-tabs justify-content-center contact-tbs"
                  id="myTab"
                  role="tablist"
                >
                  {/* <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {" "}
                      USA
                    </button>
                  </li> */}

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      UK
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-1"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-1"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Canada
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-2"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-2"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Europe
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-3"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-3"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      India
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-4"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-4"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Singapore
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-5"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-5"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Australia
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {/* <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>California</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            2372 Morse Ave, Ste. 310 Irvine, CA 92614
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 213 784 0845</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Texas</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            10101 Southwest Freeway Houston, TX 77074
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 281 899 0865</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Illinois</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                          111 North Wabash Ave. Ste.100
                          The Garland Building
                          Chicago, IL 60602
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          
                          <div className="content-right">+1 312 488 1043</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>New Jersey</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                          500 Paterson Plank Road
                          Union City, NJ 07087
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 732 893 0520</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Massachusetts</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                          867 Boylston Street Boston, MA 02116

                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 617 765 7669</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                            info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 124 City Road,London, EC1V 2NX, U.K.
                            {/* Kemp House, 152-160 City Road, London, EC1V 2NX, U.K */}
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            International House 61 Mosley Street, Manchester, M2
                            3HZ, United Kingdom
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 745 994 8273</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Birmingham</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Izabella House, 24 - 26 Regents Place, City Centre, Birmingham
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">
                            <a target="_self" rel="" href="tel:+441213182798">
                              +44 121 318 2798
                            </a>
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">info@dynamicssquare.co.uk</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="contact-1"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>British Columbia</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            398-2416 Main St. Vancouver BC V5T 3E2
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 778 381 5388</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.ca">
                            info@dynamicssquare.ca
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Ontario</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            800 Steeles Ave. W. #B10155 Thornhill, ON. L4J
                            7L2
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 289 807 0740</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.ca">
                            info@dynamicssquare.ca
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-2"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Utrechtseweg 341, 3818 EL Amersfoort, Netherlands
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+31 970 102 57044</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-3"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>India</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            1114, JMD Megapolis, Sector 48, Gurugram, Haryana
                            122018
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+91 124 495 71650</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-4"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Singapore</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            #10-11, International Plaza, 10 Anson Rd, Singapore
                            079903
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+65 6232 6935</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-5"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Sydney</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            2/4A Meridian Place Bella Vista NSW 2153, Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 2 8607 5117</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Brisbane</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Suite 105, 42 Manilla Street East Brisbane, QLD
                            4169, Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 7 3506 2909</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Melbourne</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Suite 4847, 805/220 Collins Street Melbourne VIC
                            3000, Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 3 8400 4784</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Perth</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Level 24, 77 St Georges Terrace, Perth, WA 6000,
                            Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 8 6219 8209</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link href="/" className="logo d-flex align-items-center">
                  <img
                    src="/img/dynamics_square_tm_logo_footer.svg"
                    alt="dynamics_square_tm_logo_footer"
                    width="230"
                    height="16"
                  />
                </Link>
                <p> Dynamics Square is USA's leading Microsoft Solution Certified Partner
                  that caters to the needs of orgnizations who can source
                  next-gen Microsoft Business Apps from our highly skilled
                  Microsoft consultants.</p>
                <Image
                  src="/img/microsoft-partner-footer.png"
                  alt="microsoft-partner"
                  className="footer-img"
                  width={230}
                  height={211}

                />
                <img
                  src="/img/Tech-For-Socil-Impact.svg"
                  alt="Tech-For-Socil-Impact"
                  className="footer-img"
                  width="230"
                  height="81"
                  style={{ marginTop: '25px' }}
                />
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>BUSINESS APPS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/dynamics-365-business-central/">
                      Business Central
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-365-finance/">
                      Finance
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/dynamics-365-supply-chain-management/">
                      Supply Chain
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-365-sales/">
                      Sales
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-power-bi/">
                      Power BI
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-azure/">Azure IoT</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-erp/">
                      ERP (NAV/GP/AX)
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-crm/">
                      CRM
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>QUICK LINKS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/about-us/">About us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/why-us/">Why Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/our-services/">Our Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/partner/">Our Partners</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/contact-us/">Contact Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="https://blog.dynamicssquare.com/" rel="">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/privacy-policy/">Privacy policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 text-md-start">
                <p>CONNECT WITH US</p>

                <div className="social-links mt-3">
                  <a
                    target="_blank"
                    rel=""
                    href="https://twitter.com/dsquare_usa"
                    className="twitter"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.facebook.com/dynamicssquareusa"
                    className="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.youtube.com/c/DynamicsSquare"
                    className="instagram"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.linkedin.com/showcase/dynamics-square-usa/"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
                <br />
                <div className="subbb">
                  {/* <p>Subscribe Newsletter</p>
                  <span>
                    Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                    Offers And Much More!
                  </span> */}
                  {/* <FormFooterSubscriber /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2024 Dynamics Square.</span>
            <div className="footer-extra-link">
              <Link href="/terms-of-use/">Terms of Use </Link>
              <Link href="/cookie-policy/">| Cookie </Link>
              {/* <Link href="/sitemap.xml">| Sitemap</Link> */}
            </div>
          </div>
        </div>
      </footer>
      <div className='call-bb-wr'>
        <button className="fixed-button wobble" type="button" aria-labelledby="callbuttondiv">
          <a href="tel:+12818990865" target="_self" ><i className="bi bi-telephone-fill"></i> <span className="screen-reader-text">Details</span></a>
        </button>

      </div>
    </>
  );
};

export default ContactUs;
