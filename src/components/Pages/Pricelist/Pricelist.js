import React, { Fragment, useEffect } from 'react'
import * as action from "../../../store/actions/index"
import { Container,Col, Button } from 'reactstrap';import Footer2 from '../../footer2'
import { connect } from 'react-redux';
import ListComp from './listcomp/listcomp';

const Pricelist = (props) => {
  const {Onfetchpricelist,}=props;
  useEffect(() => {
    Onfetchpricelist('Delhi')
  }, [Onfetchpricelist,])

  return (
    <Fragment>
      <Container className="themed-container my-3 px-0 " fluid="sm" >
        <Col sm="12" md="12" className="border border-secondary py-4 px-3 bg-white">
          <div className="d-flex justify-content-center">
            <h5 className=" text-secondary font-weight-bold">The Kabadiwala rates of scrap</h5>
          </div>
        <div className="row p-2">
          <ListComp/>
        </div>
        </Col>
    </Container>
      <Footer2/>
    </Fragment>
  )
}

const mapDispatchToProps= dispatch=>{
  return {
    Onfetchpricelist:(city)=>dispatch(action.fetchPricelist(city))
  }
}

export default connect(null,mapDispatchToProps)(Pricelist);
