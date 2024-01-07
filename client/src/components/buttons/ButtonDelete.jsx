import React from 'react';

export default function ButtonDelete({ onClick }) {
    return (
    <button id="buttonModalDelete" data-testid="buttonDelete" type="button" className="mt-4 mx-1 px-3 w-[90px] sm:w-[100px] h-[40px] bg-green-500 rounded-lg text-base sm:text-lg text-white cursor-pointer" onClick={onClick}>
        Delete
    </button>
    )
};

