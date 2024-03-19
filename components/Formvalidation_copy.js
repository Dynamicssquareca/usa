import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

const Form = () => {
  const router = useRouter();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const form = useRef();

  const validateEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    // Regular expression for validating phone numbers (10-13 digits)
    const phoneRegex = /^\d{10,13}$/;
    return phoneRegex.test(phone);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!form.current.name.value) {
      setNameError("Please enter your full name.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!validateEmail(form.current.email.value)) {
      setEmailError("Please enter a valid work email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!form.current.company_name.value) {
      setCompanyError("Please enter your company name.");
      isValid = false;
    } else {
      setCompanyError("");
    }

    if (form.current.phone.value && !validatePhone(form.current.phone.value)) {
      setPhoneError("Please enter a valid phone number (10-13 digits).");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!form.current.message.value) {
      setMessageError("Please enter your message.");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      emailjs.sendForm('service_ioc4m3m', 'template_gaio8jq', form.current, 'Z1IXZpfjgq01m5vW7')
        .then((result) => {
          console.log(result.text);
          setTimeout(function () {
            e.target.reset();
            router.push("/thank-you/");
          }, 500);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div>
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
            {nameError && <small className="text-danger">{nameError}</small>}
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="*Work Email"
              name="email"
              required
            />
            {emailError && <small className="text-danger">{emailError}</small>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="*Company Name"
              name="company_name"
              required
            />
            {companyError && <small className="text-danger">{companyError}</small>}
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number (optional)"
              name="phone"
            />
            {phoneError && <small className="text-danger">{phoneError}</small>}
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="*How Can We Help You?"
              rows="3"
              name="message"
              required
            ></textarea>
            {messageError && <small className="text-danger">{messageError}</small>}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              checked
              readOnly
              className="form-check-input"
              id="exampleCheck1"
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

          <div className="spiner-wrper">
            <button
              type="submit"
              className="btn btn-primary fomr-submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
