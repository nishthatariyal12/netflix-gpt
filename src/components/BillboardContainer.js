import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoMetaData from './VideoMetaData';

function BillboardContainer() {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return null; // Handle the case where movies are not available or empty
  }

  const mainMovie = movies[0];

  if (!mainMovie) {
    return null; // Handle the case where mainMovie is undefined
  }

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoBackground movieId={id} />
      <VideoMetaData title={title} overview={overview} />
    </div>
  );
}

export default BillboardContainer;
