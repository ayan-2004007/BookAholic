import React, { useState } from 'react';
import axios from 'axios';
import bg from "../assets/bg_delete.jpg"

const DeleteBook = () => {
  const [bookname, setBookname] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [error, setError] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`https://lmsbackend-guhs.onrender.com/admin/deleteBook/${encodeURIComponent(bookname)}`);
      console.log(response.data);
      setDeleteMessage('Book Deleted Successfully');
      setBookname('');
      setError('');
    } catch (error) {
      console.error('Error deleting book:', error);
      setDeleteMessage('');
      setError('Error deleting book: ' + "May be Book Name is wrong or the book is not in the database");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4 sm:p-6 md:p-8 font-['Montserrat']" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="font-['Montserrat'] text-3xl font-bold mb-6 text-center text-red-600">DELETE BOOK</h1>
      {deleteMessage && (
        <div className="text-green-600 mb-4 text-xl">
          {deleteMessage}
        </div>
      )}
      {error && (
        <div className="text-red-600 mb-4 text-xl">
          {error}
        </div>
      )}
      <form className="bg-white p-4 sm:p-6 md:p-8 shadow-2xl w-full max-w-md" onSubmit={handleDelete}>
        <div className="mb-4">
          {/* <label className="block text-gray-700">Book Name</label> */}
          <input
            placeholder='Book Name'
            type="text"
            value={bookname}
            onChange={(e) => setBookname(e.target.value)}
            className="mt-1 p-2 border-b-2 border-red-500 w-full focus:outline-none"
          />
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-700 duration-150 text-white font-semibold font-['Montserrat'] py-2 px-4 rounded w-full lg:px-6 lg:py-4 ">Delete Book</button>
      </form>
    </div>
  );
}

export default DeleteBook;
