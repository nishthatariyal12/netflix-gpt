import React, { useState } from 'react'
import Header from '../components/Header'
import LoginFooter from '../components/LoginFooter'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
    const [errorMessage,setErrorMessage]=useState({})
    const onSubmitHandler = (values) => {
        const email=values.email
        const password=values.password
        if(errorMessage.code==="auth/email-already-in-use"){
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
        }else{
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                setErrorMessage("")
                // ...
            })
            .catch((err) => {
                const error={
                    code:err.code,
                    message:err.message
                }
                setErrorMessage(error)
                console.log(error)
                // ..

            });

        }
        }
      
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Firstname is required.'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Lastname is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(4, 'Password should be at least 4 characters').max(60, 'Password should not exceed 60 characters').required('Password is required'),

        }),
        onSubmit:(values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(JSON.stringify(values, null, 2));
            onSubmitHandler(values)
            setSubmitting(false);
        },
    });

    return (
        <div className=' flex flex-col min-h-[100vh] pb-0'>
            <Header signIn={false} />
            <div className='pb-[95px] flex-grow-1 bg-white overflow-hidden w-full'>
                <div className=' pt-[20px] px-[32px] pb-[60px] box-border mt-0 mx-auto mb-[15px] max-w-[978px]' style={{
                    paddingLeft: 'var(--layout-container-side-padding)', paddingRight: 'var(--layout-container-side-padding)'
                }}>
                    <form method='post' onSubmit={formik.handleSubmit}>
                        {errorMessage.code ==="auth/email-already-in-use" ?
                        ( <div className='my-0 mx-auto text-left max-w-[440px]'>
                        {errorMessage.code && errorMessage.code!=="auth/email-already-in-use" &&
                        <div role='alert' className='width-full bg-[#e87c03] rounded text-[1rem]  mx-0 my-[10px] table'>
                            <div className='my-[10px] mx-[20px] text-black font-medium align-middle'>
                           {errorMessage.message}
                            </div>
                        </div>}

                            <div className='formHeader text-[32px] my-0 mt-[20px] inline-block font-semibold text-[#333]'>
                                <h1> <span>
                                Welcome back! <br/>
                                Joining Netflix is easy.
                                    </span></h1>
                            </div>
                            <div>
                                <div className=' text-lg mb-0 mt-0'>Enter your password and you'll be watching in no time.
</div>
                            </div>
                            <ul className='mt-[16px] mx-0 mb-20px p-0 box-border'>
                               
                                <li className=' list-none ml-0 mb-[10px]'>
                                    <div className=' relative inline-flex flex-wrap align-text-top w-full'>

                                        <div className=' min-w-0 text-[1rem] font-normal fill-current p-0 w-full items-center gap-[2px] relative text-left z-0 flex'>
                                           Email
                                        </div>
                                        <div>{formik.values.email}</div>
                                    
                                    </div>
                                </li>
                                <li className=' list-none ml-0 mb-[10px]'>
                                    <div className=' relative inline-flex flex-wrap align-text-top w-full'>

                                        <div className=' min-w-0 text-[1rem] font-normal fill-current p-0 w-full items-center gap-[2px] relative text-left z-0 flex'>
                                            <input
                                                className={`textField ${formik.touched.password && formik.errors.password ? "error" : ""}`}
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                            />
                                            <label htmlFor='password'
                                                className={`placeLabeltext ${formik.values.password ? 'hasText' : '' // Add 'hasText' class if there's text in the input
                                                    }`}> Enter your password
                                            </label>
                                        </div>
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className='text-xs text-red-600 fill-current mt-1 w-full'>{formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                </li>

                            </ul>
                            <div className='mt-[24px] mx-auto mb-0 max-w-[440px] text-center'>
                                <button type="submit" className=' rounded text-2xl font-normal min-h-[64px] min-w-[110px] w-full leading-1 py-[20.5px] px-[2em] bg-[#e50914] text-[#fff] relative border-none shadow-md box-border cursor-pointer inline-block no-underline select-none align-middle'>Submit</button>
                            </div>
                        </div>):(
                              <div className='my-0 mx-auto text-left max-w-[440px]'>
                              {errorMessage.code &&errorMessage.code!=="auth/email-already-in-use" &&
                              <div role='alert' className='width-full bg-[#e87c03] rounded text-[1rem]  mx-0 my-[10px] table'>
                                  <div className='my-[10px] mx-[20px] text-black font-medium align-middle'>
                                {errorMessage.message}
                                  </div>
                              </div>}
      
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
      
                                              <div className=' min-w-0 text-[1rem] font-normal fill-current p-0 w-full items-center gap-[2px] relative text-left z-0 flex'>
                                                  <input
                                                      className={`textField ${formik.touched.firstName && formik.errors.firstName ? "error" : ""}`}
                                                      id="firstName"
                                                      name="firstName"
                                                      type="text"
                                                      onChange={formik.handleChange}
                                                      onBlur={formik.handleBlur}
                                                      value={formik.values.firstName}
                                                  />
                                                  <label htmlFor='firstName'
                                                      className={`placeLabeltext ${formik.values.firstName ? 'hasText' : '' // Add 'hasText' class if there's text in the input
                                                          }`}> Firstname
                                                  </label>
                                              </div>
                                              {formik.touched.firstName && formik.errors.firstName ? (
                                                  <div className='text-xs text-red-600 fill-current mt-1 w-full'>{formik.errors.firstName}</div>
                                              ) : null}
                                          </div>
                                      </li>
                                      <li className=' list-none ml-0 mb-[10px]'>
                                          <div className=' relative inline-flex flex-wrap align-text-top w-full'>
      
                                              <div className=' min-w-0 text-[1rem] font-normal fill-current p-0 w-full items-center gap-[2px] relative text-left z-0 flex'>
                                                  <input
                                                      className={`textField ${formik.touched.firstName && formik.errors.firstName ? "error" : ""}`}
                                                      id="lastName"
                                                      name="lastName"
                                                      type="text"
                                                      onChange={formik.handleChange}
                                                      onBlur={formik.handleBlur}
                                                      value={formik.values.lastName}
                                                  />
                                                  <label htmlFor='lastName'
                                                      className={`placeLabeltext ${formik.values.lastName ? 'hasText' : '' // Add 'hasText' class if there's text in the input
                                                          }`}> Lastname
                                                  </label>
                                              </div>
                                              {formik.touched.lastName && formik.errors.lastName ? (
                                                  <div className='text-xs text-red-600 fill-current mt-1 w-full'>{formik.errors.lastName}</div>
                                              ) : null}
                                          </div>
                                      </li>
                                      <li className=' list-none ml-0 mb-[10px]'>
                                          <div className=' relative inline-flex flex-wrap align-text-top w-full'>
      
                                              <div className=' min-w-0 text-[1rem] font-normal fill-current p-0 w-full items-center gap-[2px] relative text-left z-0 flex'>
                                                  <input
                                                      className={`textField ${formik.touched.email && formik.errors.email ? "error" : ""}`}
                                                      id="email"
                                                      name="email"
                                                      type="email"
                                                      autoComplete="email"
                                                      onChange={formik.handleChange}
                                                      onBlur={formik.handleBlur}
                                                      value={formik.values.email}
                                                  />
                                                  <label htmlFor='email'
                                                      className={`placeLabeltext ${formik.values.email ? 'hasText' : '' // Add 'hasText' class if there's text in the input
                                                          }`}> Email
                                                  </label>
                                              </div>
                                              {formik.touched.email && formik.errors.email ? (
                                                  <div className='text-xs text-red-600 fill-current mt-1 w-full'>{formik.errors.email}</div>
                                              ) : null}
                                          </div>
                                      </li>
                                      <li className=' list-none ml-0 mb-[10px]'>
                                          <div className=' relative inline-flex flex-wrap align-text-top w-full'>
      
                                              <div className=' min-w-0 text-[1rem] font-normal fill-current p-0 w-full items-center gap-[2px] relative text-left z-0 flex'>
                                                  <input
                                                      className={`textField ${formik.touched.password && formik.errors.password ? "error" : ""}`}
                                                      id="password"
                                                      name="password"
                                                      type="password"
                                                      autoComplete="current-password"
                                                      onChange={formik.handleChange}
                                                      onBlur={formik.handleBlur}
                                                      value={formik.values.password}
                                                  />
                                                  <label htmlFor='password'
                                                      className={`placeLabeltext ${formik.values.password ? 'hasText' : '' // Add 'hasText' class if there's text in the input
                                                          }`}> Add a password
                                                  </label>
                                              </div>
                                              {formik.touched.password && formik.errors.password ? (
                                                  <div className='text-xs text-red-600 fill-current mt-1 w-full'>{formik.errors.password}</div>
                                              ) : null}
                                          </div>
                                      </li>
      
                                  </ul>
                                  <div className='mt-[24px] mx-auto mb-0 max-w-[440px] text-center'>
                                      <button type="submit" className=' rounded text-2xl font-normal min-h-[64px] min-w-[110px] w-full leading-1 py-[20.5px] px-[2em] bg-[#e50914] text-[#fff] relative border-none shadow-md box-border cursor-pointer inline-block no-underline select-none align-middle'>Submit</button>
                                  </div>
                              </div>
                        )}
                      
                    </form>
                </div>
            </div>

            <LoginFooter signIn={false} />
        </div>
    )
}

export default SignUp