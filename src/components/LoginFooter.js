import React from 'react'
import { Link } from 'react-router-dom'

function LoginFooter({signIn}) {
    return (
        <div className={`${signIn? "bg-[rgba(0,0,0,.75)]  text-[#757575] ": 'bg-[#f3f3f3] text-[#737373]'} mt-0 items-centermin-w-[190px] pb-[20px] relative w-full`}>
            <div></div>
            <div className='md:mx-auto md:my-0 md:max-w-[1000px] py-[30px] px-0 w-[90%]'>
                <p className='mx-0 mb-[30px] mt-0 p-0 text-[1em]'>Questions? Call
                    <Link> 000-800-919-1694</Link>
                </p>
                <ul className=' mx-0 my-0 p-0 box-border text-[13px] max-w-[1000px]'>
                    <li className=" list-none ml-0 box-border inline-block mb-[16px] max-w-[100px] py-0 pt-0 pr-[16px] align-top w-[25%]" placeholder="footer_responsive_link_faq_item">
                        <Link  placeholder="footer_responsive_link_faq">
                            <span id="" data-uia="data-uia-footer-label">FAQ</span>
                        </Link>
                    </li>
                    <li className=" list-none ml-0 box-border inline-block mb-[16px] max-w-[100px] py-0 pt-0 pr-[16px] align-top w-[25%]" placeholder="footer_responsive_link_faq_item">
                        <Link  placeholder="footer_responsive_link_faq">
                            <span id="" data-uia="data-uia-footer-label">Help centre</span>
                        </Link>
                    </li>
                    <li className=" list-none ml-0 box-border inline-block mb-[16px] max-w-[100px] py-0 pt-0 pr-[16px] align-top w-[25%]" placeholder="footer_responsive_link_faq_item">
                        <Link  placeholder="footer_responsive_link_faq">
                            <span id="" data-uia="data-uia-footer-label">Terms of use</span>
                        </Link>
                    </li>
                    <li className=" list-none ml-0 box-border inline-block mb-[16px] max-w-[100px] py-0 pt-0 pr-[16px] align-top w-[25%]" placeholder="footer_responsive_link_faq_item">
                        <Link  placeholder="footer_responsive_link_faq">
                            <span id="" data-uia="data-uia-footer-label">Privacy</span>
                        </Link>
                    </li>
                    <li className=" list-none ml-0 box-border inline-block mb-[16px] max-w-[100px] py-0 pt-0 pr-[16px] align-top w-[25%]" placeholder="footer_responsive_link_faq_item">
                        <Link  placeholder="footer_responsive_link_faq">
                            <span id="" data-uia="data-uia-footer-label">Cookie Preferences</span>
                        </Link>
                    </li>
                </ul>
                <div className='mt-[20px]'>
                    <div className='border-none w-auto inline-block relative max-w-[600px] cursor-pointer mx-0 my-0 p-0 ui-select-wrapper'>
                        <label htmlFor='lang-switcher-select' className='ui-label'>
                            <span className='text-[#333]'>Select language</span>
                        </label>

                        <div className="inline-block relative w-full select-arrow medium prefix globe">
                            <select data-uia="language-picker" className={`${signIn? "bg-[#000] border border-solid border-[#333] ":"login border border-solid border-[#a6a6a6]"} pr-[26px] appearance-none indent-0 leading-7 pl-[50px] text-[13px] px-3 py-3 rounded-sm w-full transform`} id="lang-switcher-select" tabIndex="0" placeholder="lang-switcher">
                                <option defaultValue lang="en" value="/in/login" data-language="en" data-country="IN">English</option>
                                <option lang="hi" value="/in-hi/login" data-language="hi" data-country="IN">हिन्दी</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginFooter