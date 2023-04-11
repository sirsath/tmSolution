import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const TodoAddAction = createAsyncThunk("totoadd", async (tododata, { rejectWithValue, getState }) => {
  try {
    const { data } = await axios.post("http://localhost:5000/todo/add", tododata)
    return data.result
  } catch (error) {
    rejectWithValue(error.massage)
  }
})
export const getAllTodoAction = createAsyncThunk("getTodo", async (tododata, { rejectWithValue, getState }) => {
  try {
    const { data } = await axios.get("http://localhost:5000/todo/")
    return data.result
  } catch (error) {
    rejectWithValue(error.massage)
  }
})

export const UpdateTodoAction = createAsyncThunk("updateTodo", async (todoData, { rejectWithValue, getState }) => {
  console.log(todoData);
  try {
    const { data } = await axios.put(`http://localhost:5000/todo/update/${todoData._id}`, todoData)
    return data.result
  } catch (error) {
    rejectWithValue(error.massage)
  }
})
export const DeleteTodoAction = createAsyncThunk("DeleteTodo", async (todoId, { rejectWithValue, getState }) => {
  try {
    const { data } = await axios.delete(`http://localhost:5000/todo/${todoId}`)
    return data.result
  } catch (error) {
    rejectWithValue(error.massage)
  }
})




