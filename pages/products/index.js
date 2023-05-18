import React, { useState } from "react";
import Head from 'next/head'
// import ModalVideo from "react-modal-video";
const ProductHome = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
      <title>Microsoft Business Applications | Dynamics Square</title>
      <meta name="description" content="Experience the power of Microsoft Business applications to help your digital transformation journey thrive."/>
        <link rel="canonical" href="https://www.dynamicssquare.com/products/" />
        
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Products
              </h1>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHome;
