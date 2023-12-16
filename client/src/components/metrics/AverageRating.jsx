import React from 'react'

export default function AverageRating ({ allProducts }) {

    // Calcular la calificación promedio de los productos
    const calculateAverageRating = () => {
        const validRatings = allProducts?.filter(
            (product) => !isNaN(parseFloat(product.rating.rate))
        );
        if (validRatings?.length === 0) return 0;
        
        const totalRating = validRatings?.reduce((sum, product) => sum + parseFloat(product.rating.rate), 0);
        return totalRating / validRatings?.length;
    };
    const averageRating = calculateAverageRating();

  return (
    <div className=" w-1/2 h-[100px] text-white bg-slate-700 flex items-center justify-center">
        <h1 className=' text-[17px] sm:text-4xl'>Average Rating: {averageRating?.toFixed(2)}</h1>
    </div>
  )
}
