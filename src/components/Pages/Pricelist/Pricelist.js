import React, { Fragment } from 'react'

import { Container, Row, Col } from 'reactstrap';
import Footer2 from '../../footer2'
import Pricelistcard from './pricelistcard/pricelistcard';

const Pricelist = () => {
  return (
    <Fragment>
      <Container className="themed-container my-3 px-0 " fluid="sm" >
        <Col sm="12" md="12" className="border border-secondary py-5 px-3 bg-white d-flex justify-content-center">
        <h5 className=" text-secondary text-center font-weight-bold">The Kabadiwala rates of scrap</h5>
        <div class="row">
        </div>
        </Col>
    </Container>
      <Footer2/>
    </Fragment>
  )
}

export default Pricelist;
