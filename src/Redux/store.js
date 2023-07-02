import { configureStore } from "@reduxjs/toolkit";
import fakeApiSlice from "./fakeApiSlice";

export const store = configureStore({
    reducer:{
        fakeApi: fakeApiSlice
    }
})