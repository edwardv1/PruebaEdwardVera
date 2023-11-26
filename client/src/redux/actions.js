import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const ERROR = "ERROR";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/products");
      return dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "An error has occurred while getting products!",
      });
    }
  };
};


export const createProduct = (payload) => { 
  return async (dispatch) => {
     try {
        const response = await axios.post("/create", payload);
        console.log(response.data);
        return dispatch({
           type: CREATE_PRODUCT,
           payload: response.data
        })
     } catch (error) {
      console.log(error);
        return dispatch({
           type: ERROR,
           payload: "An error has occurred while creating the product!",
        })
     }
  };
}

export const clearMessageCreated = (payload) => {
  return (dispatch) => {
     return dispatch({
       type: CREATE_PRODUCT,
       payload: payload
     })
  }
}