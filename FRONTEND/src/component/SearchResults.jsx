import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactLoading from 'react-loading';
import ScrollToTop from './ScrollToTop';


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
const SearchResults = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const query = useQuery().get('q');
    useEffect(() => {
        const fetchBooks = async () => {
            if (!query) return;
            setLoading(true);
            try {
                const response = await axios.get(`https://lmsbackend-guhs.onrender.com/books/search?q=${query}`);
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching the books', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, [query]);

    let content;
    if (loading) {
        content =
            <div className="flex w-full items-start justify-center h-screen space-x-6 pt-11">
                <p className='font-["Montserrat"] text-3xl'>Loading</p>
                <ReactLoading type="cylon" color="#009982" height={50} width={50} />
            </div>
    } else if (results.length === 0) {
        content = <p className="text-center text-lg font-bold text-red-600">No results found</p>;
    } else {
        content = (
            <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-10 lg:justify-center">
                {results.map((book) => (
                    <li key={book._id} className="bg-[#00a28a] rounded-lg shadow-lg p-4 lg:max-w-[600px]">
                        <div className="flex items-center mb-4 lg:w-72 lg:gap-6">
                            <img src={book.image} alt={book.bookname} className="h-44 w-28 lg:w-56 lg:h-64 mr-4" />
                            <div className='space-y-2 lg:min-w-60'>
                                <h3 className="text-white text-lg font-semibold mb-1 xl:text-xl font-['Montserrat'] uppercase">{book.bookname}</h3>
                                <p className="text-sm text-white xl:text-base font-['Montserrat']"><span className='font-bold'>Author: </span>{book.authorname}</p>
                                <p className="text-sm text-white xl:text-base font-['Montserrat']"><span className='font-bold'>Category: </span>{book.category}</p>
                                <p className='text-xs text-white font-["Montserrat"] xl:text-sm font-light'><span className='xl:text-lg font-semibold'>Description : </span>{book.description}</p>
                                <div className='flex flex-col lg:flex-row lg:justify-between items-start space-y-1'>
                                    <p className="text-lg font-['Montserrat'] uppercase
                                     text-white">{book.availability ? "Available" : "Not Available"}</p>
                                    <button
                                        className={`px-4 py-2 text-xs text-white font-["Montserrat"] bg-gray-800 hover:bg-gray-700 duration-150 lg:text-sm ${!book.availability ? "opacity-50 cursor-not-allowed" : ""}`}
                                        disabled={!book.availability}>TAKE</button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
    return (
        <>
        <ScrollToTop/>
        <div>
            <div className="bg-black"><Navbar showLoginButton={true}/></div>
            <div className="p-6 lg:p-10 mx-auto max-w-[1244px] flex-col space-y-6">
                <div className="bg-[#B0FFF3] p-4 xl:w-[1165px] xl:mx-auto xl:text-[26px]">
                    <h1 className="font-bold font-['Roboto'] text-[18px] md:text-[22px] text-black text-center">Search Results for "{query}"</h1>
                </div>
                {content}
            </div>
            <Footer />
        </div>
        </>
    );
};
export default SearchResults;
