import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/CartSlice.jsx"


export const store = configureStore({
    reducer: {
        cartPageReducer:cartReducer
    }
})