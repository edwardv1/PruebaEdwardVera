import React from "react";
import deleteIcon from "../../assets/delete.png";

export default function ButtonOpenModalDelete({ onClick }) {
  return (
      <button
        id="buttonOpenModalDelete"
        data-testid="buttonOpenModalDelete"
        onClick={onClick}
        className=" bg-red-600 w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-full m-0 mx-5 flex items-center justify-center cursor-pointer"
      >
        <img src={deleteIcon} className=" w-[20px] sm:w-[30px]" alt="" />
      </button>
  );
}
