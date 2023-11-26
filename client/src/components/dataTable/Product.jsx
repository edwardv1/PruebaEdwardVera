import React from 'react'

export default function Product({product}) {
  return (
    <div className=' flex'>
      <div className=' bg-gray-300 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.id}</h4>  
      </div>
      <div className=' bg-gray-200 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.title}</h4>  
      </div>
      <div className=' bg-gray-300 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <img src={product.image} className=' shadow-md rounded-lg w-[50px]'  alt="" />  
      </div>
      <div className=' bg-gray-200 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.category}</h4>  
      </div>
      <div className=' bg-gray-300 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.price}</h4>  
      </div>
      <div className=' bg-gray-200 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.rating.rate}</h4>  
      </div>
      
      
     
      
    </div>
  )
}
