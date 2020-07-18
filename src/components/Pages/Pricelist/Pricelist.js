import React, { Fragment, useEffect,useState} from 'react'
import * as action from "../../../store/actions/index"
import { Container,Col} from 'reactstrap';
import ModalComp from './Modal/Modal'
import Footer2 from '../../footer2'
import { connect } from 'react-redux';
import ListComp from './listcomp/listcomp';
import DropdownComp from './city-Dropdown/city-dropdown'

const Pricelist = (props) => {
  const {Onfetchpricelist,}=props;

  const [city, setcity] = useState("Delhi");

  useEffect(() => {
    Onfetchpricelist(city)
  }, [Onfetchpricelist,city])

  return (
    <Fragment>
      <ModalComp setcity={setcity}/>
      <Container className="themed-container mt-3 mb-5 px-0 " fluid="sm" >
        <Col sm="12" md="12" className="border border-secondary py-4 px-3 bg-white">
          <div className="d-flex justify-content-center">
            <h4 className=" text-secondary font-weight-bold text-center">The KabaadDukaan rates of scrap</h4>
          </div>
          <div className="d-flex justify-content-end">
            <DropdownComp setcity={setcity} citystate={city}/>
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
