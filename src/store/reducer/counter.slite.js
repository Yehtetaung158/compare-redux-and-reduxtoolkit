import { createSlice } from "@reduxjs/toolkit"
// import { increase } from "../action/counter.action"


const initialState={
    value:0,
}
//return ပြန်စရာမလို
//action ခွဲစရာမလို
const countSlice=createSlice({
    name:"counter", //slice  ရဲ့အမည်,
    initialState,
    reducers:{
        increase:(state)=>{
            state.value+=1;
        },
        decrease:(state)=>{
            if(state.value > 0){
            state.value-=1
            }
        },
        increasewithPayload:(state,action)=>{
            state.value+=action.payload
        }
    }
})

export const{increase,decrease,increasewithPayload}=countSlice.actions;
export default countSlice.reducer;