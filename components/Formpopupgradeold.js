import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
const Formpopupgradeold = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const sendEmail = (e) => {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs.sendForm('service_ioc4m3m', 'template_gbl6xx5', form.current, 'Z1IXZpfjgq01m5vW7')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setTimeout(function () {
      e.target.reset();
      router.push("/thank-you/");
    }, 500);

  };


  return (
    <div className="main-form-wrper main-form-wrper-toster">
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
          <div className="mb-3">
            <select placeholder="*Company Name"  name="service" className="form-select form-control" required>
              <option className='ss' value="" disabled selected hidden>*I'm Looking for</option>
              <option value="Implementation">Implementation</option>
              <option value="Upgrade/Migration">Upgrade/Migration</option>
              <option value="Support">Support</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="How Can We Help You?"
              rows="3"
              name="message"
            ></textarea>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              checked
              readOnly
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" style={{color:'black'}}>
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
            {/* <div className={display} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div> */}
          </div>
        </form>
      </div>
  );
}

export default Formpopupgradeold;
