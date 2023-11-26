import React from 'react'

export default function Sections() {
    //w-[100%]
  return (
    <div className=' flex items-center w-full h-[40px]'>
        <div className=' bg-gray-300 border-b-2 border-gray-400 h-full min-w-[260px] flex text-center justify-center items-center '>
            <h4><b>Code</b></h4>   
        </div>
        <div className=' bg-gray-200 border-b-2 border-gray-400 h-full min-w-[260px] flex text-center justify-center items-center '>
            <h4><b>Name</b></h4>   
        </div>
        <div className=' bg-gray-300 border-b-2 border-gray-400 h-full min-w-[260px] flex text-center justify-center items-center '>
            <h4><b>Image</b></h4>   
        </div>
        <div className=' bg-gray-200 border-b-2 border-gray-400 h-full min-w-[260px] flex text-center justify-center items-center '>
            <h4><b>Category</b></h4>   
        </div>
        <div className=' bg-gray-300 border-b-2 border-gray-400 h-full min-w-[260px] flex text-center justify-center items-center '>
            <h4><b>Price</b></h4>   
        </div>
        <div className=' bg-gray-200 border-b-2 border-gray-400 h-full min-w-[260px] flex text-center justify-center items-center '>
            <h4><b>Reviews</b></h4>   
        </div>
    </div>
  )
}
