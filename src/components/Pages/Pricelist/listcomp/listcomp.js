import React from 'react'
import { connect } from 'react-redux';
import Pricelistcard from '../pricelistcard/pricelistcard';

const ListComp = props => {
    const {priceliststate,loading}=props;
    let list=null;
    if( !loading){
        list=priceliststate.map(item=>(
                    <Pricelistcard
                    key={item.id}
                    icon={item.icon}
                     title={item.id}
                     price={item.price}
                     quantity={item.quantity}/>
        ))
        }
        
    return list;
}
    
const mapStateToProps=state=>{
    return{
      priceliststate: state.FetchPricelist.pricelist,
      loadingstate:state.FetchPricelist.loading
    }
}
export default connect(mapStateToProps,null)(ListComp);
