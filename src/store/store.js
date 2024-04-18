import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer/counter.reducer";
import { createReducer } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";


const reducer= combineReducers({
    counter:counterReducer
})

export const store=createStore(reducer,{},applyMiddleware(thunk))