import React from 'react'

export default function Sections() {
  return (
    <div id='sectionsTitles' data-testid="sectionsTestId" className=' flex items-center w-full h-[40px]'>
        <div className=' bg-gray-300 border-b-2 border-gray-400 h-full min-w-[180px] sm:min-w-[260px] flex text-center justify-center items-center '>
            <h4 id='codeTitle'><b>Code</b></h4>   
        </div>
        <div className=' bg-gray-200 border-b-2 border-gray-400 h-full min-w-[180px] sm:min-w-[260px] flex text-center justify-center items-center '>
            <h4 id='nameTitle'><b>Name</b></h4>   
        </div>
        <div className=' bg-gray-300 border-b-2 border-gray-400 h-full min-w-[180px] sm:min-w-[260px] flex text-center justify-center items-center '>
            <h4 id='imageTitle'><b>Image</b></h4>   
        </div>
        <div className=' bg-gray-200 border-b-2 border-gray-400 h-full min-w-[180px] sm:min-w-[260px] flex text-center justify-center items-center '>
            <h4 id='categoryTitle'><b>Category</b></h4>   
        </div>
        <div className=' bg-gray-300 border-b-2 border-gray-400 h-full min-w-[180px] sm:min-w-[260px] flex text-center justify-center items-center '>
            <h4 id='priceTitle'><b>Price</b></h4>   
        </div>
        <div className=' bg-gray-200 border-b-2 border-gray-400 h-full min-w-[180px] sm:min-w-[260px] flex text-center justify-center items-center '>
            <h4 id='reviewTitle'><b>Reviews</b></h4>   
        </div>
        <div id='emptyTitle' className=' bg-gray-300 border-b-2 border-gray-400 h-full min-w-[156px] sm:min-w-[180px] flex text-center justify-center items-center '>      
        </div>
    </div>
  )
}
