import React from 'react'
import { useSelector } from "react-redux";
import ProductsByPrice from './ProductsByPrice';
import AveragePrice from './AveragePrice';
import AverageRating from './AverageRating';

export default function Metrics() {
    const allProducts = useSelector((state) => state.product.allProducts);
    
  return (
    <div data-testid="metricsTestId" className=' w-full'>
        <div className=' flex'>
            <AverageRating allProducts={allProducts}/>
            <AveragePrice allProducts={allProducts}/>
        </div>
        <ProductsByPrice allProducts={allProducts}/>
    </div>
  )
}
