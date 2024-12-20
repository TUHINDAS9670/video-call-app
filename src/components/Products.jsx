import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";



const Products = () => {
  const [products,setproducts]=useState([]);
useEffect(()=>{
  const fetchedProducts=async()=>{
    try{
    const response=await fetch('/Products.json')
    if(!response){
      throw new Error("Failed to fetch products data")
    }
    const data=await response.json();
    setproducts(data);
    }
    catch(error){
      console.error(error)
    }
  }
  fetchedProducts();
},[])
  return (
    <section>
      <h2 className='text-2xl font-semibold pl-6 pt-5'>Our Production services</h2>
      <div className='container mx-auto flex items-center  flex-wrap pt-4 pb-3'>
        {
          products.map((product)=>(
            <div key={product.id} className='w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col'>
              <a href="#"> 
                <img src={product.image} alt="" className='hover:grow hover:shadow-2xl transition-shadow duration-500' />
              </a>
              <div className='p-3 flex items-center justify-between'>
                <p>{product.name}</p>
                <FaRegHeart className='h-5 w-6 hover:text-black text-gray-500' />
              </div>
              <p className='ml-3 font-semibold pt-2'>{product.price}</p>
            </div>
          ))

        }
      </div>
    </section>
  )
}

export default Products