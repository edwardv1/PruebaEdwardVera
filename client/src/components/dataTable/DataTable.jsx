import React, { useState } from 'react'
import Header from './Header.jsx'
import Sections from './Sections'
import { useSelector } from "react-redux";
import styles from "./DataTable.module.css"
import Product from './Product';
import Pagination from './Pagination.jsx';

export default function DataTable() {
  const allProducts = useSelector((state) => state.allProducts);
  //const productsCopy = useSelector((state) => state.productsCopy);
  //console.log(allProducts);
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  //Funcion para setear la pagina actual
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //Creo un arreglo con el rango de los productos a mostrar
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = allProducts.slice(startIndex, endIndex);

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
            productsToDisplay.map((product, index) => <Product product={product} key={index} />)
          }
        </section>
        <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handlePageChange}/>
    </div>
  )
}
