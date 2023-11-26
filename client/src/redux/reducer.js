import { GET_PRODUCTS, ERROR } from "./actions";

const initialState = {
allProducts: [],  
productsCopy: [],
productDetail: {},
errors: {}
};

const reducer = (state= initialState, {type, payload}) => {
switch (type) {
    case GET_PRODUCTS:
       return {
           ...state,
           allProducts: payload,
           productsCopy: payload,
       }
    case ERROR:
       return {
           ...state,
           errors: payload
       }
    default:
       return {...state}
}

}

export default reducer;