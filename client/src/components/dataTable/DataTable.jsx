import React, { useState } from 'react'
import Header from './Header.jsx'
import Sections from './Sections'
import { useSelector } from "react-redux";
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
    <div className=" bg-gray-50 shadow-md rounded-lg mt-4 p-4 overflow-hidden overflow-x-auto text-center h-[900px] w-[80%]">
        <Header/>
        <section className=' overflow-x-scroll h-[758px] '>  
          <Sections/>
          {
            allProducts.length === 0 ?
              <h1 className=' mt-[320px]'><b>Loading...</b></h1>
            :
            productsToDisplay.map((product, index) => <Product product={product} key={index} />)
          }
        </section>
        <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handlePageChange}/>
    </div>
  )
}
