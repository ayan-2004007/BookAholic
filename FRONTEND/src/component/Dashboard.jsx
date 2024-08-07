import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import dashboard from "../assets/bg_3.jpg";
import Footer from './Footer';
import emailimage from '../assets/email-image.jpg';
import dashboardimage from '../assets/signup.png';
import List from '../../public/List.json';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = sessionStorage.getItem("userData");
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
        const checkTokenExpiration = () => {
            const loginTime = sessionStorage.getItem("loginTime");
            const accessToken = sessionStorage.getItem("accessToken");
            const expiration = 3 * 60 * 60 * 1000;
            if (loginTime && accessToken) {
                const currentTime = new Date().getTime();
                if (currentTime - parseInt(loginTime, 10) > expiration) {
                    sessionStorage.removeItem("accessToken");
                    sessionStorage.removeItem("loginTime");
                    sessionStorage.removeItem("userData");
                    setUserData(null);
                }
            } else {
                navigate("/login");
            }
        };
        const interval = setInterval(checkTokenExpiration, 60000);
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <>
            <div className="relative">
                {/* Background with blur effect */}
                <div
                    className="fixed inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${dashboard})`, zIndex: -1 }}
                >
                    <div className="absolute inset-0  backdrop-blur-sm"></div>
                </div>

                <div className="bg-black">
                    <Navbar />
                </div>

                <div className="md:mt-2 font-['Montserrat'] relative z-10">
                    <div className="md:flex md:px-5 lg:px-5 xl:px-0 lg:max-w-[1150px] mx-auto">

                        {/* Sidebar */}
                        <div className="md:sticky top-4 md:h-screen md:w-[46%] h-[615px]">
                            <div className="w-auto h-36 md:h-44 md:rounded-t-md bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${emailimage})` }}>
                                <div className="bg-[#0000007a] md:bg-[#01010190] md:rounded-t-md w-full h-full mb-2"></div>
                                {userData && (
                                    <>
                                        <div className="flex items-center justify-center">
                                            <img src={userData.avatar} alt="Profile" className="absolute w-32 h-32 md:w-44 md:h-44 rounded-full border-[6px] md:border-10 border-white object-cover object-center" />
                                        </div>

                                        <div className="bg-[#097E88] text-white pt-[72px] md:pt-[105px] space-y-1 md:space-y-2 mx-[15px] md:mx-0">
                                            <p className="md:text-xl text-center font-light">{userData.fullname.toUpperCase()}</p>
                                            <p className="text-sm md:text-base text-center pb-2 md:pb-0">as &nbsp;&nbsp;<span className='font-medium'>{userData.username}</span></p>
                                            <div className="h-[0.1px] bg-white w-5/6 mx-auto"></div>
                                            <p className="tracking-[.3em] md:tracking-[.5em] font-extralight text-sm text-center pt-2 md:pt-0">PERSONAL INFORMATION</p>
                                            <div className="pl-9 pt-5 md:pb-9 pb-6 space-y-1">
                                                <p className="font-medium text-sm">Username : <span className="font-light">{userData.username}</span></p>
                                                <p className="font-medium text-sm">Fullname : <span className="font-light">{userData.fullname}</span></p>
                                                <p className="font-medium text-sm">Email : <span className="font-light">{userData.email}</span></p>
                                            </div>
                                        </div>

                                        <div className="bg-[#097E88] text-white mt-2 text-center md:py-8 py-5 space-y-2 md:space-y-3 rounded-b-md mx-[15px] md:mx-0">
                                            <p className="tracking-[.5em] font-extralight md:text-base text-sm">ACTIVITIES</p>
                                            <p className="pt-2 md:pt-5 text-xs md:text-[13px] hover:text-red-300 hover:cursor-pointer duration-200">My interests</p>
                                            <p className="text-xs md:text-[13px] hover:text-red-300 hover:cursor-pointer duration-200">My records</p>
                                            <p className="text-xs md:text-[13px] hover:text-red-300 hover:cursor-pointer duration-200">My rewards</p>
                                            <p className="text-xs md:text-[13px] hover:text-red-300 hover:cursor-pointer duration-200">settings</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="md:ml-2 md:w-full mx-[15px] md:mx-0">

                            {/* Content */}
                            <div className="bg-[#212121] text-white p-5 md:py-9 md:pl-9 md:pr-1 rounded-md flex">
                                <div className="space-y-4">
                                    <div className="md:hidden flex justify-between items-center">
                                        <h2 className="md:text-lg">Hello, {userData ? userData.fullname : 'User'}</h2>
                                        <img src={dashboardimage} alt="" className="max-w-[110px] max-h-[80px] md:max-w-[180px] md:max-h-40" />
                                    </div>
                                    <h2 className="hidden md:block md:text-lg">Hello, {userData ? userData.fullname : 'User'}</h2>
                                    <p className="text-xs md:text-sm font-extralight">
                                        Welcome to your profile at Bookaholic, your literary adventure is just beginning. Here, you can effortlessly manage your profile, download your favorite books, and discover new reads tailored just for you. Stay updated with the latest releases, enjoy exclusive member perks, and immerse yourself in a world of endless stories. Happy reading and welcome to your next chapter with Bookaholic!
                                    </p>
                                    <button onClick={() => { navigate("/availability") }} className="font-semibold border-2 text-[11px] py-3 px-4 hover:cursor-pointer hover:bg-white hover:text-black duration-300">GET MORE BOOK</button>
                                </div>
                                <img src={dashboardimage} alt="" className="hidden md:block max-w-[110px] max-h-[80px] md:max-w-[180px] md:max-h-40" />
                            </div>

                            {/* BOOKS */}
                            <div className="bg-[#212121] text-white mt-[9px] rounded-md md:px-9 py-9">
                                <h1 className="tracking-[.4em] text-center">YOUR BOOKS</h1>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-9 gap-y-20 px-9 md:px-3 py-14">
                                    {List.map((l) => (
                                        <div key={l.bookname} className="space-y-2 md:grid grid-rows-1 mx-auto flex gap-3 md:gap-0">
                                            <img src={l.image} alt="" className="md:max-w-[132px] md:max-h-[210px] max-w-[107px] max-h-[166px] ml-0.5" />
                                            <div className="space-y-2">
                                                <p className="font-light ml-0.5">{l.bookname}</p>
                                                <div className="py-0.5 space-y-1 md:ml-0 ml-0.5">
                                                    <p className="font-light text-[11px] md:text-xs md:ml-0 ml-0.5">ISSUE DATE : 24/01/2024</p>
                                                    <p className="font-light text-[11px] md:text-xs md:ml-0 ml-0.5">ORDER ID : ba20248965</p>
                                                </div>
                                                <button className="text-xs font-medium rounded-md border px-7 py-[6px] hover:bg-white hover:text-black duration-300">DOWNLOAD</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
