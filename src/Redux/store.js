import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "../Redux/products";
import profileSlice from "./profileSlice";
import listSlice from "./listSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        profile: profileSlice,
        products: productsSlice,
        list: listSlice
    }
})