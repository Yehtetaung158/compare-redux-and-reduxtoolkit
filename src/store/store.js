import { configureStore } from "@reduxjs/toolkit";
import counterSlite from "./reducer/counter.slite";


export const store=configureStore({
    reducer:{
        counter: counterSlite,
    }
})