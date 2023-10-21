import React, { useEffect } from 'react'
import BrowseHeader from '../components/BrowseHeader'
import LoginFooter from '../components/LoginFooter'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import BillboardContainer from '../components/BillboardContainer';
import RowSlider from '../components/RowSlider';
function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <BrowseHeader/>
      <BillboardContainer/>
      <RowSlider/>
      <LoginFooter/>
    </div>
  )
}

export default Browse