import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CLoader from '../../components/CLoader'
import {collection,doc, getDocs} from "firebase/firestore"; 

function Index(){
  const params = useParams()
  console.log(params.id)
   const navigate = useNavigate()
   const [detailview, setDetailview] = useState<any>(null);

  
  return detailview === null ? <CLoader/> : (
    <div className='max-w-[1200px] mx-auto my-10'>
       <button onClick={()=> navigate(-1)} className='bg-[#0088ff] p-2 rounded-[30px] text-white' >BACK</button>
       <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div>
                <img className='w-[300px] mx-auto' src={detailview.image} alt="" />
            </div>
            <div>
                <h2 className='font-bold text-[18px]'>{detailview.title}</h2>
                <p >{detailview.description}</p>
                <p className='text-[red] font-bold'>Category: {detailview.category}</p>
                <p className='text-[green] font-bold'>${detailview.price}</p>
                <p className=''>{detailview.description}</p>
                <button onClick={()=>alert(detailview.title)} className='bg-[#0088ff] px-4 py-2 rounded-[30px] text-white mt-10'>Add to Cart</button>
            </div>
        </div>
  
    </div>
  )
}

export default Index