import React, { useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants';
function VideoBackground({movieId}) {
  const getMovieTrailer=async()=>{
    try{
      const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
      const JsonData= await data.json();
      console.log(JsonData.results)
      const trailerArray = JsonData?.results.filter(element => element.type === "Trailer");
      const trailer= trailerArray.length>0?trailerArray[0]:JsonData[0]
    }
    catch(err){
     console.log("getting error while fetching the api")
    }
  }
  useEffect(()=>{
    getMovieTrailer();
  },[])
  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground