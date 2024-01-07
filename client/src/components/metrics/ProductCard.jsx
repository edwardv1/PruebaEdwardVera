import React from 'react'

const ProductCard = ({name, price, image}) => {
  return (
    <div id="containerCard" className=' p-2 w-[240px] h-[260px] shadow-xl rounded-2xl bg-sky-300 text-center flex flex-col justify-around border-2 border-sky-900 items-center'>
        <h2 id='nameCard' className=' text-sm sm:text-base'>{name}</h2>
        <img id='imageCard' src={image} className=' shadow-md rounded-lg w-[100px] h-[100px]' alt="imageProduct"/>
        <h2 id='priceCard' className=' text-sm sm:text-base'><b>Price: ${price.toFixed(2)}</b></h2>  
    </div>
  )
}

export default ProductCard;