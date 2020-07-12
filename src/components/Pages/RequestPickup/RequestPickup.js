import React,{useEffect} from 'react'
import * as actions from '../../../store/actions/index'
import { connect } from 'react-redux'
import axios from 'axios'

const RequestPickup = () => {
  return (
    <h1>this is a pickupp</h1>
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

