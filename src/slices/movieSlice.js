import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: [],
        trailer:null,
        logo:null,
        loading: false,
        error: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload;
        },
        addLogo:(state,action)=>{
            state.logo=action.payload;
            },
       
    }
})
export const {addNowPlayingMovies,addTrailer,addLogo} = movieSlice.actions;
export default movieSlice.reducer
