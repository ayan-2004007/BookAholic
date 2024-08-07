import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import aos from "aos"
import "aos/dist/aos.css"
import classic from '../assets/classic.jpg'
import comics from '../assets/comics.jpg'
import crime from '../assets/crime.jpg'
import horror from '../assets/horror.jpg'
import romance from '../assets/romance.jpg'
import scienceFiction from '../assets/scienceFiction.jpg'

const Categories = () => {
    useEffect(()=>{
        aos.init()
    },[])
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/availability');
    }

    const handleCategoryClick = (category) => {
        navigate(`/availability?category=${category}`);
    };

    return (
        <>

            <div className="categories flex flex-col mt-10 mx-5 mb-20">
                <div className="bg-[#B0FFF3] p-4 xl:w-[1172px] xl:mx-auto xl:text-[26px]">
                    <h1 className="font-semibold font-['Montserrat'] text-[18px] md:text-[22px] text-black text-center">OUR TOP CATEGORIES</h1>
                </div>

                <div className="sm:flex sm:flex-col items-center categoriitems px-5 md:grid lg:grid-cols-3 lg:grid-rows-2 grid-rows-3 grid-cols-2 max-w-[1150px] gap-6 lg:gap-7 lg:gap-y-10 mx-auto mt-9 md:mt-10 lg:mt-11 space-y-7 md:space-y-0 font-['Montserrat']">

                    <div className='flex flex-col space-y-2 lg:space-y-3' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="group relative w-full sm:w-auto h-48 sm:h-64 md:h-72 lg:h-48 xl:w-[350px] xl:h-[192px] hover:cursor-pointer inline-block overflow-hidden" onClick={() => handleCategoryClick('Classic')}>
                            <img src={classic} alt="" className="object-cover object-center w-full h-full transform group-hover:scale-150 transition duration-500 ease-in-out" />
                            <div className="bg-[#0000007a] md:bg-[#000000ad] h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 z-10">
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-lg sm:text-xl md:text-2xl">CLASSICS</p>
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-xs sm:text-sm absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">Click here for timeless literary masterpieces</p>
                            </div>
                        </div>
                        <div className="border-l-2 border-gray-500 pl-1 h-auto">
                            <p className='text-sm lg:font-medium'>Dive into the timeless narratives and profound themes of literature's most enduring works, cherished across generations.</p>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 lg:space-y-3' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="group relative w-full sm:w-auto h-48 sm:h-64 md:h-72 lg:h-48 xl:w-[350px] xl:h-[192px] hover:cursor-pointer inline-block overflow-hidden" onClick={() => handleCategoryClick('Horror')}>
                            <img src={horror} alt="" className="object-cover object-center w-full h-full transform group-hover:scale-150 transition duration-500 ease-in-out" />
                            <div className="bg-[#0000007a] md:bg-[#000000ad] h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 z-10">
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-lg sm:text-xl md:text-2xl">HORROR</p>
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-xs sm:text-sm absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">Click here for spine-chilling horror stories</p>
                            </div>
                        </div>
                        <div className="border-l-2 border-gray-500 pl-1 h-auto">
                            <p className='text-sm lg:font-medium'>Explore terrifying tales that evoke fear and suspense, leaving you on the edge of your seat with every page.</p>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 lg:space-y-3' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="group relative w-full sm:w-auto h-48 sm:h-64 md:h-72 lg:h-48 xl:w-[350px] xl:h-[192px] hover:cursor-pointer inline-block overflow-hidden" onClick={() => handleCategoryClick('Comics')}>
                            <img src={comics} alt="" className="object-cover object-center w-full h-full transform group-hover:scale-150 transition duration-500 ease-in-out" />
                            <div className="bg-[#0000007a] md:bg-[#000000ad] h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 z-10">
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-lg sm:text-xl md:text-2xl">COMICS</p>
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-xs sm:text-sm absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">Click here for vibrant and exciting comics</p>
                            </div>
                        </div>
                        <div className="border-l-2 border-gray-500 pl-1 h-auto">
                            <p className='text-sm lg:font-medium'>Immerse yourself in visually stunning, action-packed stories that bring heroes and adventures to life through dynamic illustrations</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 lg:space-y-3" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="group relative w-full sm:w-auto h-48 sm:h-64 md:h-72 lg:h-48 xl:w-[350px] xl:h-[192px] hover:cursor-pointer inline-block overflow-hidden" onClick={() => handleCategoryClick('Science fiction')}>
                            <img src={scienceFiction} alt="" className="object-cover object-center w-full h-full transform group-hover:scale-150 transition duration-500 ease-in-out" />
                            <div className="bg-[#0000007a] md:bg-[#000000ad] h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 z-10">
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-lg sm:text-xl md:text-2xl">SCIENCE FICTION</p>
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-xs sm:text-sm absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">Click here for futuristic sci-fi adventures</p>
                            </div>
                        </div>
                        <div className="border-l-2 border-gray-500 pl-1 h-auto">
                            <p className='text-sm lg:font-medium'>Journey to futuristic worlds and explore speculative technology and science, imagining the possibilities of tomorrow.</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 lg:space-y-3" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="group relative w-full sm:w-auto h-48 sm:h-64 md:h-72 lg:h-48 xl:w-[350px] xl:h-[192px] hover:cursor-pointer inline-block overflow-hidden" onClick={() => handleCategoryClick('Romance')}>
                            <img src={romance} alt="" className="object-cover object-center w-full h-full transform group-hover:scale-150 transition duration-500 ease-in-out" />
                            <div className="bg-[#0000007a] md:bg-[#000000ad] h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 z-10">
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-lg sm:text-xl md:text-2xl">ROMANCE</p>
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-xs sm:text-sm absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">Click here for heartwarming romance novels</p>
                            </div>
                        </div>
                        <div className="border-l-2 border-gray-500 pl-1 h-auto">
                            <p className='text-sm lg:font-medium '>Experience heartwarming and passionate love stories that explore the complexities of relationships and the beauty of romance.</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 lg:space-y-3" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="group relative w-full sm:w-auto h-48 sm:h-64 md:h-72 lg:h-48 xl:w-[350px] xl:h-[192px] hover:cursor-pointer inline-block overflow-hidden" onClick={() => handleCategoryClick('Crime Drama')}>
                            <img src={crime} alt="" className="object-cover object-center w-full h-full transform group-hover:scale-150 transition duration-500 ease-in-out" />
                            <div className="bg-[#0000007a] md:bg-[#000000ad] h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 z-10">
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-lg sm:text-xl md:text-2xl">CRIME & DRAMA</p>
                                <div className="h-px bg-white w-16 my-2"></div>
                                <p className="text-white text-xs sm:text-sm absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">Click here for gripping crime & mystery tales</p>
                            </div>
                        </div>
                        <div className='border-l-2 border-gray-500 pl-1 h-auto' >
                            <p className='text-sm lg:font-medium'>Engage with thrilling mysteries and captivating crime-solving adventures, unraveling clues and secrets with every twist and turn.</p>
                        </div>
                    </div>
                </div>

                <button className="bg-[#008B77] text-white font-medium text-sm py-4 px-12 mx-auto mt-8 md:text-xl xl:mt-14 hover:bg-black duration-300 font-['Montserrat'] lg:text-base" onClick={handleClick}>EXPLORE ALL BOOKS ....</button>
            </div>

        </>
    )
}

export default Categories
