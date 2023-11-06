import React from 'react'

function SliderItem({imageURL}) {
  return (
    <div className="pl-0 w-[15%] box-border inline-block py-0 pr-[0.4VW] relative align-top whitespace-normal z-[1]">
      <div >
        <div id="title-card-2-9" className="title-card">
          <div className="ptrack-content" data-ui-tracking-context="%7B%22list_id%22:%22NES_A10EFFBB7CC381D9191BDEC7A84E81-994911DC4F528C-0A4A771CBA_p_1698079040052%22,%22location%22:%22homeScreen%22,%22rank%22:9,%22request_id%22:%22bfd62089-f0d7-4aa7-a71e-8ba32fee5388-296477040%22,%22row%22:2,%22track_id%22:14170286,%22unifiedEntityId%22:%22Video:81144150%22,%22video_id%22:81144150,%22image_key%22:%22sdp%7C3e983560-4cef-11ec-ae6e-0ac2b7249ac5%7Cen,BADGE%7Cnone%7Czxx%7C_UPD_%22,%22supp_video_id%22:1,%22lolomo_id%22:%22NES_A10EFFBB7CC381D9191BDEC7A84E81_p_1698079040052%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="519926e3-cb7a-43be-966c-d4bfa586bd99">
            <a href="/watch/81144150?tctx=2%2C9%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81144150%2C" aria-label="Sooryavanshi" tabIndex="-1" aria-hidden="true" className="slider-refocus">
              <div className="pt-[28.125%] pb-[122.125%] px-0 h-0 overflow-hidden relative w-full rounded-[0.2VW]">
                <img className=" bottom-0 left-0 absolute right-0 top-0 w-full" src={`https://image.tmdb.org/t/p/w500/${imageURL}` }alt="" />
                <div className="fallback-text-container" aria-hidden="true">
                  <p className="fallback-text">Sooryavanshi</p>
                </div>
              </div>
            </a>
          </div>
          <div className="bob-container">
          </div>
        </div>
        <div className="progress ">
          <span className="progress-bar">
            <span role="presentation" className="progress-completed" style={{width: "9%"}}>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SliderItem