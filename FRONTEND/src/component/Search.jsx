import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import search from '../assets/search.svg';

const Search = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/results?q=${query}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    };

    return (
        <>
            <div className='bg-black py-10 w-full mt-2 font-["Montserrat"] flex flex-col items-center justify-center gap-4 mb-10 px-2 md:py-12 xl:flex-row xl:gap-x-5 xl:py-16'>
                <h1 className='text-white text-sm md:text-base xl:text-[18px] xl:font-light'>LET US KNOW, WHAT YOU'RE LOOKING FOR ...</h1>
                <div className='flex'>
                <input
                            type="text"
                            placeholder="SEARCH BY TITLE, AUTHOR OR GENRE"
                            className="pr-8 pl-6 h-9 bg-black placeholder:text-[11px] text-white text-sm placeholder:text-[#C5C5C5] border-b-[1px] border-[#969696] md:w-[500px] xl:w-[780px] xl:placeholder:text-sm xl:placeholder:font-extralight focus:outline-none"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    <button onClick={handleSearch} className='w-11 h-9 xl:h-11 xl:w-14 hover:scale-125 duration-200'><img src={search} alt="" className='w-11 h-9 xl:h-11 xl:w-14'/></button>
                </div>
            </div>
        </>
    )
}

export default Search
