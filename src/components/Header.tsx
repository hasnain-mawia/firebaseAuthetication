import React, { useEffect, useState } from 'react'
import { Logout } from '../config/firebase'
import { useNavigate } from 'react-router-dom'
import {auth, onAuthStateChanged } from "../config/firebase";
import { LuLogOut } from 'react-icons/lu';
import { FaMoon, FaSun } from "react-icons/fa6";


function Header() {
  const storageKey:any = localStorage.getItem('DarkMode')
  const  [isBrigth, setIsBrigth] = useState<any>(JSON.parse(storageKey));
  {isBrigth ? document.body.classList.add('dark') : document.body.classList.remove('dark')}
  const darkMode = () =>{
    setIsBrigth(!isBrigth)
    localStorage.setItem('DarkMode',`${!isBrigth}`);
  }
    const navigate = useNavigate()
    const [user, setUser] = useState<any>();
    const logoutUser = () =>{
    Logout(navigate)
  }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
  
            }
          });
     }) 
     const isAuth = localStorage.getItem('isLogin');
      return isAuth ? (
    <div className='bg-[#2F9EED] p-2 dark:bg-[gray]'>
        <div className='flex items-center justify-between max-w-[1300px] mx-auto'>
        <div>
        <button onClick={()=> navigate('/upload')} title='upload product' className='bg-[white] dark:bg-[#2F9EED] rounded-[30px] dark:text-[white] px-3 py-2'>Upload Product</button>
        </div>
        <div className="flex items-center gap-2">
        <div className='flex justify-end items-center gap-2 bg-[#ffffff] dark:bg-[#2F9EED] pl-4 rounded-[30px]'>
        <p className='font-semibold'>{user?.email}</p>
        <button onClick={logoutUser} title='Logout' className='bg-[red] text-white rounded-[30px] p-3'><LuLogOut className='text-[22px]' /></button>
        </div>
        <button onClick={darkMode} className='text-[23px] bg-white text-black w-[40px] h-[40px] rounded-[300px] flex items-center justify-center'>{isBrigth ? <FaSun /> :<FaMoon />} </button>
        </div>
        </div>
    </div>
  ): null
}

export default Header