import React from 'react'
import RowSlider from './RowSlider'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function SecondaryContainer( ) {
    const movies = useSelector((store) => store.movies)
    return (
        <>
        <RowSlider title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <RowSlider title={"New Releases"} movies={movies.nowPlayingMovies} />
        <RowSlider title={"Reality TV"} movies={movies.nowPlayingMovies} />
        <RowSlider title={"TV Comedies"} movies={movies.nowPlayingMovies} />
        <RowSlider title={"Indian Movies"} movies={movies.nowPlayingMovies} />
        </>
        
            
        
    )
}

export default SecondaryContainer