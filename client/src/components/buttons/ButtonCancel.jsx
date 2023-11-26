import React from 'react'

export default function ButtonCancel({ onClick }) {

  return (
    <>
        <button type="button" onClick={onClick} className=" mt-4 mx-1 px-3 w-[100px] h-[40px] bg-red-600 rounded-lg text-lg text-white cursor-pointer">Cancel</button>
    </>
  )
}
