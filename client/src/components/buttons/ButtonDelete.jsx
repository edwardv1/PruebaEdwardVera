import React from 'react';

export default function ButtonDelete({ onClick }) {
    return (
    <button type="button" className="mt-4 mx-1 px-3 w-[100px] h-[40px] bg-green-500 rounded-lg text-lg text-white cursor-pointer" onClick={onClick}>
        Delete
    </button>
    )
};

