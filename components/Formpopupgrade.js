import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const Formpopupgrade = () => {
  // const router = useRouter();
  // const [display, setDisplay] = useState("dspn");
  // const form = useRef();
  // const sendEmail = (e) => {
  //   setDisplay("spinner-border text-success");
  //   e.preventDefault();

  //   emailjs.sendForm('service_ioc4m3m', 'template_gbl6xx5', form.current, 'Z1IXZpfjgq01m5vW7')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });

  //   setTimeout(function () {
  //     e.target.reset();
  //     router.push("/thank-you/");
  //   }, 500);

  // };

  const router = useRouter();
  const [display, setDisplay] = useState(false);
  const [errors, setErrors] = useState({});
  const [defaultCountryCode, setDefaultCountryCode] = useState('us');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    phone: '',
    message: '',
    service: '',
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
    if (!formData.message) {
      newErrors.message = 'Message? is required';
    }
    if (!formData.service) {
      newErrors.service = "Please select what you're looking for";
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
      const result = await emailjs.sendForm('service_ioc4m3m', 'template_gbl6xx5', form.current, 'Z1IXZpfjgq01m5vW7');
      console.log(result.text);
      setFormData({
        name: '',
        email: '',
        company_name: '',
        phone: '',
        message: '',
        service: ''
      });
      router.push("/thank-you/");
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


  return (
    <div className="main-form-wrper main-form-wrper-toster">
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
        <div className="mb-3">
          <select
            placeholder="*Company Name"
            name="service"
            className="form-select form-control"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="" disabled selected hidden >what you're looking for</option>
            <option value="Implementation">Implementation</option>
            <option value="Upgrade/Migration">Upgrade/Migration</option>
            <option value="Support">Support</option>
          </select>
          {errors.service && <span className="error">{errors.service}</span>}
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
          {errors.message && <span className="error">{errors.message}</span>}
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

        <div className="spinner-wrapper">
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
  );
}

export default Formpopupgrade;
