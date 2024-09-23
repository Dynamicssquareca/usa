import React, { useRef, useState,useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import emailjs from "@emailjs/browser";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
const StartGuideOne = () => {
  const router = useRouter();
  const [display, setDisplay] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [defaultCountryCode, setDefaultCountryCode] = useState('us'); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    phone: '',
  });
  const form = useRef();


/*auto fetch*/
useEffect(() => {
  // Fetch IP information when the component mounts
  fetchCountryCodeByIP();
}, []);

const fetchCountryCodeByIP = () => {
  fetch(`https://api.ipdata.co?api-key=6047ffae1867788acd06e6870e8ee7a52268aa63e892e74e80b56b66`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch IP information');
      }
      return response.json();
    })
    .then(data => {
      let countryCode = data.country_code.toLowerCase(); 
      console.log("Country Code:", countryCode); // 
      setDefaultCountryCode(countryCode);
      console.log("Default Country Code:", defaultCountryCode); 
    })
    .catch(error => {
      console.error('Error fetching IP information:', error);
      setDefaultCountryCode('us');
    });
};

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Full Name is required';
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.company_name) {
      newErrors.company_name = 'Company Name is required';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone Number is required';
    } else {
      const phonePattern = /^\d{10,13}$/;
      if (!phonePattern.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    // Clear error message for the phone field
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  };


  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setDisplay(true);


    try {
      const result = await emailjs.sendForm('service_xj9eves', 'template_q3l8afp', form.current, 'Iqyv5OO_yqxYVSNHf');
      console.log(result.text);
      setFormData({
        name: '',
        email: '',
        company_name: '',
        phone: '',
      });
      router.push("/guides/download/Pdf-dynamics-finance/");
    } catch (error) {
      console.error(error.text);
    } finally {
      setDisplay(false);
    }
  };

  const isValidPhoneNumber = (phone) => {
    // Phone number should be between 10 to 13 characters
    return /^\d{10,15}$/.test(phone);
  };




















  // const router = useRouter();
  // const [display, setDisplay] = useState("dspn");
  // const form = useRef();
  // const [closeModal, setCloseModal] = useState(false);
  // function handleCloseModal() {
  //   document.getElementById("exampleModal").classList.remove("show", "d-block");
  //   document
  //     .querySelectorAll(".modal-backdrop")
  //     .forEach((el) => el.classList.remove("modal-backdrop"));
  // }
  // const sendEmail = (e) => {
  //   setDisplay("spinner-border text-success");
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_xj9eves",
  //       "template_q3l8afp",
  //       form.current,
  //       "Iqyv5OO_yqxYVSNHf"
  //     )

  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //   setTimeout(function () {
  //     setCloseModal(true);
  //     e.target.reset();
  //     router.push("/guides/download/Pdf-dynamics-finance/");
  //   }, 500);
  // };

  return (
    <>
      <Head>
      <title>
        A Complete Guide to Dynamics 365 Finance 
        </title>
        <meta
          name="description"
          content="Download our free eBook - Dynamics 365 Finance to simplify your complex accounting and financial data with enterprise-grade ERP system."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/ebook/dynamics-365-finance/"
        />
      </Head>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              A Complete Guide to Dynamics 365 Finance 
              </h1>
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <Link  href="#exampleModal1"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Download Now</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <Image src="/img/three-book-mockup.png" alt="finance-banner-book" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>This Ultimate eBook Will Walk You Through</h2>
              </header>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-let">
                  <h3>History of Dynamics 365 Finance</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Need of D365 Finance in Growing Industries</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>
                  Capabilities of Dynamics 365 Finance 
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="text-center remove-pre">
                <Image src="/img/tablet-ebook-finance.png" alt="Ebbok-1" width={487} height={613} />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-rit">
                  <h3>
                  Top Benefits to Boost Business Growth 
                  </h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>
                  How to Avail Free Trial? 
                  </h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>What's New in 2022</h3>
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
                <h3>What's more about this eBook?</h3>
                <p>Microsoft Dynamics 365 Finance is a comprehensive financial management ERP solution that can streamline and simplify your company's entire financial operations. With its powerful capabilities, it can boost profits, predict financial insights, promote collaboration across departments, maximise financial performance, provide real-time data, and much more.</p>
                <p>Our eBook is a perfect guide for organisations who are looking for a better, more agile and highly productive ERP solution to improve and drive smooth financial operations.</p>
                <p>If you want to automate financial processes, centralise data, streamline financial operations, get insights, make data-driven decisions using strategic innovations, and explore actionable intelligence, this guide will give you a complete overview of this powerful solution.</p>
                <p>Microsoft Dynamics 365 Finance is a solution that is designed to understand the specific requirements of businesses, customise its capabilities to meet those needs, and offer a sustainable solution that is adaptable regardless of the size or type of business. It allows you to maximise your financial performance, enhance the growth of your company, and make it easier to scale by simplifying business processes. </p>
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
                <h3>
                Get started with the Ultimate Guide to Microsoft Dynamics 365 Finance 
                </h3>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal1"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Download Now</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="header-title-left">
            <h3>FAQ</h3>
          </div>
          <div className="row pd-121">
            <div className="col-lg-6 align-self-center">
              <div className="fax-accd">
                <div className="accordion" id="faqaccer">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Why should I choose Dynamics 365 Finance? 
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>As your business begins to find success and climb the proverbial ladder, you'll quickly realize that your existing systems are no longer going to cut it when it comes to managing finances, accounting, and productivity. This is where an advanced ERP solution like Dynamics 365 Finance comes in to save the day by providing easy scalability and even more growth for your business.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                       Can I customize my Microsoft Dynamics 365 Finance?
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>Dynamics 365 Finance is a powerful and flexible platform that enables businesses to tailor it to their specific needs or integrate it with other systems or apps to manage their entire financial operations while making actionable decisions in real-time. </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                       How will this guide help me?
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                       <p>At Dynamics Square, we are dedicated to Microsoft's mission statement: "to empower every person and every organisation on the planet to achieve more." We believe that by helping others, we are able to provide them with the best possible solutions that will benefit them in a positive way. This guide contains all of the important information that you need in order to be successful.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        What are the main capabilities of Dynamics 365 Finance? 
                      </button>
                    </h3>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>D365 Finance offers a lot of capabilities including, seamless automation, performance monitoring, robust integration, enhanced productivity, leveraging technologies, and customizable reports.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        Why do I need to fill out the information requested?
                      </button>
                    </h3>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                       <p>Your information is always kept confidential with us. The feedback you provide helps us give you a more personalized experience every time you visit our website and provides you with solutions that'll help your business succeed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="pic-l2">
              <Image
                  src="/img/Cover_Book_Moc.png"
                  alt="Cover_Book_Moc"
                  width={582} height={466}
                />
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
                Register For Free EBook
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
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="error">{errors.name}</span>}
                      <input type="hidden" value={router.asPath} name="url" />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="*Work Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Company Name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                      />
                      {errors.company_name && <span className="error">{errors.company_name}</span>}
                    </div>
                    <div className="mb-3">
                    <PhoneInput inputStyle={{ width: '100%', height: 'auto' }}
                        country={defaultCountryCode} // Set default country code
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputClass="form-control" // CSS class for the input
                        inputProps={{
                          name: 'phone',
                          required: true,
                          autoFocus: false,
                          onBlur: () => {
                            if (formData.phone.trim() !== '') { // Check if phone number is not empty before validation
                              if (!isValidPhoneNumber(formData.phone)) {
                                setErrors({ ...errors, phone: 'Invalid phone number format' });
                              } else {
                                delete errors.phone; // Clear error if phone number is valid
                              }
                            } else {
                              delete errors.phone; // Clear error if phone number is empty
                            }
                          }
                        }}
                        countryCodeEditable={false}
                        // onlyCountries={['us', 'ca', 'mx', 'gb']}
                        excludeCountries={['pk']}
                      />
                      {errors.phone && <span className="error">{errors.phone}</span>}
                      {/* <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <span className="error">{errors.phone}</span>} */}
                    </div>
                   
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="form-check-input"
                      />
                      <label className="form-check-label">
                        I agree to the
                        <a href="/privacy-policy/" target="_blank">
                          {" "}
                          Privacy Policy{" "}
                        </a>
                        and
                        <a href="/terms-of-use/" target="_blank">
                          {" "}
                          Terms of Service{" "}
                        </a>
                        .
                      </label>
                    </div>

                    <div className="spinner-wrapper spinner-wrapper-custom">
                      <button
                        type="submit"
                        className="btn btn-primary fomr-submit"
                        disabled={display}
                      >
                        {display ? 'Submitting...' : 'Submit'}
                      </button>
                      {display && (
                        <div className="spinner-border text-success" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
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
