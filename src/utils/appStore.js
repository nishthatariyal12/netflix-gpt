import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"
import movieSlice from "../slices/movieSlice";
const appStore =configureStore(
    {
        reducer:{
            users:userReducer,
            movies:movieSlice
        }
    }
)
export default appStore