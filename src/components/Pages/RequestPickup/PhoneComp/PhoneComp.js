import React, { Fragment } from "react";
import Footer2 from "../../../footer2";
import ContainerComp from "../../../Layout/Container/Container";
function PhoneComp() {
  return (
    <Fragment>
      <ContainerComp>
        <h4 className="text-secondary text-center font-weight-bold">
          Sell or Donate your scrap
        </h4>
        <h6 className="text-secondary text-center font-weight-bold font-italic my-3">
          in just 3 easy steps
        </h6>
        <div className="input-group my-3 p-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              +91
            </span>
          </div>
          <input
            type="phone-number"
            className="form-control"
            placeholder="Enter your mobile number"
          />
        </div>
        <button type="button" className="btn btn-success">
          ₹ SELL
        </button>
        <p className="px-2  my-5 text-center">
          Now only in <br /> Delhi,Bhopal, Indore, Raipur, Lucknow, Nagpur and
          Aurangabad.
        </p>
      </ContainerComp>
      <Footer2 />
    </Fragment>
  );
}

export default PhoneComp;
