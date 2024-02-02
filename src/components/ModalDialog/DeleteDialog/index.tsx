import React from 'react';
import useDeleteDialog from './hooks/useDeleteDialog';

const DeleteDialog = () => {
  const { currentTodoItem, confirmationText, closeDialog, handleConfirmationTextInput, onDelete } = useDeleteDialog()

  return (
    <div className="mx-4 flex flex-col rounded-lg bg-white px-4 py-5 text-center gap-y-6">
      <span className='text-lg'>Are you sure you want to delete <strong>{currentTodoItem?.todo.title}</strong>?</span>
      <div className="flex flex-col text-center gap-y-2">
        <input
          value={confirmationText}
          className="input-style"
          placeholder="Type todo title"
          onChange={handleConfirmationTextInput}
        />
        <span>Type <strong>{currentTodoItem?.todo.title}</strong> to delete.</span>
      </div>
      <div className="flex flex-row gap-x-4 justify-end">
        <button
          className="text-base rounded-md py-2 px-3 w-fit font-bold self-center border border-gray-400 text-gray-400 hover:border-gray-500 hover:text-gray-500"
          onClick={closeDialog}
        >
          Cancel
        </button>
        <button
          className={`text-base rounded-md py-3 px-4 w-fit font-bold self-center ${confirmationText !== currentTodoItem?.todo.title? ' bg-gray-300 text-gray-100 cursor-not-allowed' : 'bg-red-400 hover:bg-red-500 text-white'}`}
          disabled={confirmationText !== currentTodoItem?.todo.title}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteDialog;
