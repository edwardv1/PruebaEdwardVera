import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
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
