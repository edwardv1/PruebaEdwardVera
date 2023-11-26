import React from "react";

export default function ButtonCreate(props) {
  return (
    <button
      className={`mt-4 mx-1 px-3 w-[100px] h-[40px] bg-green-500 rounded-lg text-lg text-white cursor-pointer ${props.disable ? "cursor-not-allowed disabled:opacity-50" : ""}`} 
      disabled={props.disable}
      type="button"
      onClick={(event) => {
        props.onClick(event);
        props.onCloseModal();
      }}
    >
      Create
    </button>
  );
}
