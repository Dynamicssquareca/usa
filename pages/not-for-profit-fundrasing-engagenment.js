import Head from 'next/head';
import Link from 'next/link';
import FormCampaign from '../components/FormCampaign';
import FormFooterSubscriber from '../components/FormFooterSubscriber';
const DynamicsNavNotFor = () => {
  return (
    <>
      <Head>
      <title>Make Fundraisng and Engagement Simpler | Dynamics Square</title>
        <meta
          name="description"
          content="AI &amp; Machine Learning Capabilities"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/not-for-profit-fundrasing-engagenment/"
        />
      </Head>
      <section
        className="Solution-banner hero-1 hero"
        style={{ overflow: "hidden", paddingBottom: "160px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center nav-to">
              <h1>
                Create <span>scalable</span> and <span>transformative</span>{" "}
                mission impact
              </h1>
              <p>
                Introducing Fundraising and Engagement, a relationship
                management platform powered by Dynamics 365 Sales. <br /> It is
                a part of Microsoft Cloud for Nonprofit to help you upgrade the
                engagement with supporters or donors to maximize the impact on a
                mission.
              </p>
              <p>
                <b>Fundraising and Engagement enable you to:</b>
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i className="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Increase donors and supporters by approaching them with
                        personalized engagement.
                      </p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i className="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Automate the financial summaries & recurring gift
                        processing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i className="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Drive fundraising efficiency and reduce costs by
                        automating key business processes.
                      </p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i className="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Better end-to-end donations, revenue resources, and
                        transition management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1  align-self-center"></div>
            <div className="col-lg-5  align-self-center">
              <div className="main-form-wrper main-form-wrper-nav">
                <h3>Please fill the form to connect further</h3>
                <FormCampaign />
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link href="/" className="logo d-flex align-items-center">
                  <img
                    src="/img/dsuk-footer-logo.svg"
                    alt="dsuk-footer-logo"
                  />
                </Link>
                <p>
                  Dynamics Square is US leading Microsoft Gold Certified Partner
                  that caters to the needs of orgnizations who can source
                  next-gen Microsoft Business Apps from our highly skilled
                  Microsoft consultants.
                </p>
                <img
                  src="/img/microsoft-partner.svg"
                  alt="microsoft-partner"
                  className="footer-img"
                />
                <img
                  src="/img/Tech-For-Socil-Impact.svg"
                  alt="Tech-For-Socil-Impact"
                  className="footer-img"
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
                    <a href="/blog/" rel="">
                      Blog
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
                  <p>Subscribe Newsletter</p>
                  <span>
                    Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                    Offers And Much More!
                  </span>
                  <FormFooterSubscriber />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2022 Dynamics Square.</span>
            <div className="footer-extra-link">
              <Link href="/terms-of-use/">Terms of Use </Link>
              <Link href="/cookie-policy/">| Cookie </Link>
              {/* <Link href="/sitemap.xml">| Sitemap</Link> */}
            </div>
          </div>
        </div>
      </footer>
     
      
    </>
  );
};

export default DynamicsNavNotFor;
