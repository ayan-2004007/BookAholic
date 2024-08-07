import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactLoading from 'react-loading';
import ScrollToTop from './ScrollToTop';

const Availability = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://lmsbackend-guhs.onrender.com/books');
        setBooks(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = category ? books.filter(book => book.category === category) : books;

  return (
    <>
    <ScrollToTop/>
      <div className="bg-[#ffffff]">
        <div className="bg-black"><Navbar showLoginButton={true}/></div>
        {isLoading ? (
          <div className="flex w-full items-center justify-center h-screen space-x-6">
            <p className='font-["Montserrat"] text-3xl'>Loading...</p>
            <ReactLoading type="cylon" color="#009982" height={50} width={50} />
          </div>
        ) : (
          <>
            <ul className='flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:gap-10 lg:justify-center p-4 2xl:gap-3 xl:mx-auto'>
              {filteredBooks.map((l) => (
                <li key={l._id} className="bg-[#00bfa3] rounded-lg shadow-lg p-4 xl:max-w-[630px]" >
                  <div className="flex items-center mb-4 lg:w-72 lg:gap-6">
                    <img src={l.image} alt={l.bookname} className="h-44 w-28 lg:w-56 lg:h-64 mr-4" />
                    <div className='space-y-2 lg:min-w-60'>
                      <h3 className="text-white text-lg font-semibold mb-1 xl:text-xl font-['Montserrat'] uppercase">{l.bookname}</h3>
                      <p className="text-sm text-white xl:text-base font-['Montserrat']"><span className='font-bold'>Author: </span>{l.authorname}</p>
                      <p className="text-sm text-white xl:text-base font-['Montserrat']"><span className='font-bold'>Category: </span>{l.category}</p>
                      <p className='text-xs text-white font-["Montserrat"] xl:text-sm font-light'><span className='text-sm xl:text-base font-semibold'>Description : </span>{l.description}</p>
                      <div className='flex flex-col lg:flex-row lg:justify-between items-center space-y-1'>
                        <p className="text-lg font-medium text-white font-['Montserrat'] uppercase">{l.availability ? "Available" : "Not Available"}</p>
                        <button
                          className={`px-4 py-2 text-xs text-white font-["Montserrat"] bg-gray-800 hover:bg-gray-700 duration-150 lg:text-sm ${!l.availability ? "opacity-50 cursor-not-allowed" : ""}`}
                          disabled={!l.availability}>TAKE</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Footer />
          </>
        )}
      </div>
    </>
  )
}

export default Availability
