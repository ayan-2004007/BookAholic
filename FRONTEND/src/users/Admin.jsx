import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import admin1 from '../assets/admin1.png'
import admin2 from '../assets/admin2.png'
import admin3 from '../assets/admin3.png'
import graph from '../assets/Graph.jpg'
import ScrollToTop from '../component/ScrollToTop'


const Admin = () => {
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/addBook')
    }
    const handleDelete = () => {
        navigate('/deleteBook')
    }
    const handleAll = () => {
        navigate('/availability')
    }
    return (
        <>
            <ScrollToTop />
            <body className="bg-[#E6FFFB] font-['Montserrat']">
                <div className="bg-gray-800"><Navbar showLoginButton={false} /></div>

                <div className="flex flex-col items-center justify-center lg:hidden mb-5 bg-[#212121]">
                    <div className="flex items-center my-4">
                        <img src="http://res.cloudinary.com/bookaholic/image/upload/v1723909904/wkh5njfjobyoxqjnexi6.png" alt="Profile" className="w-24 h-24 rounded-full mr-4" />
                        <div>
                            <h1 className="text-base font-bold text-white font-['Montserrat']">Shivanshu Das</h1>
                            <h1 className="text-green-400 text-xs font-bold pl-2 font-['Montserrat']">• Online</h1>
                        </div>
                    </div>
                </div>

                <div className="flex pb-10">
                    <div className="hidden lg:block bg-[#212121] sticky top-0 h-screen w-[21%] pt-7 px-4">
                        <div className="flex flex-wrap items-center justify-center pb-7">
                            <img src="http://res.cloudinary.com/bookaholic/image/upload/v1723909904/wkh5njfjobyoxqjnexi6.png" alt="Profile" className="w-24 h-24 rounded-full mb-3 xl:mb-0 xl:mr-5" />
                            <div className="space-y-3">
                                <h1 className="text-white text-xl font-bold text-center font-['Montserrat']">Shivanshu Das</h1>
                                <h1 className="text-green-400 text-base font-bold pl-2 font-['Montserrat']">• Online</h1>
                            </div>
                        </div>
                        <div className="w-full bg-black text-gray-500 text-center tracking-widest py-2 xl:py-3 mb-6">
                            <h1>MAIN NAVIGATION</h1>
                        </div>
                        <ul className="space-y-6 text-gray-300 flex flex-col items-center justify-start cursor-pointer font-['Montserrat']">
                            <li>Home</li>
                            <li>Books</li>
                            <li>Users</li>
                            <li>Reports</li>
                            <li>Settings</li>
                        </ul>
                    </div>

                    <div className="flex-1 px-4 md:px-10 md:pt-6">
                        <div className="flex-col flex-wrap justify-center lg:justify-between md:space-x-8 pb-6 cursor-pointer space-y-4">
                            <div className='text-sm xl:text-xl text-[#212121] font-["Montserrat"] font-bold text-center'>Hey Shivanshu Das, Welcome to your admin panel.</div>
                            <hr />
                            <div className='flex items-center justify-center flex-wrap space-x-4 '>
                                <div className="flex items-center m-2 md:m-0 w-28 h-14 md:w-40 md:h-20 xl:w-48 xl:h-28 rounded-lg pl-3 md:pl-4 text-white bg-sky-400 hover:cursor-pointer hover:bg-sky-700 duration-150" onClick={handleAll}>
                                    <div className="mr-4">
                                        <span className="text-xl md:text-2xl xl:text-3xl font-bold">ALL</span>
                                        <br />
                                        <span className="text-sm md:text-lg xl:text-xl">Books</span>
                                    </div>
                                    <img src={admin1} alt="" className="w-10 h-10 md:w-14 md:h-14 xl:w-24 xl:h-24" />
                                </div>
                                <div className="flex items-center m-2 md:m-0 w-28 h-14 md:w-40 md:h-20 xl:w-48 xl:h-28 rounded-lg pl-3 md:pl-4 text-white bg-green-500 hover:cursor-pointer hover:bg-green-700 duration-150" onClick={handleAdd}>
                                    <div className="mr-3">
                                        <span className="text-xl md:text-2xl xl:text-3xl font-bold">ADD</span>
                                        <br />
                                        <span className="text-sm md:text-lg xl:text-xl">Books</span>
                                    </div>
                                    <img src={admin2} alt="" className="w-10 h-10 md:w-14 md:h-14 xl:w-24 xl:h-24" />
                                </div>
                                <div className="flex items-center m-2 md:m-0 w-28 h-14 md:w-40 md:h-20 xl:w-48 xl:h-28 rounded-lg pl-2 md:pl-4 text-white bg-red-500
                                hover:cursor-pointer hover:bg-red-700 duration-150" onClick={handleDelete}>
                                    <div className="">
                                        <span className="text-xl md:text-2xl xl:text-3xl font-bold">DELETE</span>
                                        <br />
                                        <span className="text-sm md:text-lg xl:text-xl">Books</span>
                                    </div>
                                    <img src={admin3} alt="" className="w-9 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20" />
                                </div>
                            </div>
                        </div>

                        <h2 className="text-white text-xl w-full h-12 pl-14 pt-2 bg-gray-800">Today Issues</h2>
                        <div className="flex px-3 pb-2 mb-8 border-4 border-gray-300 border-t-0">
                            <table className="w-full text-center font-['Montserrat']">
                                <thead>
                                    <tr>
                                        <th className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base">Name</th>
                                        <th className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base">Book Name</th>
                                        <th className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base hidden sm:table-cell">Author Name</th>
                                        <th className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base hidden sm:table-cell">Quantity</th>
                                        <th className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base hidden sm:table-cell">Contact</th>
                                        <th className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base">Borrow Date</th>
                                        <th className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base">Return Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: 'Ayan Chakraborty', book: 'Sacred Games', author: 'Vikram Chandra', quantity: '1', contact: '4856498424', borrowDate: '02/7/24', returnDate: '9/7/24' },
                                        { name: 'Shivanshu Das', book: 'One Piece', author: 'Eiichiro Oda', quantity: '1', contact: '8794654982', borrowDate: '01/7/24', returnDate: '15/7/24' },
                                        { name: 'Bijoy Somaddar', book: 'Batman: The Killing Joke', author: 'Alan Moore', quantity: '5', contact: '8541545494', borrowDate: '29/6/24', returnDate: '10/7/24' },
                                        { name: 'Souvik Ray', book: 'The Invisible Man', author: 'H. G. Wells', quantity: '2', contact: '7654674984', borrowDate: '28/6/24', returnDate: '12/7/24' },
                                        { name: 'Rohit Addhya', book: 'Nonte Phonte', author: 'Narayan Debnath', quantity: '1', contact: '1564656875', borrowDate: '29/6/24', returnDate: '7/7/24' }
                                    ].map((item) => (
                                        <tr className="bg-[#cdcdcd] border-b-8 border-[#E6FFFB]">
                                            <td className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base">{item.name}</td>
                                            <td className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base">{item.book}</td>
                                            <td className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base hidden sm:table-cell">{item.author}</td>
                                            <td className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base hidden sm:table-cell">{item.quantity}</td>
                                            <td className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base hidden sm:table-cell">{item.contact}</td>
                                            <td className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base">{item.borrowDate}</td>
                                            <td className="px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-xs md:text-sm lg:text-base">{item.returnDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <img className='min-w-80' src={graph} alt="" />

                    </div>
                </div>

                <Footer />
            </body >
        </>
    )
}

export default Admin
