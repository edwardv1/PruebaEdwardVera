import React, { useState } from 'react'
import ButtonEdit from '../buttons/ButtonEdit'
import ButtonOpenModalDelete from '../buttons/ButtonOpenModalDelete'
import ModalDelete from '../modal/ModalDelete';

export default function Product({product}) {
  //Creo un regex para verificar que producto viene de la base de datos (los cuales pueden ser eliminados, no es el caso para los productos de la API externa)
  const regexUUID = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
  const [isModalOpen, setIsModalOpen] = useState(false);

    //Creo los handlers para controlar el estado del boton para eliminar producto.
    const handleDeleteButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div className=' flex'>
      <div className=' bg-gray-300 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.id}</h4>  
      </div>
      <div className=' bg-gray-200 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.title}</h4>  
      </div>
      <div className=' bg-gray-300 border-b-2 h-[100px] min-w-[260px] flex justify-center items-center '>
        <img src={product.image} className=' shadow-md rounded-lg w-[50px]'  alt="" />  
      </div>
      <div className=' bg-gray-200 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.category}</h4>  
      </div>
      <div className=' bg-gray-300 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.price}</h4>  
      </div>
      <div className=' bg-gray-200 border-b-2 h-[100px] min-w-[260px] flex text-center justify-center items-center '>
        <h4>{product.rating.rate}</h4> 
      </div>
      <div className=' bg-gray-300 border-b-2 h-[100px] min-w-[180px] flex justify-center items-center'>
        <ButtonEdit />
        {
          regexUUID.test(product.id) ?
          <ButtonOpenModalDelete onClick={handleDeleteButtonClick}/>
          :
          null
        } 
      </div>
      {isModalOpen && <ModalDelete id={product.id} name={product.title} onClose={handleCloseModal} />}
    </div>
  )
}
