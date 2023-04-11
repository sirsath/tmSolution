import { configureStore } from "@reduxjs/toolkit"
import TodoSlice from "./Todordx/TodoSlice"
import UserSlice from "./Todordx/UserSlice"

const store = configureStore({
    reducer: {
        alltodo: TodoSlice,
        allUser: UserSlice

    }
})
export default store