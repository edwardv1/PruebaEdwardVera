import React, { useState } from 'react'
import Modal from '../modal/Modal';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Creo los handlers para controlar el estado del boton para crear un nuevo producto.
    const handleNewButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
  return (
    <div data-testid="headerTestId" className=' bg-gray-300 w-[100%] flex justify-between items-center border-t-2 border-b-2 border-gray-400 px-6 h-[60px]'>
        <h1 className=' text-blue-500 text-lg sm:text-2xl'><b>Manage Products</b></h1>
        <button className=' mx-1 px-3 w-[90px] sm:w-[100px] h-[40px] bg-green-500 rounded-lg text-base sm:text-lg text-white cursor-pointer' onClick={handleNewButtonClick}><b>+ New</b></button>
        {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  )
}
