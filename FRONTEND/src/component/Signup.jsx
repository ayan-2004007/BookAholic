import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bg from "../assets/about-us1.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    file: null,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        file,
      });
      if (file.type.startsWith('image/')) {
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
      } else {
        setPreview(null);
      }
    } else {
      setFormData({
        ...formData,
        file: null,
      });
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { username, fullname, email, password, file } = formData;
    const formDataToSend = new FormData();
    formDataToSend.append('username', username);
    formDataToSend.append('fullname', fullname);
    formDataToSend.append('email', email);
    formDataToSend.append('password', password);
    if (file)
      formDataToSend.append('avatar', file);

    try {
      const response = await axios.post('https://lmsbackend-guhs.onrender.com/users/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log(response.data.data)
      setSuccessMessage(response.data.message || 'USER REGISTERED SUCCESSFULLY');
      setErrorMessage('');
      setFormData({
        username: '',
        fullname: '',
        email: '',
        password: '',
        file: null,
      });
      setPreview(null);
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(error.response?.data?.message || "REGISTRATION FAILED. PLEASE TRY AGAIN!");
      setFormData({
        username: '',
        fullname: '',
        email: '',
        password: '',
        file: null,
      });
      setPreview(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-screen min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
      <div className='w-screen min-h-screen bg-cover bg-center flex flex-col justify-between gap-5 sm:gap-14 bg-black bg-opacity-45 md:bg-opacity-80 xl:flex-row-reverse xl:items-center'>
        <div className='flex flex-col space-y-3 pl-5 xl:pt-2 pt-5 lg:ml-20 xl:ml-0 xl:px-5 xl:space-y-5 xl:w-[800px]'>
          <h1 className='text-white font-["Montserrat"] text-3xl md:text-4xl md:font-light xl:text-5xl xl:font-extralight'>ONE OF US ?</h1>
          <p className='text-white font-["Montserrat"] text-sm font-light md:text-[16px] xl:text-lg'>Good to see you again! Let's find your next great read.</p>
          <button className='w-24 h-11 bg-black text-white border-[1px] border-white rounded-3xl font-["Montserrat"] font-bold text-xs xl:h-12 xl:w-40 xl:text-sm hover:bg-white hover:text-black duration-300' onClick={() => navigate("/login")}>LOG IN</button>
          <button className='w-32 h-11 bg-black text-white border-[1px] border-white rounded-3xl font-["Montserrat"] font-meduim text-[10px] xl:h-12 xl:w-40 xl:text-xs hover:bg-white hover:text-black duration-300' onClick={() => { navigate("/") }}>BACK TO HOME</button>
        </div>
        <div className='bg-black bg-opacity-30 backdrop-blur-sm lg:backdrop-blur-md pb-1 pt-3 px-3 w-full sm:mb-0 xl:max-w-full 2xl:max-w-full xl:min-h-screen flex justify-between flex-col'>
          <div className='flex flex-col gap-y-4 md:gap-y-10 items-center my-auto text-white xl:justify-center xl:h-auto'>
            <h1 className='font-["Montserrat"] text-white text-3xl font-light md:text-4xl xl:text-[56px] xl:font-extralight mb-2'>SIGN UP</h1>
            {successMessage && (
              <p className='text-[#26FF00] text-xs font-medium font-["Montserrat"] mb-2 md:text-sm xl:text-base xl:font-medium'>{successMessage.toUpperCase()}</p>
            )}
            {errorMessage && (
              <p className='text-red-500 text-xs font-medium font-["Montserrat"] mb-2 md:text-sm xl:text-base xl:font-medium'>{errorMessage.toUpperCase()}</p>
            )}
            {loading && (
              <div className="flex items-center justify-center w-full h-full">
                <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
              </div>
            )}
            <p className='font-["Montserrat"] text-white text-xs text-center mb-2 md:text-sm xl:text-[20px] xl:font-extralight'>Join Bookaholic today and embark on a limitless reading adventure.</p>
            <div className='flex flex-col space-y-12 mb-10'>
              <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
                <input

                  type="text"
                  name="username"
                  placeholder='USERNAME'
                  value={formData.username}
                  onChange={handleChange}
                  className='w-52 h-9 border-[1px] border-[#909090] bg-transparent placeholder:text-xs placeholder:font-["Montserrat"] placeholder:font-bold p-1 md:w-56 xl:w-[300px] xl:h-12 xl:px-3 xl:text-sm focus:border-2'
                />
                <input
                  type="text"
                  name="fullname"
                  placeholder='FULL NAME'
                  value={formData.fullname}
                  onChange={handleChange}
                  className='w-52 h-9 border-[1px] border-[#909090] bg-transparent placeholder:text-xs placeholder:font-["Montserrat"] placeholder:font-bold p-1 md:w-56 xl:w-[300px] xl:h-12 xl:px-3 xl:text-sm'
                />
                <input
                  type="email"
                  name="email"
                  placeholder='EMAIL'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-52 h-9 border-[1px] border-[#909090] bg-transparent placeholder:text-xs placeholder:font-["Montserrat"] placeholder:font-bold p-1 md:w-56 xl:w-[300px] xl:h-12 xl:px-3 xl:text-sm'
                />
                <input
                  type="password"
                  name="password"
                  placeholder='PASSWORD'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-52 h-9 border-[1px] border-[#909090] bg-transparent placeholder:text-xs placeholder:font-["Montserrat"] placeholder:font-bold p-1 md:w-56 xl:w-[300px] xl:h-12 xl:px-3 xl:text-sm'
                />
                <div className="flex items-center w-52 h-9 border-[1px] border-[#909090] bg-transparent p-1 md:w-56 xl:w-[300px] xl:h-12 xl:px-3 xl:text-sm">
                  <label htmlFor="file-upload" className="w-full cursor-pointer text-[#909090] font-['Montserrat'] font-bold text-xs">
                    UPLOAD ONE OF YOUR IMAGE
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                {formData.file && (
                  <div>
                    {preview ? (
                      <div className="w-auto h-auto">
                        <img src={preview} alt="Preview" className="w-12 h-12 xl:w-24 xl:h-24 object-cover" />
                      </div>
                    ) : (
                      <p className="text-white font-['Montserrat'] text-xs">{formData.file.name}</p>
                    )}
                    <p className="text-white font-['Montserrat'] text-xs">Size: {(formData.file.size / 1024).toFixed(2)} KB</p>
                  </div>
                )}
                <button type="submit" className='w-52 bg-black text-white text-xs font-bold font-["Montserrat"] py-4 border-[1px] border-white rounded-3xl xl:w-[300px] hover:bg-white hover:text-black duration-300'>SIGN UP</button>
              </form>
            </div>
          </div>
          <div className='flex items-center justify-between w-full md:px-10'>
            <p className='font-["Montserrat"] text-sm font-light text-white xl:text-base xl:font-extralight'>©copyright | 2024</p>
            <p className='font-["Montserrat"] text-sm font-light text-white xl:text-base xl:font-extralight'>BOOKAHOLIC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
