
import { useSelector, useDispatch } from 'react-redux';
import {  useEffect } from 'react';
import { addTrailer } from '../slices/movieSlice';
import { API_OPTIONS } from '../utils/constants';

function VideoBackground({ movieId, poster }) {
  const trailerVideo = useSelector(store => store.movies?.trailer)

  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data (status ${response.status})`);
        }
        const data = await response.json();
        console.log(data.results);

        // Use find to get the first trailer
        const trailer = data.results.find((element) => element.type === 'Trailer');
        dispatch(addTrailer(trailer));

      } catch (err) {
        console.error('Error while fetching the API:', err);
      }
    };

    getMovieTrailer();
   
  }, []);


  return (
    <div>
  
        <div className="bg-[#000] bottom-0 left-0 absolute right-0 top-0 cursor-none h-[56.25vw]" tabIndex="-1">
          <div className="h-[56.25vw] transition-opacity w-full" aria-hidden="true" role="presentation" data-uia="player" >
            <div className='relative w-full h-full '>
              <div className='relative w-full h-full '>
                <iframe className='botton-0 relative h-full left-0 m-auto right-0  w-full inline-block align-baseline' src={`https://www.youtube.com/embed/${trailerVideo?.key}?loop=1&autohide=1&autoplay=1&mute=1&enablejsapi=1&rel=0&controls=0&start=10&poster="benefits-of-coding.jpg`} title="YouTube video player" allow="autoplay;" allowFullScreen></iframe>
                </div>
            </div>
          </div>
          <div className="PlayerControlsNeo__layout PlayerControlsNeo__layout--inactive">
            <div className="PlayerControlsNeo__all-controls PlayerControlsNeo__all-controls--low-power">
              <div className="PlayerControlsNeo__gradient-top"></div>
              <div className="PlayerControlsNeo__gradient-bottom"></div>
              <div className="PlayerControlsNeo__core-controls">
                <div data-uia="nfplayer-bottom-controls" className="PlayerControlsNeo__bottom-controls PlayerControlsNeo__bottom-controls--faded">
                  <div className="PlayerControlsNeo__progress-control-row PlayerControlsNeo__progress-control-row--row-standard">
                    <div className="PlayerControlsNeo__progress-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default VideoBackground