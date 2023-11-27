import React from 'react'
import Form from '../form/Form'

export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <Form onCancel={onClose} />
      </div>
    </div>
  )
}