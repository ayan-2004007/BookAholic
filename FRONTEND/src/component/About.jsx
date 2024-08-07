import React, {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import aos from "aos"
import "aos/dist/aos.css"
import about_image1 from '../assets/about-us1.jpg'
import about_image2 from '../assets/about-us2.jpg'
import about_image3 from '../assets/about-us3.jpg'
import about_image4 from '../assets/about-us4.jpg'
import about_image5 from '../assets/about-us5.jpg'
import ebook_image from '../assets/reading-icon.png'
import environment_image from '../assets/library-icon.png'
import huge_collection_image from '../assets/books-icon.png'
import happy_customers_image from '../assets/customer-icon.png'
import event_image from '../assets/event-icon.png'
import reward_image from '../assets/reward-icon.png'


const About = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        aos.init()
    })
    return (
        <>
            {/* About us starts from here */}
            <div id='about' className="about pt-6 xl:pt-10 flex flex-col mx-auto px-5 lg:px-0 lg:flex-row-reverse lg:max-w-[1000px] space-y-7 lg:space-y-0 xl:mt-10 xl:mb-10" >
                <div className="flex lg:space-x-6" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <img src={about_image1} alt="" className="hidden lg:block md:mx-10 lg:w-[290px] lg:h-auto lg:mx-0 lg:object-cover" />
                    <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-2 gap-3 lg:gap-4 m-auto">
                        <img src={about_image2} alt="" className="hidden lg:block lg:w-[120px] lg:h-[135px] lg:object-cover" />
                        <img src={about_image3} alt="" className="hidden lg:block lg:w-[120px] lg:h-[135px] lg:object-cover" />
                        <img src={about_image4} alt="" className="hidden lg:block lg:w-[120px] lg:h-[135px] lg:object-cover" />
                        <img src={about_image1} alt="" className="lg:hidden w-44 h-40 md:w-56 md:h-52 object-cover" />
                        <img src={about_image5} alt="" className="lg:w-[120px] lg:h-[135px] w-44 h-40 md:w-56 md:h-52 object-cover" />
                    </div>
                </div>

                <div className="aboutContent flex flex-col items-center mx-auto max-w-[400px] space-y-7 px-2 lg:px-0 lg:py-5 lg:pr-5 lg:items-start">
                    <h1 className="text-black text-center font-['Montserrat'] text-3xl lg:text-4xl lg:ml-4" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">WHO ARE WE</h1>
                    <p className="font-['Montserrat'] text-black text-sm md:text-lg md:leading-6" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        Welcome to Bookaholic, where the love for books knows no bounds! Immerse yourself in our extensive library featuring a diverse range of genres and topics. Whether you're a dedicated reader or just starting your literary journey, you'll find something to captivate your imagination. Discover gripping fiction, enlightening non-fiction, and timeless classics that promise to enrich your mind and soul.</p>
                    <button className="bg-[#8dffee] font-semibold font-['Montserrat'] px-5 py-1 md:px-6 md:py-2 hover:bg-[#00CCAE] duration-150" data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="800" onClick={()=>{navigate("/login")}}>Know More</button>
                </div>
                <div className="lg:hidden grid grid-cols-2 gap-3 mx-auto" data-aos="fade-down" data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <img src={about_image2} alt="" className="lg:hidden w-44 h-40 md:w-56 md:h-52 object-cover" />
                    <img src={about_image3} alt="" className="lg:hidden w-44 h-40 md:w-56 md:h-52 object-cover" />
                </div>
            </div>
            {/* About us end here */}


            {/* Testimonials stars from here */}
            <div className="testimonials flex items-center justify-center bg-[#009982] h-auto w-full mt-16">
                <div className='grid grid-rows-3 grid-cols-2 gap-9 gap-y-16 xl:w-[1172px] xl:mx-auto h-auto p-5 py-10 xl:py-20 xl:px-0 xl:grid-rows-2 xl:grid-cols-3'>
                    <div className="test-itm h-auto w-auto xl:w-[350px] flex flex-col items-start space-y-1 md:space-y-2 xl:flex-row xl:items-start xl:gap-6">
                        <img src={ebook_image} alt="" className="h-16 w-16 rounded-full border-2 border-white md:h-20 md:w-20" />
                        <div className="flex flex-col xl:gap-1 space-y-2">
                            <h1 className="text-white text-[16px] font-['Montserrat'] font-medium md:text-2xl">EBOOK</h1>
                            <p className="text-white text-xs font-['Montserrat'] font-light md:text-[14px] md:leading-6">Experience the convenience of our ebook facility at Bookaholic. Access thousands of digital books anytime, anywhere. Enjoy a seamless reading experience with features like adjustable fonts, night mode, and offline access. Dive into your favorite books with ease!</p>
                        </div>
                    </div>
                    <div className="test-itm h-auto w-auto xl:w-[350px] flex flex-col items-start space-y-1 md:space-y-2 xl:flex-row xl:items-start xl:gap-6">
                        <img src={environment_image} alt="" className="h-16 w-16 rounded-full border-2 border-white md:h-20 md:w-20" />
                        <div className="flex flex-col xl:gap-1 space-y-2">
                            <h1 className="text-white text-[16px] font-['Montserrat'] font-medium md:text-2xl">ENVIRONMENT</h1>
                            <p className="text-white text-xs font-['Montserrat'] font-light md:text-[14px] md:leading-6">Immerse yourself in the perfect reading ambiance with Bookaholic's environment facility. Enjoy a serene, distraction-free setting designed for book lovers. Our cozy spaces, quiet zones, and eco-friendly practices create the ideal environment for your reading pleasure.</p>
                        </div>
                    </div>
                    <div className="test-itm h-auto w-auto xl:w-[350px] flex flex-col items-start space-y-1 md:space-y-2 xl:flex-row xl:items-start xl:gap-6">
                        <img src={huge_collection_image} alt="" className="h-16 w-16 rounded-full border-2 border-white md:h-20 md:w-20" />
                        <div className="flex flex-col xl:gap-1 space-y-2">
                            <h1 className="text-white text-[16px] font-['Montserrat'] font-medium md:text-2xl">HUGE COLLECTION</h1>
                            <p className="text-white text-xs font-['Montserrat'] font-light md:text-[14px] md:leading-6">Explore Bookaholic's huge collections and discover an extensive array of books across all genres. Our vast library ensures you'll always find something new to read, from timeless classics to the latest bestsellers. Dive into endless reading possibilities today!</p>
                        </div>
                    </div>
                    <div className="test-itm h-auto w-auto xl:w-[350px] flex flex-col items-start space-y-1 md:space-y-2 xl:flex-row xl:items-start xl:gap-6">
                        <img src={happy_customers_image} alt="" className="h-16 w-16 rounded-full border-2 border-white md:h-20 md:w-20" />
                        <div className="flex flex-col xl:gap-1 space-y-2">
                            <h1 className="text-white text-[16px] font-['Montserrat'] font-medium md:text-2xl">HAPPY CUSTOMERS</h1>
                            <p className="text-white text-xs font-['Montserrat'] font-light md:text-[14px] md:leading-6 ">At Bookaholic, our priority is your satisfaction. Our happy customers section showcases the joy and appreciation of readers who love our services. Discover why so many book enthusiasts choose us for their reading journey. Join our community of delighted readers!</p>
                        </div>
                    </div>
                    <div className="test-itm h-auto w-auto xl:w-[350px] flex flex-col items-start space-y-1 md:space-y-2 xl:flex-row xl:items-start xl:gap-6">
                        <img src={event_image} alt="" className="h-16 w-16 rounded-full border-2 border-white md:h-20 md:w-20" />
                        <div className="flex flex-col xl:gap-1 space-y-2">
                            <h1 className="text-white text-[16px] font-['Montserrat'] font-medium md:text-2xl">CLUB EVENTS</h1>
                            <p className="text-white text-xs font-['Montserrat'] font-light md:text-[14px] md:leading-6">Join the vibrant Bookaholic community through our community and club events. Participate in book clubs, author talks, and interactive workshops. Connect with fellow readers, share your passion for books, and enhance your reading experience with our engaging events.</p>
                        </div>
                    </div>
                    <div className="test-itm h-auto w-auto xl:w-[350px] flex flex-col items-start space-y-1 md:space-y-2 xl:flex-row xl:items-start xl:gap-6">
                        <img src={reward_image} alt="" className="h-16 w-16 rounded-full border-2 border-white md:h-20 md:w-20" />
                        <div className="flex flex-col xl:gap-1 space-y-2">
                            <h1 className="text-white text-[16px] font-['Montserrat'] font-medium md:text-2xl">35+ REWARDS</h1>
                            <p className="text-white text-xs font-['Montserrat'] font-light md:text-[14px] md:leading-6">Bookaholic proudly offers rewards to enhance your reading experience. Earn points with every book borrowed, enjoy exclusive member perks, and unlock special benefits. Join our rewards program today and make the most of your love for reading!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial ends here */}
            {/* </div> */}

        </>
    )
}

export default About