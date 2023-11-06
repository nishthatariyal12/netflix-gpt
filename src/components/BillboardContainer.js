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

  const { overview, id,backdrop_path } = mainMovie;

  return (
    <div className='block relative z-[1]'>
    <div className='left-0 relative right-0 top-0 bg-[#000] mb-[20px] pb-[60%] touch-pan-y select-none'>
     <div className='bg-[#000]  w-full z-0'> 
      
      <VideoBackground movieId={id} poster={backdrop_path}/>
      <VideoMetaData  movieId={id} overview={overview} />
    
     </div>
    </div>
    </div>
  );
}

export default BillboardContainer;
