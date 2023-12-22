import React from 'react'
import ButtonCancel from '../buttons/ButtonCancel'
import { useDispatch } from 'react-redux';
import ButtonDelete from '../buttons/ButtonDelete';
import { getAllProducts, deleteProduct } from '../../redux/features/productSlice';

export default function ModalDelete({ id, name, onClose }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
    dispatch(getAllProducts());
    onClose();
  };

  return (
    <div data-testid="modalDeleteTestId" className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg w-[320px] sm:w-[400px]">
        <h2 className="text-2xl mb-4"><b>Confirm Deletion</b></h2>
        <p title="Delete">Are you sure to delete the product "{name}"?</p>
        <div className="mt-4 flex  justify-center gap-4">
          <ButtonCancel onClick={onClose} />
          <ButtonDelete onClick={handleDelete} />
        </div>
      </div>
    </div>
  )
}
