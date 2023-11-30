import React from 'react'
import Form from '../form/Form'

export default function Modal({ onClose, isEdit, productToUpdate }) {
  return (
    <div className="fixed inset-0 flex py-2 items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white sm:mt-6 md:mt-0 p-4 sm:p-8 rounded-lg  md:h-auto max-h-screen md:max-h-full overflow-auto">
        <Form onCancel={onClose} isEdit={isEdit} productToUpdate={productToUpdate} />
      </div>
    </div>
  )
}