import React from 'react';
import Header from '../components/Header';
import LoginFooter from '../components/LoginFooter';
import LoginBody from '../components/LoginBody';

const Login = () => {
  return (
    <div className='bg-black text-white margin-0 m-0 min-h-full p-0 relative z-0'>
      <div className='bg-black bg-cover block min-h-[100vh] overflow-hidden absolute w-full -z-[1] opacity-[0.5]'>
        <img
          className=" min-h-full min-w-full w-auto max-w-none"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
      </div>
      <Header signIn={true} />
      <LoginBody/>
      <LoginFooter signIn={true}/>
    </div>
  );
};



export default Login;
