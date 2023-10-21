import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: [],
        loading: false,
        error: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
       
    }
})
export const {addNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer
