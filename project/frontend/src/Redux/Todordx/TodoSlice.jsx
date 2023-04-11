import { createSlice } from "@reduxjs/toolkit";
import { DeleteTodoAction, TodoAddAction, UpdateTodoAction, getAllTodoAction} from "./TodoAction";
 export const TodoSlice = createSlice({
    name : "TodoData",
    initialState : {Todo : []  },
    reducers : {
    },
    extraReducers:(builder)=>{
        builder 
        .addCase(TodoAddAction.pending,(state,{payload})=>{
               state.loading = true
        })
        .addCase(TodoAddAction.fulfilled,(state,{payload})=>{
               state.loading = false
               state.Todoadded = true
        })
        .addCase(TodoAddAction.rejected,(state,{payload})=>{
               state.loading = false
        })
        .addCase(getAllTodoAction.pending,(state,{payload})=>{
               state.loading = true
        })
        .addCase(getAllTodoAction.fulfilled,(state,{payload})=>{
               state.loading = false
               state.Todo = payload
        })
        .addCase(getAllTodoAction.rejected,(state,{payload})=>{
               state.loading = false
        })
        .addCase(UpdateTodoAction.pending,(state,{payload})=>{
               state.loading = true
        })
        .addCase(UpdateTodoAction.fulfilled,(state,{payload})=>{
               state.loading = false
               state.upadtetodo = true
        })
        .addCase(UpdateTodoAction.rejected,(state,{payload})=>{
               state.loading = false
        })
        .addCase(DeleteTodoAction.pending,(state,{payload})=>{
               state.loading = true
        })
        .addCase(DeleteTodoAction.fulfilled,(state,{payload})=>{
               state.loading = false
               state.Deletetodo = true
        })
        .addCase(DeleteTodoAction.rejected,(state,{payload})=>{
               state.loading = false
        })
       
    }
})
 
export default TodoSlice.reducer
