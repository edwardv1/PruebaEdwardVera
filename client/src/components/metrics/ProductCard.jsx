import React from 'react'

const ProductCard = ({name, price, image}) => {
  return (
    <div className=' p-2 w-[240px] h-[260px] shadow-xl rounded-2xl bg-sky-300 text-center flex flex-col justify-around border-2 border-sky-900 items-center'>
        <h2 className=' text-sm sm:text-base'>{name}</h2>
        <img src={image} className=' shadow-md rounded-lg w-[100px] h-[100px]'  alt="" />
        <h2 className=' text-sm sm:text-base'><b>Price: ${price.toFixed(2)}</b></h2>  
    </div>
  )
}

export default ProductCard;