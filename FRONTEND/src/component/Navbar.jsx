import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-white-removebg.png';

const Navbar = ({ showLoginButton }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            setIsLoggedIn(true);
            const userData = JSON.parse(sessionStorage.getItem('userData'));
            if (userData && userData.avatar) {
                setAvatarUrl(userData.avatar);
            }
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <div className="flex justify-between items-center px-6 py-3 lg:hidden bg-black">
                <div className="logo flex items-center space-x-1 relative z-[500]">
                    <img src={logo} alt="logo" className="h-9 w-9" />
                    <h1 className="text-white font-['Montserrat'] text-sm">BOOKAHOLIC</h1>
                </div>
                <div className="threeline flex flex-col mb-2 space-y-1 cursor-pointer" onClick={toggleMenu}>
                    <div className="h-0.5 w-6 bg-white"></div>
                    <div className="h-0.5 w-6 bg-white"></div>
                    <div className="h-0.5 w-6 bg-white"></div>
                </div>
            </div>

            <div className={`fixed z-50 top-0 left-0 w-screen h-screen bg-black transition-transform flex-col duration-300 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-[107%]'} lg:hidden`}>
                <button className="absolute top-6 right-6 text-white text-3xl" onClick={toggleMenu}>&times;</button>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <button className="text-gray-200 text-sm hover:text-white font-['Montserrat'] duration-150" onClick={() => navigate('/')}>Home</button>
                    <button className="text-gray-200 text-sm hover:text-white font-['Montserrat'] duration-150"onClick={() => navigate('/research')}>Research</button>
                    <button className="text-gray-200 text-sm hover:text-white font-['Montserrat'] duration-150" onClick={() => navigate('/gallery')}>Gallery</button>
                    <button className="text-gray-200 text-sm hover:text-white font-['Montserrat'] duration-150" onClick={() => navigate('/blog')}>Blog</button>
                    <button className="text-gray-200 text-sm hover:text-white font-['Montserrat'] duration-150"  onClick={() => navigate('/library-card')}>Get A Library Card</button>
                    {!isLoggedIn ? (
                        showLoginButton && <button onClick={() => navigate('/login')} className="text-black text-sm font-['Montserrat'] font-medium bg-white px-4 py-2 xl:py-2 border hover:bg-black hover:text-white hover:border-white duration-300 focus:outline-none">LOG-IN</button>
                    ) : (
                        <button onClick={() => navigate('/user/dashboard')} className='rounded-full border border-white'>
                            <img src={avatarUrl} alt="user avatar" className="w-10 h-10 object-cover object-center rounded-full" />
                        </button>
                    )}
                </div>
            </div>

            <div className="hidden navbar lg:flex justify-between items-center w-full px-6 py-1 bg-black xl:py-0 xl:px-24">
                <div>
                    <img src={logo} alt="logo" className="hidden lg:block lg:h-16 lg:w-16 xl:h-[70px] xl:w-[70px]" />
                </div>
                <div className="items flex items-center gap-72">
                    <div className="hidden lg:flex">
                        <ul className="hidden lg:flex text-white lg:text-xs font-['Montserrat'] space-x-5 xl:space-x-7 items-center cursor-pointer xl:font-light">
                            <li className='font-["Montserrat"] hover:text-gray-400 duration-150 '><button onClick={() => navigate('/')}>HOME</button></li>
                            <li className='font-["Montserrat"] hover:text-gray-400 duration-150 '><button onClick={() => navigate('/research')}>RESEARCH</button></li>
                            <li className='font-["Montserrat"] hover:text-gray-400 duration-150 '><button onClick={() => navigate('/gallery')}>GALLERY</button></li>
                            <li className='font-["Montserrat"] hover:text-gray-400 duration-150 '><button onClick={() => navigate('/blog')}>BLOG</button></li>
                            <li className='font-["Montserrat"] hover:text-gray-400 duration-150 '><button onClick={() => navigate('/library-card')}>MEMBERSHIP</button></li>
                            {!isLoggedIn ? (
                                showLoginButton && <button onClick={() => navigate('/login')} className="text-black text-xs font-['Montserrat'] font-semibold bg-white px-4 py-2 xl:py-3 xl:px-6 duration-300 xl:text-sm xl:font-medium border hover:bg-black hover:text-white hover:border-white">LOG-IN</button>
                            ) : (
                                <button onClick={() => navigate('/user/dashboard')} className='border border-white rounded-full'> 
                                    <img src={avatarUrl} alt="user avatar" className="w-12 h-12 object-cover object-center rounded-full" />
                                </button>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
