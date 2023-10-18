/* CardSection.js */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const HorizontalScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let horizontalSection = document.querySelector('.horizontal');

    gsap.to('.horizontal', {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.horizontal',
        start: 'center center',
        end: '+=800px',
        pin: '#ixedd',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div className="fixt-back-col" id="ixedd">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="heading-colo-bg">
                <h2>
                  Business Central Modules: A Perfect ERP for Any Business
                </h2>
                <p style={{ marginBottom: "-60px" }} >
                  Microsoft Dynamics Business Central fits in any business
                  regardless of complexity with the variety of modules. These
                  modules are:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="horizontal-scoll">
      <div className="horizontal-scoll-wrapper">
        <div className="horizontal">

          <div className="card card-ds-slide">
            <div className="list-bc-feature">
              <h3>Finance Management</h3>
              <ul>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Internal Transactions </span>
                    <div className="tooltip">Manage and customize internal transactions with restricted access.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Cash Flow Forecasting </span>
                    <div className="tooltip">Predict Sales and Expenses analyzing cash balances and account schedules. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Budgeting </span>
                    <div className="tooltip">Control and monitor overall business finances with accurate budgeting. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Inventory Costing </span>
                    <div className="tooltip">Reconcile inventory and manufacturing costs utilizing the general ledger. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Consolidation and Multi-Companies </span>
                    <div className="tooltip">Manage multiple business accounts to analyze company finances. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Costs and Income Allocation </span>
                    <div className="tooltip">Allocate resources based on income using a common journal. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Banking </span>
                    <div className="tooltip">Monitor bank account transactions by integrating a banking add-on. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Cost Accounting </span>
                    <div className="tooltip">Distribute the budget by planned and actual costs of projects. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Fixed Assets </span>
                    <div className="tooltip">Control and manage fixed assets for optimum ROI. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Accounts Receivable </span>
                    <div className="tooltip">Transact internally with restricted access by streamlining and customizing all your transactions.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Accounts Payable</span>
                    <div className="tooltip">Manage outgoing payments, track cheques, and make instant payments. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>General Ledger </span>
                    <div className="tooltip">Manage Credit and Debit transactions to get complete financial data.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card card-ds-slide">
            <div className="list-bc-feature">
              <h3>Sales and Marketing</h3>
              <ul>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Customer Management </span>
                    <div className="tooltip">Manage your customers, resolve their queries, and build a good relationship.  </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Sales Quote </span>
                    <div className="tooltip">Create, edit, and send sales invoices to clients before final prices.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Sales Order</span>
                    <div className="tooltip">Craft sales orders include drop-shipping and partial-shipping options. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Sales Invoices</span>
                    <div className="tooltip">Based on negotiations, generates sales invoices for clients. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Drop Shipments </span>
                    <div className="tooltip">Ship goods directly to the customer using a purchase order.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Sales Returns</span>
                    <div className="tooltip">Process refunds and manage stock information in real-time of stocks.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Assembly Order</span>
                    <div className="tooltip">Fulfill orders using linked assembly in case of product unavailability.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Order Planning & Promising </span>
                    <div className="tooltip">Schedule deliveries and process delivery orders on time. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Single Invoice Multiple Shipments </span>
                    <div className="tooltip">Ship multiple products to clients using a single invoice.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Cancel Unpaid Invoices </span>
                    <div className="tooltip">Generate sales invoices for unpaid invoices.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card card-ds-slide">
            <div className="list-bc-feature">
              <h3>Supply Chain Management</h3>
              <ul>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Manage Suppliers </span>
                    <div className="tooltip">Track raw materials and finalized products received from suppliers.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Optimize Warehouse </span>
                    <div className="tooltip">Optimize warehouse space to store more inventory. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Track Goods during Transportation </span>
                    <div className="tooltip">Track all movements of raw materials and finished products.  </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Communication</span>
                    <div className="tooltip">Build a sustainable flow of data between different team members.  </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Adopt New Technologies </span>
                    <div className="tooltip">Accept new technologies to enhance the quality of processes. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Built-in Intelligence </span>
                    <div className="tooltip">Monitor entire inventory with advanced tech for real-time insights.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Enhance Profitability </span>
                    <div className="tooltip">Optimize vendors and avoid unnecessary costs to enhance overall profits.  </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card card-ds-slide">
            <div className="list-bc-feature">
              <h3>Project Management</h3>
              <ul>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Project Creation</span>
                    <div className="tooltip">Enables the organization to create, schedule, and manage projects. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Resource Allocations </span>
                    <div className="tooltip">Allocate resources for each project based on priority and utilization.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Time Sheet Management</span>
                    <div className="tooltip">Updates job tasks, planning lines, and timesheet lines in real time. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Project Budget Management </span>
                    <div className="tooltip">Distribute budget on various projects based on costs and effectiveness.   </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Resource Consumptions </span>
                    <div className="tooltip">Track and record consumption of all resources with real-time data updates. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Project Supplies </span>
                    <div className="tooltip">Track all supplies utilized for a project until completion with data monitoring.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Project WIP Methods </span>
                    <div className="tooltip">Create accurate financial statements and job estimates. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Project Progress and Performance</span>
                    <div className="tooltip">Generate accurate financial reporting and the cost of consumed materials. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Project Invoicing </span>
                    <div className="tooltip">Build and share sales invoices for a particular project.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Merge Duplicate Records </span>
                    <div className="tooltip">Delete similar records from the data to eliminate confusion. </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card card-ds-slide">
            <div className="list-bc-feature">
              <h3>Inventory Management</h3>
              <ul>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Master Management</span>
                    <div className="tooltip">List products or create product cards based on business. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Bill of Materials </span>
                    <div className="tooltip">Generate different bills of parent items or stock components for sale.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Categorization</span>
                    <div className="tooltip">Keep a broad view and categorize items. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Attributes </span>
                    <div className="tooltip">Distribute attributes of different items to make them easier to find. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Catalog </span>
                    <div className="tooltip">Creates an item card that a company offers without keeping stock. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Inventory Counting </span>
                    <div className="tooltip">Track inventory and stocks while maintaining data in real time. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Availability </span>
                    <div className="tooltip">Check the item availability based on different parameters.  </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Inventory Transfer </span>
                    <div className="tooltip">Streamline all inventory transfer orders used to move items.  </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Reservation</span>
                    <div className="tooltip">Reserve a few items for sales, service, purchase, and production orders. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Tracking </span>
                    <div className="tooltip">Track products using a serial or lot number of a recall situation.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card card-ds-slide">
            <div className="list-bc-feature">
              <h3>Warehouse Management</h3>
              <ul>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Receiving</span>
                    <div className="tooltip">Track and record information on all products received in the warehouse.  </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Shipments </span>
                    <div className="tooltip">Maintains a record of shipments at the warehouse along with sales order data. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Putting Items Away</span>
                    <div className="tooltip">Classify products based on customer demand and consumption.  </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Moving Items</span>
                    <div className="tooltip">Empower the company to manage goods transportation between locations. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Picking Items</span>
                    <div className="tooltip">Select the items based on data set up for different purposes.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Automated Data Capture Systems</span>
                    <div className="tooltip">Track items moving inside the warehouse using a barcode. </div>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="card card-ds-slide">
            <div className="list-bc-feature">
              <h3>Manufacturing Management </h3>
              <ul>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Production Planning</span>
                    <div className="tooltip">Plan, suggest changes, and balance demands based on the supply chain.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Supply Planning </span>
                    <div className="tooltip">Build the strategy for manufacturing, distribution, and procurement.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Demand Forecasting </span>
                    <div className="tooltip">Maximize sales, push production limits, and enable demand forecasts.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Sales Order to Production.</span>
                    <div className="tooltip">Generate production orders with the specifications of the sales orders.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Order Planning </span>
                    <div className="tooltip">Forecast sales and product demand utilizing BOM (Bill of Material). </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>MRP & MPS </span>
                    <div className="tooltip">Automate the supply chain using the MRP and MPS (Master Production Schedule. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Requisition Worksheet </span>
                    <div className="tooltip">Create supply chain data and detect demand for refilled items. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Calculate Work Centre Calendar </span>
                    <div className="tooltip">Rescheduled work center calendar with an unexpected change in plan. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Item Availability </span>
                    <div className="tooltip">Check out the item availability and influence with ease. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Production Order </span>
                    <div className="tooltip">Create production orders with ease - manually or automatically. </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Subcontracting </span>
                    <div className="tooltip">Outsource required and preferred processes or operations.</div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-tool">
                    <i class="bi bi-check-lg"></i><span>Production Consumption & Output </span>
                    <div className="tooltip">Record the consumption of resources and materials.  </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      </div>
  );
};

export default HorizontalScroll;
