import React from "react";

export default function ButtonUpdate(props) {
    return (
      <button
        id='buttonModalUpdate'
        data-testid="buttonUpdate"
        className={`mt-4 mx-1 px-3 w-[90px] sm:w-[100px] h-[40px] bg-green-500 rounded-lg text-base sm:text-lg text-white cursor-pointer ${props.disable ? "cursor-not-allowed disabled:opacity-50" : ""}`} 
        disabled={props.disable}
        type="button"
        onClick={(event) => {
          props.onCloseModal();
          props.onClick(event);
        }}
      >
        Edit
      </button>
    );
  }
