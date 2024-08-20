import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bg from "../assets/about-us3.jpg";

const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [message,setMessage]=useState('');
    const [loading,setLoading]=useState(false);
    const [userData, setUserData] = useState(null);
    const navigate=useNavigate();
    const goSignup=()=> {
        navigate("/signup");
    };

    const handleLogin=async(e)=> {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const response= await axios.post('https://lmsbackend-guhs.onrender.com/users/login', { username, password }, { withCredentials: true });
            const accessToken=response.headers["set-cookie"]
            const userData=response.data.data
            sessionStorage.setItem("accessToken",accessToken)
            sessionStorage.setItem("loginTime",new Date().getTime())
            sessionStorage.setItem("userData",JSON.stringify(userData))
            // console.log(userData)
            setMessage('USER LOGGED IN SUCCESFULLY!');
            setTimeout(()=> {
                const user=sessionStorage.getItem("userData")
                if(user){
                    setUserData(JSON.parse(user));
                    if(userData.username=="bookAholic2024"){
                        navigate("/admin")
                    }else{
                        navigate("/user/dashboard")
                    }
                }
            }, 2000);
        }catch(err){
            const errorMessage=err.response?.data?.message || 'LOGIN FAILED ! CHECK YOUR CREDENTIALS';
            setMessage(errorMessage);
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className='w-screen min-h-screen bg-cover bg-center flex flex-col-reverse items-center justify-between' style={{ backgroundImage: `url(${bg})` }}>
            <div className='w-screen min-h-screen bg-cover bg-center flex flex-col-reverse justify-between bg-black bg-opacity-45 md:bg-opacity-80 xl:flex-row xl:items-center'>
                <div className='flex flex-col space-y-3 xl:space-y-5 pl-5 lg:ml-20 xl:ml-0 xl:px-5 pb-16 xl:pb-0 xl:pl-16'>
                    <h1 className='text-white font-["Montserrat"] text-3xl md:text-4xl md:font-light xl:text-5xl xl:font-extralight'>NEW HERE ?</h1>
                    <p className='text-white font-["Montserrat"] text-sm font-light md:text-[16px] xl:text-lg'>Join bookaholic today and embark on a limitless reading adventure</p>
                    <button className='w-24 h-11 bg-black text-white border-[1px] border-white rounded-3xl font-["Montserrat"] font-meduim text-xs xl:h-12 xl:w-40 xl:text-sm hover:bg-white hover:text-black duration-300' onClick={goSignup}>SIGN UP</button>
                    <button className='w-32 h-11 bg-black text-white border-[1px] border-white rounded-3xl font-["Montserrat"] font-meduim text-[10px] xl:h-12 xl:w-40 xl:text-xs hover:bg-white hover:text-black duration-300' onClick={()=>{navigate("/")}}>BACK TO HOME</button>
                </div>
                <div className='bg-black bg-opacity-30 backdrop-blur-md lg:backdrop-blur-md pt-12 pb-3 px-3 w-full sm:mb-0 xl:h-screen xl:max-w-[900px] 2xl:max-w-[1077px]'>
                    <div className='flex flex-col items-center text-white xl:justify-between xl:h-full xl:pt-32'>
                        <h1 className='font-["Montserrat"] text-white text-3xl font-light mb-7 md:text-4xl xl:text-[56px] xl:font-extralight'>LOG IN</h1>
                        {message && <p className='text-[#26FF00] text-xs font-medium font-["Montserrat"] mb-6 md:text-sm xl:text-base xl:font-light capitalize'>{message.toUpperCase()}</p>}
                        <p className='font-["Montserrat"] text-white text-xs text-center mb-6 md:text-sm xl:text-[20px] xl:font-extralight'>Good to see you again! Let's find your next great read.</p>
                        <form className='flex flex-col space-y-10 mb-10' onSubmit={handleLogin}>
                            <div className='flex flex-col space-y-4'>
                                <input
                                    type="text"
                                    placeholder='USERNAME'
                                    className='w-52 h-9 border-[1px] border-[#909090] bg-transparent placeholder:text-xs placeholder:font-["Montserrat"] placeholder:font-bold p-1 md:w-56 xl:w-[300px] xl:h-12 xl:px-3 xl:text-sm focus:border-2'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder='PASSWORD'
                                    className='w-52 h-9 border-[1px] border-[#909090] bg-transparent placeholder:text-xs placeholder:font-["Montserrat"] placeholder:font-bold p-1 md:w-56 xl:w-[300px] xl:h-12 xl:px-3 xl:text-sm'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type='submit'
                                className='w-52 bg-black text-white text-xs font-bold font-["Montserrat"] py-4 border border-white rounded-3xl xl:w-[300px] hover:bg-white hover:text-black duration-300'
                                disabled={loading}
                            >
                                {loading ? 'LOGGING IN...' : 'LOG IN'}
                            </button>
                        </form>
                        <div className='flex items-center justify-between w-full md:px-10'>
                            <p className='font-["Montserrat"] text-sm font-light text-white xl:text-base xl:font-extralight'>©copyright | 2024</p>
                            <p className='font-["Montserrat"] text-sm font-light text-white xl:text-base xl:font-extralight'>BOOKAHOLIC</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
