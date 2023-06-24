import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ===================get-inventory==============================================================================

export const getInventory = createAsyncThunk("getInventory", async () => {
    try {
        const response = await axios.get(`http://localhost:8000/product/products`)
        console.log(response);
        return response.data.data

    } catch (error) {
        console.log(error);
    }
})


// ===================post-inventory==============================================================================

export const addProduct= createAsyncThunk("addProduct", async({formValue, handleClose}, {dispatch})=>{
    try {
        const response = await axios.post(`http://localhost:8000/product`, formValue);
        if (response.status === 200) {
            handleClose();
            dispatch((getInventory()));
        }
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
})


const inventorySlice = createSlice({
    name: "inventorySlice",
    initialState: {
        loading: false,
        inventoryList: []
    },
    extraReducers: {
        [getInventory.pending]: (state, action) => {
            state.loading = false
        },
        [getInventory.fulfilled]: (state, action) => {
            state.loading = false
            state.inventoryList = action.payload.products
        },
        [getInventory.rejected]: (state, action) => {
            state.loading = false
        }
    }

})
export default inventorySlice.reducer