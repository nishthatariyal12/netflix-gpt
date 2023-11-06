import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailer } from '../slices/movieSlice';
import { API_OPTIONS } from '../utils/constants';

function useGetTrailer({ movieId }) {
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

}

export default useGetTrailer;
