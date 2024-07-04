import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import emailjs from "@emailjs/browser";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
const StartGuideOne = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [closeModal, setCloseModal] = useState(false);
  function handleCloseModal() {
    document.getElementById("exampleModal").classList.remove("show", "d-block");
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((el) => el.classList.remove("modal-backdrop"));
  }
  const sendEmail = (e) => {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cxxhqoq",
        "template_f80fich",
        form.current,
        "7Ae4EIVY__86NsTQD"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(function () {
      setCloseModal(true);
      e.target.reset();
      router.push("https://www.dynamicssquare.com/whitpapers/download/pdf-micorosoft-copilot/");
    }, 500);
  };

  return (
    <>
      <Head>
      <title>Microsoft Copilot: The Catalyst for Transformation in Your Business</title>
        <meta
          name="description"
          content="Transform your business with Microsoft Copilot. Enhance productivity, streamline workflows, and drive innovation with AI-powered tools and insights."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/whitpapers/micorosoft-copilot-for-transformation-in-your-business/"
        />
      </Head>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Copilot: The Catalyst for Transformation in Your Business</h1>
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal1"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Download now!</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <img width={450} src="/img/whit-paper-banner.png" alt="whit-paper-banner" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>The White Paper Will Walk You Through</h2>
              </header>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-let">
                  <h3>Rise of AIs and Their Impact</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Introduction to Microsoft Copilot</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Copilot: Responsibility, Security, Privacy, and Ethics</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="text-center remove-pre">
                <Image src="/img/tablet-ebook.png" alt="tablet-ebook" width={487} height={613} />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-rit">
                  <h3>The Evolving Workplace and Need for Enhanced Productivity</h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>Quantifiable Benefits and ROI</h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>Getting Started with Copilot: Deployment and Utilization</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboot-erp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="pic-ll">
                <Image
                  src="/img/erp-left-about.png"
                  alt="erp-left-about"
                  width={337} height={460}
                />
              </div>
            </div>
            {/* <div className="col-lg-1 align-self-center"></div> */}
            <div className="col-lg-6 align-self-center">
              <div className="aboot-erp-content">
                <h3>What’s More in This White Paper?</h3>
                <p>This white paper features the impact of artificial intelligence (AI) in reshaping economies and revolutionizing different industries. It tells us how it can be an effective tool in redefining productivity in evolving workplaces.</p>
                <p>It talks about Microsoft Copilot, a generative AI tool that is built within the Microsoft ecosystem. Accompanied by statistics and studies, the paper discusses the ability of Copilot to improve productivity when used within Microsoft 365 and Dynamics 365 suites.</p>
                <p>It covers the topics of ethical concerns, data protection, and Microsoft's assurance of the responsible development and use of AI. Also, it offers tips on how organizations can introduce Copilot to fully utilize its capabilities with a step-by-step process to increase its adoption rate.</p>
                <p>In summary, the paper offers a strategy to move towards a redefined, AI-enhanced combined work setting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call_to_action call_to_action-height">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="images" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left call_to_action-lefts">
                <h3>Get This Insightful White Paper on Microsoft Copilot for Free!</h3>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal1"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get a Copy now!</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {!closeModal && (
        <div
          className="modal fade form-main-model"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Register For White Paper
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <p></p>
              </div>
              <p>Fill the form and receive it straight to your inbox.</p>
              <div className="modal-body">
                <div className="main-form-wrper">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Full Name"
                        name="name"
                        required
                      />
                      <input type="hidden" value={router.asPath} name="url" />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="*Work Email"
                        name="email"
                        pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Company Name"
                        name="company_name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="*Phone Number"
                        name="phone"
                        pattern="^\d{10,13}$"
                        required
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        I agree to the
                        <Link href="/privacy-policy/" target="_blank">
                          Privacy Policy
                        </Link>
                        and
                        <Link href="/terms-of-use/" target="_blank">
                          Terms of Service
                        </Link>
                        .
                      </label>
                    </div>

                    <div className="spiner-wrper">
                      <button
                        type="submit"
                        className="btn btn-primary fomr-submit"
                      >
                        Download Now
                      </button>
                      <div className={display} role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StartGuideOne;
