import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface CounterState{
    value:number
}

const initialState:CounterState ={
    value:0
}

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementbyamount:(state,action:PayloadAction<number>)=>{
            state.value +=action.payload
        },
        decrementbyamount:(state,action:PayloadAction<number>)=>{
            state.value -=action.payload
        }
    }
})

export const {decrement,increment,incrementbyamount,decrementbyamount}=counterSlice.actions

export default counterSlice.reducer