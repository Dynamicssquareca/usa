import React, { useRef, useState, useEffect } from 'react';
import Form from "./Form";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
// import FormFooterSubscriber from './FormFooterSubscriber';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const Footer = () => {

  const [display, setDisplay] = useState("dspn");
  const [closeModal, setCloseModal] = useState(false);
  function handleCloseModal() {
    document.getElementById("exampleModal").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop")
      .forEach(el => el.classList.remove("modal-backdrop"));
  }
  const router = useRouter();
  const form = useRef();
  const [currentPageUrl, setCurrentPageUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyname: '',
    message: '',
    formtag: 'CTA Form',
    // job: '',
    // service: '',
    currentPageUrl: '',
  });

  const [defaultCountryCode, setDefaultCountryCode] = useState('us'); // Default to 'us'

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, currentPageUrl }));
  }, [currentPageUrl]);

  useEffect(() => {
    setCurrentPageUrl(window.location.href);
  }, []);


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



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message for the field being edited
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    // Clear error message for the phone field
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  };

  // const handlePhoneChange = (e) => {
  //   const { value } = e.target;

  //   const cleanedValue = value.replace(/\D/g, '');

  //   const truncatedValue = cleanedValue.slice(0, 13);
  //   setFormData({ ...formData, phone: truncatedValue });

  //   setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        // Send form data via EmailJS
        await emailjs.sendForm('service_ioc4m3m', 'template_gaio8jq', e.target, 'Z1IXZpfjgq01m5vW7');
        // await emailjs.sendForm('service_lqazf46', 'template_e13glbp', e.target, 'JMglIoOzliJzdMCd4');

        const response = await fetch('https://blognew.dynamicssquare.com/api/formData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log('Form submitted successfully');
          console.log('Form Data:', formData);
          // Clear form data after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            companyname: '',
            message: '',
            // job: '',
            // service: '',
            currentPageUrl: '',
          });
          setTimeout(() => {
            router.push('/thank-you/');
          }, 1000);
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };


  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.companyname.trim()) {
      errors.companyname = 'Company name is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    // if (!formData.job.trim()) {
    //   errors.job = 'Job title is required';
    // }
    // if (!formData.service.trim()) {
    //   errors.service = 'Service selection is required';
    // }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    // Phone number should be between 10 to 13 characters
    return /^\d{10,15}$/.test(phone);
  };






  return (
    <>
      {!closeModal &&
        <div
          className="modal fade form-main-model"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Request Callback
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <p></p>
              </div>
              <p>
                Please complete the form below and we will be in touch or{" "}
                <a href="tel:+2818990865" target="_self" rel="">
                  book a call
                </a>{" "}
                with one of our Microsoft consultants.
              </p>
              <div className="modal-body">
              <div className="main-form-wrper">
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <input type="hidden" name="currentPageUrl" value={currentPageUrl} />
                      <input type="hidden" value="CTA Form" name="formtag" />
                      {errors.name && <div className="text-danger">{errors.name}</div>}
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
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Company Name"
                        name="companyname"
                        value={formData.companyname}
                        onChange={handleChange}
                      />
                      {errors.companyname && <div className="text-danger">{errors.companyname}</div>}
                    </div>
                    <div className="mb-3">
                      {/* <input
                        type="tel"
                        className="form-control"
                        placeholder="*Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      /> */}
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
                        // onlyCountries={['us', 'ca', 'mx', 'gb']}
                        countryCodeEditable={false}
                        excludeCountries={['pk']}
                      />
                      {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="*How Can We Help You?"
                        rows="3"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <div className="text-danger">{errors.message}</div>}
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" checked readOnly className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label">
                        I agree to the
                        <a href="/privacy-policy/" target="_blank">
                          {' '}
                          Privacy Policy{' '}
                        </a>
                        and
                        <a href="/terms-of-use/" target="_blank">
                          {' '}
                          Terms of Service{' '}
                        </a>
                        .
                      </label>
                    </div>

                    <div className="spiner-wrper">
                      <button type="submit" className="btn btn-primary fomr-submit" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit'}
                      </button>
                      {submitting && <div className="spinner-border text-primary" role="status"></div>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      }

      <section id="services" className="services bg-shape ovr-f hidesec">
        <div className="container" data-aos="fade-up">
          <header className="heading-colo-bg">
            <h2>Book a Free Consultation</h2>
            <p>
              See How Dynamics Square Can Help Transform Your Business With
              Microsoft Business Applications.
            </p>
          </header>
          <div className="row justify-content-md-center">
            <div className="col-lg-10 col-md-10">
              <div className="row g-0 extra-height">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="main-form-wrper-common">
                    <Form />
                  </div>
                </div>
                <div className="col-sm-4 col-md-6 col-lg-6 hide-c">
                  <img
                    src="/img/contactfor-sede-img.jpg"
                    alt="contactfor-sede-img"
                    className="image-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-contact-s">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="const-list-name">California</div>
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
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+12137840845">
                    +1 213 784 0845
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.com</div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="const-list-name">Texas</div>
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
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+12818990865">
                    +1 281 899 0865
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.com</div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="const-list-name">Illinois</div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  111 North Wabash Ave. Ste. 100,{" "}
                  The Garland Building
                  Chicago, IL 60602
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+13124881043">
                    +1 312 488 1043
                  </a>

                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.com</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="const-list-name">New Jersey</div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  500 Paterson Plank Road Union City, NJ 07087
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+17328930520">
                    +1 732 893 0520
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="/" className="logo d-flex align-items-center">
                  <img
                    src="/img/dynamics_square_tm_logo_footer.svg"
                    alt="dynamics_square_tm_logo_footer"
                    width="230"
                    height="16"
                  />
                </a>
                <p>
                  Dynamics Square is USA's leading Microsoft Solution Certified Partner
                  that caters to the needs of organizations who can source
                  next-gen Microsoft Business Apps from our highly skilled
                  Microsoft consultants.
                </p>
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
                    <a href="/products/dynamics-365-business-central/">
                      Business Central
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-365-finance/">
                      Finance
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/dynamics-365-supply-chain-management/">
                      Supply Chain
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-365-sales/">
                      Sales
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-power-bi/">
                      Power BI
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-azure/">Azure IoT</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-erp/">
                      ERP (NAV/GP/AX)
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-crm/">
                      CRM
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>QUICK LINKS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/about-us/">About us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/why-us/">Why Us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/our-services/">Our Services</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/partner/">Our Partners</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/contact-us/">Contact Us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a
                      target="_self"
                      href="https://blog.dynamicssquare.com/"

                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/privacy-policy/">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 text-md-start">
                <p>CONNECT WITH US</p>

                <div className="social-links mt-3">
                  <a
                    target="_blank"
                    href="https://twitter.com/dsquare_usa"
                    className="twitter"
                    aria-label="twitter"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/dynamicssquareusa"
                    className="facebook"
                    aria-label="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/c/DynamicsSquare"
                    className="instagram"
                    aria-label="instagram"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/showcase/dynamics-square-usa/"
                    className="linkedin"
                    aria-label="linkedin"
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
            &copy; Copyright &nbsp;<span>2023 Dynamics Square.</span>
            <div className="footer-extra-link">
              <a href="/terms-of-use/">Terms of Use </a>
              <a href="/cookie-policy/">| Cookie </a>
              {/* <a href="/sitemap.xml">| Sitemap</a> */}
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
}
export default Footer