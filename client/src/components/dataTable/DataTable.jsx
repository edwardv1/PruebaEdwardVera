import React from 'react'
import Header from './Header.jsx'
import Sections from './Sections'
import { useSelector } from "react-redux";
import styles from "./DataTable.module.css"
import Product from './Product';
import Pagination from './Pagination/Pagination.jsx';

export default function DataTable() {
  const allProducts = useSelector((state) => state.allProducts);
  //const productsCopy = useSelector((state) => state.productsCopy);
  console.log(allProducts);
  return (
    <div className=" bg-gray-50 shadow-md rounded-lg p-4 overflow-hidden overflow-x-auto text-center w-[80%]">
        <Header/>
        <section className=' overflow-x-scroll'>  
          <Sections/>
          {
            allProducts.length === 0 ?
              <div>
                <h4>Loading...</h4>
              </div>
            :
            allProducts?.map((product, index) => (<Product product= {product} key={index}/>))
          }
        </section>
        <Pagination/>
    </div>
  )
}
