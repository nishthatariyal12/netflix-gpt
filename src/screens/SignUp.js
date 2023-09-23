import React from 'react'
import Header from '../components/Header'
import LoginFooter from '../components/LoginFooter'
import { Form } from 'formik'

function SignUp() {
    return (
        <div className=' flex flex-col min-h-[100vh] pb-0'>
            <Header signIn={false} />
            <div className='pb-[95px] flex-grow-1 bg-white overflow-hidden w-full'>
                <div className=' pt-[20px] px-[32px] pb-[60px] box-border mt-0 mx-auto mb-[15px] max-w-[978px]' style={{
                    paddingLeft: 'var(--layout-container-side-padding)', paddingRight: 'var(--layout-container-side-padding)' 
                }}>
                    <form method='post'>
                        <div className='my-0 mx-auto text-left max-w-[440px]'>
                            <div className='formHeader text-[32px] my-0 mt-[20px] inline-block font-semibold text-[#333]'>
                               <h1> Create a password to start your membership</h1>
                            </div>
                            <div>
                                <div className=' text-lg mb-0 mt-0'>Just one step and you're done!</div>
                                <span className='text-lg mt-[10px]'>We hate paperwork, too.</span>
                            </div>
                            <ul className='mt-[16px] mx-0 mb-20px p-0 box-border'>
                                <li className=' list-none ml-0 mb-[10px]'>
                                    <div className=' relative inline-flex flex-wrap align-text-top w-full'>
                                        <label className=' select-none text-[0.75rem] leading-[1.5] text-black text-opacity-70 transition-none absolute left-4 right-4 top-1/4 z-10 whitespace-nowrap overflow-hidden truncate '>Email</label>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </form>
                </div>
            </div>

            <LoginFooter />
        </div>
    )
}

export default SignUp