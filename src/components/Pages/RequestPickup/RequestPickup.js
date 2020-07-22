import React, { Fragment } from "react";
import Footer2 from "../../footer2";
import { Container, Col } from "reactstrap";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import axios from "axios";
const RequestPickup = (props) => {
  return (
    <Fragment>
      <Container className="themed-container my-3 px-0 " fluid="sm">
        <Col
          sm="12"
          md={{ size: 8, offset: 2 }}
          lg={{ size: 4, offset: 4 }}
          className="border border-secondary py-5 px-3 d-flex bg-white flex-column justify-content-center"
        >
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
        </Col>
      </Container>
      <Footer2 />
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    pricelist: state.FetchPricelist.pricelist,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchpricelist: (city) => dispatch(actions.fetchPricelist(city)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  RequestPickup,
  axios
);
