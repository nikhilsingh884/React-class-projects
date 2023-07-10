import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductList = createAsyncThunk("getProductList", async () => {
    try {
        const resp = await axios.get("https://fakestoreapi.com/products")
        console.log(resp.data)
        return resp.data;
        
    } catch (error) {
        console.log("error hai bhai", error);
    }
})

export const getProductDetails = createAsyncThunk("fetchProductDetails", async (id) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(response);

        return response.data
    } catch (error) {
        console.log("error hai bhai", error);
    }
})

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        loading: true,
        productList: [],
        productDetails: {}

    },
    reducers: {

    },
    extraReducers: {
        [getProductList.pending]: (state, action) => {
            state.loading = true
        },
        [getProductList.fulfilled]: (state, action) => {
            state.loading = false;
            state.productList = action.payload
        },
        [getProductList.rejected]: (state, action) => {
            state.loading = false;
        },
        [getProductDetails.pending]: (state, action) => {
            state.loading = true;
        },
        [getProductDetails.fulfilled]: (state, action) => {
            state.loading = false;
            state.productDetails = action.payload

        }
    }
})

export default productSlice.reducer
export const {loading, productList}=productSlice.actions