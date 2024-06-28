import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import FormGuide from "../../components/FormGuide";

const Dynamics365LicensingGuide = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const heightToShowFrom = 900;
    const footerElement = document.getElementById("footerhide");
    const footerOffset = footerElement.getBoundingClientRect().top + window.scrollY;
    const viewportHeight = window.innerHeight;
    const heightToHideFrom = footerOffset - viewportHeight; // Hide when footer is just about to come into view
    const winScroll = window.scrollY;

    if (winScroll > heightToShowFrom && winScroll < heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <>
      <Head>

      <title>Dynamics 365 Pricing and Licensing Guide (2024)</title>
        <meta
          name="description"
          content="Get access to the latest 2024 Dynamics 365 pricing & licensing guide with all the information to help you select the right plan for your business."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/guides/dynamics-365-pricing-and-licensing-guide/"
        />
        <meta property="og:locale" content="USA" />
        <meta property="og:type" content="guide" />
        <meta property="og:title" content="Dynamics 365 Pricing and Licensing Guide (2024)" />
        <meta property="og:description" content="Get access to the latest 2024 Dynamics 365 pricing & licensing guide with all the information to help you select the right plan for your business." />
        <meta property="og:url" content="https://www.dynamicssquare.com/guides/dynamics-365-pricing-and-licensing-guide/" />
        <meta property="og:site_name" content="Dynamics Square USA" />
        <meta property="og:image" content="https://www.dynamicssquare.com/img/d-365-banner-pic.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_usa" />
        <meta name="twitter:title" content="Dynamics 365 Pricing and Licensing Guide (2024)" />
        <meta name="twitter:description" content="Get access to the latest 2024 Dynamics 365 pricing & licensing guide with all the information to help you select the right plan for your business." />
        <meta name="twitter:image" content="https://www.dynamicssquare.com/img/d-365-banner-pic.png" />

            <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebPage",
              "name": "Microsoft Dynamics 365 Pricing and Licensing",
              "url": "https://www.dynamicssquare.com/guides/dynamics-365-pricing-and-licensing-guide/",
                      "description": "Get access to the latest 2024 Dynamics 365 pricing & licensing guide with all the information to help you select the right plan for your business."
            }),
          }}
        />
      </Head>
      <section className="banner-guide hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="guide-left">
                <h1>Dynamics 365 Pricing and Licensing Guide (2024)</h1>
                <p>Explore the core functionalities of different Dynamics 365 solutions along with their licensing options to help you choose a suitable application for your business.</p>
                
              </div>
            </div>
            <div className="col-lg-7 align-self-center text-center">
            <Image
                src="/img/d-365-banner-pic.png"
                alt="d-365-banner-pic"
                width={1007}
                height={628}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="tbale-wrr-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <header className="section-header">
                <h2>List of Episodes: Discover What’s Inside in this D365 Licensing Guide. </h2>
              </header>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-1" rel="" target="_self">
                  <Image src="/img/d365-guide-1.png" alt="d365-guide-1" width={160} height={160} style={{ marginBottom: '10px' }} />
                  <h3>Episode 1</h3>
                  <p>Introduction to Dynamics 365</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-2" rel="" target="_self">
                  <Image
                    src="/img/d365-guide-2.png"
                    alt="d365-guide-2"
                    width={160} height={160}
                    style={{ marginBottom: '10px' }}
                  />
                  <h3>Episode 2</h3>
                  <p>Understanding Dynamics 365 Licensing</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-3" rel="" target="_self">
                  <Image
                    src="/img/d365-guide-3.png"
                    alt="d365-guide-3"
                    width={160} height={160}
                    style={{ marginBottom: '10px' }}
                  />
                  <h3>Episode 3</h3>
                  <p>Licensing of Dynamics 365 ERP Solutions </p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-4" rel="" target="_self">
                  <Image
                    src="/img/d365-guide-4.png"
                    alt="d365-guide-4"
                    width={160} height={160}
                    style={{ marginBottom: '10px' }}
                  />
                  <h3>Episode 4</h3>
                  <p>Licensing of Dynamics 365 CRM Solutions</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-5" rel="" target="_self">
                  <Image
                    src="/img/d365-guide-5.png"
                    alt="d365-guide-5"
                    width={160} height={160}
                    style={{ marginBottom: '10px' }}
                  />
                  <h3>Episode 5</h3>
                  <p>License Purchase Requirements</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-6" rel="" target="_self">
                  <Image
                    src="/img/d365-guide-6.png"
                    alt="d365-guide-6"
                    width={160} height={160}
                    style={{ marginBottom: '10px' }}
                  />
                  <h3>Episode 6</h3>
                  <p>Which License Suits You?</p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

         <div className={isVisible ? 'hd-div' : 'ds-none'}>
          <ul>
            <li>
              <a href="#tabs-1" rel="" target="_self">
                1. What is Dynamics 365?
              </a>
            </li>
            <li>
              <a href="#tabs-2" rel="" target="_self">
                2. Intro to Licensing
              </a>
            </li>
            <li>
              <a href="#tabs-3" rel="" target="_self">
                3. D365 ERP Licensing
              </a>
            </li>
            <li>
              <a href="#tabs-4" rel="" target="_self">
                4. D365 CRM Licensing
              </a>
            </li>
            <li>
              <a href="#tabs-5" rel="" target="_self">
                5. License Requirements
              </a>
            </li>
            <li>
              <a href="#tabs-6" rel="" target="_self">
                6. Best License for You
              </a>
            </li>
          </ul>
        </div>

      <section className="color-gr">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <h2>Microsoft Dynamics 365 Licensing Guide 2024: Licensing Simplified</h2>
                <p>You can leverage the advanced capabilities of your <Link href="/products/microsoft-dynamics-365/"><a>Dynamics 365 solution</a></Link> by opting for the right license. However, you will need to analyze your business as well as its requirements before moving ahead with choosing the right licensing.</p>
                <div className="iner-pp inner-ppp">
                  <Image
                    src="/img/Licensing-Simplified.png"
                    alt="Licensing-Simplified"
                    width={887}
                    height={437}
                  />
                </div>
                <p>If you are new to the world of Dynamics 365 or looking to clearly understand the licensing of Dynamics 365 solutions, your search ends here. This guide will empower you with knowledge of licensing and its different aspects.</p>
                <p>Once you have the right license, you can unlock a list of tools that can promote business growth while allowing you to achieve targets.</p>
                <p>This guide will help you choose a license that suits your organization's size, budget, and unique functionality with the right set of tools.</p>
                <p>By the end of this guide, you will understand:</p>
                <ul>
                  <li>The core licensing concepts of Dynamics 365</li>
                  <li>Types of licensing</li>
                  <li>Different Dynamics 365 ERP and CRM solutions</li>
                  <li>Minimum purchase requirements for licenses</li>
                  <li>The best license for your business</li>
                </ul>
                <p>Before getting into Dynamics 365 licensing, let's understand what Dynamics 365 is.</p>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section id="tabs-1" className="col-new-blue">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Episode 1:</strong> What is Dynamics 365?
                </h2>
                <p>A solution or a set of solutions?</p>
                <div className="balnde-imge-mode balnde-imge-mode-new">
                  <img
                    src="/img/chapter-1.png"
                    alt="chapter-1"
                    className="shape-2"
                    width={164}
                    height={164}
                  />
                  <img
                    src="/img/over-lay-shape.png"
                    alt="over-lay-shape"
                    className="overlay-1"
                    width={769}
                    height={324}
                  />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <p>Microsoft Dynamics 365 is a suite of powerful ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) solutions that streamline operations while automating different tasks.</p>
                <p>Such solutions not only simplify the entire business but also push the business to build stronger relationships with customers.</p>
                <p>Microsoft Dynamics ERP or CRM solutions offer cloud technologies to enhance business efficiency, productivity, and profitability.</p>
                <p><Link href="/our-services/dynamics-365-implementation-services/"><a>Implementing the Dynamics 365 solution</a></Link> eliminates the data silos from the system and offers a unified approach towards great profitability.</p>
                <p><strong>Some of the core benefits of Dynamics 365 are:</strong></p>
                <p><b>1. Simplify Core Business Tasks</b></p>
                <p>Automate business processes and workflows while managing everything in one place.</p>
                <p><b>2. Focus on Customer Satisfaction</b></p>
                <p>Analyze behavior to offer tailored customer experiences and the optimum level of satisfaction.</p>
                <p><b>3. Give Valuable Insights</b></p>
                <p>Capture real-time insights to make data-driven, actionable decisions for enhanced productivity.</p>
                <p><b>4. Optimize Valuable Resources</b></p>
                <p>Manage, track, and optimize resources to increase efficiency and overall profitability.</p>
                <p><b>5. Centralized Data Center</b></p>
                <p>Empower employees to access data from a centralized repository to streamline data flow.</p>
                <p><b>6. Work from Anywhere and Anytime</b></p>
                <p>Cloud based deployment enables businesses to access data from anywhere and using any device.</p>
                <p><b>7. Easily Scalable and Adaptable</b></p>
                <p>Grow your <Link href="/products/microsoft-dynamics-erp/"><a>Dynamics ERP</a></Link> or CRM system with the growth of your business without any hassle. </p>
              </div>

              <div className="iner-pp inner-ppp">
                <Image src="/img/centerlized-data-center.png" alt="centerlized-data-center" width={1018} height={410} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tabs-2" className="col-new-green">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Episode 2: </strong>Understanding Dynamics 365 Licensing
                </h2>
                <p>Simple and Effective</p>
                <div className="balnde-imge-mode balnde-imge-mode-new">
                  <img
                    src="/img/chapter-2.png"
                    alt="chapter-2"
                    className="shape-2"
                    width={164}
                    height={164}
                  />
                  <img
                    src="/img/over-lay-shape.png"
                    alt="over-lay-shape"
                    className="overlay-1"
                    width={769}
                    height={324}
                  />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <p>The days of perpetual licensing have gone where businesses pay huge prices for a solution irrespective of their requirements or usage. Now, Microsoft has simplified the entire licensing and pricing of all its Dynamics 365 solutions to suit the different needs of businesses.</p>
                <p>In this section, we are going to discuss various aspects of Dynamics 365 licensing and their usage.</p>
              </div>
              <div className="iner-pp inner-ppp">
                <Image
                  src="/img/understanding-dynamics.png"
                  alt="fig1.6"
                  width={941}
                  height={440}
                />
              </div>
              <div className="cont-table-inner">
                <p><b>Primary Licensing Model</b></p>
                <p>This is the basic Dynamic 365 licensing model that offers you good clarity to choose the most suitable license as per your requirements. It comes in two different models, which are discussed next:</p>
                <p><b>Per User Licensing</b></p>
                <p>Per-user licensing is like the subscription model, where one license is allotted to one user only. It means the individual license purchased by a user can only access the tools and capabilities of the Dynamics 365 application.</p>
                <p>Applications:</p>
                <ul>
                  <li>Businesses with Changing Needs: It offers flexibility that allows you to purchase or remove licenses as you will.</li>
                  <li>Organization with Diverse Users: Based on the user role, you can assign the license to the required functionalities.</li>
                </ul>
                <p><b>Per Tenant Licensing</b></p>
                <p>Per-tenant licensing allows users to access the functionalities of the Dynamics 365 solution in a business, irrespective of the number of users. It is a fixed fee, and the license can be accessed by anyone.</p>
                <p>Advantages:</p>

                <ul>
                  <li>Businesses with an inconsistent number of users: It is a cost-effective option, as several users can access the licenses regardless of their roles.</li>
                  <li>Organizations with a unified work environment: It gives a collaborative approach among users to maximize knowledge sharing and streamline access to data.</li>
                </ul>
                <p><b>Note:</b>  An environment is a unified space or a container to store, manage, and share a business's data.</p>
                <p><b>Assigned Licenses</b></p>
                <p>These are individual user licenses that are assigned to accounts based on their requirements.</p>
                <p><b>User Licenses:</b></p>
                <p>This license grants access to individual users to all tools and functionalities of the Dynamics 365 application, irrespective of the device the user is using. The same license is called an enterprise or professional license when opting for <Link href="/products/microsoft-dynamics-365-sales/"><a>Dynamics 365 Sales</a></Link> and Dynamics 365 Customer Service.</p>
                <p><b>Full User Access License:</b></p>
                <p>A full user license gives full access to a license to the user, whether it is an enterprise license or a professional license. These two licenses must not be mixed in an organization.</p>
                <p><b>Attach Licensing:</b></p>
                <p>This is the most cost-effective way of getting licenses for multiple Dynamics 365 applications at a much lower cost once you purchase a full user license. Such licenses offer the same level of tools and capabilities that a full user license offers.</p>
                <p>Microsoft gives a fixed list of subsequent licenses where it specifies that with the purchase of a full user license of a Dynamics 365 application, you can purchase licenses of other qualifying applications. These solutions are frequently purchased by people in similar roles. And Microsoft has fixed data that specifies the master application and its subsequent qualifying licensing options.</p>
              </div>

              

              <div className="iner-pp inner-ppp">
                <Image
                  src="/img/picc.svg"
                  alt="picc"
                  width={1280}
                  height={720}
                />
              </div>
              <div className="cont-table-inner">
                <p>The best part about attach licensing is you can buy as many licenses as you want available for that base license.</p>
                <p><b>Note:</b> You can only purchase an attached subsequent license after the purchase of a full user license (not a device license) or base user license. Customers who have purchased a base license from a Cloud Solution Provider (CSP) or from MPSA programs cannot purchase an attached license and have to purchase the full user license instead.</p>
                <p><b>Additional User Licenses:</b></p>
                <p>Additional user licenses offer limited Dynamics 365 functionality to a user on a monthly subscription based on their requirements. You It allows users to:</p>
                <ul>
                  <li>Perform manual data entry tasks</li>
                  <li>Consume reports and data</li>
                  <li>Complete tasks similar to update and modifying data</li>
                  <li>Process specific, complex processes without opting for full user access</li>
                  <li>Device License</li>
                </ul>
                <p>Users can access the Dynamics 365 application through a single licensed device without purchasing any other kind of licensing (full user or additional user). Device licenses can be accessed through shared logins (shared passwords or the same device) or individual logins (personal credentials).</p>
                <p>Shared logins are available for Business Central Device License, Sales Device, Field Service Device, and Customer Service Device.</p>
                <p>Individual logins are available for Business Central Device Licenses and Operations-Device.</p>
                <ul><li>Human Resource Self-Service License</li></ul>
                <p>This license allows users to perform basic HR activities without going for a full user license.</p>
                <ul><li>Operations- Activity License</li></ul>
                <p>This offers you the additional capabilities of a team member license to access a Dynamics 365 solution, but less than a full user license.</p>
                <ul><li>Team Member License</li></ul>
                <p>This license is available for almost all applications of Dynamics 365 and offers read-only access to all data. Users can opt for this license to avail basic functionality to add, modify, and update the data, like updating contacts and expense entries.</p>
                <p><b>Unassigned Licenses</b></p>
                <p>Unassigned licenses are the primary licensing for most of the Dynamics 365 solutions. Such licensing gives access to a feature, service, or full functionalities of Dynamics 365 allotted to the user, device, or tenant level.</p>
                <ul>
                  <li>Full Product Access</li>
                </ul>
                <p>Full product access licensing is the primary licensing option of the few Dynamics 365 solutions offered on a per-tenant basis only. These applications include <Link href="/products/microsoft-dynamics-365-marketing/"><a>Dynamics 365 Marketing</a></Link> and Dynamics 365 Customer Insights.</p>
                <ul>
                  <li>Cross-Application Access</li>
                </ul>
                <p>This license provides access to Dynamics 365 applications in some situations. This includes the application, like the Dynamics 365 Operations - Order Lines License.</p>
                <ul><li>Additional capacity</li></ul>
                <p>Most of the Dynamics 365 products come with capacity entitlements using different parameters that include data storage, transaction volume, customer profiles, and case routing requests. Some of the functions or parameters in Dynamics 365 come with a base user license. You can avail yourself of this license to increase the specific entitlement to support your business requirements.</p>
                <ul>
                  <li>With each base user license, you will get the default subscription capacity per tenant.</li>
                  <li>You need to buy a capacity license for at least one year that comes with standard annual allowances (as per product). All capacities allotted per month can be used yearly, regardless of the allotment.</li>
                  <li>You can share the Dataverse capacity between the following Dynamics 365 solutions: Sales, Customer Service, Field Service, Finance, Supply Chain Management, Human Resources, Commerce, Project Operations, Business Central Essentials, and Business Central Premium.</li>
                  <li>Capacity add-on licenses are based on a single tenant and are not linked to any specific user. Such add-on licenses are only available to customers with a valid base license for the specific product.</li>
                  <li>You can share the database and file storage capacities with Finance, Supply Chain Management, Commerce, Human Resources, and Project Operations.</li>
                </ul>
                <p><b>Assigned Licenses</b></p>
                <p>The assigned license is available for some of the Dynamics 365 solutions in three options, which are:</p>
                <ul><li><b>Professional License</b></li></ul>
                <p>Professional licensing offers limited and simplified capabilities and is suitable for users. This is generally used in small businesses with less complex operations.</p>
                <ul><li><b>Enterprise License</b></li></ul>
                <p>This is standard licensing for some Dynamics 365 products. It is for users who want to access the entire business and deal with complex business operations using the advanced functionalities of Dynamics 365. An enterprise license is available for the below Dynamics 365 solutions:</p>
                <ul>
                  <li>Sales Enterprise</li>
                  <li>Customer Service Enterprise</li>
                  <li>Field Service</li>
                  <li>Human Resources</li>
                  <li>Finance</li>
                  <li>Supply Chain Management</li>
                  <li>Commerce</li>
                  <li>Project Operations</li>
                  <li>Business Central Premium</li>
                  <li>Business Central Essentials</li>
                </ul>
                <p><b>Note:</b> A user can only access the Enterprise or Professional license for a Dynamics 365 solution. </p>
                <p><b>Note:</b>   A business can use a blend of assigned or unassigned licenses to justify their Dynamics 365 requirements. When you purchase a license, it will assign you non-perpetual rights (no-buyout rights) to use one or more Dynamics 365 applications with cloud-based deployment only.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tabs-3" className="col-new-orange">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Episode 3: </strong>Dynamics 365 ERP Solutions: Licensing
                </h2>
                <p>Check out Licensing of Dynamics 365 ERP solutions.</p>
                <div className="balnde-imge-mode balnde-imge-mode-new">
                  <img
                    src="/img/chapter-3.png"
                    alt="chapter-3"
                    className="shape-2"
                    width={164}
                    height={164}
                  />
                  <img
                    src="/img/over-lay-shape.png"
                    alt="over-lay-shape"
                    className="overlay-1"
                    width={769}
                    height={324}
                  />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <p>Dynamics 365 suite offers various ERP (enterprise resource planning) solutions to streamline a business while pushing it towards greater efficiency. The licensing of these ERPs is different from one another because they offer different sorts of capabilities to the business. The licensing of major Dynamics ERPs is discussed next.</p>
                <p><b>Dynamics 365 Business Central</b></p>
                <p><Link href="/products/dynamics-365-business-central/"><a>Microsoft Dynamics Business Central</a></Link> is an all-in-one ERP solution specifically built for small businesses. It possesses advanced business management capabilities to simplify operations and connect all departments of the business.</p>
                <p>Business Central is licensed per user and available in two licensing plans: Essentials and Premium. Also, it does offer a Team Member license, which comes standard for all Dynamics 365 applications.</p>
                <ul><li>Business Central Essentials</li></ul>
                <p>The Essentials license of Microsoft Business Central allows users to streamline processes across different departments with advanced tools and capabilities. </p>
                <div className="ne-llit-inlin">
                  <ul>
                    <li><i className="bi bi-check-lg"></i>Financial Management </li>
                    <li><i className="bi bi-check-lg"></i>AI-Supported Forecasting</li>
                    <li><i className="bi bi-check-lg"></i>Customer Relationship Management</li>
                    <li><i className="bi bi-check-lg"></i>E-Services</li>
                    <li><i className="bi bi-check-lg"></i>HR Management </li>
                    <li><i className="bi bi-check-lg"></i>Project Management </li>
                    <li><i className="bi bi-check-lg"></i>Supply Chain Management</li>
                    <li><i className="bi bi-check-lg"></i>Warehouse and Inventory Management</li>
                  </ul>
                </div>
             
                <ul><li>Business Central Premium</li></ul>
                <p>The Premium license of Dynamics Business Central offers the capabilities of the Essentials license, along with the below-listed departments.</p>
                <div className="ne-llit-inlin">
                  <ul>
                    <li><i className="bi bi-check-lg"></i>Manufacturing </li>
                    <li><i className="bi bi-check-lg"></i>Service Order Management</li>
                  </ul>
                </div>
                
                <ul>
                  <li>Both licenses include Team Member license capabilities.</li>
                  <li>You can acquire 3 External Accountant licenses per customer tenant to connect an external accountant with your Business Central.  However, these licenses are free and can be assigned with the help of your partner.</li>
                </ul>
                <p><b>Qualifying Licenses</b></p>
                <p>As per the current data released by Microsoft, you can attach the licenses of Business Central to other Dynamics 365 solutions.</p>
                <p><b>Business Central Essentials:</b> You can attach Customer Service Pro and Sales Pro with BC essential license.</p>
                <p><b>Business Central Premium:</b> One can attach Customer Service Enterprise, Customer Service Pro, Field Service, Sales Enterprise, and Sales Pro  to BC Premium. </p>
                <p><b>Dynamics 365 Finance</b></p>
                <p><Link href="/products/microsoft-dynamics-365-finance/"><a>Microsoft Dynamics 365 Finance</a></Link> is a finance management solution capable of streamlining and simplifying all complex financial operations. This solution is specifically built for medium and large businesses to automate processes and reduce process complexities.</p>
                <p>It is available in two licensing options, which are:</p>
                <ul><li>Dynamics 365 Finance</li></ul>
                <p>This license enables users to manage core financial activities with smart and automated tools. It comes with the capabilities of deep data, process integration, centralized data, and team collaboration that leads you to make data-driven decisions.</p>
                <ul>
                  <li>Users can perform simple financial tasks</li>
                  <li>It comes with a default capacity of 100 electronic transactions/tenant/month</li>
                  <li>Also, it does include 100 invoice capture transactions/tenant/month</li>
                  <li>And 20K AI Builder credits/tenant/month with Finance License</li>
                  <li>To get more limits, you can go with an add-on license</li>
                  <li>Dynamics 365 Finance Premium</li>
                </ul>
                <p>It has all Dynamics 365 finance license capabilities along with advanced finance management features. You can create plans, budgets, forecasts, and financial reports with this license. The default entitlements of this license are as follows:</p>
                <ul>
                  <li>200 electronic invoice transaction/tenant/month</li>
                  <li>200 invoice capture transactions/tenant/month</li>
                  <li>50K AI Builder credits/tenant/month</li>
                </ul>
                <div className="table-responsive">
                  <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td>Entitlements</td>
                        <td>D365 Finance </td>
                        <td>D365 Finance Premium</td>
                      </tr>
                      <tr>
                        <td>Electronics Transactions</td>
                        <td>100</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>Invoice capture transactions</td>
                        <td>100</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>AI Builder Credits</td>
                        <td>20K</td>
                        <td>50K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p><b>Qualifying Licenses</b></p>
                <p>With Dynamics 365 Finance, you can attach Commerce, Customer Service Enterprise, Customer Service Pro, Field Service, Human Resources, Project Operations, Sales Enterprise, Sales Professional, and Supply Chain Management Licenses.</p>

                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Dynamics 365 Finance - Qualifying Licenses to Attach</center></td>

                      </tr>
                      <tr>
                        <td>Commerce</td>
                        <td>Customer Service Enterprise</td>
                        <td>Customer Service pro</td>
                      </tr>
                      <tr>
                        <td>Field Service</td>
                        <td>Human Resources</td>
                        <td>Project Operations</td>
                      </tr>
                      <tr>
                        <td>Sales Enterprise</td>
                        <td>Sales Professional</td>
                        <td>Supply Chain Management</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><b>Dynamics 365 Human Resource</b></p>
                <p>Microsoft Dynamics 365 Human Resources is a powerful solution to manage, maintain, and control the entire human resources department of a business. Also, it empowers the team to enhance the capabilities of HR solutions by integrating different solutions from the Microsoft Dynamics 365 ecosystem. It offers various advanced capabilities that include benefits, leave, absence tracking, policy compliance, performance feedback, and a self-service employee platform.</p>
                <p>In general, <Link href="/products/dynamics-365-human-resources/"><a>Dynamics 365 Human Resources</a></Link> is licensed to full users only. However, businesses (for different purposes) can also avail themselves of the license of this application with limited access to its capabilities through other options.</p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="4"><center>Dynamics 365 Human Resource Licenses</center></td>

                      </tr>
                      <tr>
                        <td>HR Self Service License</td>
                        <td>Team Member License</td>
                        <td>Operational Activity User License</td>
                        <td>Human Resource Full User License</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><b>You need to purchase at least 5 full user licenses to access Dynamics 365 Human Resources.</b></p>
                <p>With each full user license of Human Resource, you will get 2000 customer voice responses per tenant per month as a default entitlement. </p>
                <p><b>Qualifying Licenses</b></p>
                <p>With Dynamics 365 Human Resources, you can attach licenses for Customer Service Enterprise, Customer Service Professional, Field Service, Project Operation, Sales Enterprise, and Sales Professional.</p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Dynamics 365 Human Resource Qualifying Licenses to Attach</center></td>

                      </tr>
                      <tr>
                        <td>Field Service</td>
                        <td>Customer Service Enterprise</td>
                        <td>Customer Service Professional</td>
                      </tr>
                      <tr>
                        <td>Sales Enterprise</td>
                        <td>Sales Professional</td>
                        <td>Project Operations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><b>Dynamics 365 Supply Chain Management</b></p>
                <p><Link href="/products/dynamics-365-supply-chain-management/"><a>Microsoft Dynamics 365 Supply Chain Management</a></Link> connects different processes of the supply chain, from procuring raw materials to delivering the final product to the right customer. It offers real-time visibility to manufacturers and distributors, along with advanced tools to streamline everything. It even leverages AI, BI, and IoT technology to collect data in real time and make data-driven decisions.</p>
                <p>Dynamics 365 Supply Chain is licensed per user and automatically includes Asset Management and Intelligent Order Management capacity per license. </p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Dynamics 365 Supply Chain</center></td>

                      </tr>
                      <tr>
                        <td>Team Member</td>
                        <td>Operational Activity </td>
                        <td>Full User SCM license</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <p>With each full-user D365 Supply Chain Management license, you will get 1K order lines with Intelligent Order Management capacity and can manage a maximum of 100 physical assets with Asset Management.</p>
                <p>Intelligent Order Management is also an inbuilt feature that empowers a business to smooth the order fulfillment process. </p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td>Application</td>
                        <td>Standard Capacity </td>
                        <td>Add-on Capacity</td>
                      </tr>
                      <tr>
                        <td>Intelligent Order Management </td>
                        <td>1K order lines/tenant/month</td>
                        <td>1K order lines/tenant/month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Asset management is generally an embedded feature that helps a business maintain its physical assets to optimum quality. </p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td>Application</td>
                        <td>Standard Capacity </td>
                        <td>Add-on Capacity</td>
                      </tr>
                      <tr>
                        <td>Asset Management </td>
                        <td>100 assets/tenant/month</td>
                        <td>100 assets/tenant/month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>If you want to manage additional assets, you need to purchase additional capacity. To manage 500 assets, you need to purchase 4 additional asset capacity licenses.</p>
                <p><b>Qualifying License</b></p>
                <p>With a Microsoft Dynamics 365 Supply Chain license, you can attach licenses for Dynamics 365 Commerce, Customer Service Enterprise, Customer Service Professional, Field Service, Finance, HR, Project Operations, Sales Enterprise, and Sales Professional. </p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Dynamics 365 Supply Chain Management - Qualifying Licenses to Attach</center></td>

                      </tr>
                      <tr>
                        <td>Customer Service Enterprise</td>
                        <td>Customer Service Professional</td>
                        <td>Field Service</td>
                      </tr>
                      <tr>
                        <td>Human Resource</td>
                        <td>Sales Enterprise </td>
                        <td>Sales Professional</td>
                      </tr>
                      <tr>
                        <td>Project Operations</td>
                        <td>Commerce</td>
                        <td>Finance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      <section id="tabs-4" className="col-new-orange-reverce">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Episode 4: </strong>Dynamics 365 CRM Solutions
                </h2>
                <p>Check out the licensing of Dynamics 365 CRM solutions.</p>
                <div className="balnde-imge-mode balnde-imge-mode-new">
                  <img
                    src="/img/chapter-4.png"
                    alt="chapter-4"
                    className="shape-2"
                    width={164}
                    height={164}
                  />
                  <img
                    src="/img/over-lay-shape.png"
                    alt="over-lay-shape"
                    className="overlay-1"
                    width={769}
                    height={324}
                  />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <p>Microsoft offers powerful and flexible CRM solutions for all businesses, whether small or large, to help them simplify customer management and boost customer satisfaction. In this section, we are going to discuss the licensing of different <Link href="/products/microsoft-dynamics-crm/"><a>Microsoft Dynamics 365 CRM</a></Link> solutions.</p>
                <p>Note: Microsoft has renamed Dynamics 365 CRM to Dynamics 365 Customer Engagement, but most business owners still call it Dynamics CRM.</p>
                <p><Link href="/products/dynamics-365-customer-engagement/"><a>Microsoft Dynamics 365 Customer Engagement</a></Link> (CE) is a set of cloud-based solutions that offers complete tools and capabilities to offer optimum customer satisfaction. These solutions are discussed next. </p>
                <p><b>Dynamics 365 Sales</b></p>
                <p>Microsoft Dynamics 365 Sales is a perfect solution for businesses that want to manage sales, simplify the overall sales cycle, offer a holistic view of different sales activities, enhance revenue, and promote team collaboration.</p>
                <p><Link href="/products/microsoft-dynamics-365-sales/"><a>Microsoft Dynamics 365 for Sales</a></Link> is available in different licensing options, which are:</p>
                <ul><li>Sales Professional</li></ul>
                <p>The Sales Professional license offers all the basic tools and functionalities to streamline core sales activities. Also, it comes with SFA (sales force automation) to automate complex sales activities to maximize sales efficiency.</p>
                <ul><li>Sales Enterprise</li></ul>
                <p>The Sales Enterprise license comes with all the capabilities of the Sales Professional license. Along with the basic functionalities, this license includes embedded intelligence, extensibility, manual forecasting, and access to the Microsoft Sales Copilot application.</p>
                <p>Each full-user sales enterprise license will be entitled to 2000 customer response/month/tenant.</p>
                <p>This license comes with some of the features of the Sales Premium license, like:</p>
                <ul>
                  <li>Email engagement</li>
                  <li>Assistant cards</li>
                  <li>Capturing Outlook Data</li>
                  <li>Conversational intelligence</li>
                  <li>Sales accelerator</li>
                  <li>Lead & Opportunity Scoring</li>
                  <li>Automation</li>
                  <li>Setting up worklist priorities</li>
                  <li>Get real-time insights during calls</li>
                  <li>Automate action notifications</li>
                  <li>Generate meeting summaries</li>
                </ul>
                <p>A conversational license comes with unlimited capacity.</p>
                <p>The Sales Accelerator comes with 1500 leads/opportunity records per environment per month.</p>
                <ul><li>Sales Premium</li></ul>
                <p>The Sales Premium license comes with all the capabilities of the Sale Enterprise license, and along with them, you can avail of sales insights automation for data-driven decision-making.</p>
                <ul><li>Sales Insights</li></ul>
                <p>This license is part of the Sales Premium license and can also be obtained with the Sales Enterprise license, but not with the Sales Professional license. However, users with a Sales Enterprise license need the Sales Hub Application to access any of the features of Sales Insights.</p>
                <p>It comes with the following features:</p>
                <ul>
                  <li>Sales Accelerator</li>
                  <li>Connection Insights</li>
                  <li>Predictive Scoring</li>
                  <li>Sales Pipeline Intelligence</li>
                  <li>Predictive Forecasting</li>
                  <li>Business Card Reader</li>
                  <li>Assistant Studio</li>
                  <li>Relationship Analytics</li>
                  <li>Notes Analysis</li>
                  <li>Conversational Intelligence</li>
                </ul>
                <p>All these features come with unlimited capacity except Business Card Reader, which comes with a limit of 10 scans/user/month when you get Sales Insights with the Sales Enterprise license and 200/user/month for Sales Insights or Sales Premium license users. For more capacity, you will need to buy additional sales insights. </p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Sales Insights included with Sales Enterprise</center></td>

                      </tr>
                      <tr>
                        <td>Application</td>
                        <td>Standard Capacity</td>
                        <td>Add-on Capacity</td>
                      </tr>
                      <tr>
                        <td>Business Card Reader</td>
                        <td>10 scans/user/month</td>
                        <td>Need to purchase sales insights or sales premium license</td>
                      </tr>
                      <tr>
                        <td>Sales Accelerator</td>
                        <td>1500 records connected to a sequence per environment per month</td>
                        <td>Need to purchase sales insights or sales premium license</td>
                      </tr>
                      <tr>
                        <td>Lead & Opportunity Scoring</td>
                        <td>1500 records scored per environment per month</td>
                        <td>Need to purchase sales insights or sales premium license</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>When Sales Insights is purchased within Sales Premium, additional sales capacity can be added by purchasing additional Sales Premium licenses.</p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Sales Insights or Sales Premium Users</center></td>

                      </tr>
                      <tr>
                        <td>Application</td>
                        <td>Standard Capacity</td>
                        <td>Add-on Capacity</td>
                      </tr>
                      <tr>
                        <td>Business Card Reader</td>
                        <td>200/user/month</td>
                        <td>Need to purchase additional Sales Insights licenses per tenant</td>
                      </tr>
                      <tr>
                        <td>Conversational Intelligence</td>
                        <td>Unlimited house/users/month</td>
                        <td>Not available </td>
                      </tr>
                      <tr>
                        <td>Sales Accelerator</td>
                        <td>Unlimited</td>
                        <td>Not available</td>
                      </tr>
                      <tr>
                        <td>Lead & Opportunity Scoring </td>
                        <td>Unlimited</td>
                        <td>Not available</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><b>Note: All unused capacity will be rolled over to the same user for up to 12 months. </b></p>
                <ul>
                  <li>Microsoft Relationship Sales</li>
                </ul>
                <p>The Microsoft Relationship Sales license helps you strengthen your relationships with customers. The Microsoft Relationship Sales license is licensed per user and includes a combination of the Sales Enterprise license and access to LinkedIn Sales Navigator Advanced Plus. </p>
                <p><b>The minimum purchase requirements of Microsoft Relationship Sales license are 10 per user licenses. </b></p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="4"><center>Dynamics 365 Sales</center></td>

                      </tr>
                      <tr>
                        <td>Team Member</td>
                        <td>Sales Professional </td>
                        <td>Sales Enterprise </td>
                        <td>Sales Premium</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <p><b>Qualifying License</b></p>
                <p>The qualifying licenses are distributed among the three core licenses of Dynamics 365 Sales, which are discussed below:</p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Sales Enterprise License (D365 Sales)</center></td>

                      </tr>
                      <tr>
                        <td>Business Central Essentials</td>
                        <td>Customer Service Enterprise</td>
                        <td>Customer Service Professional</td>
                      </tr>
                      <tr>
                        <td>Field Service</td>
                        <td></td>
                        <td></td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Sales Premium License (D365 Sales)</center></td>

                      </tr>
                      <tr>
                        <td>Customer Service Enterprise</td>
                        <td>Customer Service Professional</td>
                        <td>Field Service</td>
                      </tr>
                      <tr>
                        <td>Human Resource </td>
                        <td>Project Operations</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Sales Professional License (D365 Sales)</center></td>

                      </tr>
                      <tr>
                        <td colspan="3"><center>Customer Service Professional</center></td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <p>If you have any of the above Dynamics 365 for Sales licenses, you can attach the license below at a much lower cost.</p>
                <p><b>Dynamics 365 Customer Insights</b></p>
                <p>Microsoft Dynamics 365 Customer Insights enables a business to record customer interactions, understand customer behavior, identify trends, and track market fluctuations. After the recent Microsoft updates, Dynamics 365 Marketing is now transformed into Dynamics 365 Customer Insights – Journey, and Dynamics 365 Customer Insights is transformed into Dynamics 365 Customer Insights – Data.</p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td>Dynamics 365 Marketing</td>
                        <td>Dynamics 365 Customer Insights - Journey</td>
                      </tr>
                      <tr>
                        <td>Dynamics 365 Customer Insights</td>
                        <td>Dynamics 365 Customer Insights - Data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Dynamics 365 Customer Insights – Journey: It empowers businesses to track customer journeys while creating, managing, and tracking personalized interactions across multiple channels. Such channels include SMS, email, social media, and phone calls.</p>
                <p>Dynamics 365 Customer Insights – Data: It gives a unified view of customers, leveraging CDP (customer data platform), AI, and BI to offer real-time insights utilizing different data sources. Also, it tracks customer preferences, interactions, trends, and behavior for accurate insights.</p>
                <p>Generally, it is licensed per tenant and can be installed in four different work environments. It means a single tenant license can access both applications.</p>
                <p>Both solutions come with a standard capacity defined by Interacted People (Active Contacts) and Unified People (Profiles).</p>
                <ul>
                  <li>Interacted People: These are the contacts who have interacted with the business through your marketing efforts. Such communication channels include SMS, email, and form submission. We can also treat Interacted People as recurring customers. The base capacity for Customer Insights – Journey is 10K interacted people. If the customers didn’t interact with the business in the previous 12 months, they don’t count against the base limit. Also, you will get 10x the interacted people limit in monthly interactions.</li>
                  <li>Unified People: These are the unique audience that interacts with the business. It can be identified after combining data from multiple resources. The base capacity for Customer Insights – Insights is 100K unified people.</li>
                </ul>
                <p><b>Note:</b> Calling and text messaging services are not included in Dynamics 365 Customer Insights. You will need to integrate Microsoft ACS (Azure Communication Services) or a third-party solution to send and receive messages from customers.</p>
                <p>Dynamics 365 Customer Insights does offer extended capacity to meet specific requirements of the business, and you can purchase the capacity for the desired solution based on usage.</p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td>Application</td>
                        <td>Base Capacity </td>
                      </tr>
                      <tr>
                        <td>Customer Insights - Journey<br />Customer Insights - Data</td>
                        <td>10K Interacted People/tenant/month<br />
                          100K Unified People/tenant/month<br />
                          4 data scheduled refreshes/day
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="4"><center>Additional Interacted People Capacity</center></td>
                      </tr>
                      <tr>
                        <td>Tiers</td>
                        <td>Capacity</td>
                        <td>Tiered Threshold</td>
                        <td>Min-Max</td>
                      </tr>
                      <tr>
                        <td>T1</td>
                        <td>5K</td>
                        <td>10K - 50K</td>
                        <td>1-8</td>
                      </tr>
                      <tr>
                        <td>T2</td>
                        <td>10K</td>
                        <td>50K - 250K</td>
                        <td>4-24</td>
                      </tr>
                      <tr>
                        <td>T3</td>
                        <td>50K</td>
                        <td>250K+</td>
                        <td>5+</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="4"><center>Additional Unified People Capacity</center></td>
                      </tr>
                      <tr>
                        <td>Tiers</td>
                        <td>Capacity</td>
                        <td>Tiered Threshold</td>
                        <td>Min-Max</td>
                      </tr>
                      <tr>
                        <td>T1</td>
                        <td>100K</td>
                        <td>100K - 500K</td>
                        <td>1-4</td>
                      </tr>
                      <tr>
                        <td>T2</td>
                        <td>100K</td>
                        <td>500K - 2M</td>
                        <td>4-19</td>
                      </tr>
                      <tr>
                        <td>T3</td>
                        <td>100K</td>
                        <td>250K+</td>
                        <td>19+</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <p><b>Qualifying License</b></p>
                <p>To attach Customer Service Insights license, you will need to purchase a minimum of 10 licenses of the following solutions:</p>
                <ul>
                  <li>Dynamics 365 Sales Professional</li>
                  <li>Dynamics 365 Sales Enterprise</li>
                  <li>Dynamics 365 Sales Premium</li>
                  <li>Microsoft Relationship Sales</li>
                  <li>Dynamics 365 Customer Service Professional</li>
                  <li>Dynamics 365 Customer Service Enterprise</li>
                  <li>Dynamics 365 Field Service</li>
                  <li>Dynamics 365 Finance</li>
                  <li>Dynamics 365 Supply Chain Management</li>
                  <li>Dynamics 365 Commerce</li>
                </ul>
                <p><b>Dynamics 365 Customer Service</b></p>
                <p>Microsoft Dynamics 365 Customer Service enables the business to streamline different customer support activities and ensure an optimum level of satisfaction. It offers the required tools and capabilities to customer service agents so that they can offer a personalized experience to all customers, building loyalty and trust.</p>
                <p>You can access Customer Service on a per-user basis, and it is available in two options: Enterprise and Professional. However, Microsoft does offer different add-ons to enhance its overall capabilities. </p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Dynamics 365 Customer Service</center></td>
                      </tr>
                      <tr>
                        <td>Team Member</td>
                        <td>Enterprise</td>
                        <td>Professional</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <p><b>Dynamics 365 Customer Service Professional License</b></p>
                <p>The Professional license offers basic functionalities to help an agent manage different customer service activities. Also, it offers a self-service portal, knowledge base, and standard tools to streamline core functions and support customer service teams.</p>
                <p><b>The Professional license offers basic functionalities to help an agent manage different customer service activities. Also, it offers a self-service portal, knowledge base, and standard tools to streamline core functions and support customer service teams.</b></p>
                <p>Along with the capabilities of the Professional license, Dynamics 365 CS offers advanced capabilities that include scheduling services, creating teams, dispatch services, and resource optimization. The Enterprise license is considered a full-user license and gives cutting-edge technology to deal with all complex customer service activities. It also comes with:</p>
                <ul>
                  <li>Integrated analytics</li>
                  <li>Embedded AI capabilities</li>
                  <li>Automated support system</li>
                  <li>Identity growth opportunities</li>
                  <li>Track agent performance</li>
                  <li>Get knowledge base</li>
                </ul>
                <p>With an enterprise license, a full user will be entitled to 2000 customer voice responses/tenant/month and unified routing with 50 records/tenant/month. </p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td>Application</td>
                        <td>Base Capacity</td>
                        <td>Add-on Capacity</td>
                      </tr>
                      <tr>
                        <td>Record Routing</td>
                        <td>50 records/user/month</td>
                        <td>10K records/tenant/month (without chat and messaging records)</td>
                      </tr>
                      <tr>
                        <td>Customer Voice</td>
                        <td>2000 responses/tenant/month</td>
                        <td>N/A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Unified routing enables a business to use automated and intelligent routing to access multi-stage classification rules and automated assignment transfers based on agent availability and capacity.</p>
                <p><Link href="/products/microsoft-dynamics-365-customer-service/"><a>Dynamics 365 Customer Service</a></Link> offers other add-on applications for Enterprise users licensed per user, which are:</p>
                <ul>
                  <li>Chat to engage in real-time communication</li>
                  <li>Digital Messaging
                    <ul>
                      <li>Chat and third-party SMS</li>
                      <li>Record Routing </li>
                    </ul>
                  </li>
                </ul>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td>Application</td>
                        <td>Base Capacity</td>
                        <td>Add-on Capacity</td>
                      </tr>
                      <tr>
                        <td>Record Routing</td>
                        <td>Unlimited incoming conversation record</td>
                        <td>NA</td>
                      </tr>
                      <tr>
                        <td>Copilot Studio Messages</td>
                        <td>1K Copilot Studio messages/tenant/month</td>
                        <td>Available based on extra storage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul>
                  <li>Voice Channel to bring 1st party telephony to Customer Service
                    <ul><li>Includes Intelligent Voicebot and call Intelligence capabilities</li></ul>
                  </li>
                </ul>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td>Application</td>
                        <td>Base Capacity</td>
                        <td>Add-on Capacity</td>
                      </tr>
                      <tr>
                        <td>Intelligent Voicebot Minutes</td>
                        <td>2K Intelligent Voicebot minutes/user/month</td>
                        <td>500 additional minutes/tenant/month</td>
                      </tr>
                      <tr>
                        <td>Call Intelligence minutes</td>
                        <td>6K Call Intelligence<br /> minutes/user/month<br />
                          Dataverse File storage 35GB for<br /> call recording/user
                        </td>
                        <td>500 additional<br /> minutes/tenant/month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul><li>Digital Messaging and Voice Channel for Dynamics 365 Customer Service</li></ul>
                <p>This per user license includes Chat and Voice Channel for Dynamics 365 Customer Service collaboratively. With this, there is no need to go for Chat or Voice channel separately.</p>
                <p><b>Qualifying Licensing</b></p>
                <p>With a full user license of Customer Service Enterprise (CS), you can attach licenses of Business Central Essentials, Field Service, Sales Enterprise, and Sales Professional.</p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Customer Service Enterprise (CS)</center></td>
                      </tr>
                      <tr>
                        <td>Business Central Essentials</td>
                        <td>Field Service</td>
                        <td>Sales Enterprise</td>
                      </tr>
                      <tr>
                        <td>Sales Professional</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><b>Dynamics 365 Field Service</b></p>
                <p>Microsoft Dynamics 365 Field Service establishes a connection between field service executives and in-house customer service experts. It empowers field service agents with case management functionalities to offer great customer service while optimizing resources. D365 Field Service is licensed per user or per device and comes with access to Dynamics 365 Guides, Remote Assistance, and Field Service Mobile.</p>
                <p><b>Dynamics 365 Field Service Contractor</b></p>
                <p>This license allows non-employees or vendors to access some of the processes or data of the organization, like work order management. It is licensed per user and comes with access to Field Service Mobile.</p>
                <p>Note: Businesses must have at least one full user D365 Field Service license before going for Field Service Contractor license. </p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Dynamics 365 Field Service</center></td>
                      </tr>
                      <tr>
                        <td>Team Member</td>
                        <td>Field Service</td>
                        <td>Field Service Contractor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>With each full user field service license, you will be entitled to 2000 Customer Voice response/tenant/month as a base capacity. To get more customer voice responses, you will need to purchase additional capacity.</p>
                <p><b>Dynamics 365 Field Service Resource Schedule Optimization</b></p>
                <p>Resource Schedule Optimization is an add-in capability of <Link href="/products/microsoft-dynamics-365-field-service/"><a>Microsoft Dynamics 365 Field Service</a></Link> that lets you schedule and optimize resources for maximized output. It is licensed per resource, either a person or a non-human asset, and can only be purchased with a full user Field Service license. </p>
                <p><b>Qualifying Licenses</b></p>
                <p>With a full user Field Service license, you can attach licenses for Business Central Essentials, Customer Service Enterprise, Customer Service Professional, Remote Assist, Sales Enterprise, and Sales Professional.</p>

                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Dynamics 365 Field Service</center></td>
                      </tr>
                      <tr>
                        <td>Business Central Essentials </td>
                        <td>Customer Service Enterprise</td>
                        <td>Customer Service Professional</td>
                      </tr>
                      <tr>
                        <td>Remote Assist</td>
                        <td>Sales Enterprise </td>
                        <td>Sales Professional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><b>Dynamics 365 Project Operations</b></p>
                <p>Microsoft Dynamics 365 Project Operations streamlines different tasks of managing a project for maximized output. It connects sales, finance, and resources to offer a collaborative approach to managing a project.</p>
                <p>The licensing of <Link href="/products/dynamics-365-project-operations/"><a>Dynamics 365 Project Operations</a></Link> is simple, as it is available on a per-user basis. Essential business roles like project accountants, project assistants, project managers, and account managers can avail of a full user license as they would need advanced tools for smooth project management.</p>
                <p>However, users with basic roles, like creating and managing timesheets, can access the Team Member license to justify their job role. Such roles are project resource, project timesheet delegate, project timesheet user, and project approver.</p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="2"><center>Dynamics 365 Project Operations</center></td>
                      </tr>
                      <tr>
                        <td>Team Member </td>
                        <td>Project Operations Full User License</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <p><b>To access Dynamics 365 Project Operations, you need to purchase at least 20 full-user licenses.</b></p>
                <p><b>Qualifying Licenses</b></p>
                <p>With Dynamics 365 Project Operations licenses, you can attach Customer Service Enterprise, Customer Service Professional, Human Resources, Sales Enterprise, and Sales Professional licenses. </p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td colspan="3"><center>Dynamics 365 Project Operations Qualifying Licenses to Attach</center></td>
                      </tr>
                      <tr>
                        <td>Customer Service Enterprise</td>
                        <td>Customer Service Professional</td>
                        <td>Field Service</td>
                      </tr>
                      <tr>
                        <td>Human Resource</td>
                        <td>Sales Enterprise </td>
                        <td>Sales Professional</td>
                      </tr>

                    </tbody>
                  </table>
                </div>



              </div>


            </div>
          </div>
        </div>
      </section>
      <section id="tabs-5" className="col-yellow col-green">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Episode 5: </strong>License Purchase Requirements
                </h2>
                <p>In this section, we are going to discuss various criteria of accessing Dynamics 365 licensing.</p>
                <div className="balnde-imge-mode balnde-imge-mode-new">
                  <img
                    src="/img/chapter-5.png"
                    alt="chapter-5"
                    className="shape-2"
                    width={164}
                    height={164}
                  />
                  <img
                    src="/img/over-lay-shape.png"
                    alt="over-lay-shape"
                    className="overlay-1"
                    width={769}
                    height={324}
                  />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <p><b>Minimum License Purchase Requirements</b></p>
                <p>To access a Dynamics 365 solution, you need to follow the minimum licensing purchase requirement.</p>
                <div className="table-responsive">
                <table class="table table-bordered licen-table">
                    <tbody>
                      <tr className="hed">
                        <td>Product</td>
                        <td>Minimum QTY</td>
                        <td>Minimum purchased Base Licenses</td>
                      </tr>
                      <tr>
                        <td>Microsoft Relationship Sales</td>
                        <td>10</td>
                        <td>Microsoft Relationship Sales</td>
                      </tr>
                      <tr>
                        <td>Dynamics 365 Commerce<br />
                          Dynamics 365 Supply Chain
                          Management<br />
                          Dynamics 365 Project
                          Operations</td>
                        <td>20</td>
                        <td>Dynamics 365 Supply Chain
                          Management, or<br />
                          Dynamics 365 Commerce, or<br />Dynamics 365 Project Operations</td>
                      </tr>
                      <tr>
                        <td>Dynamics 365 Finance<br />Dynamics 365 Finance
                          Premium</td>
                        <td>20 <br />(Licenses can be combined to reach the required minimum)</td>
                        <td>Dynamics 365 Finance, or<br />
                          Dynamics 365 Finance Premium</td>
                      </tr>
                      <tr>
                        <td>Dynamics 365 Human Resources</td>
                        <td>5</td>
                        <td>Dynamics 365 Human Resources</td>
                      </tr>
                      <tr>
                        <td>Professional Direct Support</td>
                        <td>20<br/>(250 maximum - once met all remaining users are covered with no additional licenses required)</td>
                        <td>All Dynamics applications</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <p><b>Licensing Requirements for External Users</b></p>
                <p>External users are the users outside the company who need limited access or capabilities to your Dynamics 365 for collaboration. Such users, like IT help desk support, contractors, vendors, partners, and third-party users, don’t require separate user licenses.</p>
                <p>Such access is included with your internal user license, but external users will not be able to avail themselves of the graphical interface of most of the Dynamics 365 solutions, which include Business Central, Sales, Customer Service, and Field Service.</p>
                <p>External users are not your employees, independent contractors, vendors, partners, or someone who is working remotely for your business. Neither internal nor external users can use Dynamics 365 to outsource business services.</p>


              </div>

              <div className="iner-pp inner-ppp">
                <Image src="/img/external-user-pic.png" alt="external-user-pic" width={968} height={514} />
              </div>
              <div className="cont-table-inner">
                <p><b>Dual use rights</b></p>
                <p>Dual-use rights allow users to access the Dynamics 365 license in two places simultaneously. You can deploy Dynamics 365 on the cloud as well as on-premises servers or in multiple environments.</p>
                <p>This will help you when you are trying to move from on-premises to cloud deployment and have to access both deployments altogether for successful <Link href="/our-services/dynamics-365-implementation-services/"><a>Dynamics 365 implementation</a></Link>. Also, you can avail of dual user rights for testing purposes.</p>
                <p>A full user license has the right to access CAL to manage on-premises workloads. Dual use rights are non-perpetual entities and will expire when the cloud subscription license expires.</p>
                <p>When you access dual use rights for system migration or testing purposes, Microsoft technical support will assist you in a successful deployment, but this support isn’t included with on-premises deployment. </p>
                <p><b>Multiplexing</b></p>
                <p>Microsoft doesn’t allow multiplexing at any cost. Multiplexing refers to a strategy of using hardware, software, or tools to pool connections or reduce the number of actual users or devices that access Dynamics 365.</p>
                <p>Any user who wants to access the Dynamics 365 set of solutions must be properly licensed based on the requirements.</p>
              </div>
              <div className="iner-pp inner-ppp">
                <Image src="/img/sls-requird.png" alt="sls-requird" width={908} height={459} />
              </div>




            </div>
          </div>
        </div>
      </section>

      <section id="tabs-6" className="col-yellow col-perpul">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Episode - 6</strong> Which License Suits you?
                </h2>
                <p>Choose the Best Solution for your Business Growth!</p>
                <div className="balnde-imge-mode balnde-imge-mode-new">
                  <img
                    src="/img/chapter-6.png"
                    alt="chapter-6"
                    className="shape-2"
                    width={164}
                    height={164}
                  />
                  <img
                    src="/img/over-lay-shape.png"
                    alt="over-lay-shape"
                    className="overlay-1"
                    width={769}
                    height={324}
                  />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <p>The market is fluctuating due to various factors. It might be war, recession, trends, or increasing complexity in the way of doing business. The margins are decreasing, but customer expectations are increasing.</p>
                <p>You can lower such complexity by choosing the right business solution that empowers you to connect with customers and optimize operations. The Dynamics 365 suite of applications offers you different solutions that are designed for different business sizes and unique demands.</p>
                <p>Among so many solutions, choosing the perfect solution might become overwhelming for you.</p>
                <p>This Dynamics 365 Licensing Guide will simplify the Dynamics 365 solutions and help you choose the perfect solution that suits your unique business demands.</p>
                <p>Based on the research and analysis we have done in the market; we have classified different solutions based on general needs and goals.</p>
                <p><b>Dynamics 365 Solutions for Small Businesses</b></p>
                <p>Small businesses have fewer complex processes and need a simple solution capable of managing the operations of the entire business.</p>
                <p><b>Microsoft Dynamics 365 Business Central</b></p>
                <p><Link href="/products/dynamics-365-business-central/"><a>D365 Business Central</a></Link> is an all-in-one ERP solution with the basic capabilities of CRM to streamline business processes while connecting different departments. It is user-friendly, scalable, easy to implement, and cost-effective for small businesses.</p>
                <p><b>Dynamics 365 Solutions for Medium Businesses</b></p>
                <p>Medium businesses have a mix of simple and complex business operations that need to be completed using the right ERP or CRM solution. Dynamics 365 has different solutions for mid-sized businesses.</p>
                <p><b>Dynamics 365 Sales</b></p>
                <p>Focusing on sales requires a perfectly aligned solution that matches the sales requirements and supports executives to offer the utmost customer satisfaction. Dynamics 365 Sales is one such solution capable of simplifying sales operations, automating tasks, and boosting processes to close more deals.</p>
                <p><b>Dynamics 365 Customer Service</b></p>
                <p>Understanding customers and offering exceptional customer experiences are two of the major factors to sustain in this highly competitive market. <Link href="/products/microsoft-dynamics-365-customer-service/"><a>Microsoft Dynamics 365 Customer Service</a></Link> empowers businesses to not only offer a great customer experience but also help build customer loyalty.</p>
                <p><b>Dynamics 365 Project Operations</b></p>
                <p>Businesses must deal with several projects while optimizing resources to get maximum profits from each project. Dynamics 365 Project Operations enables a business to manage numerous projects altogether and track each, from start to completion, to boost profitability.</p>
                <p><b>Dynamics 365 Customer Insights - Journey</b></p>
                <p>Tracking customers and their actions makes a business strong when it comes to personalization. Dynamics 365 Customer Insights - Journey is a perfect solution for businesses that want to track customers and their interactions in real-time to maximize engagement.</p>
                <p><b>Dynamics 365 Solutions for Large Enterprise</b></p>
                <p>Large businesses consist of complex and unique processes with numerous business processes and huge amounts of data. Some of the Dynamics solutions are built for such businesses.</p>
                <p><b>Dynamics 365 Finance</b></p>
                <p>Managing finance is a complex process that requires accuracy at each stage of financial management. <Link href="/products/microsoft-dynamics-365-finance/"><a>Dynamics 365 Finance</a></Link> can manage complex financial processes and offer deep financial insights to make real-time actionable decisions.</p>
                <p><b>Dynamics 365 Supply Chain Management</b></p>
                <p>The supply chain has become complicated due to increasing complications around the globe. <Link href="/products/dynamics-365-supply-chain-management/"><a>Dynamics 365 Supply Chain Management</a></Link> empowers a business to manage and track its complete supply chain, from procuring raw materials to delivering the final product to the right person.</p>
                <p><b>Dynamics 365 Human Resources</b></p>
                <p>Managing the workforce and supporting them to achieve optimal productivity is one of the major business goals. Dynamics 365 Human Resources enables a business to track the performance of all employees and push them towards maximum productivity.</p>
                <p><b>Dynamics 365 Field Service</b></p>
                <p>Getting on-site support is one of the major concerns for all customers. With Dynamics 365 Field Service, Microsoft allows you to track all field service agents and empower them with knowledge and required resources through in-office agents.</p>
                <p><b>Dynamics Square - Your Partner in Growth</b></p>
                <p>At Dynamics Square, we believe in empowering you with the required tools and technology to help you achieve your full potential and business growth.</p>
                <p>This comprehensive guide to Dynamics 365 licensing is just an example of our commitment to offer valuable resources and expert guidance, in other words.</p>
                <p>Even if you are a non-technical person, an expert Dynamics 365 person, or a beginner with Dynamics 365, you can easily understand the licensing and choose the best solution for your business.</p>
                <p>With years of experience as a leading <Link href="/microsoft-dynamics-365-partner/"><a>Dynamics 365 partner</a></Link>, we have a team of 135+ Dynamics 365 certified experts who possess a deep understanding of the Dynamics 365 suite and its advanced capabilities.</p>
                <p>Once you approach us, we will analyze your business and identify the right solution as per your needs while ensuring successful implementation.</p>
                <p>Around the globe, we have done 500+ successful Dynamics 365 implementations to help them push their business growth and eliminate system redundancies. These businesses have partnered with us due to various factors, among which some are:</p>

                <p>•	Unmatched Expertise</p>
                <p>Leverage the knowledge and expertise of our consultants to supercharge your business with minimal resources.</p>
                <p>•	End-to-End Support</p>
                <p>We offer on-site and remote support 24x7, to resolve the existing issue that is blocking your business from growing.</p>
                <p>•	Bespoke Solutions</p>
                <p>Based on your business requirements, we will customize the solution to make it a perfect fit for your growing business.</p>
                <p>•	Proven Track Record</p>
                <p>With our proven history of successful Dynamics 365 implementation, we are available to you with cutting-edge technologies.</p>
                <p><b>Take your Business to Next Level with Dynamics 365. </b></p>
                <p>Contact us to schedule a free one-on-one consultation call with one of our <Link href="/microsoft-dynamics-365-partner/"><a>Dynamics 365 experts</a></Link>.</p>
                <p>Together, let's transform your business and propel you towards sustainable growth!</p>

                
              </div>
            </div>
          </div>
        </div>
      </section>
        
      <div id="footerhide"></div>

      <FormGuide />
    </>
  );
};

export default Dynamics365LicensingGuide;
