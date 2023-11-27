import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
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

export const deleteProduct = (id) => {
  return async (dispatch) => {
     try {
        const response = await axios.delete(`/${id}`);
        console.log(response.data);
        return dispatch({
           type: DELETE_PRODUCT,
           payload: response.data
        });  
     } catch (error) {
      console.log(error.message);
        return dispatch({
           type: "ERROR",
           payload: "An error occurred while deleting the product! try again!"
        })
     }
  };
}

export const clearMessageDeleted = (payload) => {
  return (dispatch) => {
     return dispatch({
       type: DELETE_PRODUCT,
       payload: payload
     })
  }
}