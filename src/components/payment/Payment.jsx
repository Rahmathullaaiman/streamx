import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './payment.css';

function Payment() {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button type="button" className="btn btn-primary launch" onClick={openModal}>
        <i className="fa fa-rocket"></i> Pay Now
      </Button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="tabs">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="visa-tab" data-toggle="tab" href="#visa" role="tab" aria-controls="visa" aria-selected="true">
                  <img src="https://i.imgur.com/sB4jftM.png" width="80" alt="Visa" />
                </a>
              </li>
             
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="visa" role="tabpanel" aria-labelledby="visa-tab">
                <div className="mt-4 mx-4">
                  <div className="text-center">
                    <h5>Credit card</h5>
                  </div>
                  <div className="form mt-3">
                    <div className="inputbox">
                      <input type="text" name="name" className="form-control" required="required" />
                      <span>Cardholder Name</span>
                    </div>
                    <div className="inputbox">
                      <input type="text" name="name" min="1" max="999" className="form-control" required="required" />
                      <span>Card Number</span>
                      <i className="fa fa-eye"></i>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="inputbox">
                        <input type="text" name="name" min="1" max="999" className="form-control" required="required" />
                        <span>Expiration Date</span>
                      </div>
                      <div className="inputbox">
                        <input type="text" name="name" min="1" max="999" className="form-control" required="required" />
                        <span>CVV</span>
                      </div>
                    </div>
                    <div className="px-5 pay">
                      <button className="btn btn-success btn-block me-5">PAY</button>
                      <button className="btn btn-danger btn-block ms-5">CANCEL</button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                <div className="px-5 mt-5">
                  <div className="inputbox">
                    <input type="text" name="name" className="form-control" required="required" />
                    <span>Paypal Email Address</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
       
      </Modal>
    </div>
  );
}

export default Payment;
