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
        end: '+=1500px',
        pin: '#horizontal-scoll',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section id="horizontal-scoll">
      <h1>Scrolling Cards Example</h1>
   
      <div className="horizontal-scoll-wrapper">
        <div className="horizontal">
          <div>
            <div className="card card-ds-slide">
              <div className="card-body">
                <h3 className="card-title power-title">Get Real-Time Insights with Every Click</h3>
                <p className="card-text">Quickly understand your business performance with customizable smart dashboards. Predict the contextual effects of your decisions, avoid pitfalls, and make informed choices.</p>
              </div>
              <img
                src="/img/about.jpg"
                className="card-img-bottom"
                alt="power bi real time insights"
              />
            </div>
          </div>
          <div>
            <div className="card card-ds-slide">
              <div className="card-body">
                <h3 className="card-title power-title">Get Real-Time Insights with Every Click</h3>
                <p className="card-text">Quickly understand your business performance with customizable smart dashboards. Predict the contextual effects of your decisions, avoid pitfalls, and make informed choices.</p>
              </div>
              <img
                src="/img/about.jpg"
                className="card-img-bottom"
                alt="power bi real time insights"
              />
            </div>
          </div>
          <div>
            <div className="card card-ds-slide">
              <div className="card-body">
                <h3 className="card-title power-title">Get Real-Time Insights with Every Click</h3>
                <p className="card-text">Quickly understand your business performance with customizable smart dashboards. Predict the contextual effects of your decisions, avoid pitfalls, and make informed choices.</p>
              </div>
              <img
                src="/img/about.jpg"
                className="card-img-bottom"
                alt="power bi real time insights"
              />
            </div>
          </div>
          <div>
            <div className="card card-ds-slide">
              <div className="card-body">
                <h3 className="card-title power-title">Get Real-Time Insights with Every Click</h3>
                <p className="card-text">Quickly understand your business performance with customizable smart dashboards. Predict the contextual effects of your decisions, avoid pitfalls, and make informed choices.</p>
              </div>
              <img
                src="/img/about.jpg"
                className="card-img-bottom"
                alt="power bi real time insights"
              />
            </div>
          </div>
          <div>
            <div className="card card-ds-slide">
              <div className="card-body">
                <h3 className="card-title power-title">Get Real-Time Insights with Every Click</h3>
                <p className="card-text">Quickly understand your business performance with customizable smart dashboards. Predict the contextual effects of your decisions, avoid pitfalls, and make informed choices.</p>
              </div>
              <img
                src="/img/about.jpg"
                className="card-img-bottom"
                alt="power bi real time insights"
              />
            </div>
          </div>
          <div>
            <div className="card card-ds-slide">
              <div className="card-body">
                <h3 className="card-title power-title">Get Real-Time Insights with Every Click</h3>
                <p className="card-text">Quickly understand your business performance with customizable smart dashboards. Predict the contextual effects of your decisions, avoid pitfalls, and make informed choices.</p>
              </div>
              <img
                src="/img/about.jpg"
                className="card-img-bottom"
                alt="power bi real time insights"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
