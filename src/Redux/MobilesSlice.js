import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";

export const getMobilesList = createAsyncThunk("getMobilesList", async (searchValue, { }) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${searchValue}`)
        console.log(response.data.products);
        return response.data.products
    } catch (error) {
        console.log('error hai yaar 😒', error);
    }
})

export const getMobilesDetails = createAsyncThunk("getMobilesDetails", async (id) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${id}`)
        console.log(response.data.products[0]);
        return response.data.products[0]
    } catch (error) {
        console.log('error hai yaar 😒', error);
    }
})

const mobilesSlice= createSlice({
    name:"mobilesSlice",
    initialState:{
        loading:true,
        mobilesList:[],
        mobilesDetails:{}
    },
    extraReducers:{
        [getMobilesList.pending]:(state,Action)=>{
        state.loading=true
        },
        [getMobilesList.fulfilled]:(state,action)=>{
            state.loading=false
            state.mobilesList=action.payload
        },
        [getMobilesList.rejected]:(state,actions)=>{
            state.loading=false;
        },
        [getMobilesDetails.pending]: (state, action) => {
            state.loading = true
        },
        [getMobilesDetails.fulfilled]: (state, action) => {
            state.loading = false;
            state.mobilesDetails = action.payload
        },
        [getMobilesDetails.rejected]: (state, action) => {
            state.loading = true;
        }
    }
})

export default mobilesSlice.reducer;