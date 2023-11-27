import React from 'react'
import editIcon from "../../assets/edit.png"

export default function ButtonEdit() {
  return (
    <>
        <button className=" bg-green-500 w-[44px] h-[44px] rounded-full m-0 mx-5 flex items-center justify-center cursor-pointer">
            <img src={editIcon} alt="" />
        </button>
    </>
  )
}
