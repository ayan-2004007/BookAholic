import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Availability from './component/Availability'
import SearchResults from './component/SearchResults'
import Test from './component/Test'
import Admin from './users/Admin'
import AddBook from "./component/AddBook"
import DeleteBook  from './component/DeleteBook'
import Login from './component/Login'
import Signup from './component/Signup'
import Dashboard from "./component/Dashboard"


const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/research' element={<Test />} />
        <Route path='/gallery' element={<Test />} />
        <Route path='/blog' element={<Test />} />
        <Route path='/library-card' element={<Test />} />
        <Route path='/availability' element={<Availability />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/addBook" element={<AddBook/>}/>
        <Route path="/deleteBook" element={<DeleteBook/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user/dashboard" element={<Dashboard/>}/>

      </Routes>

    </>
  )
}

export default App
