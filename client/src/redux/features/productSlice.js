import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    allProducts: [],
    messageCreatedOrUpdated: "",
    messageDeleted: "",
    status: "idle"
}

//Acciones Asincrónicas
export const getAllProducts = createAsyncThunk('product/getProducts', async () => {
	try {
        const { data } = await axios.get("/products");
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}) 
export const createProduct = createAsyncThunk('product/createProduct', async (payload) => {
	try {
        const { data } = await axios.post("/create", payload);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}) 
export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
	try {
        const { data } = await axios.delete(`/${id}`);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
})
export const updateProduct = createAsyncThunk('product/updateProduct', async (payload) => {
	try {
        const { data } = await axios.put("/update", payload);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}) 


//productSlice
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        clearMessageCreatedOrUpdated: (state, action) => {
            state.messageCreatedOrUpdated = action.payload
        },
        clearMessageDeleted: (state, action) => {
            state.messageDeleted = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(getAllProducts.fulfilled, (state, action) => {
			state.status = 'success';
			state.allProducts = action.payload;
		});
		builder.addCase(getAllProducts.rejected, (state) => {
			state.status = 'rejected';
		});
        builder.addCase(createProduct.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(createProduct.fulfilled, (state, action) => {
			state.status = 'success';
			state.messageCreatedOrUpdated = action.payload;
		});
		builder.addCase(createProduct.rejected, (state) => {
			state.status = 'rejected';
		});
        builder.addCase(deleteProduct.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(deleteProduct.fulfilled, (state, action) => {
			state.status = 'success';
			state.messageDeleted = action.payload;
		});
		builder.addCase(deleteProduct.rejected, (state) => {
			state.status = 'rejected';
		});
        builder.addCase(updateProduct.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(updateProduct.fulfilled, (state, action) => {
			state.status = 'success';
			state.messageCreatedOrUpdated = action.payload;
		});
		builder.addCase(updateProduct.rejected, (state) => {
			state.status = 'rejected';
		});
    }
})

export const { clearMessageCreatedOrUpdated, clearMessageDeleted } = productSlice.actions;
export default productSlice.reducer;