import React from 'react'
import { Link } from 'react-router-dom'
function Header({signIn}) {
  return (
    <div className={signIn? ' bg-gradient-to-t h-[90px] border-b-transparent left-0 absolute top-0 w-full':' border-b border-[#e6e6e6] bg-[#fff]  h-[90px] relative'} style={signIn ? { background: "linear-gradient(180deg,rgba(0,0,0,.5) 0,transparent)" } : null}>
       <Link className=' ml-[1%] inline-block leading-[90px] decoration-none align-middle bg-transparent'>
       <img className=" bg-transparent h-[88px] align-middle w-[204px] overflow-hidden" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt=""/>
       </Link>
       {!signIn && 
       <Link className='my-0 mx-[3%] text-[#333] float-right text-[19px] font-medium leading-[90px]' to="/"> Sign In</Link>
       }
    </div>
  )
}

export default Header 