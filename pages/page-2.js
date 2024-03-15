import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const DynamicsNavToBusinessCentralNew = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>What is Microsoft Power Automate? | Dynamics Square USA</title>
        <meta
          name="description"
          content="Simplify processes by utilizing Microsoft Power Automate. Dynamics Square provides professional integration services to automate corporate processes smoothly."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-power-automate/"
        />
        <meta property="og:type" content="product" />

        <meta property="og:title" content="What is Microsoft Power Automate? | Dynamics Square USA" />

        <meta property="og:description" content="Simplify processes by utilizing Microsoft Power Automate. Dynamics Square provides professional integration services to automate corporate processes smoothly." />

        <meta property="og:url" content="https://www.dynamicssquare.com/products/microsoft-power-automate/" />

        <meta property="og:site_name" content="Dynamics Square USA" />

        <meta property="og:image" content="https://www.dynamicssquare.com/img/power-automate-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:title" content="What is Microsoft Power Automate? | Dynamics Square USA" />

        <meta property="twitter:description" content="Simplify processes by utilizing Microsoft Power Automate. Dynamics Square provides professional integration services to automate corporate processes smoothly." />

        <meta property="twitter:url" content="https://www.dynamicssquare.com/products/microsoft-power-automate/" />

        <meta property="twitter:image" content="https://www.dynamicssquare.com/img/power-automate-banner.png" />
        <meta name="robots" content="noindex, nofollow" />

      </Head>

      <section className="Solution-banner pp-rrea new-main-heading">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1 className="small-h">Microsoft Power Automate</h1>
              <h2>Seamless Integration, Effortless Automation</h2>
              <p>Incorporate cloud technology, make automated workflows, and build your solution using no-code techniques with Microsoft Power Automate. </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Let's Get Started!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="banner-ne-im-t">
                <div className="bf">
                  <Image
                    src="/img/power-auto-shapew.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/power-automate-banner.png"
                  alt="power-automate-banner"
                  width={648}
                  height={355}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">


          <div className="row pp-top-60 pp-bot-60 rever-1">
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <video autoPlay muted loop playsInline>
                  <source src="/video/power-automate-video.mp4"></source>
                </video>
              </div>
            </div>
            <div className="col-lg-1 align-self-center">
              {/* <div className="brder-hr"></div> */}
            </div>
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>What is Microsoft Power Automate?</h2>
                <p>Power Automate  is an end-to-end automation solution that lets users automate processes using workflows without writing code. It solves the complex business challenges of establishing a connection between different solutions to automate the data flow. </p>
                <p>Power Automate is one of the essential solutions available under the Microsoft Power Platform. All such solutions, like <Link href="/products/microsoft-power-bi/"><a>Power BI</a></Link> and Power pages, reduce operational costs and enable users to drive innovation in business processes with a low-code approach. </p>
                <p><strong>Power Automate Microsoft empowers users to:</strong></p>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Build applications, forms and workflow</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Connect different complicated processes</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Perform task with a pre-built templates</span></div>
              </div>
            </div>

          </div>
          <div className="row pp-top-60 pp-bot-60 justify-content-center">
            <div className="col-lg-9" >
              <div className="center-info-fq text-center" style={{backgroundColor:"#f7f9fb"}}>
                <p><strong>Note:</strong> It was previously known as Microsoft Flow, but on November 4, 2019, Microsoft rebranded it as Microsoft Power Automate; one of the applications of the <Link href="/products/microsoft-power-platform/"><a>Microsoft Power Platform</a></Link> most business owners, consultants, and Dynamics professionals still call it Flow.</p>
              </div>
            </div>
          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Power Automate: Types of Flow to Suit all Needs</h2>
                <p>Microsoft Power Automate comes with three major flows to automate tasks and increase efficiency.</p>
                <div className="points-ui color-blue" style={{display:'inline-flex'}}><i className="bi bi-check-lg"></i> <span>Cloud Flows</span></div>
                <p>Build an automation flow that can be triggered in three ways: instantly, automatically, and by scheduling.</p>
                <div className="points-ui color-blue" style={{display:'inline-flex'}}><i className="bi bi-check-lg"></i> <span>Desktop Flows</span></div>
                <p>Build an automation flow to automate tasks on the desktop or the web.</p>
                <div className="points-ui color-blue" style={{display:'inline-flex'}}><i className="bi bi-check-lg"></i> <span>Business Process Flows</span></div>
                <p>Build an automation flow to enable users to track their work during a business process while guiding them throughout the process until the work is complete.</p>
              </div>
            </div>

            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/power-auto-shapew.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/suit-all-needs.png"
                  alt="suit-all-needs"
                  width={600}
                  height={400}
                />
              </div>
            </div>

          </div>
          <div className="row pp-top-60 pp-bot-60 pp-mar-30 rever-1">
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/power-auto-shapew.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/super-charge-productivity.png"
                  alt="super-charge-productivity"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Supercharge Productivity: Free Your Employees to Do What They Do Best</h2>
                <p>Microsoft 365 Power Automate is a very powerful solution that lets you automate workflows connecting different applications, sync data between apps or services, and send notifications to the user in real-time.</p>
                <p>Also, it eliminates recurring and manual tasks, like approvals, data entry, generating reports, data transfer, and more, through automation capabilities, leading to enhanced efficiency.</p>
                <p>You can automate the process of generating and sending invoices to the concerned person to save time and boost team productivity.</p>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Build workflows and connect different applications </span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Eliminate recurring and manual tasks</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Automate generating and sending invoices</span></div>
              </div>
            </div>

          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Improve Accuracy and Reduce Errors: Get Accurate Data on the Go</h2>
                <p>By automating workflows and business activities, you can reduce human intervention, which leads to fewer errors and enhanced data accuracy.</p>
                <p>You can eliminate typos, miscalculations, and other errors with MS Power Automate to make the system smoother and more stable.</p>
                <p>With this solution, you can easily automate the process of getting notifications in real-time, ensuring accurate data collection on time and making you aware of everything happening in your business.</p>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Reduce human intervention</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Enhanced data accuracy</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Automate business activities</span></div>
              </div>
            </div>

            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/power-auto-shapew.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/improve-accuracy-reduce.png"
                  alt="improve-accuracy-reduce"
                  width={600}
                  height={400}
                />
              </div>
            </div>

          </div>
          <div className="row pp-top-60 pp-bot-60 pp-mar-30 rever-1">
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/power-auto-shapew.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/happy-cusomer-exp.png"
                  alt="happy-cusomer-exp"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Happy Customers, Happy Business: Power Up Your Customer Experience</h2>
                <p>Offer an exceptional level of customer satisfaction with Microsoft Power Automate. It lets you automate essential customer support services that include shipping, order confirmations, and personalized communications.</p>
                <p>You can even set up an automated, tailored customer service experience using emails whenever a customer with a specific set of parameters approaches your business.</p>
                <p>While using Power Automate at its fullest, automate the customer issue resolution of standard queries, leading to better customer satisfaction and time savings.</p>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Offer good customer satisfaction</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Automate customer support services</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Give tailored customer service experiences</span></div>
              </div>
            </div>

          </div>
          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
                <h2>Scale with Confidence: Automate for Growth, Not for Growth Pains</h2>
                <p>Expand your business capabilities with the growth of your business operations. Reduce manual tasks with automation to accelerate scalability and achieve targets.</p>
                <p>Power Automate enables businesses to scale or automate various tasks without hampering their existing performance.</p>
                <p>You can manage inventory, track resources, analyze data, build reports, and set up different forms of automation to meet fluctuating market demands.</p>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Accelerate scalability and achieve targets</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Enhance system performance</span></div>
                <div className="points-ui color-blue"><i className="bi bi-check-lg"></i> <span>Manage inventory and track resources</span></div>
              </div>
            </div>

            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/power-auto-shapew.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/scale-with-confidance.png"
                  alt="scale-with-confidance"
                  width={600}
                  height={400}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="mines-m-t">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>Microsoft Power Automate Features: Automate Your Business - like a  Pro! </h2>
                <p>Microsoft Power Automation allows you to connect hundreds of connectors to make your business invulnerable to increasing business complexities and changing market demands. Along with these basic features, Power Automate Microsoft has a lot for your business.</p>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/find_growth_opportunities.png" alt="find_growth_opportunities" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Find Growth Opportunities</h3>
                  <p>Optimize existing business processes and find more growth opportunities through automation and data mining.</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/automate_with_ease.png" alt="automate_with_ease" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Automate with Ease</h3>
                  <p>Connect your system, services, and applications using workflows, apps, and websites with robotic process automation (RPA).</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/total_visibility_across_business.png" alt="total_visibility_across_business" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Total Visibility Across Business</h3>
                  <p>Get a 360-degree view of your business with the embedded data security functionalities of Microsoft Power Automate.</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/integration_made_simple.png"
                    alt="integration_made_simple"
                    width={94} height={94}
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Integration Made Simple</h3>
                  <p>Integrate with other solutions in the <Link href="/products/microsoft-dynamics-365/"><a>Microsoft Dynamics 365 ecosystem</a></Link> and Power Platform with just a click, without writing code.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/leverage_ai_capabilities.png"
                    alt="leverage_ai_capabilities"
                    width={94} height={94}
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Leverage AI Capabilities</h3>
                  <p>Utilize AI, BI, Microsoft Copilot, and embedded ChatGPT to get recommendations, automate repetitive tasks, and turn raw data into useful content.</p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/inbuilt_rpa.png" alt="inbuilt_rpa" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Inbuilt RPA</h3>
                  <p>Get a modern user interface for your legacy system with robotic process automation and scale or optimize resources in case of business loads.</p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/comes_with_dpa.png"
                    alt="comes_with_dpa"
                    width={94} height={94}
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Comes with DPA</h3>
                  <p>Utilize digital process automation (DPA) to automate services or apps running on the cloud while collaborating with Microsoft Copilot.</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/simplify_data_reporting_and_analysis.png" alt="simplify_data_reporting_and_analysis" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Simplify Data Reporting and Analysis</h3>
                  <p>Use pre-built templates to access data, eliminate business challenges, perform data analysis, and build reports integrating with Power BI. </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="new-banner-call-to">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ll-pic">
                <img src="/img/mas-bc-pic.png" alt="mas-bc-pic" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="col-to-content">
                <h3>Save Time and Automate Business with Microsoft Power Automate</h3>
                <p>Streamline business processes, connect different solutions, set up workflows to get notifications, and build solutions to enhance productivity with low-code or no-code.</p>
                <Link href="/contact-us/">
                  <a className="btn btn-md">Connect with a Business Automation Expert!</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>How Power Automate can help your Business?</h2>
                <p>There are numerous ways Microsoft 365 Power Automate can support your business, which are:</p>
              </div>
            </div>
          </div>

          <div className="row pp-top-60 pp-bot-60">
            <div className="col-lg-6">
              <div className="nw-bc-lef-h">
              <ul>
                <li><strong>Stay on top of issues:</strong> Get instant Teams alerts when new ones pop up in Jira, Trello, Slack, and more.</li>
                <li><strong>Unify your ecosystem:</strong> Seamlessly connect Power Automate with Dynamics 365 solutions like Sales, <Link href="/products/dynamics-365-business-central/"><a>Business Central</a></Link>, and Customer Service.</li>
                <li><strong>Connect anything, automate everything:</strong> Integrate hundreds of apps like SQL Server and SharePoint with MS Power Automate.</li>
                <li><strong>Simplify approvals:</strong> Automate approvals across processes and departments, saving time and effort.</li>
                <li><strong>Never miss a priority:</strong> Get notified instantly about high-priority tasks with custom workflows.</li>
                <li><strong>Leads never slip through:</strong> Automatically notify key personnel about new sales leads.</li>
                <li><strong>Break down data silos:</strong> Collect and share process data effortlessly with your team members.</li>
                <li><strong>Effortless document collaboration:</strong> Automatically copy Dropbox files to SharePoint for team-wide access.</li>
                <li><strong>Social media watch:</strong> Stay in the loop whenever someone mentions your brand with specific hashtags on social media.</li>
               
              </ul>
              <p><strong>Based on research:</strong> <a href="https://info.microsoft.com/ww-landing-forrester-tei-of-power-platform-premium-capabilities.html?culture=en-us&country=us" target="_blank" rel="nofollow">The Total Economic Impact™ of Microsoft Power Platform Premium Capabilities</a>  published by Forrester Consulting. </p>
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="new-pic-bc">
                <div className="over-la-pic-1">
                  <Image
                    src="/img/power-auto-shapew.png"
                    width={1228}
                    height={818}
                    alt="nn"
                  />
                </div>
                <Image
                  src="/img/finance-the-right-solution.png"
                  alt="Power Automate can help your Business"
                  width={600}
                  height={400}
                />
              </div>
            </div>





          </div>

        </div>
      </section>
 
      <section className="col-gg" style={{backgroundColor:'#f9fcfe'}}>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>Microsoft Power Automate Service: Automate with Confidence!</h2>
                <p>Enhance business capabilities, achieve higher ROI, and reduce operational expenses by implementing Microsoft Power Automate from a reliable <Link href="/"><a>Microsoft solution partner</a></Link>, Dynamics Square.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
          <div className="col-lg-4">
              <div className="home_servce-_card">
              <Link href="#exampleModal">
                  <a  data-bs-toggle="modal">
                    <div className="gr">
                      <img src="/img/home/Implementation-icon.png" alt="Implementation-icon" />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Implementation-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Power Automate Implementation</h3>
                    <p>Empower employees with AI, get more business visibility, and enable a data-driven strategy with the Power Automate implementation.</p>
                    <div className="h-s-call" >
                      <span>Implement Now </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
           
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <Link href="#exampleModal">
                  <a  data-bs-toggle="modal">

                    <div className="gr">
                      <img src="/img/home/Support-icon.png" alt="Support-icon" />
                      <video autoPlay muted loop playsInline>
                        <source src="/video/Support-icon.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Power Automate Support</h3>
                    <p>Make your system work 24*7 and enable automation to help you grow regardless of complexity with Power Automate support.</p>
                    <div className="h-s-call" >
                      <span>Support Now </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            
          
          </div>
        </div>
      </section>
     

     

   


      <section className="pri-wrper-bc" style={{ marginTop: '0px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-colo-bg">
                <h2>Microsoft Power Automate Pricing</h2>
                <p>Check out the most reliable and cost-effective pricing of Power Automate.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4">
             
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>
                  Power Automate Free
                  </h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$0</span> 30 Days
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Access features of Power Automate premium for 30 Days. </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
           
           <div className="price0-bc-new price0-bc-new-h">
             <div className="pr-head">
               <h3>Power Automate Premium</h3>
             </div>
             <div className="pr-body">
               <div className="pr-pice">
                 <span>$15</span> per user/month
               </div>
               <div className="list-ul">
                 <ul>
                   <li>
                     <i className="bi bi-check-lg"></i>Automate cloud application using API</li>
                   <li>
                     <i className="bi bi-check-lg"></i>Automate legacy application using UI connectivity</li>
                   <li>
                     <i className="bi bi-check-lg"></i>Unlimited cloud flows (DPA) and desktop flows (RPA) in attended mode</li>
                   <li>
                     <i className="bi bi-check-lg"></i>50 MB process mining data storage</li>
                   <li>
                     <i className="bi bi-check-lg"></i>5,000 AI Builder credits</li>
                     <li>
                     <i className="bi bi-check-lg"></i>250 MB database for Dataverse and 2GB File</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
            <div className="col-lg-4">
           
              <div className="price0-bc-new price0-bc-new-h">
                <div className="pr-head">
                  <h3>Power Automate Process</h3>
                </div>
                <div className="pr-body">
                  <div className="pr-pice">
                    <span>$150</span> per bot/month<sup>6</sup>
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li>
                        <i className="bi bi-check-lg"></i>Licensed per single bot accessed by unlimited users</li>
                      <li>
                        <i className="bi bi-check-lg"></i>Unlimited cloud flows (DPA) and desktop flows (RPA) in unattended mode</li>
                      <li>
                        <i className="bi bi-check-lg"></i>50 MB database for Dataverse and 200 MB File</li>
                  
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bbb" style={{ marginTop: '120px' }}>
        <div className="heross">
          <video
            playsinline
            autoPlay
            muted
            loop
            poster="/video/Rectangle-scree.png"
            className="background"
          >
            <source type="video/mp4" src="/video/Banner-DS-US.mp4" />
          </video>
          <div className="container">
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="psot-cl">
                  <h3>For personalized and detailed Power Automate pricing structure, feel free to contact our experts.</h3>
                  <Link href="/contact-us/">
                    <a className="btn btn-md">
                    Connect with a Business Automation Expert!
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
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="left--side-title">
                <h2>Why Choose Dynamics Square as your Growth Partner?</h2>
                <p>Dynamics Square has been in the business of offering reliable, cost-effective, and superior services to the growing organization that embraces digitalization.</p>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="right--side-pic right--side-pic-b">
                <Image
                  width={579}
                  height={376}
                  src="/img/ds-new-shape.png"
                  alt="ds-new-shape-logo"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/Proven-Track-Record.png"
                    alt="Proven-Track-Record"
                  />
                </div>
                <div className="rig">
                  <h3>Proven Track Record</h3>
                  <p>Being a certified <Link href="/microsoft-dynamics-365-partner/"><a>Microsoft Dynamics partner</a></Link>, we have a track record of <strong>100%</strong> successful implementation of Dynamics 365 and Power Platform solutions across <strong>500+</strong> global businesses.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/Solutions-Unique-Businesses.png"
                    alt="Solutions-Unique-Businesses"
                  />
                </div>
                <div className="rig">
                  <h3>Tailored Solutions for Unique Businesses</h3>
                  <p>We understand your business requirements and offer you a tailored solution to match up with the pace of your growing business. That's how we work.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/Focuses-on-Customer-Satisfaction.png"
                    alt="Focuses-on-Customer-Satisfaction"
                  />
                </div>
                <div className="rig">
                  <h3>Focuses on Customer Satisfaction</h3>
                  <p>Our only priority is to offer the utmost customer satisfaction regardless of business complexity while enhancing business efficiency, eliminating errors, and supercharging productivity.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/reliable-after-sales-support.png"
                    alt="reliable-after-sales-support"
                  />
                </div>
                <div className="rig">
                  <h3>Reliable After-Sales Support</h3>
                  <p>Before and after the Power Automate implementation, we are here to support your business unconditionally for a long-lasting relationship.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default DynamicsNavToBusinessCentralNew;
