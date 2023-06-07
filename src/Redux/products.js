import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({

    name: "products",
    initialState: {
        productName: "abc",
        allProducts: ["Samsung", "LG"],
        loading: false,
        productDetails: [{
            productName: "iPhone",
            description: "This is iPhone"
        }]
    },
    reducers: {
        changeProductName: (state) => {
            state.productName = "xyz"
        },
        addProducts: (state) => {
            state.allProducts = ["Samsung", "LG", "Sony", "BlackBerry"]
        },
        addProductDetails: (state) => {
            state.productDetails = {
                productName: "iPhone",
                description: "This is iPhone"
            }
        }
    }
})

export const { changeProductName, addProducts, addProductDetails } = productsSlice.actions
export default productsSlice.reducer