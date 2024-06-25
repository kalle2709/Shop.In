import { configureStore } from "@reduxjs/toolkit";
import websiteSlice from "./websiteSlice";

export const store = configureStore({
    reducer:{
        website: websiteSlice
    }
})