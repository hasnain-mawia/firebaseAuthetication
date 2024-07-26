import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom';
import CLoader from '../../components/CLoader';
import { Getdata } from '../../config/firebase';

function Index() {
  const [products, setProducts] = useState<any>([]);
  const getfirebasedata = async() =>{
   await Getdata('products').then((res)=>{
     setProducts([...res])
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    getfirebasedata()
  },[products])

 return (
    <div>
      <div className='max-w-[1800px] flex justify-end my-5'>
      </div>
    <div className='max-w-[1400px] mx-auto mb-10 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
        {products.length === 0 ? <CLoader /> : 
          products.map((product:any, i:number) => {
          return(
            <Link key={i} to={`/detail/${product.title.trim()}`} state={product}>
            <div  className='shadow-2xl rounded-[10px] border-2 border-[#c9c9c9] flex flex-col items-center justify-center text-center'>
          <img src={product.image} alt={product.title} className='overflow-hidden rounded-[10px]'/>
          <div className='py-3 px-2 w-full'>
            <h2 className='font-bold my-1'>{product.title.slice(0,25)}</h2>
            <p className='text-[green] dark:bg-[white] w-full rounded-[30px] text-[20px] font-semibold'>${product.price}</p>
            </div>
          </div>
          </Link>
          )
        }
      )}  
      </div>
    </div>
      </div>
  )
}

export default Index