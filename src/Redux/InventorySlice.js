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
    dispatch(startAddLoading())
    try {
        const response = await axios.post(`http://localhost:8000/product`, formValue);
        if (response.status === 200) {
            handleClose();
            dispatch((getInventory()));
        }
        dispatch(stopAddLoading())        
    } 
    catch (error) {
        if (error.response.data.message === "Duplicate field value"){
            
            error.response.data.message="Product already exists in inventory"
        }

        console.log("error",error);
        dispatch(stopAddLoading())
        dispatch(addErrorMsg(error.response.data.message))
    }
})

// ===================delete-inventory==============================================================================



export const deleteProduct= createAsyncThunk("deleteProduct", async({id}, {dispatch})=>{
    try {
        const response = await axios.delete(`http://localhost:8000/product/${id}`)
        if (response.status === 200){
            dispatch(getInventory());
            alert("Deleted succuesfully")
        }
    } catch (error) {
        console.log("error",error);
    }
})

// ===================update-inventory==============================================================================

export const updateProduct=createAsyncThunk('updateProduct', async({formValue, editHandleClose},{dispatch})=>{
    try {
        const{_id,name, qty, price, category}=formValue;
        const id=_id;
        const data = {
            name,
            qty,
            price,
            category
        }

        const response =await axios.patch(`http://localhost:8000/product/${id}`,data)
        if(response.status===200){
            dispatch(getInventory())
            dispatch(editHandleClose())

        }

    } catch (error) {
        console.log(error)
    }
})

const inventorySlice = createSlice({
    name: "inventorySlice",
    initialState: {
        loading: false,
        inventoryList: [],
        filterInventoryList: [],
        addProductLoading:false,
        error:""

    },
    reducers:{
        startAddLoading:(state,action)=>{
            state.addProductLoading=true
        },
        stopAddLoading: (state, action) => {
            state.addProductLoading = false
        },
        addErrorMsg:(state,action)=>{
            state.error=action.payload
        },
        removeErrorMsg:(state,action)=>{
            state.error=""
        },
        searchInventory: (state, action) => {
            const searchData = state.inventoryList.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
            state.filterInventoryList = searchData
        }
    },
 
    extraReducers: {
        [getInventory.pending]: (state, action) => {
            state.loading = false
        },
        [getInventory.fulfilled]: (state, action) => {
            state.loading = false
            state.inventoryList = action.payload.products 
            state.filterInventoryList = action.payload.products;

        },
        [getInventory.rejected]: (state, action) => {
            state.loading = false
        }
    }

})
export const { startAddLoading, stopAddLoading, addErrorMsg, removeErrorMsg, searchInventory }=inventorySlice.actions
export default inventorySlice.reducer