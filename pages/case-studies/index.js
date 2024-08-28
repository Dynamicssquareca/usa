import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
const CaseStudyList = () => {
  return (
    <>
      <Head>
      <title>Microsoft Dynamics 365 Case Studies | Dynamics Square</title>
<meta name="description" content="Discover our client's case studies and see how we care about them from start to finish. We have worked with them to provide long lasting Dynamics 365 Support."/>
<link rel="canonical" href="https://www.dynamicssquare.com/case-studies/" />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Case Studies</h1>
              <p>
                Check out some of our case studies to see how Dynamics 365 has
                made a difference for our clients.
              </p>
              {/* <div>
                <div className="text-center text-lg-start">
                  <a href="#" className="btn-get-started scrollto">
                    <span>Borwse List</span>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/case-icons-list.png"
                alt="case-icons-list"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="nav flex-column nav-pills me-3 side-bar-common-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiless"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
                >
                  All
                </button>
                <button
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-homes"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="false"
                >
                  Upgrade
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiles"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Implementation
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messagess"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Support
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
              <div
                  className="tab-pane fade show active"
                  id="v-pills-profiless"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                  <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image
                            src="/img/wedding-venues-side.png"
                            alt="wedding-venues-side"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>Migration from Salesforce to <br/>Microsoft Dynamics 365 Sales</p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/salesforce-to-microsoft-dynamics-365-sales/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image
                            src="/img/satinless.png"
                            alt="satinless"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>Reimplementing Microsoft Dynamics 365 Sales to Boost Efficiency and Results</p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/implementation-microsoft-dynamics-365-sales/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image
                            src="/img/case-studies-1.jpg"
                            alt="cs-DMIC-logo"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Streamline Manufacturing & Accounting with D365 Business Central On-Premise
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav13-business-central-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image src="/img/case-studies-2.jpg" alt="MexiLand_logos"  width={850}
                            height={410} />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>See how a Mexican candy company upgraded from Dynamics NAV 2009.</p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav09-business-central-on-premise/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/timesco-logo.png"
                            alt="timesco-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Timesco improved production capacity and
                            doubled revenue by upgrading Dynamics NAV to
                            Business Central Online.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/timesco/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image
                            src="/img/case-studies-3.jpg"
                            alt="cs-lnl-logo"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Improving Operational Efficiency by Upgrading NAV05 to NAV2018
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/upgrade-nav05-to-nav18/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-4.jpg"
                            alt="cs-spectra-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implemented Custom EFT Module to improvise Payment Methods
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/dynamics-nav13-eft-implementation/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image
                            src="/img/case-studies-5.jpg"
                            alt="Discovery-Cube-logo"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Non-profit tripled productivity <br/> and cut costs by 68%.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/dynamics-ax12-implementation/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image 
                            src="/img/case-studies-6.jpg"
                            alt="msh-logo"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>USA health organization boosted productivity 5x and cut costs 78%.</p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/implemented-dynamics-ax12/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/wipersupplywide-1-300x54-1.png"
                            alt="wipersupplywide-1-300x54-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Wiper Supply Services doubled sales
                            volume and customers by getting dedicated support
                            from Dynamics Square.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/wiper-supply-services/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/case-studies-7.jpg" alt="cs-shimco-logo" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implementation of Microsoft Dynamics Business Central Cloud
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav13-to-d365-business-central-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-homes"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/crm-trading-1.png"
                            alt="crm-trading"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            See how CRM Trading boosted it's operational
                            efficiency by upgrading from Dynamics NAV 2009 to
                            Dynamics NAV 2018.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/implementation-microsoft-dynamics-365-sales/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image
                            src="/img/case-studies-1.jpg"
                            alt="cs-DMIC-logo"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Streamline Manufacturing & Accounting with D365 Business Central On-Premise
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav13-business-central-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image src="/img/case-studies-2.jpg" alt="MexiLand_logos"  width={850}
                            height={410} />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>See how a Mexican candy company upgraded from Dynamics NAV 2009.</p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav09-business-central-on-premise/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/timesco-logo.png"
                            alt="timesco-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Timesco improved production capacity and
                            doubled revenue by upgrading Dynamics NAV to
                            Business Central Online.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/timesco/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profiles"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image
                            src="/img/case-studies-3.jpg"
                            alt="cs-lnl-logo"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Improving Operational Efficiency by Upgrading NAV05 to NAV2018
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/upgrade-nav05-to-nav18/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-4.jpg"
                            alt="Spectra-Aluminum-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implemented Custom EFT Module to improvise Payment Methods
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/dynamics-nav13-eft-implementation/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image
                            src="/img/case-studies-5.jpg"
                            alt="Discovery-Cube-logo"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>Non-profit tripled productivity <br/> and cut costs by 68%.</p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/dynamics-ax12-implementation/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <Image 
                            src="/img/case-studies-6.jpg"
                            alt="msh-logo"
                            width={850}
                            height={410}
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>USA health organization boosted productivity 5x and cut costs 78%.</p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/implemented-dynamics-ax12/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messagess"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row">
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/wipersupplywide-1-300x54-1.png"
                            alt="wipersupplywide-1-300x54-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Wiper Supply Services doubled sales
                            volume and customers by getting dedicated support
                            from Dynamics Square.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/wiper-supply-services/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/case-studies-7.jpg" alt="cs-shimco-logo" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implementation of Microsoft Dynamics Business Central Cloud
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav13-to-d365-business-central-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  4
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settingss"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default CaseStudyList;
