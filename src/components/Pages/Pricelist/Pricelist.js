import React, { Fragment, useEffect,useState} from 'react'
import * as action from "../../../store/actions/index"
import { Container,Col} from 'reactstrap';
import ModalComp from './Modal/Modal'
import Footer2 from '../../footer2'
import { connect } from 'react-redux';
import ListComp from './listcomp/listcomp';
import DropdownComp from './city-Dropdown/city-dropdown'

const Pricelist = (props) => {
  const {Onfetchpricelist,loading}=props;

  const [city, setcity] = useState("Delhi");

  useEffect(() => {
    Onfetchpricelist(city)
  }, [Onfetchpricelist,city])

  let list=(
    <div className="spinner-border text-success" style={{width:"3rem", height:"3rem"}} role="status">
      <span class="sr-only">Loading...</span>
    </div>)
    if( !loading){
    list=<ListComp/>
    }
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
        <div className="row p-2 d-flex justify-content-center">
          {list}
        </div>
        </Col>
    </Container>
      <Footer2/>
    </Fragment>
  )
}
const mapStateToProps=state=>{
  return{
    loadingstate:state.FetchPricelist.loading
  }
}
const mapDispatchToProps= dispatch=>{
  return {
    Onfetchpricelist:(city)=>dispatch(action.fetchPricelist(city))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pricelist);
