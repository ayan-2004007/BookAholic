import React, { useState } from 'react';
import axios from 'axios';
import aos from "aos"
import "aos/dist/aos.css"


const Map = () => {
    aos.init()
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://lmsbackend-guhs.onrender.com/subscribe', { email });
            console.log(response.data);
            setMessage('Congrats ! Subscription Successfull');
            setEmail('');
        } catch (error) {
            console.error('Error subscribing:', error);
            setMessage('Subscription failed. Please try again later.');
        }
    };
    return (
        <>
            {/* MOBILE DESIGN */}
            <div className='flex flex-col px-5 md:max-w-[768px] md:mx-auto xl:hidden'>
                <div className='bg-[#32b395] flex flex-col text-white font-["Montserrat"] py-10 px-6 space-y-7' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="600">
                    <div className='flex flex-col space-y-1'>
                        <h1 className='text-2xl md:text-3xl'>OUR COLLEGE</h1>
                        <p className='text-sm xl:text-base'>Barrackpore Rastraguru Surendranath College</p>
                        <hr className='max-w-[328px]' />
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h1 className='text-[18px] font-medium md:text-[22px]'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                        <p className='text-xs md:text-sm'>monthly digest of what's new and exciting from us.</p>
                        <div className='flex flex-col space-y-4'>
                            <input type="email" placeholder='EMAIL ADDRESS' className='placeholder:text-[#8E8E8E] text-xs font-semibold px-2 py-3 focus:outline-yellow-500 text-black max-w-[360px] md:px-6 md:w-[400px] md:text-sm md:font-medium' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button className='w-28 border-2 border-white text-xs font-bold py-3 rounded-md hover:bg-white hover:text-[#63C7AF] duration-200 md:w-36 md:text-base' onClick={handleSubscribe}>SUBSCRIBE</button>
                            <p className='font-["Montserrat"] text-base text-green-300'>{message}</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="700">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.071602868101!2d88.35472393875429!3d22.762723858462255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f896ccfe555557%3A0x3d78ac3af6a4caa4!2sBarrackpore%20Rastraguru%20Surendranath%20College!5e0!3m2!1sen!2sin!4v1721306973179!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full min-h-[350px] focus:outline-none focus:border-0 outline-none'></iframe>
                </div>
            </div>

            {/* DESKTOP DESIGN  */}
            <div className="hidden xl:block relative w-full max-w-[1172px] h-[500px] mx-auto" data-aos="fade-up" data-aos-offset="600" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.071602868101!2d88.35472393875429!3d22.762723858462255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f896ccfe555557%3A0x3d78ac3af6a4caa4!2sBarrackpore%20Rastraguru%20Surendranath%20College!5e0!3m2!1sen!2sin!4v1721306973179!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: '0' }}
                    allowFullScreen=""
                ></iframe>
                <div className="absolute top-1/2 right-5 transform -translate-y-1/2 w-[488px] bg-[#32b395] flex flex-col text-white font-['Montserrat'] py-10 px-6 space-y-14">
                    <div className='flex flex-col space-y-1'>
                        <h1 className='text-3xl'>OUR COLLEGE</h1>
                        <p className='text-base'>Barrackpore Rastraguru Surendranath College</p>
                        <hr className='' />
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h1 className='text-[18px] font-medium md:text-[22px]'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                        <p className='text-sm'>monthly digest of what's new and exciting from us.</p>
                        <div className='flex flex-col space-y-4'>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL ADDRESS' className='placeholder:text-[#8E8E8E] font-semibold py-3 focus:outline-yellow-500 text-black px-6 text-sm md:font-medium' required/>
                            <button className='w-28 border-2 border-white text-xs font-bold py-3 rounded-md hover:bg-white hover:text-[#63C7AF] duration-200 md:w-36 md:text-base' onClick={handleSubscribe}>SUBSCRIBE</button>
                            <p className='font-["Montserrat"] text-base text-green-300'>{message}</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Map;