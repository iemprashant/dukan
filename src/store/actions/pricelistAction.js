import * as actionTypes from '../actions/actionTypes'
import axios from 'axios'

export const fetchPricelistStart = ()=>{
    return {
        type:actionTypes.FETCH_PRICELIST_START
    }
}

export const fetchPricelistSuccess=(pricelist)=>{
    return {
        type:actionTypes.FETCH_PRICELIST_SUCCESS,
        pricelist:pricelist
    }
}
export const fetchPricelist=(city)=>{
    return dispatch=>{
        dispatch(fetchPricelistStart());
        axios.get(`https://kabaddukaan.firebaseio.com/pricelist/Delhi.json`)
        .then( 
            response => {
                const fetchedlist=[];
                for (let key in response.data){
                    fetchedlist.push({
                        ...response.data[key]
                        , id: key})
                    }
                dispatch(fetchPricelistSuccess(fetchedlist));
            })
        .catch( err=>
            console.log(err));
    }
}