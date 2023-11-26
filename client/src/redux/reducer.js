import { GET_PRODUCTS, CREATE_PRODUCT, ERROR } from "./actions";

const initialState = {
    allProducts: [],  
    productsCopy: [],
    productDetail: {},
    messageCreated: "",
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
    case CREATE_PRODUCT:
    return {
        ...state,
        messageCreated: payload
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