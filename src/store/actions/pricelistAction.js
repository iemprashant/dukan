import * as actionTypes from '../actions/actionTypes'
import axios from 'axios'

export const fetchPricelistStart = ()=>{
    return {
        type:actionTypes.FETCH_PRICELIST_START
    }
}

export const fetchPricelistSuccess=()=>{
    return {
        type:actionTypes.FETCH_PRICELIST_SUCCESS
    }
}
export const fetchPricelist=()=>{
    return dispatch=>{
        dispatch(fetchPricelistStart());
        axios.get()
    }
}