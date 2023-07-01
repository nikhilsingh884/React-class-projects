import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{
        totalItems:[]
    },
    reducers:{
        addToCart:{
        }
    }
})
export const{addToCart}=cartSlice.actions;
export default cartSlice.reducer
