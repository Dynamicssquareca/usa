import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";

const MobileWms = () => {


  return (
    <>
      <Head>
        <title>Warehouse Insight App for Integration for D365 Business Central</title>
        <meta
          name="description"
          content="Warehouse Insight from Insight Works is a warehouse management system add-on for Dynamics 365 Business Central Cloud by DMSI Works. Get solution?"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/mobile-wms-dynamics-365-business-central/"
        />
      </Head>


      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Advanced Warehouse Insight Add-On for D365 Business Central</h1>
              <p>Seamlessly streamline your Warehouse Operations with the Warehouse Insight Add-on from Insight Works that is fully integrated with Microsoft Dynamics 365 Business Central Cloud or Dynamics NAV.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Integrate Now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Dynamics-365-Finance-Banner.svg"
                alt="Microsoft Dynamics 365 Finance"
                width={868}
                height={487}
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
                <h2>Why Choose Warehouse Insight Add-On from Insight Works?</h2>
                <p><Link href="/products/dynamics-365-business-central/"><a>Microsoft Dynamics 365 Business Central</a></Link> and NAV allow businesses to manage warehouse operations. This Warehouse Insight Add-on <b>Meets Your Needs</b> when integrated with <b>D365 Business Central</b>. It is a way to effortlessly manage all your warehousing on a single dashboard.</p>
              </header>
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                  width={625} height={651}
                />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>How to get this add-on?</h2>
              </div>
              <div className="custom-p-001">
                <p>The <b>Warehouse Insight</b> Add-on from Insights Works seamlessly gets added to your cloud <Link href="/dynamics-365-business-central-implementation/"><a>Implementation of Dynamics 365 Business Central</a></Link>. Contact a trusted Dynamics 365 partner or <Link href="/"><a>Microsoft Gold Partner</a></Link> like <b>Dynamics Square</b> and avoid getting into inaccurate warehouse transactions and the hassle of manual tracking. Get started with Warehouse Insight for all your warehouse management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>What is included in this WMS add-on? </h2>
              </header>
            </div>
          </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <span>1 - Built specifically for Business Central</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Warehouse Insight, built especially for Business Central and <Link href="/products/microsoft-dynamics-nav/"><a>Dynamics NAV</a></Link>, is a Microsoft-certified Add-On. This warehouse management add-on meets Microsoft's stringent standards for Business Central and NAV add-ons.</p>
                        <p>This guarantees that Warehouse Insight will work smoothly with your NAV or <Link href="/products/dynamics-365-business-central/"><a>Business Central</a></Link>, regardless of warehouse setup.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <span>2 - Real-Time Access for Production Data and Inventory</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Warehouse Insight is a solution that allows you to manage your inventory and perform various operations using handheld devices. This includes capturing lots and serial numbers for transactions, thus increasing efficiency.</p>
                        <p>With Warehouse Insight, you have all the necessary information at your fingertips and can use a consistent user interface on the handheld device, regardless of location configuration. Additionally, you can scan directly to sales and purchase documents.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnews">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>3 - Seamless Warehouse Operations Streamlining </span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>Streamline your warehouse operations by palletizing or packaging items with the help of a configurable add-on for handheld devices. Easily customize views and menus to suit your needs. This scalable and flexible solution is designed to support your business as it grows.</p>
                        <p>We, at Dynamics Square, provide you with full support, no matter how complicated your WMS requirements are. Get in touch with our team.</p>
                      </div>
                    </div>
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
                <h3>Are you prepared to advance your Warehouse Operations? </h3>
                <p>Let's schedule a friendly meeting to help you with a highly comprehensive warehouse management system which is a simple and flexible subscription-based model that makes it easy for you to start.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started</span>
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
                <h2>Explore The FAQs Resource for Your Queries!</h2>
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
                    >What hardware does Warehouse Insight Add-on support?</button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Warehouse Insight by Insight Works for <b>Dynamics 365 Business Central supports</b> a wide range of smart electronic devices, including mobile computers - tablets, smartphones, wearables, and more.</p>
                      <p>This versatility of this software piece allows you to either utilize existing technology or customize your hardware choices to meet the unique requirements of your warehouse setting. Major leaders like Datalogic, Zebra, and Honeywell support this platform.</p>
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
                    >Can Warehouse Insight support multi-dimensional barcode?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p><b>Yes</b>. Data Matrix barcodes are popular for their small size and high data storage capacity. You can directly generate them from NAV with all relevant information, reducing the number of scans needed. The system can help you interpret various barcode formats and symbologies, including UPC/GS1, GTIN, and custom formats, through user-configured rules. </p>
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
                    >How much is the cost of Warehouse Insight?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p><b>Warehouse Insight</b> compliments <b>Microsoft Business Central Cloud</b>. The only potential costs are the additional user licenses you need for Business Central and an one-time implementation fee. Also, if you desire extra setup assistance, enhanced support plans are also available. Contact your <b>Microsoft partner</b> like <b>Dynamics Square</b> for support and implementation.</p>
                      <p><Link href="/contact-us/"><a>Feel free to contact us to get a demo</a></Link></p>
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
                    >Which languages is Warehouse Insight compatible with?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>English, Dutch, German, Danish, French, Norwegian, Portuguese, Spanish, Swedish, Icelandic, Finnish, Slovene, Italian, Polish, Russian, Croatian, Indonesian, Lithuanian, Latvian, and Estonian.</p>
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
                    >Can I revert from Warehouse Insight to WMS Express later?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p><b>Yes</b>, you can. Uninstalling Warehouse Insight and installing WMS Express will allow you to downgrade. </p>
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

export default MobileWms;
