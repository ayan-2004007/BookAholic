import React from 'react'
import logo from '../assets/logo-white.png'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import twitter from '../assets/twitter-icon.png'
import ph from '../assets/phone-call.png'
import mail from '../assets/mail.png'
import bg from "../assets/bg-wave.png"


const Footer = () => {
    return (
        <>
            <hr className='bg-gray-300 h-[3px] mx-auto max-w-[1300px] mt-20 px-10' />
            <div className='footer h-auto w-full flex flex-col bg-white' >
                <div className='flex flex-col items-start xl:items-start xl:flex-row xl:mt-10 xl:space-x-10 xl:mx-auto '>
                    <div className='flex flex-col space-y-2 p-5 sm:space-y-4 sm:max-w-[542px] sm:mx-auto xl:mx-0'>
                        <div className='flex items-center gap-2 xl:flex-col xl:items-start'>
                            <img src={logo} alt="" className='w-12 h-12 rounded-full xl:h-[80px] xl:w-[80px]' />
                            <h1 className='font-["Montserrat"] text-2xl font-semibold xl:text-2xl'>BOOKAHOLIC</h1>
                        </div>
                        <div className='felx flex-col space-y-1 xl:space-y-3'>
                            <p className='font-["Montserrat"] text-sm text-gray-700 xl:text-base'>© 2024 | All Rights Reserved</p>
                            <hr />
                            <p className='font-["Montserrat"] text-sm text-gray-700 xl:text-base'>Developed by : Ayan | Shivanshu</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 grid-cols-2 mt-10 gap-y-10 p-5 sm:max-w-[542px] sm:mx-auto sm:gap-x-20 sm:gap-y-20 xl:max-w-[1172px] xl:flex xl:mx-auto'>
                        <div className='space-y-4  flex flex-col items-start justify-between xl:space-y-6'>
                            <div><p className='font-["Montserrat"] text-lg font-medium'>INFORMATION</p></div>
                            <div className='flex flex-col space-y-1 xl:space-y-3'>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>HOME</p>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>ABOUT US</p>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>BLOGS</p>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>FAQs</p>
                            </div>
                        </div>
                        <div className='space-y-4 flex flex-col items-start justify-between xl:space-y-6'>
                            <div><p className='font-["Montserrat"] text-lg font-medium'>QUICK LINKS</p></div>
                            <div className='flex flex-col space-y-1 xl:space-y-3'>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>MY ACCOUNT</p>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>MEMBERSHIP</p>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>STAFFS</p>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>CLUBS</p>
                            </div>
                        </div>
                        <div className='space-y-4 flex flex-col items-start xl:space-y-6'>
                            <div><p className='font-["Montserrat"] text-lg font-medium'>COMPANY</p></div>
                            <div className='flex flex-col space-y-1 xl:space-y-3'>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>PRIVACY POLICY</p>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>CONDITIONS</p>
                                <p className='font-["Montserrat"] font-semibold text-sm text-gray-500 xl:text-sm xl:font-bold hover:underline hover:cursor-pointer'>CONTACT</p>
                            </div>
                        </div>
                        <div className='space-y-4 flex flex-col items-start xl:space-y-6'>
                            <div><p className='font-["Montserrat"] text-lg font-medium'>CONTACT US</p></div>
                            <div className='flex flex-col space-y-3'>
                                <div className='flex items-center space-x-1'>
                                    <img src={ph} alt="" className='h-6 w-6 rounded-full' />
                                    <p className='font-["Montserrat"] text-sm font-bold text-gray-600 xl:text-sm xl:font-bold'>7439537213 , 9474812394</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <img src={mail} alt="" className='h-6 w-6' />
                                    <h1 className='font-["Montserrat"] text-sm font-medium text-gray-600 xl:text-sm xl:font-bold sm:hidden text-balance'>bookaholic.library. web@gmail.com</h1>
                                    <h1 className='font-["Montserrat"] text-sm font-medium text-gray-600 xl:text-sm xl:font-bold hidden sm:block text-balance'>bookaholic.library.web@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='icons flex items-center mx-auto space-x-2 mt-10 px-5 xl:space-x-4'>
                    <img src={facebook} alt="" className='w-12 h-12 hover:scale-125 duration-200 cursor-pointer' />
                    <img src={instagram} alt="" className='w-12 h-12 hover:scale-125 duration-200 cursor-pointer' />
                    <img src={linkedin} alt="" className='w-12 h-12 hover:scale-125 duration-200 cursor-pointer' />
                    <img src={twitter} alt="" className='w-12 h-12 hover:scale-125 duration-200 cursor-pointer' />
                </div>
                <div>
                    <img src={bg} alt="" className='object-centerh object-cover w-full sm:max-h-64 md:max-h-[300px] lg:max-h-[320px]' />
                </div>
            </div>
        </>
    )
}

export default Footer
