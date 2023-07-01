import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktailSlice";
import productSlice from "./ProductSlice";
import authSlice from "./authSlice";
import MobilesSlice from "./MobilesSlice";
import InventorySlice from "./InventorySlice";
import Cart from "../Pages/Cart";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer:{
        cocktail: cocktailSlice,
        product: productSlice,
        inventory: InventorySlice,
        auth: authSlice,
        mobiles: MobilesSlice,
        cart:cartSlice
    }
})