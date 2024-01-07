import React from 'react'

export default function AveragePrice ({ allProducts }) {

    // Funcion que calcula el precio promedio de los productos
    const calculateAveragePrice = () => {
        if (allProducts?.length === 0) return 0; 
        const totalPrices = allProducts?.reduce((sum, product) => sum + product.price, 0);
        return totalPrices / allProducts?.length;
    };
    const averagePrice = calculateAveragePrice();

  return (
    <div id='averagePrice' className=" w-1/2 h-[100px] text-white bg-slate-700 flex items-center justify-center">
        <h1 id='valueAveragePrice' className=' text-[17px] sm:text-4xl'>Average price: ${averagePrice?.toFixed(2)}</h1>
    </div>
  )
}
