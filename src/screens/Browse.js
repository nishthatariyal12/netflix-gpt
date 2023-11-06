import React, { useEffect } from 'react'
import BrowseHeader from '../components/BrowseHeader'
import LoginFooter from '../components/LoginFooter'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import BillboardContainer from '../components/BillboardContainer';
import SecondaryContainer from '../components/SecondaryContainer';
function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <BrowseHeader />
      <div className=' min-h-[1000px] relative z-0'>
        <div className='mt-[-165px] overflow-hidden mb-[50px]'> 
        <BillboardContainer />
         <SecondaryContainer/>
          </div>

      </div>
      <LoginFooter signIn={true} />
    </div>
  )
}

export default Browse