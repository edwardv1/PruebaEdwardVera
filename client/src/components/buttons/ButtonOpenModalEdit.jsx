import React from "react";
import editIcon from "../../assets/edit.png";

export default function ButtonOpenModalEdit({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className=" bg-green-500 w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-full m-0 mx-5 flex items-center justify-center cursor-pointer"
      >
        <img src={editIcon} className=" w-[20px] sm:w-[30px]" alt="" />
      </button>
    </>
  );
}
