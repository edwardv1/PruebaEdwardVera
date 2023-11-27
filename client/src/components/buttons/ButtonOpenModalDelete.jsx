import React from 'react'
import deleteIcon from "../../assets/delete.png"

export default function ButtonOpenModalDelete({onClick}) {
    
  return (
    <>
        <button onClick={onClick} className=" bg-red-600 w-[44px] h-[44px] rounded-full m-0 mx-5 flex items-center justify-center cursor-pointer">
            <img src={deleteIcon} alt="" />
        </button>
    </>
  )
}
