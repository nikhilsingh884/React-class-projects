import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktailSlice";
import productSlice from "./ProductSlice";

export const store = configureStore({
    reducer:{
        cocktail: cocktailSlice,
        product: productSlice
    }
})