import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductList = createAsyncThunk("getProductList", async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products")
        console.log(response);
        return response.products
    } catch (error) {
        console.log('error hai yaar ', error);
    }
})

export const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        loading: true,
        productList: []
    },
    extraReducers: {

    }
})
export default productSlice.reducer