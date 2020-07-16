import React,{Fragment} from 'react'
import Footer2 from '../../footer2' 
import * as actions from '../../../store/actions/index'
import { connect } from 'react-redux'
import axios from 'axios'

const RequestPickup = () => {
  return (
    <Fragment>  
      <h1>this is a pickupp</h1>
      <Footer2/>
    </Fragment>
  )
}
const mapStateToProps = state =>{
  return {
    pricelist:state.FetchPricelist.pricelist
}};
const mapDispatchToProps = dispatch =>{
  return{
      onFetchpricelist:(city)=>dispatch(actions.fetchPricelist(city))
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(RequestPickup,axios);

