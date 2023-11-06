
import { useSelector,useDispatch  } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { addLogo} from '../slices/movieSlice';
import { API_OPTIONS } from '../utils/constants';
function VideoMetaData({ movieId ,overview}) {
  const logoImage = useSelector(store => store.movies?.logo)
    const dispatch=useDispatch();
    const getLogo = async () => {
        try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=THE_KEY&language=en-US&include_image_language=en,jp,null`, API_OPTIONS)
          const JsonData = await data.json();
          const logo = JsonData.logos[0].file_path
          dispatch(addLogo(logo))
        }
        catch (err) {
          console.log("getting error while fetching the api")
        }
      }
      useEffect(() => {
        getLogo();
      }, [movieId,dispatch])
  return (

    <div className=" bottom-0 left-0 right-0 top-0 absolute h-full w-full">
      <div className=" bottom-[20%] flex flex-col justify-end left-[4%] absolute top-0 w-[36%] z-10">
        <div className=" transition-transform w-full">
          <div className="titleWrapper" >
            <div className=" mb-[1.2vw]  relative">

              <img className=" origin-bottom-left w-[281px] h-[106px]" src={`https://image.tmdb.org/t/p/w500${logoImage}`} />

            </div>
          </div>
          <div className="info-wrapper">
            <div className="episode-title-container"></div>
            <div className="synopsis-fade-container">
              <div className=" mt-[0.5vw] mr-0 mb-0 ml-0 text-[#fff] text-[1.2vw] font-normal leading-normal text-shadow">
                <div>{overview}</div>
              </div>
            </div>
          </div>
          </div>
          <div className="flex leading-[88%] mt-[1.5vw] whitespace-nowrap relative z-10">
            <Link className=' shrink-0 items-center flex justify-center'>
              <span className="visually-hidden">&nbsp;</span>
            </Link>
            <Link  className=" playLink isToolkit" uiplaycontexttag="billboardPlayButton" data-uia="play-button" role="link" aria-label="Play">
              <button className=" h-[42px] w-[111px] bg-white mb-[1rem] mr-[1rem] flex rounded appearance-none cursor-pointer items-center whitespace-nowrap  break-words will-change-auto relative p-[0.8rem] justify-center  hover:bg-opacity-75" tabIndex="-1" type="button">
                <div className=" leading-[0px]">
                  <div className=" w-[2.4rem]" role="presentation">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <span className=" font-semibold text-[1rem] leading-[2.4rem] antialiased break-words whitespace-nowrap">Play</span>

              </button>
            </Link>
          </div>
        </div>
      </div>

  )
}

export default VideoMetaData