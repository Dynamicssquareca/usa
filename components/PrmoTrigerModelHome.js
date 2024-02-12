import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import Formpopupgrade from './Formpopupgrade';
const PrmoTrigerModelHome = () => {

  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [closeModal, setCloseModal] = useState(false);
  function handleCloseModal() {
    document.getElementById("upgradeform").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop")
      .forEach(el => el.classList.remove("modal-backdrop"));
  }




  return (
    <>
      {!closeModal &&
        <div
          className="modal fade form-main-model form-main-model-toster"
          id="upgradeform"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="main-form-wrper">
                  <div className='row'>
                    <div className='col-lg-6 align-self-center'>
                      <div>
                        <h4 className="modal-title" id="exampleModalLabel">
                          Your Journey to Dynamics 365 Starts Here!
                        </h4>
                        <p>Fill in your business details and let<br/> us be your partner in growth.</p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <Formpopupgrade />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      }


    </>

  );
}
export default PrmoTrigerModelHome