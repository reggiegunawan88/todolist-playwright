import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRTK';
import { closeModalDialog } from '@/store/slices/ModalDialog';
import { openSnackbar, setSnackbarDescription, setSnackbarType } from '@/store/slices/Snackbar';
import { deleteTodoItem } from '@/store/slices/TodoList';
import { batch } from 'react-redux';

const useDeleteDialog = () => {
  const { currentTodoItem } = useAppSelector(state => state.modalDialog);
  const dispatch = useAppDispatch();
  const [confirmationText, setConfirmationText] = useState('');

  function handleConfirmationTextInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setConfirmationText(value);
  }

  function closeDialog(){
    dispatch(closeModalDialog())
  }

  function onDelete(){
    batch(() => {
      dispatch(deleteTodoItem(currentTodoItem?.id!))
      dispatch(openSnackbar())
      dispatch(setSnackbarDescription(`Successfully delete ${currentTodoItem?.todo.title} to-do`))
      dispatch(setSnackbarType('success'))
    })
    closeDialog()
  }

  return {
    currentTodoItem,
    confirmationText,
    closeDialog,
    handleConfirmationTextInput,
    onDelete
  }
}

export default useDeleteDialog