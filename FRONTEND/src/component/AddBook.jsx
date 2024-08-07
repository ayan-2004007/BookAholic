import React, { useState } from 'react';
import axios from 'axios';
import bg from "../assets/bg_add.jpg";

const AddBook = () => {
  const [bookname, setBookname] = useState('');
  const [authorname, setAuthorname] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [qty, setQty] = useState('');
  const [availability, setAvailability] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = {
      bookname,
      authorname,
      category,
      image,
      qty,
      availability,
      description
    };
    try {
      const response = await axios.post('https://lmsbackend-guhs.onrender.com/books/addBook', bookData);
      // console.log(response.data);
      setSuccessMessage('Book added successfully!');
      setErrorMessage('');
      setBookname('');
      setAuthorname('');
      setCategory('');
      setImage('');
      setQty('');
      setAvailability('');
      setDescription('');
    } catch (error) {
      console.error('Error adding book:', error);
      setErrorMessage('Error adding book. Please try again. (Availability must be true or false)');
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center font-['Montserrat']" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="text-2xl font-bold mb-6 text-[#7f28b5] lg:text-4xl lg:mb-10">Add New Book</h1>
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form className="bg-white p-10 flex-col items-center drop-shadow-3xl" onSubmit={handleSubmit}>
        <div className='flex flex-col items-center'>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Book Name</label> */}
            <input
              placeholder='Book Name'
              type="text"
              value={bookname}
              onChange={(e) => setBookname(e.target.value)}
              className="mt-1 p-2 border-b-2 border-[#81d2c2] w-full focus:outline-none lg:w-[480px]"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Author Name</label> */}
            <input
              placeholder='Author Name'
              type="text"
              value={authorname}
              onChange={(e) => setAuthorname(e.target.value)}
              className="mt-1 p-2 border-b-2 border-[#81d2c2] w-full focus:outline-none lg:w-[480px]"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Category</label> */}
            <input
              placeholder='Category'
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 border-b-2 border-[#81d2c2] w-full focus:outline-none lg:w-[480px]"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Image Link (optional)</label> */}
            <input
              placeholder='Image Link'
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 p-2 border-b-2 border-[#81d2c2] w-full focus:outline-none lg:w-[480px]"
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Quantity</label> */}
            <input
              placeholder='Quantity'
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="mt-1 p-2 border-b-2 border-[#81d2c2] w-full focus:outline-none lg:w-[480px]"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Availability</label> */}
            <input
              placeholder='Availability'
              type="text"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="mt-1 p-2 border-b-2 border-[#81d2c2] w-full focus:outline-none lg:w-[480px]"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">Description</label> */}
            <textarea
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 px-6 border-b-2 border-[#81d2c2] w-full focus:outline-none lg:w-[480px] lg:px-2"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="font-bold lg:text-lg py-2 px-4 rounded text-white bg-gradient-to-r from-[#0096cf] to-[#00ceb8] hover:from-seagreen-600 hover:to-blue-600 duration-150 lg:px-7 lg:py-3">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
