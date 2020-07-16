import React, { Fragment } from 'react'
import {faBoxOpen, faCarBattery, faBook,faStickyNote, faPrint, faCopy, faNewspaper, faOilCan, faBeer, faCapsules, faCouch, faCut, faDatabase, faDharmachakra, faCogs, faChalkboard, faFaucet, faLayerGroup, faLaptopMedical, faPrescriptionBottle, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'

import { Container,Col } from 'reactstrap';
import Footer2 from '../../footer2'
import Pricelistcard from './pricelistcard/pricelistcard';

const Pricelist = () => {
  return (
    <Fragment>
      <Container className="themed-container my-3 px-0 " fluid="sm" >
        <Col sm="12" md="12" className="border border-secondary py-4 px-3 bg-white">
          <div className="d-flex justify-content-center">
            <h5 className=" text-secondary font-weight-bold">The Kabadiwala rates of scrap</h5>
          </div>
        <div class="row p-2">
          <Pricelistcard icon={faDharmachakra} title="Aluminium" price="80.00" quantity="per Kg"/>
          <Pricelistcard icon={faCarBattery} title="Battery" price="30.00" quantity="per Kg"/>
          <Pricelistcard icon={faBook} title="Books" price="6.00" quantity="per Kg"/>
          <Pricelistcard icon={faDatabase} title="Brass" price="230" quantity="per Kg"/>
          <Pricelistcard icon={faBoxOpen} title="Carton box" price="4.00" quantity="per Kg"/>
          <Pricelistcard icon={faMoneyCheck} title="Magazines" price="7.00" quantity="per Kg"/>
          <Pricelistcard icon={faFaucet} title="Copper" price="280.00 " quantity="per Kg"/>
          <Pricelistcard icon={faLaptopMedical} title="E-waste" price="5.00" quantity="per Kg"/>
          <Pricelistcard icon={faCogs} title="Iron" price="17" quantity="per Kg"/>
          <Pricelistcard icon={faCut} title="Mix-waste" price="2.00" quantity="per Kg"/>
          <Pricelistcard icon={faCouch} title="Fibre" price="15.00" quantity="per Kg"/>
          <Pricelistcard icon={faPrescriptionBottle} title="Soft Plastic" price="8.00" quantity="per Kg"/>
          <Pricelistcard icon={faNewspaper} title="Newspaper" price="7.00" quantity="per Kg"/>
          <Pricelistcard icon={faChalkboard} title="Grey Board" price="2.00" quantity="per Kg"/>
          <Pricelistcard icon={faLayerGroup} title="Milk Cover" price="13.00" quantity="per Kg"/>
          <Pricelistcard icon={faOilCan} title="Oil Tin Can" price="15.00" quantity="per piece"/>
          <Pricelistcard icon={faStickyNote} title="White Papers" price="8.00" quantity="per Kg"/>
          <Pricelistcard icon={faCapsules} title="Tin Can" price="12.00" quantity="per Kg"/>
          <Pricelistcard icon={faBeer}title="Steel" price="30.00" quantity="per piece"/>
          <Pricelistcard icon={faCopy} title="Plain Paper" price="10.00" quantity="per Kg"/>
          <Pricelistcard icon={faPrint} title="Record Paper" price="5.00" quantity="per piece"/>
        </div>
        </Col>
    </Container>
      <Footer2/>
    </Fragment>
  )
}

export default Pricelist;
