import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchFakeApi = createAsyncThunk("fetchFakeApi", async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/')
        console.log(response.data);
        return response.data

    } catch (error) {
        console.log('error', error);
    }
})

const fakeApiSlice = createSlice({
    name:"fakeApiSlice",
    initialState:{
        
        productList:[]
    },
    reducers:{
       
    },
    extraReducers:{
        [fetchFakeApi.pending]:(state,action)=>{
        },
        [fetchFakeApi.fulfilled]: (state, action) => {
            state.productList = action.payload
        },
        [fetchFakeApi.rejected]: (state, action) => {
        }
    }
})
export default fakeApiSlice.reducer
export const { productList }=fakeApiSlice.actions