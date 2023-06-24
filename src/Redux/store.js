import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktailSlice";
import productSlice from "./ProductSlice";
import authSlice from "./authSlice";
import MobilesSlice from "./MobilesSlice";
import InventorySlice from "./InventorySlice";

export const store = configureStore({
    reducer:{
        cocktail: cocktailSlice,
        product: productSlice,
        inventory: InventorySlice,
        auth: authSlice,
        mobiles: MobilesSlice
    }
})