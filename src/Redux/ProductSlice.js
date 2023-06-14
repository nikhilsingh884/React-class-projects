import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//=============fetch api function=============


export const getProductList = createAsyncThunk("getProductList", async (searchValue,{}) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${searchValue}`)
        console.log(response.data.products);
        return response.data.products
    } catch (error) {
        console.log('error hai yaar 😒', error);
    }
})

// ========================================================================================
export const getProductDetails = createAsyncThunk("getProductDetails", async (id, { }) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${id}`)
        console.log(response.data.products[0]);
        return response.data.products[0]
    } catch (error) {
        console.log('error hai yaar 😒', error);
    }
})


// ========================================================================================


 const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        loading: true,
        productList: [],
        productDetails:{}
    },
    extraReducers: {
        [getProductList.pending]:(state,action)=>{
            state.loading=true;
        },
        [getProductList.fulfilled]:(state,action)=>{
            state.loading=false;
            state.productList=action.payload
        },
        [getProductList.rejected]: (state, action) => {
            state.loading = true;
        },
        [getProductDetails.pending]:(state,action)=>{
            state.loading=true
        },
        [getProductDetails.fulfilled]:(state,action)=>{
            state.loading=false;
            state.productDetails=action.payload
        },
        [getProductDetails.rejected]: (state, action) => {
            state.loading = true;
        }

    }
})

// ========================================================================================

export default productSlice.reducer