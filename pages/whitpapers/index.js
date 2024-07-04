import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
const WhitePaper = () => {
  return (
    <>
      <Head>
      <title>WhitePapers| Dynamics Square</title>
        <meta
          name="description"
          content="Explore our white paper to get insights into how Microsoft business solutions are helping businesses transform and achieve newer heights."
        />
        <link rel="canonical" href="https://www.dynamicssquare.com/whitpapers/" />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>White Paper</h1>
              <p>Explore our white paper to get insights into how Microsoft business solutions are helping businesses transform and achieve newer heights.</p>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/img/tablet-ebook.png" alt="tablet-ebook" />
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
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Latest Paper
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                  <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <a
                          href="/whitpapers/micorosoft-copilot-for-transformation-in-your-business/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/img/Featured-Banner-Copilot-Whitepaper.png"
                            alt="Featured-Banner-Copilot-Whitepaper"
                          />
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="/whitpapers/micorosoft-copilot-for-transformation-in-your-business/">
                            Microsoft Copilot: The Catalyst for Transformation in Your Business
                            </a>
                          </h5>
                          <div className="btn-003 btn-009">
                            <a
                              className="btn btn-sm btn-danger"
                              href="/whitpapers/micorosoft-copilot-for-transformation-in-your-business/"
                            >
                              Read Now
                            </a>
                          </div>
                        </div>
                      </div>
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

export default WhitePaper;
