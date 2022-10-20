import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./reducer/Reducer";

export const store = configureStore( {
    reducer:{
        firstname: dataSlice
        
})