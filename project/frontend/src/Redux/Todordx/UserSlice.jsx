import { createSlice } from "@reduxjs/toolkit";
import { UserLoginAction, UserRegisterAction } from "./UserAction";

export const UserSlice = createSlice({

       name: "UserData",
       initialState: {
              login: null
       },
       reducers: {

       },
       extraReducers: (builder) => {
              builder
                     .addCase(UserRegisterAction.pending, (state, { payload }) => {
                            state.loading = true
                     })
                     .addCase(UserRegisterAction.fulfilled, (state, { payload }) => {
                            state.loading = false
                            state.Userreg = payload
                     })
                     .addCase(UserRegisterAction.rejected, (state, { payload }) => {
                            state.loading = false
                     })

                     .addCase(UserLoginAction.pending, (state, { payload }) => {
                            state.loading = true
                     })
                     .addCase(UserLoginAction.fulfilled, (state, { payload }) => {
                            state.loading = false
                            state.login = payload
                     })
                     .addCase(UserLoginAction.rejected, (state, { payload }) => {
                            state.loading = false
                     })

       }
})

export default UserSlice.reducer
