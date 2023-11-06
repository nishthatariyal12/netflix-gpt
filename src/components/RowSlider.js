import React from 'react'
import SliderItem from './SliderItem'
import { Link } from 'react-router-dom'
function RowSlider({ movies ,title}) {
  return (
    <div className=' box-border my-[3vw] mx-0 p-0 relative outline-none'>
    <h2 className="leading-[1.3] m-0">
        <Link href="/browse/m/genre/72407" className="text-[#e5e5e5] inline-block text-lg font-medium m-0 mx-[4%] mb-[0.5em] min-w-[6em] no-underline" >
            <div className="table-cell text-[1.4VW] leading-[1.25VW] align-bottom font-medium">{title}</div>
            <div className="align-bottom table-cell">
                <div className="see-all-link"></div>
            </div>
        </Link>
    </h2>
    <div className='relative z-0 transition-transform duration-550 ease-out'>
      <div className=' box-border p-0'>
        <div className=' .slide z-[2] m-0 px-[4%] py-0 relative touch-pan-x'>
          <span className="handle handlePrev active" tabIndex="0" role="button" aria-label="See previous titles">
            <b className="indicator-icon icon-leftCaret"></b>
          </span>
          <ul className="pagination-indicator">
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
            <li className="active"></li>
            <li className=""></li>
          </ul>
          <div className=' overflow-x-visible pb-[1px]'>
            <div className=' whitespace-nowrap'>
              {movies.map((movie)=> <SliderItem key={movie.id} imageURL={movie.poster_path}/>)}
            </div>
          </div>
          <span className="handle handleNext active" tabIndex="0" role="button" aria-label="See more titles"><b className="indicator-icon icon-rightCaret"></b></span>
        </div>
      </div>

    </div>
</div>
   
  )
}

export default RowSlider