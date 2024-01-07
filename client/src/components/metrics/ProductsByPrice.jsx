import React from 'react'
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

export default function ProductsByPrice ({ allProducts }) {
    if (!Array.isArray(allProducts)) {
        return <div>Error: No valid products found.</div>
    }
    const statusProduct = useSelector((state) => state.product.status);

    // Obtener una copia ordenada de productos por precio de menor a mayor para obtener los 3 productos con el precio más bajo y más alto
    const sortedProductsByPrice = [...allProducts].sort((a, b) => a.price - b.price);
    const lowestPrices = sortedProductsByPrice.slice(0, 3);
    const highestPrices = sortedProductsByPrice.slice(-3).reverse();

  return (
    <div id='productsByPrice' className=' flex flex-col gap-14 text-center'>
        <h1 id='titleProductsLowcost' className='mt-6 text-2xl sm:text-4xl'>Products with the <b>Lowest price</b> :</h1>
        <div className=' flex flex-wrap justify-around gap-4'>
            {
                statusProduct === "idle" || statusProduct === "loading" ?
                <h1 id='statusLoadingLowcost'><b>Loading...</b></h1>
                :
                lowestPrices.legth === 0 ?
                <h1 id='emptyMessageLowcost'><b>There are no products to show.</b></h1>
                :
                lowestPrices.map((product) => (
                    <ProductCard key={product.id} name={product.title} price={product.price} image={product.image} />
                ))
            }
        </div>
        
        <h1 id='titleProductsHighcost' className='text-2xl sm:text-4xl'>Products with the <b>Highest price</b>:</h1>
        <div className=' flex flex-wrap justify-around gap-4'>
            {
                statusProduct === "idle" || statusProduct === "loading" ?
                <h1 id='statusLoadingHighcost'><b>Loading...</b></h1>
                :
                highestPrices.legth === 0 ?
                <h1 id='emptyMessageHighcost'><b>There are no products to show.</b></h1>
                :
                highestPrices.map((product) => (
                    <ProductCard key={product.id} name={product.title} price={product.price} image={product.image} />
                ))
            }
         </div>
    </div>
  )
}
