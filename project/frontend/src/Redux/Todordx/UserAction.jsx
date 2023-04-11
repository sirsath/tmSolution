import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const UserRegisterAction = createAsyncThunk("UserRegister", async (Userinfo, { rejectWithValue, getState }) => {
  try {
    console.log(Userinfo);
    const { data } = await axios.post("http://localhost:5000/user/register", Userinfo)
    console.log(data);
    return data.result
  } catch (error) {
    rejectWithValue(error.massage)
  }
})


export const UserLoginAction = createAsyncThunk("UserLogin", async (Userinfo, { rejectWithValue, getState }) => {
  try {
    const { data } = await axios.post("http://localhost:5000/user/login", Userinfo)
    console.log(data);
    return data
  } catch (error) {
    rejectWithValue(error.massage)
  }
})




