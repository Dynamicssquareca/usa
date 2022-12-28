import Head from 'next/head'
import Link from 'next/link';

const Inedex = () => {
    return (
        <>
        <Head>
        <title>Microsoft Dynamics 365 Services From Dynamics Square in USA</title>
        <meta name="description"
          content="Make your business more sustainable and resilient with agile solutions like Microsoft Dynamics 365. Contact Dynamics Square for all Dynamics 365 services." />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/our-services/"
        />
        </Head>
        <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Microsoft Dynamics 365 Services
              </h1>
              <p>Transforming businesses with Microsoft's most modern tech - Microsoft cloud, Azure, AI (Artificial Intelligence), Power Apps, Dataverse, Dynamics 365, Power BI, AR (Augmented Reality), VR (Virtual Reality), MR (Mixed Reality), and more.</p>
              <div className="text-center text-lg-start">
                <a
                  data-bs-toggle="modal"
                  href="#exampleModal"
                  className="btn-get-started scrollto"
                >
                  <span>Call Me!</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <img
                src="/img/dynamics-365-hero-image.svg"
                alt="dynamics-365-hero-image.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="side-heading-custom-01">
                <h2>Microsoft Business Solutions</h2>
              </div>
              <div className="custom-p-001">
                <p className="ne4">Staying ahead of the curve is crucial in an industry filled with disruption and innovation. The modern workplace is fast-moving, and complex, and needs out-of-the-box solutions to stay aware.<br /><br />The People at <Link href="/">Dynamics Square</Link> strive to be the best business partner you ever had. Each one of us takes your business seriously and ours. It has been over a decade since we began empowering businesses of all sizes by providing the right business tools at their fingertips.<br /><br />You will find everything from Enterprise resource planning (ERP), customer relationship management (CRM), and Business Intelligence (BI) applications like <Link href="/products/microsoft-power-bi/">Power BI </Link> to different <Link href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</Link> add-ons like AI-powered bots, Power Apps, and other business apps plus integrations.<br /><br />The innovative solutions that we provide help you gain a competitive edge and assist you in creating seamless customer experiences and workflows to maximize your team's efficiency and productivity.<br /><br />Beyond Microsoft's latest tech stack, you will find resources designed to support and enhance your business processes. You can also discover creative business tips that may help you maximize your ROIS for every stage of your organization.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="busine_service_bottom-left custom012">
                <img
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="call-to-action-content">
                <h3>Contact Dynamics Square to discuss business pricing and receive support right away.</h3>
                <p>We would love to get the most out of your budget on every Microsoft business solution.</p>
                <div className="text-center m-o-t new-btn-nn">
                <Link href="#exampleModal">
                 <a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get In Touch</span>
                  </a>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
            <header className="section-header">
            <h2>
            Dynamics 365 Services 
              <br />
              We Offer 
            </h2>
            <p>Enable your team to work their way, with business apps that offer flexibility, power, and style. From implementation, extension, upgrades, and maintenance to reassessing your existing business management technology, we help you get the best options with our support services and consulting. </p>
          </header>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Implementation Service</h3>
                <p>We empower your organization to adopt a standard and most modern approach while implementing Microsoft's sophisticated technology. Our Innovative implementation services help you derive high business values and growth opportunities.</p>
                <br />
                <div className="text-lg-center">
                  <a
                    href="/our-services/dynamics-365-implementation-services"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Upgrade Service</h3>
                <p>Upgrade your legacy system capabilities, automate process flows, adapt to change, and understand your employees and customers with our highly integrated and requirement-specific Dynamics 365 upgrade services.</p>
                <br />
                <div className="text-lg-center">
                  <a
                    href="/our-services/dynamics-365-upgrade-services/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Support Service</h3>
                <p>Drive business continuity, monitor your system and processes continuously, and ensure sustainability to attain long-term success with our personalized support services.</p>
                <br />
                <div className="text-lg-center">
                  <a
                    href="/our-services/dynamics-365-support-services"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}

export default Inedex;
