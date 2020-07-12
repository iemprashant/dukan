import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const Signin = () => {
  return (
    <Container className="themed-container my-3 px-0 " fluid="sm" >
        <Col sm="12" md={{ size: 6, offset: 3 }} className="border border-secondary py-5 px-3 d-flex bg-white flex-column justify-content-center">
            <h4 className="text-secondary text-center font-weight-bold">Sell or Donate your scrap</h4>
            <h6 className="text-secondary text-center font-weight-bold font-italic my-3">in just 3 easy steps</h6>
            <div className="input-group my-3 p-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">+91</span>
              </div>
              <input type="phone-number" className="form-control" placeholder="Enter your mobile number"/>
            </div>
            <button type="button" className="btn btn-success">₹ SELL</button>
            <p className="px-2  my-5 text-center">Now only in <br/>Bhopal, Indore, Raipur, Lucknow, Nagpur and Aurangabad.</p>

        </Col>
    </Container>
  )
}

export default Signin;
