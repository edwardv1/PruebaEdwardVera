import React from 'react'
import ProductCard from './ProductCard';

export default function ProductsByPrice ({ allProducts }) {

     // Obtener una copia ordenada de productos por precio de menor a mayor para obtener los 3 productos con el precio más bajo y más alto
     const sortedProductsByPrice = [...allProducts].sort((a, b) => a.price - b.price);
     const lowestPrices = sortedProductsByPrice.slice(0, 3);
     const highestPrices = sortedProductsByPrice.slice(-3).reverse();

    

  return (
    <div className=' flex flex-col gap-14 text-center'>
        <h1 className='mt-6 text-2xl sm:text-4xl'>Products with the <b>Lowest price</b> :</h1>
        <div className=' flex flex-wrap justify-around gap-4'>
            {lowestPrices.map((product) => (
                <ProductCard key={product.id} name={product.title} price={product.price} image={product.image} />
            ))}
        </div>
        
        
        <h1 className='text-2xl sm:text-4xl'>Products with the <b>Highest price</b>:</h1>
        <div className=' flex flex-wrap justify-around gap-4'>
            {highestPrices.map((product) => (
                <ProductCard key={product.id} name={product.title} price={product.price} image={product.image} />
            ))}
         </div>
    </div>
  )
}
