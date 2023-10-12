import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
function LoginBody() {
    const[errorMessage,setErrorMessage]=useState("")
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(4, 'Password should be at least 4 characters').max(60, 'Password should not exceed 60 characters').required('Password is required')
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            const email=values.email
            const password=values.password
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });
        },
    });


    return (
        <div className='login-body pt-[91px] bg-transparent  mx-auto mb-[-236px] max-w-[450px]  text-black '>
            <div>
                <div className='hybrid-login-form bg-[rgba(0,0,0,.75)] rounded-4 box-border flex flex-col m-0 min-h-[660px] px-[68px] mb-[108px] pt-[60px] w-full'>
                    <div className=' flex-grow-1'>
                        <h1 className=' text-white text-[32px] font-semibold mb-[28px]'>Sign In</h1>
                        {errorMessage &&
                        <div role='alert' className='width-full bg-[#e87c03] rounded text-sm mx-0 mb-[16px] mt-0 table'>
                            <div className='my-[10px] mx-[20px] text-[#fff]  align-middle'>
                            <b>Incorrect password.</b>
                            Please try again or you can 
                                <Link className=' underline'> reset your password.</Link>
                            </div>
                        </div>}
                        <form method='post' onSubmit={formik.handleSubmit} className='mb-0'>
                            <div className='pb-[16px] max-w-full relative'>
                                <div className=' relative'>
                                    <div className={`border-none rounded relative loginControls ${formik.touched.password && formik.errors.password ? "error" : ""} `}>
                                        <label placeholder=''>
                                            <input
                                                type='email'
                                                className="w-full bg-[#333] border-none rounded text-white h-[50px] leading-[50px] px-[20px] pt-4 pb-0 shadow-none nfTextField"
                                                name='email'
                                                id="id_userLoginId"
                                                autoComplete='email'
                                                placeholder=''
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                            <label className={`placeLabel ${formik.values.email ? 'hasText' : ''}`} htmlFor='id_userLoginId'>Email or phone number</label>
                                        </label>
                                    </div>
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className='text-orange-500 mb-[-6px] p-[6px 3px] text-[13px]'>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='pb-[16px] max-w-full relative'>
                                <div className=' relative'>
                                    <div className={`border-none rounded relative loginControls ${formik.touched.password && formik.errors.password ? "error" : ""} `}>
                                        <label placeholder=''>
                                            <input
                                                type='password'
                                                className="w-full bg-[#333] border-none rounded text-white h-[50px] leading-[50px] px-[20px] pt-4 pb-0 shadow-none nfTextField"

                                                name='password'
                                                id="id_userLoginpassword"
                                                autoComplete='password'
                                                placeholder=''
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                            />
                                            <label className={`placeLabel ${formik.values.password ? 'hasText' : ''}`} htmlFor='id_password'>Password</label>
                                        </label>
                                        <button id="id_password_toggle" type="button" title="Show Password" className='hidden h-[50px] py-0 px-3 appearance-none bg-transparent border-0 text-[#8c8c8c] flex-grow-0 flex-shrink-0 text-base'>SHOW</button>
                                    </div>
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className='text-orange-500 mb-[-6px] p-[6px 3px] text-[13px]'>{formik.errors.password}</div>
                                    ) : null}
                                </div>
                            </div>

                            <button type='submit' autoComplete="off" className=' rounded text-base font-medium mx-0 mt-6 mb-3 max-w-full w-full py-px-[16px] bg-[#e50914] inline-block leading-4 m-1/8 min-h-[37px] min-w-[98px] p-3/4 shadow-md text-white'>Sign In</button>
                            <div className='flex hybrid-login-form-help'>
                                <div className='ui-binary-input login-remember-me relative'>
                                    <input type="checkbox" className='left-0 opacity-0 absolute top-0 mr-[10px] box-border py-px-0' name="rememberMe" id="bxid_rememberMe_true" value={true} />
                                    <label htmlFor="bxid_rememberMe_true" data-uia="label+rememberMe" >
                                        <span className="login-remember-me-label-text">Remember me</span>
                                    </label>
                                </div>
                                <Link className=" cursor-pointer pt-[2px] text-[#b3b3b3] text-[13px] font-normal bg-transparent" target="_self">Need help?</Link>
                            </div>
                        </form>
                    </div>
                    <div className='' >
                        <div className=' text-[#737373] text-[16px] font-normal mt-[16px]'>
                            New to Netflix?
                            <Link to='/signup' className='text-[#fff] bg-transparent' > Sign up now.</Link>
                        </div>
                        <div className=''></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBody