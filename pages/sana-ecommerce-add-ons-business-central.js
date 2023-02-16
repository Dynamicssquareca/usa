import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
const SanaEcommerce = () => {

  return (
    <>
      <Head>
        <title>Sana Commerce: Power Up Dynamics 365 Business Central </title>
        <meta
          name="description"
          content="Sana Commerce add-on changes the way D365 Business Central or NAV operates e-Commerce. Streamline & improve customer satisfaction from day one."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/sana-ecommerce-add-ons-business-central/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Sana Commerce: An Integrated Solution for Dynamics 365 Business Central E-Commerce</h1>
              <p>Sana Commerce is a complete and powerful e-commerce solution that integrates seamlessly with <b>Microsoft Dynamics 365 Business Central</b> and <b>NAV</b>. Now you can improve your online sales and streamline ECommerce operations smoothly.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Click For a Free Demo</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Sana-Commerce-banner.png"
                alt="Sana-Commerce-banner"
                width={960}
                height={666}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Why Sana Commerce?</h2>
                <p>Sana Commerce Add-On Speaks Results.</p>
              </header>
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-lg-9">
              <div className="tabls-cloud table-responsive">
                <table className="table table-striped align-middle ">
                  <thead>
                    <tr>
                      <th><center>Key Features</center></th>
                      <th><center>Availability</center></th>
                    </tr>
                  </thead>
                  <tbody className="tik-check">
                    <tr>
                      <td>Strong integration with <Link href="/products/dynamics-365-business-central/"><a>Microsoft Dynamics 365 Business Central</a></Link></td>
                      <td><center><i class="bi bi-check-circle-fill"></i></center></td>
                    </tr>
                    <tr>
                      <td>Complete control over the online product catalog</td>
                      <td><center><i class="bi bi-check-circle-fill"></i></center></td>
                    </tr>
                    <tr>
                      <td>Customizable online store templates</td>
                      <td><center><i class="bi bi-check-circle-fill"></i></center></td>
                    </tr>
                    <tr>
                      <td>Advanced product search and filtering </td>
                      <td><center><i class="bi bi-check-circle-fill"></i></center></td>
                    </tr>
                    <tr>
                      <td>Real-time inventory updates</td>
                      <td><center><i class="bi bi-check-circle-fill"></i></center></td>
                    </tr>
                    <tr>
                      <td>Secure payment processing</td>
                      <td><center><i class="bi bi-check-circle-fill"></i></center></td>
                    </tr>
                    <tr>
                      <td>Automated order fulfillment</td>
                      <td><center><i class="bi bi-check-circle-fill"></i></center></td>
                    </tr>
                    <tr>
                      <td>Multi-language and multi-currency support</td>
                      <td><center><i class="bi bi-check-circle-fill"></i></center></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>Benefits of Sana Commerce for Your Business</h2>
                <p>With a suite of powerful tools and features, <a href="https://www.sana-commerce.com/" target="_blank" rel="nofollow">Sana Commerce</a> is designed to help you achieve success and reach new heights in the <b>world of e-commerce</b>.</p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Improve customer experience with a professional and personalized online store</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Boost sales and revenue with advanced e-commerce features</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Streamline E-commerce operations with seamless integration to your <Link href="/products/microsoft-dynamics-nav/"><a>Dynamics NAV</a></Link> and <b>Business Central ERP</b></p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Enhance order accuracy and reduce manual errors with automated order fulfillment</p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Reduce costs and increase efficiency with real-time inventory updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Do you want to reach new heights in your e-commerce game?</h3>
                <p>Sana Commerce has you covered in all e-Commerce dimensions.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get a Tailored Quote Now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <Image
                      src="/img/Sana-Commerce-side.png"
                      className="fix-im"
                      alt="Sana-Commerce-side"
                      width={1085} height={656}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>Let Dynamics 365 Business Central Gracefully Shoulder Your Burden with Sana Commerce Add-On for Business Central</h2>
                  <p>Whether you are a small business just starting out or a large enterprise seeking to enhance your online commerce operations, Sana Commerce is the right path.</p>
                  <div className="text-lg-start mm-t">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Get Started </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
              <header className="section-header">
                <h2>Explore FAQs: Sana Commerce Add-On and Dynamics 365 Business Central</h2>
              </header>
            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >Which industries use Sana Commerce?</button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Sana Commerce has the following typical customers:</p>
                      <ul>
                        <li>Large Enterprises/international groups</li>
                        <li>Mid-Size Businesses</li>
                        <li>Small Businesses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >Sana Commerce supports what languages?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Sana Commerce supports the following languages:</p>
                      <p>English, French, Spanish, German, Italian, Portuguese, Dutch, Danish, Norwegian (Bokmal), Swedish, Finnish, Russian, Polish, Hungarian, Turkish, Arabic, Ukrainian, Japanese, Chinese (Simplified), Chinese (Traditional), Thai, Korean.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >Can I use Sana Commerce on my mobile devices?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p><b>Yes.</b> You can seamlessly use iOS and Android devices to access Sana Commerce.  </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >Do I need to upgrade my Dynamics NAV ERP to use Sana Commerce add-on?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p><b>No.</b> However, if you upgrade your <Link href="/dynamics-nav-to-business-central/"><a>Dynamics NAV to Business Central</a></Link>, so that you can take advantage of cloud technology in order to make business operations more agile and profitable.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >Is Sana Commerce an API or an Add-On?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Sana Commerce does not offer an API. It is an <b>Add-On for Microsoft Business Central</b> and NAV.</p>
                      <p>Connect with <b>Dynamics Square Experts</b> to make it available for your <Link href="/products/dynamics-365-business-central/"><a>Business Central</a></Link> <b>ERP</b> or <b>Dynamics NAV ERP</b>.</p>
                      <p><Link href="/contact-us/"><a>Get in touch with us to request a demo </a></Link></p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >Does Sana Commerce offer integration with other ERP apps?</button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Yes. Sana Commerce gets harmoniously united with these applications: PayPal, Authorize.Net, Worldpay, and <Link href="/products/microsoft-dynamics-365/"><a>Microsoft Dynamics 365</a></Link> products like <b>Dynamics 365 Business Central</b>, SAP Business One, Mailchimp, plus SAP HANA Cloud.</p>
                     <p><Link href="/"><a>Overview of Microsoft Gold Partners can be found here </a></Link></p>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SanaEcommerce;
