import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            const newTodo =action.payload
            state.push(newTodo);
        },
        deleteTodo:(state,action)=>{
            const key = action.payload
            state.splice(key,1)
    

        }
    }
})

export const {addTodo}= todoSlice.actions;
export const {deleteTodo}= todoSlice.actions;
export default todoSlice.reducer;