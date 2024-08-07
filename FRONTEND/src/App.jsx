import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Availability from './component/Availability'
import SearchResults from './component/SearchResults'
// import Ayan from './users/Ayan'
// import Bijoy from './users/Bijoy'
// import Shivanshu from './users/Shivanshu'
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
        {/* <Route path="/user/ayan" element={<Ayan />} /> */}
        {/* <Route path="/user/shivanshu" element={<Shivanshu />} /> */}
        {/* <Route path="/user/bijoy" element={<Bijoy />} /> */}
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



















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App