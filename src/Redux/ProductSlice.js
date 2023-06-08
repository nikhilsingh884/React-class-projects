import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        loading: true,
        productList: []
    },
    reducers: {

    }
})

export default productSlice.reducer
// export const {loading, productList}=productSlice.actions