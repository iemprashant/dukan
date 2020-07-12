import * as actionTypes from '../actions/actionTypes'
const initialState={
    pricelist:[],
    loading:false
}
const fetchPricelistStart = ( state, action ) => {
    return{...state,
                ...{loading:true}
            }
};
const fetchPricelistSuccess = ( state, action ) => {
    return{...state,...{
                    pricelist:action.pricelist,
                    loading: false
                }
    }
};

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_PRICELIST_SUCCESS: return fetchPricelistSuccess(state,action);
        case actionTypes.FETCH_PRICELIST_START:return fetchPricelistStart(state,action);
        default:return state;
        }
}

export default reducer;