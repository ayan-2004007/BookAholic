import React from 'react'
import Banner from '../component/Banner'
import Search from '../component/Search'
import About from '../component/About'
import Book from '../component/Book'
import Categories from '../component/Categories'
import Map from '../component/Map'
import Footer from '../component/Footer'

const Home = () => {
    return (
        <>

            <body className="bg-white overflow-hidden">
                <Banner />
                <Search />
                <About />
                <Categories />
                <Book />
                <Map />
                <Footer />
            </body>

        </>
    )
}

export default Home