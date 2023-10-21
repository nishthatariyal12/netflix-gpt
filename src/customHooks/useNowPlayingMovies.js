import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../slices/movieSlice'

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const getNowPlayingMovies=async()=>{
      try{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1',API_OPTIONS)
        const JsonData= await data.json();
        console.log(JsonData.results)
        dispatch(addNowPlayingMovies(JsonData.results))
      }
      catch(err){
       console.log("getting error while fetching the api")
      }
    }
    useEffect(()=>{
     getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies