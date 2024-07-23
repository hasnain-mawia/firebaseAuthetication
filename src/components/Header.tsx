import React, { useEffect, useState } from 'react'
import { Logout } from '../config/firebase'
import { useNavigate } from 'react-router-dom'
import {auth, onAuthStateChanged } from "../config/firebase";
import { LuLogOut } from 'react-icons/lu';


function Header() {
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
      return isAuth ?(
    <div className='bg-[#2F9EED] p-2'>
        <div className='flex items-center justify-between max-w-[1300px] mx-auto'>
        <div>
        <button onClick={()=> navigate('/upload')} title='upload product' className='bg-[white] rounded-[30px] px-3 py-2'>Upload Product</button>
        </div>
        <div className='flex justify-end items-center gap-2 bg-[#ffffff] pl-4 rounded-[30px]'>
        <p className='font-semibold'>{user?.email}</p>
        <button onClick={logoutUser} title='Logout' className='bg-[red] text-white rounded-[30px] p-3'><LuLogOut className='text-[22px]' /></button>
      </div>
        </div>
    </div>
  ):null
}

export default Header