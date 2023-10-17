import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
function BrowseHeader() {
  const [active, setActive] = useState(false);
 
  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };
const signOutHandler=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
  return (
    <div className=' sticky top-0 h-auto min-h-[70px] z-[1]'>
      <div className={window.scrollY > 100 ? 'bg-[rgb(20, 20, 20)]' : 'bg-transparent'}>
        <div className={` flex text-sm items-center py-0 px-[4%] relative transition-[background-color.4s] z-[2] h-[68px] bg-[linear-gradient(180deg,rgba(0,0,0,.7)10%,transparent)] ${window.scrollY > 100 ? 'bg-[rgb(20, 20, 20)]' : 'bg-transparent'}`} role='navigation'>
          <Link className='mr-[25px]' to="/browse"><img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' className=' w-[130px] h-[48px]' /></Link>
          <ul className=' items-center flex m-0 p-0'>
            <li className=' ml-5'><Link className={` items-center text-[#e5e5e5]  flex h-full relative transition-[color.4s] ${window.location.pathname === "/browse" ? "text-[#fff] cursor-default font-medium" : "conditional-css"}`} to="/browse">Home</Link></li>
            <li className=' ml-5'><Link className={` items-center text-[#e5e5e5]  flex h-full relative transition-[color.4s] ${window.location.pathname === "/browse/tvshows" ? "text-[#fff] cursor-default font-medium" : "conditional-css"}`} to="/browse/tvshows">Tv Shows</Link></li>
            <li className=' ml-5'><Link className={` items-center text-[#e5e5e5]  flex h-full relative transition-[color.4s] ${window.location.pathname === "/browse/movies" ? "text-[#fff] cursor-default font-medium" : "conditional-css"}`} to="/browse/movies">Movies</Link></li>
            <li className=' ml-5'><Link className={` items-center text-[#e5e5e5]  flex h-full relative transition-[color.4s] ${window.location.pathname === "/browse/new" ? "text-[#fff] cursor-default font-medium" : "conditional-css"}`} to="/browse/new">New & Popular</Link></li>
            <li className=' ml-5'><Link className={` items-center text-[#e5e5e5]  flex h-full relative transition-[color.4s] ${window.location.pathname === "/browse/mylist" ? "text-[#fff] cursor-default font-medium" : "conditional-css"}`} to="/browse/mylist">My List</Link></li>
            <li className=' ml-5'><Link className={` items-center text-[#e5e5e5]  flex h-full relative transition-[color.4s] ${window.location.pathname === "/browse/orginal-audio" ? "text-[#fff] cursor-default font-medium" : "conditional-css"}`} to="/browse/orginal-audio">Browse by Languages</Link></li>
          </ul>
          <div className=' items-center flex flex-grow h-full justify-end absolute right-[4%] t-0'>
            <div className='mr-[15px]'>
              <span className='relative whitespace-normal'>
                <button className=' relative bg-transparent border-none text-[1.5em] px-[6px] pt-[2px] pb-[3px]'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" mr-0 text-[#fff]"><path fillRule="evenodd" clipRule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path></svg>
                </button>
              </span>
            </div>
            <div className='mr-[15px]'>
              <Link to="/kids" className=' text-[#fff] cursor-pointer'>Children</Link>

            </div>
            <div className='mr-[15px]'>
              <span className='relative whitespace-normal'>
                <button className=' relative bg-transparent border-none text-[1.5em] px-[6px] pt-[2px] pb-[3px]'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" mr-0 text-[#fff]"><path fillRule="evenodd" clipRule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg>
                </button>
              </span>
            </div>
            <div >
              <div className=' text-[12px] relative z-0' onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut} >
                <div className=' items-center cursor-pointer flex w-full'>
                  <Link to="/YourAccount" role='button' className='relative -z-[-1]'>
                    <span className='items-center flex relative'>
                      <img className=" rounded h-[32px] align-middle w-[32px]" src="https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4" alt="" />
                    </span>
                  </Link>
                  <span className={`caret ${active ? "open" : ""}`} role="presentation"></span>
                </div>
               <div className={`sub-menu ${active?" block duration-150 opacity-100 ":""}`}>
                  <div className=' box-border'>
                    <ul className=' block h-auto m-0 p-0 w-full cursor-default'>
                      <li className=' text-[13px] leading-4 py-[5px] px-[10px]'>
                        <Link className='flex' to="/profile"> <svg  className="text-[#b3b3b3] pt-0 pl-[13px] pb-0 pr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="User" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5ZM17 5C17 7.76142 14.7614 10 12 10C9.23858 10 7 7.76142 7 5C7 2.23858 9.23858 0 12 0C14.7614 0 17 2.23858 17 5ZM4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21V21.5136C19.5678 21.5667 18.9844 21.6327 18.2814 21.6988C16.6787 21.8495 14.461 22 12 22C9.53901 22 7.32131 21.8495 5.71861 21.6988C5.01564 21.6327 4.43224 21.5667 4 21.5136V21ZM21.1508 23.3775C21.1509 23.3774 21.151 23.3774 21 22.3889L21.151 23.3774C21.6393 23.3028 22 22.8829 22 22.3889V21C22 15.4772 17.5228 11 12 11C6.47715 11 2 15.4772 2 21V22.3889C2 22.8829 2.36067 23.3028 2.84897 23.3774L3 22.3889C2.84897 23.3774 2.84908 23.3774 2.8492 23.3775L2.84952 23.3775L2.85043 23.3776L2.85334 23.3781L2.86352 23.3796L2.90103 23.3852C2.93357 23.3899 2.98105 23.3968 3.04275 23.4055C3.16613 23.4228 3.3464 23.4472 3.57769 23.4765C4.04018 23.535 4.7071 23.6126 5.5314 23.6901C7.1787 23.8449 9.461 24 12 24C14.539 24 16.8213 23.8449 18.4686 23.6901C19.2929 23.6126 19.9598 23.535 20.4223 23.4765C20.6536 23.4472 20.8339 23.4228 20.9573 23.4055C21.0189 23.3968 21.0664 23.3899 21.099 23.3852L21.1365 23.3796L21.1467 23.3781L21.1496 23.3776L21.1505 23.3775L21.1508 23.3775Z" fill="currentColor"></path></svg>
                        <span>Account</span>
                        </Link>

                      </li>
                      <li className=' text-[13px] leading-4 py-[5px] px-[10px]'>
                        <Link to="/" className=' items-center inline-block ' onClick={signOutHandler}>Sign out</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseHeader