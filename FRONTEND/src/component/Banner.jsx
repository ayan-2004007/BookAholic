import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { TypeAnimation } from 'react-type-animation';
import Marquee from 'react-fast-marquee';
import bg1 from '../assets/banner1.jpg';
import bg2 from '../assets/banner2.jpg';
import bg3 from '../assets/banner3.jpg';
import l1 from '../assets/logos/pl1.png';
import l2 from '../assets/logos/pl2.png';
import l3 from '../assets/logos/pl3.png';
import l4 from '../assets/logos/pl4.png';
import l5 from '../assets/logos/pl5.png';
import l6 from '../assets/logos/pl6.png';
import l7 from '../assets/logos/pl7.png';
import l8 from '../assets/logos/pl8.png';
import l9 from '../assets/logos/pl9.jpg';
import l10 from '../assets/logos/pl10.jpg';
import l11 from '../assets/logos/pl11.png';
import l12 from '../assets/logos/pl12.png';
import l13 from '../assets/logos/pl13.png';
import l14 from '../assets/logos/pl14.png';
import l15 from '../assets/logos/pl15.png';
import l16 from '../assets/logos/pl16.png';
import l17 from '../assets/logos/pl17.png';
import l18 from '../assets/logos/pl18.png';
import l19 from '../assets/logos/pl19.png';

const verticalScrollStyle = `
  @keyframes verticalScroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
`

const Banner = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const [transitioning, setTransitioning] = useState(false);
    const bgImages = [bg1, bg2, bg3];
    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex(nextImageIndex);
                setNextImageIndex((prevIndex) =>
                    prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
                );
                setTransitioning(false);
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, [nextImageIndex, bgImages.length]);

    return (
        <>
            <div>
                <Navbar showLoginButton={true} />
            </div>

            <div className='relative w-full md:h-[550px] lg:h-[650px] xl:h-[690px] 2xl:h-[720px]'>
                <div
                    className={`absolute inset-0 bg-no-repeat bg-center bg-cover transition-opacity duration-1000 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
                    style={{ backgroundImage: `url(${bgImages[currentImageIndex]})` }}
                ></div>
                <div
                    className={`absolute inset-0 bg-no-repeat bg-center bg-cover transition-opacity duration-1000 ${transitioning ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${bgImages[nextImageIndex]})` }}
                ></div>

                <div className='bb pt-24 h-full w-full bg-black bg-opacity-40 lg:bg-opacity-60 backdrop-blur-[4px] flex flex-col md:justify-between gap-y-20 text-white font-["Montserrat"] md:h-[550px] lg:h-[650px] xl:h-[690px] 2xl:h-[720px] xl:pt-0 xl:flex-row xl:pr-[90px]'>
                    <div className='flex flex-col gap-y-6 px-5 md:px-10 lg:gap-y-10 lg:pl-20 xl:gap-y-8 xl:pt-56 xl:pl-44'>
                        <h1 className='text-[22px] min-[417px]:text-3xl leading-[50px] md:text-[36px] lg:text-[44px] lg:leading-[60px] lg:font-light xl:text-[48px] xl:leading-[69px] xl:font-extralight'>
                            WHERE STORIES{' '}
                            <div>
                                <TypeAnimation
                                    preRenderFirstString={true}
                                    sequence={[
                                        750,
                                        'COMES TO LIFE - EXPLORE',
                                        1500,
                                        'COMES TO LIFE - DISCOVER',
                                        1500,
                                        'COMES TO LIFE - IMAGINE',
                                        750,
                                    ]}
                                    speed={{ type: 'keyStrokeDelayInMs', value: 75 }}
                                    className='block text-lg min-[417px]:text-[26px] md:text-[32px] lg:text-[40px] lg:leading-[60px] lg:font-light xl:text-[48px] xl:leading-[69px] xl:font-extralight'
                                    repeat={Infinity}
                                />
                            </div>
                        </h1>
                        <p className='text-xs font-light md:w-[600px] md:text-sm lg:w-[750px] lg:text-base xl:text-[18px] xl:min-w-[924px] xl:font-thin xl:leading-snug'>
                            Discover a world where every page leads to a new adventure. At Bookaholic Library, immerse yourself in a vast collection of books that inspire, entertain, and enlighten. Explore our curated selection and find your next great read today.
                        </p>
                        <div className='flex items-center space-x-3 xl:space-x-6'>
                            <button onClick={handleClick} className='py-3 px-4 text-[10px] border-2 border-white font-semibold hover:bg-white hover:text-black duration-300 md:text-xs xl:py-4 xl:px-6 xl:text-sm'>
                                VISIT WEBSITE
                            </button>
                            <button onClick={() => { navigate("/signup") }} className='py-3 px-4 text-[10px] bg-white text-black font-semibold hover:bg-black hover:text-white duration-300 md:text-xs xl:py-4 xl:px-6 xl:text-sm'>
                                JOIN US
                            </button>
                        </div>
                    </div>

                    {/* PUBLISHERS SECTION FOR MOBILE*/}
                    <div className='flex flex-col xl:hidden'>
                        <p className='text-sm px-5 tracking-[5px] mb-1 lg:pl-20'>
                            FEATURED PUBLISHERS
                        </p>
                        <div className='bg-black w-full py-5 overflow-hidden'>
                            <div className='flex animate-horizontalScroll'>
                                <Marquee speed={60}>
                                    <img src={l1} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l2} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l3} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l4} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l5} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l6} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l7} alt='' className='w-2 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l8} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l9} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l10} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l11} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l12} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l13} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l14} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l15} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l16} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l17} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l18} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                    <img src={l19} alt='' className='w-12 h-12 object-contain object-center rounded-full mr-4 md:h-16 md:w-16 md:mr-16' />
                                </Marquee>
                            </div>
                        </div>

                    </div>

                    {/* PUBLISHERS SECTION FOR XL */}
                    <div className='hidden xl:flex xl:gap-x-5 xl:items-center'>
                        <style>
                            {verticalScrollStyle}
                        </style>
                        <p className='text-[18px] font-["Montserrat"] font-extralight tracking-[15px]' style={{ writingMode: 'vertical-rl', textOrientation: 'sideways' }}>
                            FEATURED PUBLISHERS
                        </p>
                        <div className='h-full bg-black w-28 overflow-hidden relative'>
                            <div style={{ animation: 'verticalScroll 30s linear infinite' }} className='flex flex-col'>
                                {[l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19].map((imgSrc, index) => (
                                    <img key={index} src={imgSrc} alt='' className='xl:h-24 xl:w-24 xl:rounded-full object-contain object-center mb-10 mx-auto' />
                                ))}
                                {[l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19].map((imgSrc, index) => (
                                    <img key={`clone-${index}`} src={imgSrc} alt='' className='xl:h-24 xl:w-24 xl:rounded-full object-contain object-center mb-10 mx-auto' />
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Banner;
