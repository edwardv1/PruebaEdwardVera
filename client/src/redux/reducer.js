import { GET_PRODUCTS, CREATE_PRODUCT, DELETE_PRODUCT, ERROR } from "./actions";

const initialState = {
    allProducts: [],  
    productsCopy: [],
    productDetail: {},
    messageCreated: "",
    messageDeleted: "",
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
    case DELETE_PRODUCT:
       return {
           ...state,
           messageDeleted: payload
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