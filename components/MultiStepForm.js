import { useState } from 'react';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        selectedOption1: '',
        otherInput1: '',
        selectedOption2: '',
        otherInput2: '',
    });

    const [showOtherInput1, setShowOtherInput1] = useState(false);
    const [showOtherInput2, setShowOtherInput2] = useState(false);

    const nextStep = () => {
        setStep(step + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        setStep(step - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            const newFormData = { ...prevFormData, [name]: value };

            if (name === 'selectedOption1') {
                if (value === 'other') {
                    setShowOtherInput1(true);
                } else {
                    setShowOtherInput1(false);
                    newFormData.otherInput1 = ''; // Clear the otherInput1 field if not 'Other'
                }
            }

            if (name === 'selectedOption2') {
                if (value === 'other') {
                    setShowOtherInput2(true);
                } else {
                    setShowOtherInput2(false);
                    newFormData.otherInput2 = ''; // Clear the otherInput2 field if not 'Other'
                }
            }

            return newFormData;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit the form data to an API or other endpoint
    };

    return (
        <>
            <section>
                <div className='container'>
                    <div className='row justify-content-center pad-100'>
                        <div className='col-lg-7'>
                            <ProgressBar step={step} />
                            <form onSubmit={handleSubmit} className='servay-form-new'>
                                {step === 1 && (
                                    <div>
                                        <div className="mb-3">
                                            <label for="formGroupExampleInput" className="form-label">What industry are you in?</label>
                                            <select id="inputState" className="form-select"
                                                aria-label="select two"
                                                name="selectedOption"
                                                value={formData.selectedOption}
                                                onChange={handleChange}>
                                                <option selected>Choose...</option>
                                                <option value="Construction">Construction</option>
                                                <option value="Distribution">Distribution</option>
                                                <option value="Education">Education</option>
                                                <option value="Energy/Utilities">Energy/Utilities</option>
                                                <option value="Engineering">Engineering</option>
                                                <option value="Finance, Accounting and Insurance">Finance, Accounting and Insurance</option>
                                                <option value="Food and Beverage">Food and Beverage</option>
                                                <option value="Government/Public Sector">Government/Public Sector</option>
                                                <option value="Health and Beauty">Health and Beauty</option>
                                                <option value="Manufacturing - Discrete">Manufacturing - Discrete</option>
                                                <option value="Manufacturing - Process">Manufacturing - Process</option>
                                                <option value="Media/Publishing">Media/Publishing</option>
                                                <option value="Not For Profit">Not For Profit</option>
                                                <option value="Professional or Other Services">Professional or Other Services</option>
                                                <option value="Retail">Retail</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {showOtherInput1 && (
                                                <div>
                                                    <label for="formGroupExampleInput" className="form-label">other</label>
                                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" value={formData.otherInput1}
                                                        onChange={handleChange} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label for="formGroupExampleInput" className="form-label">How many employees are there in your organisation?</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="formGroupExampleInput" className="form-label">Which regions do you operate in?</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="UK" />
                                                <label className="form-check-label" for="UK">
                                                    UK
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="Ireland" />
                                                <label className="form-check-label" for="Ireland">
                                                    Ireland
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="Europe" />
                                                <label className="form-check-label" for="Europe">
                                                    Europe
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="North America" />
                                                <label className="form-check-label" for="North America">
                                                    North America
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="South America" />
                                                <label className="form-check-label" for="South America">
                                                    South America
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="Africa" />
                                                <label className="form-check-label" for="Africa">
                                                    Africa
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="Asia" />
                                                <label className="form-check-label" for="Asia">
                                                    Asia
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="Middle East" />
                                                <label className="form-check-label" for="Middle East">
                                                    Middle East
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="Australia" />
                                                <label className="form-check-label" for="Australia">
                                                    Australia
                                                </label>
                                            </div>
                                        </div>


                                        <button type="button" className='btn btn-success' onClick={nextStep}>
                                            Next
                                        </button>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div>
                                        <div className="mb-3">
                                            <label for="formGroupExampleInput" className="form-label">What is your annual revenue?</label>
                                            <select className="form-select" aria-label="select two">
                                                <option selected>Select...</option>
                                                <option value="one">one</option>
                                                <option value="other">other</option>

                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="formGroupExampleInput" className="form-label">Why are you looking for a new system?</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    This will be our first ERP solution
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    We've outgrown our current solution
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    We need additional functionality
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    We need to upgrade our system
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    Running on spreadsheets
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    Existing solution no longer supported
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    Legislative reasons (Reporting, MTD, Cyber Secure etc)
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    Issues with current partner
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="formGroupExampleInput" className="form-label">What Finance/ERP system are you currently using?</label>
                                            <select className="form-select" aria-label="Default select examples"

                                                name="selectedOption2"
                                                value={formData.selectedOption2}
                                                onChange={handleChange}>
                                                <option selected>Select...</option>
                                                <option value="Access">Access</option>
                                                <option value="Dynamics Business Central">Dynamics Business Central</option>
                                                <option value="Dynamics GP">Dynamics GP</option>
                                                <option value="Dynamics NAV (Navision)">Dynamics NAV (Navision)</option>
                                                <option value="Exchequer">Exchequer</option>
                                                <option value="Lakeview">Lakeview</option>
                                                <option value="Netsuite">Netsuite</option>
                                                <option value="Oracle">Oracle</option>
                                                <option value="Pegasus Opera">Pegasus Opera</option>
                                                <option value="QuickBooks">QuickBooks</option>
                                                <option value="Sage">Sage</option>
                                                <option value="Sap">Sap</option>
                                                <option value="Xero">Xero</option>
                                                <option value="None">None</option>
                                                <option value="other">Other (describe)</option>
                                            </select>
                                            {showOtherInput2 && (
                                                <div>
                                                    <label for="formGroupExampleInput" className="form-label">other</label>
                                                    <input type="text" className="form-control" name="otherInput2" placeholder="Example input placeholder" value={formData.otherInput2}
                                                        onChange={handleChange} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label for="formGroupExampleInput" className="form-label">What is your budget for the project?</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Select...</option>
                                                <option value=">10k">{'>'}10k</option>
                                                <option value="11 to 25k">11 to 25k</option>
                                                <option value="26 to 50k">26 to 50k</option>
                                                <option value="51 to 75k">51 to 75k</option>
                                                <option value="76 to 100k">76 to 100k</option>
                                                <option value="101 to 200k">101 to 200k</option>
                                                <option value="201 to 500k">201 to 500k</option>
                                                <option value="500k+">500k+</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="formGroupExampleInput" className="form-label">What's your expected timeline for this project to go-live?</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Select...</option>
                                                <option value="Less than 1 month">Less than 1 month</option>
                                                <option value="1 to 3 months">1 to 3 months</option>
                                                <option value="4 to 6 months">4 to 6 months</option>
                                                <option value="9 to 12 months">9 to 12 months</option>
                                                <option value="13 to 18 months">13 to 18 months</option>
                                                <option value="More than 18 months">More than 18 months</option>
                                            </select>
                                        </div>
                                        <div className='mb-3'>
                                        <label for="formGroupExampleInput" className="form-label"> Do you need a Fixed Asset register and/or Budgeting in your solution?</label>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" for="inlineRadio1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" for="inlineRadio2">No</label>
                                            </div>

                                        </div>
                                        <div className='mb-3'>
                                        <label for="formGroupExampleInput" className="form-label">How many companies does your business include?</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                                                <label className="form-check-label" for="inlineRadio4">1</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                                                <label className="form-check-label" for="inlineRadio5">2 to 5</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6" />
                                                <label className="form-check-label" for="inlineRadio6">6 to 10</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option7" />
                                                <label className="form-check-label" for="inlineRadio7">More than 10</label>
                                            </div>

                                        </div>
                                        <button type="button" className='btn btn-outline-secondary' onClick={prevStep}>
                                            Back
                                        </button>
                                        <button type="button" className='btn btn-success' onClick={nextStep}>
                                            Next
                                        </button>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div>
                                        <h2>Contact Information</h2>
                                        <div className='mb-3'>
                                            <label for="formGroupExampleInput" className="form-label">Name:</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <label for="formGroupExampleInput" className="form-label">Email:</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <label for="formGroupExampleInput" className="form-label">Telephone:</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="telephone"
                                                value={formData.telephone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <label for="formGroupExampleInput" className="form-label">Company Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="compnayanme"
                                                value={formData.telephone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <label for="formGroupExampleInput" className="form-label">Job Role:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="Job Role"
                                                value={formData.telephone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <button type="button" className='btn btn-outline-secondary' onClick={prevStep}>
                                            Back
                                        </button>
                                        <button type="submit" className='btn btn-success'>Submit</button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                        .pad-100{
                            background: #ededed;
                            padding: 60px 140px;
                        }
                        .servay-form-new{

                        }
                        .servay-form-new .form-label{
                            font-size: 14px;
                            font-weight: 500;
                            color: #1d3557;
                            margin-bottom: 15px;
                        }
                        .servay-form-new .form-control{
                            height: 45px;
                            border: 2px solid #f1f0f4;
                            border-radius: 5px;
                            background-color: #f1f0f4;
                        }
                        .servay-form-new .form-select{
                            height: 45px;
                            border: 2px solid #f1f0f4;
                            border-radius: 5px;
                            background-color: #f1f0f4;
                        }
                        .servay-form-new .form-check{
                            margin-bottom: 10px;
                        }
                        .form-check .form-check-input{
                            margin-right: 1em;
                            width: 1.3em;
                            height: 1.3em;
                            border-radius: 0 !important;
                        }
                        .servay-form-new .mb-3 {
                            margin-bottom: 1rem !important;
                            background: #fff;
                            padding: 20px 30px;
                            border-radius: 8px;
                        }
                        .servay-form-new .btn{
                            padding: 0.6rem 3.5rem;
                            font-size: 15px;
                            font-weight: 500;
                            margin-right: 10px;
                            margin-top: 20px;
                        }
                        .servay-form-new .form-check-input{

                        }
                        .servay-form-new .form-select:focus,.servay-form-new .form-control:focus {
                            border-color: #f1f0f4;
                            outline: 0;
                            box-shadow: none;
                            background-color:#ffffff
                        }
      `}</style>
            </section>
        </>
    );
};

const ProgressBar = ({ step }) => {
    const steps = 3;
    const progress = (step / steps) * 100;

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <p>{`Form ${step} of ${steps}`}</p>
            <style jsx>{`
        .progress-bar-container {
          margin-bottom: 20px;
        }
        .progress-bar {
          height: 5px;
          background-color: #0070f3;
          border-radius: 5px;
        }
          .pad-100{
          }
      `}</style>
        </div>
    );
};

export default MultiStepForm;
